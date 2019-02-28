import * as React from 'react'
import {List} from 'antd'
import Icon from 'antd/lib/icon'
import {showPost} from '../../service/link'
import {ReactNode} from 'react'
import {Post} from '../../@types/data'

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
)

interface Props {
  post: Post
}

class PostItem extends React.Component<Props> {

  actions() {
    const {views, comments, createdAt} = this.props.post
    return [
      <IconText type="eye-o" text={views}/>,
      <IconText type="message" text={comments}/>,
      <IconText type="clock-circle-o" text={createdAt}/>
    ]
  }

  withLink(children: ReactNode): ReactNode {
    const {id} = this.props.post
    return <a href={showPost(id)}>{children}</a>
  }

  render() {
    const {id, cover, title, body} = this.props.post
    const actions = this.actions()
    return (
      <List.Item
        key={id}
        actions={actions}
        // extra={this.withLink(<img style={{maxHeight: 120}} alt={title} src={cover}/>)}
      >
        <List.Item.Meta
          title={this.withLink(<p style={{fontWeight: 600}}>{title}</p>)}
          // description={body}
        />
      </List.Item>
    )
  }
}

export default PostItem
