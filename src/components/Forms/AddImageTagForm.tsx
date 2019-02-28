import * as React from 'react'
import Form from 'antd/lib/form/Form'
import {FormComponentProps} from 'antd/lib/form'
import {loading} from '../../lib/loading'
import BaseInputFormItem from './Items/BaseInputFormItem'
import {lang} from '../../constants/lang'
import SubmitButton from './Items/SubmitButton'
import {createImageTag} from '../../api/image'
import {errorWithLoaded, successWithLoaded} from '../../lib/message'

interface Props extends FormComponentProps {
  imageId: number
  authId: number
  onSubmitted: () => void
}

interface Fields {
  tag?: string
}

class AddImageTagForm extends React.Component<Props> {

  state = {
    loading: false,
    tag: {
      help: '',
      validateStatus: undefined,
    },
  }

  get fields(): Fields {
    return this.props.form.getFieldsValue(['tag'])
  }

  submit(event) {
    event.preventDefault()
    if (!this.onChange(this.fields, true)) {
      return
    }
    const that = this
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      const tag = values.tag.trim()

      const {authId, imageId} = this.props
      loading(that)
      console.log({authId, imageId, tag})
      createImageTag(imageId, tag)
        .then(() => {
          successWithLoaded(that, 'loading', lang.request_success_waiting_review)
          that.props.onSubmitted()
        })
        .catch(() => {
          errorWithLoaded(that)
        })
    })
  }

  onChange(fields: Fields, force = false) {
    const tag = this.onTagChange(fields.tag, force, this.state.tag)
    this.setState({tag})
    return tag.validateStatus === 'success'
  }

  onTagChange(title, force: boolean, state: any) {
    if (title !== undefined) {
      if (title.trim().length > 0) {
        return {validateStatus: 'success', help: ''}
      } else {
        return {validateStatus: 'error', help: lang.tag_name_cannot_be_empty}
      }
    } else {
      if (force) {
        return {validateStatus: 'error', help: lang.tag_name_cannot_be_empty}
      }
    }
    return state
  }

  componentWillReceiveProps() {
    this.onChange(this.fields)
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Form>
        <BaseInputFormItem
          getFieldDecorator={getFieldDecorator}
          label={'标签名称'}
          name={'tag'}
          validateStatus={this.state.tag.validateStatus}
          help={this.state.tag.help}
        />
        <SubmitButton
          loading={this.state.loading}
          onClick={this.submit.bind(this)} text={'提交'}
        />
      </Form>
    )
  }
}

export default Form.create()(AddImageTagForm)