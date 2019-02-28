import * as React from 'react'
import {User} from '../../@types/data'
import {concat} from 'lodash'
import {showUser} from '../../service/link'
import TextTags from './TextTags'

interface Taggable {
  views?: number | string,
  amounts?: number | string,
  comments?: number | string
  createdAt?: number | string
}

interface Props {
  data: Taggable
  user?: User
  linkable?: boolean
  tags?: string[]
}

export default class extends React.PureComponent<Props> {

  get getProps() {
    return this.props.data as Taggable
  }

  mixedTags = []

  tags() {
    const {user, linkable, tags} = this.props
    const {views, amounts, comments, createdAt} = this.getProps
    const name = user ? user.name || '未知' : ''
    const localTags = tags || ['user', 'views', 'amounts', 'comments', 'createdAt']

    this.mixedTags = []
    localTags.map((tagName) => {
      switch (tagName) {
        case 'user':
          this.concatTag(name, 'user', linkable && typeof user !== 'undefined' ? showUser(user.id) : '')
          break
        case 'views':
          this.concatTag(views, 'eye-o')
          break
        case 'amounts':
          this.concatTag(amounts, 'picture')
          break
        case 'comments':
          this.concatTag(comments, 'message', linkable ? '#comments' : '')
          break
        case 'createdAt':
          this.concatTag(createdAt, 'clock-circle-o')
          break
      }
    })
    return this.mixedTags
  }

  concatTag(text: string | number | undefined, icon: string, link = '') {
    if (typeof text !== 'undefined') {
      this.mixedTags = concat(this.mixedTags, {text, icon, link})
    }
  }

  render() {
    return <TextTags tags={this.tags()}/>
  }

}