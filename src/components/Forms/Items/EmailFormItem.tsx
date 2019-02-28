import {lang} from '../../../constants/lang'
import * as React from 'react'
import * as isEmail from 'validator/lib/isEmail'
import {ValidatorState} from '../../../@types/system'
import BaseInputFormItem, {BaseInputFormItemProps} from './BaseInputFormItem'

class EmailFormItem extends BaseInputFormItem<BaseInputFormItemProps> {

  static onChange(email: string, force: boolean, state: ValidatorState): ValidatorState {
    if (email !== undefined) {
      if (!isEmail(email)) {
        state.validateStatus = 'error'
        state.help = lang.email_format_illegal
      } else {
        state.validateStatus = 'success'
        state.help = ''
      }
    } else {
      if (force) {
        state.validateStatus = 'error'
        state.help = lang.email_cannot_empty
      }
    }
    state.value = email
    return state
  }

  constructor(props) {
    super(props)
    // FIXME 为什么父类的constructor未生效？ 需要覆写父类的方法？
    if (typeof props.name !== 'undefined') {
      this.name = props.name
    }
    if (typeof props.label !== 'undefined') {
      this.label = props.label
    }
  }

  state = {
    help: '',
    validateStatus: undefined
  }
  name = 'email'
  icon = 'mail'
  label = lang.email

}

export default EmailFormItem