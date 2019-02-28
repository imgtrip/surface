import {lang} from '../../../constants/lang'
import * as React from 'react'
import {ValidatorState} from '../../../@types/system'
import BaseInputFormItem, {BaseInputFormItemProps} from './BaseInputFormItem'


class NameFormItem extends BaseInputFormItem<BaseInputFormItemProps> {

  static onChange(name: string, force: boolean, state: ValidatorState): ValidatorState {
    if (name !== undefined) {
      if (name.length === 0) {
        state.validateStatus = 'error'
        state.help = lang.nickname_cannot_empty
      } else {
        state.validateStatus = 'success'
        state.help = ''
      }
    } else {
      if (force) {
        state.validateStatus = 'error'
        state.help = lang.nickname_cannot_empty
      }
    }
    state.value = name
    return state
  }

  state = {
    help: '',
    validateStatus: undefined,
  }
  label = lang.nickname
  icon = 'user'
  name = 'name'

}

export default NameFormItem