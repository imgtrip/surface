import {lang} from '../../../constants/lang'
import * as React from 'react'
import {ValidatorState} from '../../../@types/system'
import BaseInputFormItem, {BaseInputFormItemProps} from './BaseInputFormItem'


class PasswordFormItem extends BaseInputFormItem<BaseInputFormItemProps> {

  static onChange(password: string, force: boolean, state: ValidatorState): ValidatorState {
    if (password !== undefined) {
      if (password.length < 6) {
        state.validateStatus = 'error'
        state.help = lang.password_cannot_less_than_six_chart
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
    state.value = password
    return state
  }

  state = {
    help: '',
    validateStatus: undefined,
  }
  label = lang.password
  icon = 'lock'
  name = 'password'
  inputType = 'password'

  constructor(props) {
    super(props)
    if (props.name) {
      this.name = props.name
    }
  }


}

export default PasswordFormItem