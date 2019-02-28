import * as React from 'react'
import Layout from '../src/components/Layouts/Layout'


class ArticleShow extends React.Component {

  render() {
    const body = '<h3>sub title</h3><div><p style="color:red">red</p> <b>text text</b></div>'
    return (
      <Layout shadow>
        <h1 style={{textAlign: 'center'}}>title title title</h1>
        <div dangerouslySetInnerHTML={{__html: body}}/>
      </Layout>
    )
  }

}

export default ArticleShow