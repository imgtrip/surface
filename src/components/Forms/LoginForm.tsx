import * as React from 'react'
import {Checkbox, Form} from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import {FormComponentProps} from 'antd/lib/form'
import {formTailLayout} from './style'
import {authUser} from '../../api/user'
import {loading} from '../../lib/loading'
import {errorWithLoaded, successWithLoaded} from '../../lib/message'
import {AuthUserRes, AlbumImagesRes, UserAlbumsRes} from '../../../pb/imgtrip_pb'
import {albumImages, userAlbums} from '../../api/image'
import {AuthState, SimpleAlbum} from '../../redux/auth'
import {ServiceError} from '../../../pb/imgtrip_pb_service'
import {Code} from 'grpc-web-client/dist/Code'
import {lang} from '../../constants/lang'
import Row from 'antd/lib/grid/row'
import Col from 'antd/lib/grid/col'
import EmailFormItem from './Items/EmailFormItem'
import PasswordFormItem from './Items/PasswordFormItem'
import SubmitButton from './Items/SubmitButton'
import {retrievePassword} from '../../service/link'

interface Props extends FormComponentProps {
  submitted: (user: AuthState) => void
}

interface Fields {
  email?: string
  password?: string
}

class LoginForm extends React.Component<Props> {

  state = {
    loading: false,
    email: {
      validateStatus: undefined,
      help: '',
      value: undefined,
    },
    password: {
      validateStatus: undefined,
      help: '',
      value: undefined,
    },
  }

  get fields(): Fields {
    const fields = this.props.form.getFieldsValue(['login_email', 'login_password']) as any
    return {
      email: fields.login_email,
      password: fields.login_password,
    }
  }

  submit(e: Event) {
    e.preventDefault()
    if (!this.onChange(this.fields, true)) {
      return
    }

    const that = this
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      const {login_email, login_password} = values

      loading(that)
      authUser(login_email, login_password)
        .then((authUserRes: AuthUserRes) => {
          Promise.all([
            userAlbums(authUserRes.getUser().getId()),
            albumImages(authUserRes.getUser().getAlbumId()),
          ]).then((values: any) => {
            const responses: [UserAlbumsRes, AlbumImagesRes] = values
            const albums = responses[0].toObject().itemsList as SimpleAlbum[]

            const favorites = []
            responses[1].toObject().itemsList.map((image) => {
              favorites.push(image.id)
            })
            const user = authUserRes.getUser().toObject()
            successWithLoaded(that)
            that.props.submitted({...user, favorites, albums})
          }).catch((err) => {
            errorWithLoaded(that)
          })
        })
        .catch((err: ServiceError) => {
          switch (err.code) {
            case Code.Unauthenticated:
              this.setState({
                email: {validateStatus: 'error', help: lang.email_maybe_incorrect, value: login_email},
                password: {validateStatus: 'error', help: lang.password_maybe_incorrect, value: login_password},
              })
              break
          }
          errorWithLoaded(that)
        })
    })
  }

  onChange(fields: Fields, force = false) {
    const email = EmailFormItem.onChange(fields.email, force, this.state.email)
    const password = PasswordFormItem.onChange(fields.password, force, this.state.password)
    this.setState({email, password})
    return email.validateStatus === 'success' && password.validateStatus === 'success'
  }

  componentWillReceiveProps() {
    const fields = this.fields
    if (fields.email !== this.state.email.value || fields.password !== this.state.password.value) {
      this.onChange(this.fields)
    }
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Form>
        <h3 style={{textAlign: 'center'}}>{lang.login}</h3>
        <EmailFormItem
          getFieldDecorator={getFieldDecorator}
          validateStatus={this.state.email.validateStatus}
          help={this.state.email.help}
          name={'login_email'}
        />
        <PasswordFormItem
          getFieldDecorator={getFieldDecorator}
          validateStatus={this.state.password.validateStatus}
          help={this.state.password.help}
          name={'login_password'}
        />
        <FormItem {...formTailLayout} >
          <Row gutter={8}>
            <Col span={15}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>{lang.remember_me}</Checkbox>,
              )}
            </Col>
            <Col span={8}>
              <a href={retrievePassword}>{lang.retrieve_password}</a>
            </Col>
          </Row>
        </FormItem>

        <SubmitButton
          text={lang.login}
          loading={this.state.loading}
          onClick={this.submit.bind(this)}
        />

      </Form>
    )
  }
}

export default Form.create()(LoginForm)
