import * as React from 'react'
import Form from 'antd/lib/form/Form'
import {FormComponentProps} from 'antd/lib/form'
import {SimpleAlbum} from '../../redux/auth'
import {createAlbum, createAlbumImage} from '../../api/image'
import {CreateAlbumRes} from '../../../pb/imgtrip_pb'
import {error, errorWithLoaded, successWithLoaded} from '../../lib/message'
import {loading} from '../../lib/loading'
import BaseInputFormItem from './Items/BaseInputFormItem'
import {lang} from '../../constants/lang'
import SubmitButton from './Items/SubmitButton'

interface Props extends FormComponentProps {
  imageId: number
  authId: number
  onSubmitted: (album: SimpleAlbum) => void
}

interface Fields {
  title?: string
}

class CreateForm extends React.Component<Props> {

  state = {
    loading: false,
    title: {
      help: '',
      validateStatus: undefined,
    },
  }

  get fields(): Fields {
    return this.props.form.getFieldsValue(['title'])
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
      const title = values.title.trim()

      const {authId, imageId} = this.props
      loading(that)
      createAlbum(title, authId)
        .then((res: CreateAlbumRes) => {
          createAlbumImage(res.getId(), imageId)
            .then(() => {
            })
            .catch(() => {
              error('收藏图片失败')
            })
          that.props.onSubmitted({id: res.getId(), title: title})
          successWithLoaded(that)
        })
        .catch(() => {
          errorWithLoaded(that)
        })
    })
  }

  onChange(fields: Fields, force = false) {
    const title = this.onTitleChange(fields.title, force, this.state.title)
    this.setState({title})
    return title.validateStatus === 'success'
  }

  onTitleChange(title, force: boolean, state: any) {
    if (title !== undefined) {
      if (title.trim().length > 0) {
        return {validateStatus: 'success', help: ''}
      } else {
        return {validateStatus: 'error', help: lang.album_name_cannot_be_empty}
      }
    } else {
      if (force) {
        return {validateStatus: 'error', help: lang.album_name_cannot_be_empty}
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
          label={'图集名称'}
          name={'title'}
          validateStatus={this.state.title.validateStatus}
          help={this.state.title.help}
        />

        <SubmitButton
          loading={this.state.loading}
          onClick={this.submit.bind(this)} text={'新建并保存'}
        />
      </Form>
    )
  }
}

export default Form.create()(CreateForm)