import * as React from 'react'
import {Spin} from 'antd'
import Icon from 'antd/lib/icon'

interface Props {
  size?: number
}

export default class  extends React.PureComponent<Props> {
  render() {
    const size = this.props.size || 24
    return (
      <div style={{textAlign: 'center'}}>
        <Spin indicator={<Icon type="loading" style={{fontSize: size}} spin/>}/>
      </div>
    )
  }
}