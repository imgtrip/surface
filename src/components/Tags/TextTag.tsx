import * as React from 'react'
import Icon from 'antd/lib/icon'


interface Props {
  text: string | number | React.ReactNode
  icon?: string
}

export default class extends React.Component<Props> {
  render() {
    const {icon, text} = this.props
    return (
      <span style={{margin: '0 6px'}}>
        <Icon type={icon} style={{marginRight: '2px'}}/>
        <span style={{marginRight: '4px'}}>{text}</span>
      </span>
    )
  }
}
