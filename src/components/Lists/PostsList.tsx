import * as React from 'react'
import {List} from 'antd'
import PostItem from './PostItem'
import {Post} from '../../@types/data'
import Button from 'antd/lib/button/button'
import {lang} from '../../constants/lang'

interface Props {
  lists: Post[]
}


class PostsList extends React.Component<Props> {

  render() {
    const {lists} = this.props
    return (
      <List
        itemLayout="vertical"
        size="large"
        locale={{emptyText: lang.no_content}}
        split={false}
        dataSource={lists}
        footer={<div style={{textAlign: 'right'}}><Button type="primary" disabled>发言</Button></div>}
        renderItem={(post: Post) => <PostItem post={post}/>}
      />
    )
  }
}

export default PostsList
