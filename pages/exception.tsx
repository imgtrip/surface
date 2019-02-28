import * as React from 'react'
import Error from './_error'

interface Props {
  statusCode: number
}

class Exception extends React.Component<Props> {

  static getInitialProps({req, res, err}) {
    const code = req.params.code
    let statusCode = null
    if (code) {
      statusCode = code
    } else if (res && res.statusCode) {
      statusCode = res.statusCode
    } else if (err && err.statusCode) {
      statusCode = err.statusCode
    }

    res.status(statusCode)

    return {statusCode}
  }

  render() {

    return <Error statusCode={this.props.statusCode}/>
  }
}

export default Exception
