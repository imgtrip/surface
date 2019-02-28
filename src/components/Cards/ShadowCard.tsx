import * as React from 'react'
import {CSSProperties} from 'react'


interface Props {
  shadow?: boolean
  style?: CSSProperties
}


class BodyCard extends React.Component<Props> {

  render() {
    const {shadow, style} = this.props
    const shadowStyle = shadow ? {boxShadow: 'rgb(239, 239, 239) 0px 0px 20px 4px'} : {}
    const extraStyle = style || {}
    return (
      <div style={{
        ...{
          padding: '50px',
          width: '100%',
          maxWidth: '1200px',
          margin: '20px auto',
          position: 'relative',
          overflow: 'hidden',
          background: 'white',
          color: 'black',
          minHeight: '600px',
          borderRadius: '8px',
        },
        ...shadowStyle,
        ...extraStyle,
      }}>
        {this.props.children}
      </div>
    )
  }
}

export default BodyCard
