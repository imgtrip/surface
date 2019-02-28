import * as React from 'react'
import Layout from '../src/components/Layouts/Layout'

interface Props {
  statusCode: number
}

class Error extends React.Component<Props> {
  static getInitialProps({res, err}) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return {statusCode}
  }

  render() {
    const code = this.props.statusCode
    const text = 'Error'
    return (
      <Layout padding={'0'}>
        <div
          dangerouslySetInnerHTML={{__html: `<div style="color:#000;background:#fff;font-family:-apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Fira Sans, Avenir, Helvetica Neue, Lucida Grande, sans-serif;height:80vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center"><div><style>body { margin: 0 }</style><h1 style="display:inline-block;border-right:1px solid rgba(0, 0, 0,.3);margin:0;margin-right:20px;padding:10px 23px 10px 0;font-size:24px;font-weight:500;vertical-align:top">${code}</h1><div style="display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle"><h2 style="font-size:14px;font-weight:normal;line-height:inherit;margin:0;padding:0">${text}</h2></div></div></div>`}}>
        </div>
      </Layout>
    )
  }
}

export default Error