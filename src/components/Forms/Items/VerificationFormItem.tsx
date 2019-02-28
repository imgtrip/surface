import * as React from 'react'
import FormItem from 'antd/lib/form/FormItem'
import {lang} from '../../../constants/lang'
import VerificationCodeInput from './VerificationCodeInput'
import {formItemLayout} from '../style'
import {VERIFICATION_CODE_LENGTH} from '../../../constants/conf'
import {ValidatorState} from '../../../@types/system'
import {BaseInputFormItemProps} from './BaseInputFormItem'

interface Props extends BaseInputFormItemProps {
  email: string
}

class VerificationFormItem extends React.Component<Props> {

  static onChange(verificationCode: string | undefined, force: boolean, state: ValidatorState): ValidatorState {
    if (verificationCode !== undefined) {
      if (verificationCode.length !== VERIFICATION_CODE_LENGTH) {
        state.validateStatus = 'error'
        state.help = lang.verification_code_illegal
      } else {
        state.validateStatus = 'success'
        state.help = ''
      }
    } else {
      if (force) {
        state.validateStatus = 'error'
        state.help = lang.verification_code_illegal
      }
    }
    state.value = verificationCode
    return state
  }

  state = {
    help: '',
    validateStatus: undefined,
  }

  onVerificationCodeSuccess() {
    this.setState({...this.state, help: '', validateStatus: 'success'})
  }

  onVerificationCodeError(message) {
    this.setState({...this.state, help: message, validateStatus: 'error'})
  }

  componentWillReceiveProps(props: Props) {
    const {help, validateStatus} = props
    this.setState({...this.state, help, validateStatus})
  }

  render() {
    const {email, getFieldDecorator} = this.props
    const {help, validateStatus} = this.state
    return (
      <FormItem
        required
        label={lang.verification_code}
        help={help}
        validateStatus={validateStatus}
        {...formItemLayout}
      >
        <VerificationCodeInput
          email={email}
          getFieldDecorator={getFieldDecorator}
          onSuccess={this.onVerificationCodeSuccess.bind(this)}
          onError={this.onVerificationCodeError.bind(this)}
        />
      </FormItem>
    )
  }
}

export default VerificationFormItem