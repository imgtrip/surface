import * as React from 'react'
import {Icon} from 'antd'

interface Props {
  text?: string | React.Component
}

export default class extends React.PureComponent<Props> {
  render() {
    const {text} = this.props
    return (
      <div style={{textAlign: 'center', color: '#afafaf'}}>
        {text || <span><Icon type="frown-o"/> 资源不存在或已被删除</span>}
      </div>
    )
  }
}