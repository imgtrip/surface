import * as React from 'react'
import {FormComponentProps} from 'antd/lib/form'
import FormItem from 'antd/lib/form/FormItem'
import Form from 'antd/lib/form/Form'
import {formTailLayout} from './style'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import {loading} from '../../lib/loading'
import {createUser} from '../../api/user'
import {errorWithLoaded, successWithLoaded} from '../../lib/message'
import {CreateUserRes} from '../../../pb/imgtrip_pb'
import {ServiceError} from '../../../pb/imgtrip_pb_service'
import {Code} from 'grpc-web-client/dist/Code'
import {lang} from '../../constants/lang'
import VerificationFormItem from './Items/VerificationFormItem'
import EmailFormItem from './Items/EmailFormItem'
import NameFormItem from './Items/NameFormItem'
import SubmitButton from './Items/SubmitButton'
import PasswordFormItem from './Items/PasswordFormItem'
import ConfirmPasswordFormItem from './Items/ConfirmPasswordFormItem'
import {AuthState, defaultState} from '../../redux/auth'
import {AGREEMENT_URL} from '../../constants/conf'

interface Props extends FormComponentProps {
  submitted: (user: AuthState) => void
}

interface Fields {
  name?: string
  email?: string
  agreement?: boolean
  verification_code?: string
  password?: string
  confirm?: string
  referer_email?: string
}

class RegisterForm extends React.Component<Props> {
  state = {
    loading: false,
    agreement: true,
    name: {
      validateStatus: undefined,
      help: '',
      value: undefined
    },
    email: {
      validateStatus: undefined,
      help: '',
      value: undefined
    },
    verificationCode: {
      validateStatus: undefined,
      help: '',
      value: undefined
    },
    password: {
      validateStatus: undefined,
      help: '',
      value: undefined
    },
    confirm: {
      validateStatus: undefined,
      help: '',
      value: undefined
    },
    refererEmail: {
      validateStatus: undefined,
      help: '',
      value: undefined
    },
    refererEmailHasFeedback: true
  }

  get fields(): Fields {
    return this.props.form.getFieldsValue(['name', 'email', 'verification_code', 'password', 'confirm', 'referer_email'])
  }

  submit(e: Event) {
    e.stopPropagation()
    const pass = this.onChange(this.fields, true)
    if (!pass) {
      return
    }

    const that = this

    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }

      const {name, email, password, verification_code, referer_email} = values
      loading(that)
      createUser(name, email, password, verification_code, referer_email)
        .then((res: CreateUserRes) => {
          const user = res.getUser().toObject()
          successWithLoaded(that)
          that.props.submitted({...defaultState, ...user})
        })
        .catch((err: ServiceError) => {
          switch (err.code) {
            case Code.AlreadyExists:
              const msg = JSON.parse(err.message)
              if (msg.name) {
                that.setState({name: {validateStatus: 'error', help: lang.nickname_already_exist, value: name}})
              }
              if (msg.email) {
                that.setState({email: {validateStatus: 'error', help: lang.email_already_exist, value: email}})
              }
              break
          }
          errorWithLoaded(that)
        })
    })
  }

  componentWillReceiveProps() {
    const fields = this.fields
    if (fields.email !== this.state.email.value
      || fields.password !== this.state.password.value
      || fields.name !== this.state.name.value
      || fields.verification_code !== this.state.verificationCode.value
      || fields.confirm !== this.state.confirm.value
      || fields.referer_email !== this.state.refererEmail.value
    ) {
      this.onChange(this.fields)
    }
  }

  onChange(fields: Fields, force = false): boolean {
    const name = NameFormItem.onChange(fields.name, force, this.state.name)
    const email = EmailFormItem.onChange(fields.email, force, this.state.email)
    const verificationCode = VerificationFormItem.onChange(fields.verification_code, force, this.state.verificationCode)
    const password = PasswordFormItem.onChange(fields.password, force, this.state.password)
    const confirm = ConfirmPasswordFormItem.onChange(fields.password, fields.confirm, force, this.state.confirm)

    let refererEmail = {
      validateStatus: undefined,
      help: '',
      value: fields.referer_email
    }
    let referEmailPassed = true
    const hasRefererEmailValue = typeof fields.referer_email !== 'undefined' && fields.referer_email !== ''
    if (hasRefererEmailValue) {
      refererEmail = EmailFormItem.onChange(fields.referer_email, hasRefererEmailValue, this.state.refererEmail)
      referEmailPassed = refererEmail.validateStatus === 'success'
    }

    this.setState({
      refererEmailHasFeedback: hasRefererEmailValue,
      name,
      email,
      verificationCode,
      password,
      confirm,
      refererEmail
    })

    return name.validateStatus === 'success'
      && email.validateStatus === 'success'
      && verificationCode.validateStatus === 'success'
      && password.validateStatus === 'success'
      && confirm.validateStatus === 'success'
      && referEmailPassed
  }

  agreementChanged(e: React.FormEvent<any>) {
    const target = e.target as HTMLFormElement
    this.setState({agreement: target.checked})
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const {email} = this.fields

    return (
      <Form>
        <h3 style={{textAlign: 'center'}}>{lang.register}</h3>
        <EmailFormItem
          getFieldDecorator={getFieldDecorator}
          help={this.state.email.help}
          validateStatus={this.state.email.validateStatus}
          key={1}
        />

        <VerificationFormItem
          email={email}
          getFieldDecorator={getFieldDecorator}
          help={this.state.verificationCode.help}
          validateStatus={this.state.verificationCode.validateStatus}
        />

        <NameFormItem
          getFieldDecorator={getFieldDecorator}
          help={this.state.name.help}
          validateStatus={this.state.name.validateStatus}
        />

        <PasswordFormItem
          getFieldDecorator={getFieldDecorator}
          help={this.state.password.help}
          validateStatus={this.state.password.validateStatus}
        />

        <ConfirmPasswordFormItem
          getFieldDecorator={getFieldDecorator}
          help={this.state.confirm.help}
          validateStatus={this.state.confirm.validateStatus}
        />

        <EmailFormItem
          getFieldDecorator={getFieldDecorator}
          help={this.state.refererEmail.help}
          validateStatus={this.state.refererEmail.validateStatus}
          required={false}
          name={'referer_email'}
          label={lang.referer_email}
          hasFeedback={this.state.refererEmailHasFeedback}
        />

        <FormItem {...formTailLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox onChange={this.agreementChanged.bind(this)}>
              {lang.agree}<a href={AGREEMENT_URL} target="_blank">{lang.agreement}</a>
            </Checkbox>
          )}
        </FormItem>

        <SubmitButton
          loading={this.state.loading}
          onClick={this.submit.bind(this)}
          text={lang.register}
          disabled={!this.state.agreement}
        />

      </Form>
    )
  }
}

export default Form.create()(RegisterForm)