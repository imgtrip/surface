import * as React from 'react'
import Button from 'antd/lib/button/button'
import Form from 'antd/lib/form/Form'
import {FormComponentProps} from 'antd/lib/form'
import FormItem from 'antd/lib/form/FormItem'
import TextArea from 'antd/lib/input/TextArea'
import {createComment} from '../../api/user'
import {Comment, CreateCommentRes} from '../../../pb/imgtrip_pb'
import {loading} from '../../lib/loading'
import {errorWithLoaded, successWithLoaded} from '../../lib/message'
import AuthModal from '../Modals/AuthModal'

const rules = {
  comment: (context: any) => {
    return {
      rules: [
        {
          required: true,
          message: 'required',
          max: 245,
          whitespace: true
        }
      ]
    }
  }
}

interface Props extends FormComponentProps {
  commentHostId: number
  onSubmitted: (comment: Comment.AsObject) => void
  authId?: number
}

class CommentForm extends React.Component<Props> {

  state = {
    loading: false,
    authModalVisible: false,
    comment: {
      validateStatus: undefined,
      help: '',
      value: undefined
    }
  }


  changeAutoModalVisible(visible: boolean) {
    this.setState({authModalVisible: visible})
  }

  submit(e: Event) {
    e.preventDefault()
    const {authId, commentHostId} = this.props
    console.log(authId)

    if (!authId) {
      this.changeAutoModalVisible(true)
      return
    }
    const that = this
    this.setState({loading: true})
    this.props.form.validateFields((err, values) => {
        if (err) {
          that.setState({loading: false})
          return
        }
        const comment = values.comment

        loading(that)
        createComment(commentHostId, comment)
          .then((res: CreateCommentRes) => {
            const resComment = res.getComment().toObject()
            that.props.form.setFieldsValue({comment: ''})
            that.props.onSubmitted(resComment)
            successWithLoaded(that)
          })
          .catch(() => {
            errorWithLoaded(that)
          })
      }
    )
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const {loading, comment, authModalVisible} = this.state
    return (
      <Form>
        <FormItem
          style={{marginBottom: 0}}
          hasFeedback
          help={comment.help}
          validateStatus={comment.validateStatus}
        >
          {getFieldDecorator('comment', rules.comment(this))(
            <TextArea rows={3}/>
          )}
        </FormItem>
        <FormItem style={{textAlign: 'left'}}>
          <Button
            type="primary"
            onClick={this.submit.bind(this)}
            htmlType="submit"
            loading={loading}
            disabled={loading}
          >
            评论
          </Button>
          <AuthModal
            visible={authModalVisible}
            hide={this.changeAutoModalVisible.bind(this, false)}
          />
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(CommentForm)
