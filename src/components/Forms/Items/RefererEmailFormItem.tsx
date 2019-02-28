import BaseInputFormItem, {BaseInputFormItemProps} from './BaseInputFormItem'
import {lang} from '../../../constants/lang'
import {ValidatorState} from '../../../@types/system'
import * as isEmail from 'validator/lib/isEmail'


class RefererEmailFormItem extends BaseInputFormItem<BaseInputFormItemProps> {

  static onChange(email: string, force: boolean, state: ValidatorState): ValidatorState {
    if (email !== undefined && email !== '') {
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
      } else {
        state.validateStatus = 'success'
        state.help = ''
      }
    }
    state.value = email
    return state
  }

  state = {
    help: '',
    validateStatus: undefined
  }
  name = 'referer_email'
  icon = 'mail'
  label = lang.referer_email

}

export default RefererEmailFormItem