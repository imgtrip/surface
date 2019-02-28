import * as React from 'react'
import {Form} from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import {formItemLayout} from './style'
import Select from 'antd/lib/select'
import {FormComponentProps} from 'antd/lib/form'
import {createAlbumImage} from '../../api/image'
import {CreateAlbumImageRes} from '../../../pb/imgtrip_pb'
import {errorWithLoaded, successWithLoaded} from '../../lib/message'
import {loading} from '../../lib/loading'
import SubmitButton from './Items/SubmitButton'

interface Album {
  id: number
  title: string
}

interface SubmitData {
  albumId: number
  imageId: number
}

interface Props extends FormComponentProps {
  albums: Album[]
  imageId: number
  onSubmitted: (data: SubmitData) => void
}

const rules = {
  albumId: (context: any) => {
    const {albums} = context.props

    return {
      rules: [{
        required: true,
        message: 'authLang.nickname_cannot_empty',
      }],
      initialValue: albums.length === 1 ? albums[0].id : '',
    }
  },
}

interface Fields {
  albumId?: string
}

class SelectForm extends React.Component<Props> {
  state = {
    loading: false,
    lastSelectedValve: '未选择',
    albumId: {
      help: '',
      validStatus: undefined,
      value: undefined,
    },
  }

  get fields(): Fields {
    return this.props.form.getFieldsValue(['albumId'])
  }

  submit() {
    event.preventDefault()
    if (this.onChange(this.fields, true)) {
      return
    }
    const that = this
    this.props.form.validateFields((err, values) => {
      console.log(values)
      if (err) {
        return
      }
      const {albumId} = values
      const {imageId} = that.props
      loading(that)
      createAlbumImage(albumId, imageId)
        .then((res: CreateAlbumImageRes) => {
          that.setState({lastSelectedValve: albumId})
          that.props.onSubmitted({albumId, imageId})
          successWithLoaded(that)
        })
        .catch(() => {
          errorWithLoaded(that)
        })
    })
  }

  onChange(fields, force = false): boolean {
    const albumId = fields.albumId

    if (albumId === undefined) {
      if (force) {
        this.setState({albumId: {validateStatus: 'error', help: 'authLang.email_cannot_empty', value: albumId}})
      }
    } else {
      this.setState({albumId: {validateStatus: 'success', help: '', value: albumId}})
    }
    return this.state.albumId.validStatus === 'success'
  }

  componentWillReceiveProps() {
    this.onChange(this.fields)
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const {albums} = this.props
    const hasLen = !!albums.length
    return (
      <Form>
        <FormItem label="选择图集"
                  {...formItemLayout}
                  required={true}
                  hasFeedback
                  validateStatus={this.state.albumId.validStatus}
                  help={this.state.albumId.help}
        >
          {getFieldDecorator('albumId', rules.albumId(this))(
            <Select disabled={!hasLen}>
              {
                albums.map((album, index) => {
                  return <Select.Option value={album.id} key={album.id.toString()}>{album.title}</Select.Option>
                })
              }
            </Select>,
          )}
        </FormItem>

        <SubmitButton
          loading={this.state.loading}
          onClick={this.submit.bind(this)}
          text={'保存'}
          disabled={!hasLen}
        />

      </Form>
    )
  }
}

export default Form.create()(SelectForm)
