import {lang} from '../../constants/lang'
import * as React from 'react'

interface Props {
  text?: string | number
  color?: string
}

class Empty extends React.PureComponent<Props> {
  render() {
    const {text, color} = this.props
    return (
      <div style={{textAlign: 'center', color: color || 'rgba(0,0,0,.45)'}}>
        {text || lang.no_content}
      </div>
    )
  }
}

export default Empty