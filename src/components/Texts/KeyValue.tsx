import * as React from 'react'

interface Props {
  name?: React.ReactNode
  value?: React.ReactNode
  width?: string
}

class KeyValue extends React.Component<Props> {

  render() {
    const {name, value, width} = this.props
    const s = width ? {width} : {}
    return (
      <p style={{textAlign: 'left', overflow: 'hidden', ...s}}>
        <b>{name}<span style={{padding: '0 6px'}}>:</span></b>
        <span>{value}</span>
      </p>
    )
  }
}

export default KeyValue