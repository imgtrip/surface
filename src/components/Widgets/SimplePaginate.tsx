import * as React from 'react'


interface Props {
  previousPage: string
  nextPage: string
}

class SimplePaginate extends React.Component<Props> {
  render() {
    const {previousPage, nextPage} = this.props
    return <div style={{textAlign: 'center'}}>
      {previousPage ? <a href={previousPage} style={{marginRight: '1em'}}>上一页</a> : null}
      {nextPage ? <a href={nextPage} style={{marginLeft: '1em'}}>下一页</a> : null}
    </div>
  }
}

export default SimplePaginate
