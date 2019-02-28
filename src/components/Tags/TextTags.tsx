import * as React from 'react'
import TextTag from './TextTag'


interface Tags {
  text: string | number | React.ReactNode
  icon?: string
  link?: string
}

interface Props {
  tags: Tags[]
}

export default class extends React.PureComponent<Props> {
  render() {
    const elements = this.props.tags.map((item, key) => {
      const {text, icon, link} = item
      let textEle = text
      if (link) {
        textEle = <a href={link} key={key}>{text}</a>
      }
      return <TextTag icon={icon} text={textEle} key={key}/>
    })
    
    return <span>{elements}</span>
  }
}
