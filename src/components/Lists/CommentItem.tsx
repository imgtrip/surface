import * as React from 'react'
import List from 'antd/lib/list'
import Avatar from 'antd/lib/avatar'
import Link from 'next/link'

export interface Props {
  avatar: string
  name: string
  link: string
  createdAt: string
  content: string
}

export default class extends React.Component<Props> {

  user(avatar: string, link: string, name: string) {
    return (
      <span>
      <Avatar src={avatar} icon="user"/>
        <Link href={link}>
          <a style={{marginLeft: '10px'}}>{name}</a>
        </Link>
     </span>
    )
  }

  render() {
    const {avatar, link, name, content, createdAt} = this.props
    return (
      <List.Item style={{marginBottom: 0}}>
        <List.Item.Meta
          title={this.user(avatar, link, name)}
          style={{marginBottom: 0}}
        />
        <div style={{paddingLeft: '50px'}}>
          <div style={{wordWrap: 'break-word', whiteSpace: 'pre-wrap'}}>
            {content}
          </div>
          <div style={{color: 'darkgrey'}}>
        <span>
          {createdAt}
        </span>
          </div>
        </div>
      </List.Item>
    )
  }
}

