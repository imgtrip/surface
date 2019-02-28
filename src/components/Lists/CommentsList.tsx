import * as React from 'react'
import CommentItem from './CommentItem'
import List from 'antd/lib/list'
import Button from 'antd/lib/button/button'
import Loading from '../Widgets/Loading'
import {comments} from '../../api/user'
import {Comment} from '../../@types/data'
import {CommentsRes} from '../../../pb/imgtrip_pb'
import {PER_PAGE} from '../../constants/conf'
import {showUser} from '../../service/link'
import {lang} from '../../constants/lang'
import Empty from '../Widgets/Empty'


interface Props {
  comments: Comment[]
  commentHostId: number
  appendComments: (c: Comment[]) => void
}


export default class extends React.Component<Props> {

  state = {
    loading: false,
    loadingMore: false,
    showLoadingMore: true
  }
  nextCommentsPage = 1

  onLoadMore() {
    this.setState({loadingMore: true})

    const {appendComments, commentHostId} = this.props
    const that = this
    comments(commentHostId, this.nextCommentsPage)
      .then((res: CommentsRes) => {
        const c = res.toObject().itemsList
        if (c.length < PER_PAGE) {
          this.setState({showLoadingMore: false})
        }
        appendComments(c)
        that.nextCommentsPage++
        that.setState({loadingMore: false})
      })
      .catch(() => {
        that.setState({loadingMore: false})
      })
  }

  componentDidMount() {
    if (this.props.comments.length < PER_PAGE) {
      this.setState({showLoadingMore: false})
    }
  }


  loadMore() {
    const {loadingMore, showLoadingMore} = this.state

    if (!showLoadingMore) {
      return null
    }

    return (
      <div style={{textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px'}}>
        {loadingMore ? <Loading/> : <Button onClick={this.onLoadMore.bind(this)}>{lang.load_more}</Button>}
      </div>
    )
  }


  render() {
    const {loading} = this.state
    const {comments} = this.props
    if (comments.length === 0) {
      return <Empty/>
    }

    return (
      <List
        loading={loading}
        itemLayout="vertical"
        loadMore={this.loadMore()}
        dataSource={comments}
        size="small"
        locale={{emptyText: lang.no_content}}
        renderItem={(c: Comment, index) => {
          const link = showUser(c.user.id)
          return (<CommentItem
            avatar={c.user.avatar}
            name={c.user.name}
            content={c.content}
            createdAt={c.createdAt}
            link={link}
            key={index}
          />)
        }
        }
      />
    )
  }
}

