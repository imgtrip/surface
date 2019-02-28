import * as React from 'react'
import {Comment} from '../../@types/data'
import {comments} from '../../api/user'
import {CommentsRes} from '../../../pb/imgtrip_pb'
import CommentForm from '../Forms/CommentForm'
import Loading from '../Widgets/Loading'
import CommentsList from '../Lists/CommentsList'
import Broke from '../Widgets/Broke'

interface Props {
  commentHostId: number
  authId?: number
}

class CommentsWithFormCard extends React.Component<Props> {

  state = {
    comments: [],
    loading: true,
    broke: false,
  }

  componentDidMount() {
    const that = this
    const {commentHostId} = this.props
    if (!commentHostId) {
      that.setState({loading: false, broke: true})
      return
    }
    comments(commentHostId)
      .then((res: CommentsRes) => {
        const comments = res.toObject().itemsList
        that.setState({comments: [...that.state.comments, ...comments], loading: false})
      })
      .catch(() => {
        that.setState({loading: false})
      })
  }

  commentSubmitted(comment: Comment) {
    this.setState({comments: [comment, ...this.state.comments]})
  }

  appendComments(comments: Comment[]) {
    this.setState({comments: [...this.state.comments, ...comments]})
  }

  get CommentForm() {
    if (this.state.loading) {
      return
    }
    const {commentHostId, authId} = this.props
    return (
      <CommentForm
        authId={authId}
        commentHostId={commentHostId}
        onSubmitted={this.commentSubmitted.bind(this)}
      />
    )
  }

  get Comments() {
    const {comments, loading} = this.state
    if (loading) {
      return <Loading/>
    }

    const {commentHostId} = this.props
    return (
      <CommentsList
        commentHostId={commentHostId}
        comments={comments}
        appendComments={this.appendComments.bind(this)}
      />
    )
  }

  render() {
    if (this.state.broke) {
      return <div style={{marginBottom: '20px'}} id="comments"><Broke/></div>
    }

    return (
      <div>
        <div style={{marginBottom: '20px'}}>
          {this.CommentForm}
        </div>
        <div style={{marginBottom: '20px'}} id="comments">{this.Comments}</div>
      </div>
    )
  }
}

export default CommentsWithFormCard