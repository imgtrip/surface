import * as React from 'react'
import ArticlesList from '../src/components/Lists/ArticlesList'
import Layout from '../src/components/Layouts/Layout'


class Articles extends React.Component {

  render() {
    return (
      <Layout>
        <ArticlesList/>
      </Layout>
    )
  }
}

export default Articles