import {lang} from '../../../constants/lang'
import * as React from 'react'
import {ValidatorState} from '../../../@types/system'
import BaseInputFormItem, {BaseInputFormItemProps} from './BaseInputFormItem'

class ConfirmPasswordFormItem extends BaseInputFormItem<BaseInputFormItemProps> {

  static onChange(password: string, confirm: string, force: boolean, state: ValidatorState): ValidatorState {
    if (confirm !== undefined) {
      if (password && password.length < 6) {
        state.validateStatus = 'error'
        state.help = lang.password_cannot_less_than_six_chart
      } else if (password !== confirm) {
        state.validateStatus = 'error'
        state.help = lang.confirm_password_not_matched
      } else {
        state.validateStatus = 'success'
        state.help = ''
      }
    } else {
      if (force) {
        state.validateStatus = 'error'
        state.help = lang.password_cannot_empty
      }
    }
    state.value = confirm
    return state
  }

  state = {
    help: '',
    validateStatus: undefined
  }
  label = lang.confirm_password
  icon = 'lock'
  name = 'confirm'
  inputType = 'password'
}

export default ConfirmPasswordFormItem