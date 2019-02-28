import {formItemLayout, inputIcon} from '../style'
import FormItem from 'antd/lib/form/FormItem'
import Input from 'antd/lib/input/Input'
import {Icon} from 'antd'
import {GetFieldDecoratorOptions} from 'antd/lib/form/Form'
import * as React from 'react'

export interface BaseInputFormItemProps {
  getFieldDecorator: (id: string, options?: GetFieldDecoratorOptions) => (node: React.ReactNode) => React.ReactNode
  validateStatus?: 'success' | 'warning' | 'error' | 'validating'
  help?: string
  name?: string
  icon?: string
  label?: string
  required?: boolean
  hasFeedback?: boolean
  id?:string
}

class BaseInputFormItem<T extends BaseInputFormItemProps> extends React.Component<T, {}> {

  state = {
    help: '',
    validateStatus: undefined,
  }
  name = ''
  icon = ''
  label = ''
  inputType = 'text'

  constructor(props: T) {
    super(props)
    if (typeof props.name !== 'undefined') {
      this.name = props.name
    }
    if (typeof props.label !== 'undefined') {
      this.label = props.label
    }
  }

  componentWillReceiveProps(props: BaseInputFormItemProps) {
    const {help, validateStatus} = props
    this.setState({...this.state, help, validateStatus})
  }

  render() {
    const {name, inputType, icon, props, state} = this
    const {getFieldDecorator} = props
    const {help, validateStatus} = state
    const required = typeof props.required === 'undefined' ? true : props.required
    const label = typeof this.props.label === 'undefined' ? this.label : props.label

    const hasFeedback = typeof props.hasFeedback === 'undefined' ? true : props.hasFeedback

    return (
      <FormItem
        label={label}
        hasFeedback={hasFeedback}
        help={help}
        validateStatus={validateStatus}
        required={required}
        {...formItemLayout}
      >
        {getFieldDecorator(name)(
          <Input
            prefix={icon !== '' ? <Icon type={icon} style={inputIcon}/> : null}
            type={inputType}
          />,
        )}
      </FormItem>
    )
  }
}

export default BaseInputFormItem