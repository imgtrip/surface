import * as React from 'react'
import Form from 'antd/lib/form/Form'
import {FormComponentProps} from 'antd/lib/form'
import EmailFormItem from './Items/EmailFormItem'
import VerificationFormItem from './Items/VerificationFormItem'
import PasswordFormItem from './Items/PasswordFormItem'
import ConfirmPasswordFormItem from './Items/ConfirmPasswordFormItem'
import SubmitButton from './Items/SubmitButton'
import {updatePassword} from '../../api/user'
import {UpdatePasswordRes} from '../../../pb/imgtrip_pb'
import {loading} from '../../lib/loading'
import {errorWithLoaded, successWithLoaded} from '../../lib/message'

interface Fields {
  email?: string
  verification_code?: string
  password?: string
  confirm?: string
}

interface Props extends FormComponentProps {
  onSucceed: (email: string, password: string) => void
}

class RetrievePasswordForm extends React.Component<Props> {

  state = {
    loading: false,
    email: {
      validateStatus: undefined,
      help: '',
      value: undefined,
    },
    verificationCode: {
      validateStatus: undefined,
      help: '',
      value: undefined,
    },
    password: {
      validateStatus: undefined,
      help: '',
      value: undefined,
    },
    confirm: {
      validateStatus: undefined,
      help: '',
      value: undefined,
    },
  }

  get fields(): Fields {
    return this.props.form.getFieldsValue(['email', 'verification_code', 'password', 'confirm'])
  }

  submit(e: Event) {
    e.stopPropagation()
    if (!this.onChange(this.fields, true)) {
      return
    }
    const that = this
    const {onSucceed} = this.props

    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      const {email, password, verification_code} = values
      loading(that)
      updatePassword(email, password, verification_code)
        .then((res: UpdatePasswordRes) => {
          onSucceed(email, password)
          successWithLoaded(that)
        })
        .catch(() => {
          errorWithLoaded(that)
        })
    })
  }

  onChange(fields: Fields, force = false) {
    const email = EmailFormItem.onChange(fields.email, force, this.state.email)
    const verificationCode = VerificationFormItem.onChange(fields.verification_code, force, this.state.verificationCode)
    const password = PasswordFormItem.onChange(fields.password, force, this.state.password)
    const confirm = ConfirmPasswordFormItem.onChange(fields.password, fields.confirm, force, this.state.confirm)

    this.setState({name, email, verificationCode, password, confirm})

    return email.validateStatus === 'success'
      && verificationCode.validateStatus === 'success'
      && password.validateStatus === 'success'
      && confirm.validateStatus === 'success'
  }

  componentWillReceiveProps() {
    this.onChange(this.fields)
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const {email} = this.fields
    return (
      <Form>
        <h3 style={{textAlign: 'center'}}>找回密码</h3>
        <EmailFormItem
          id={'retrieve-email'}
          getFieldDecorator={getFieldDecorator}
          help={this.state.email.help}
          validateStatus={this.state.email.validateStatus}
        />

        <VerificationFormItem
          id={'retrieve-verification-code'}
          email={email}
          getFieldDecorator={getFieldDecorator}
          help={this.state.verificationCode.help}
          validateStatus={this.state.verificationCode.validateStatus}
        />

        <PasswordFormItem
          id={'new-password'}
          getFieldDecorator={getFieldDecorator}
          help={this.state.password.help}
          validateStatus={this.state.password.validateStatus}
          label={'新密码'}
        />

        <ConfirmPasswordFormItem
          id={'confirm-new-password'}
          getFieldDecorator={getFieldDecorator}
          help={this.state.confirm.help}
          validateStatus={this.state.confirm.validateStatus}
          label={'确认新密码'}
        />

        <SubmitButton
          loading={this.state.loading}
          onClick={this.submit.bind(this)}
          text={'更新密码'}
        />
      </Form>
    )
  }
}

export default Form.create()(RetrievePasswordForm)