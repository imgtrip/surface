import App, {Container} from 'next/app'
import * as React from 'react'
import {withReduxStore} from '../src/lib/with-redux-store'
import {Provider} from 'react-redux'
import '../node_modules/antd/dist/antd.min.css'
import Metas from '../src/components/Widgets/Metas'
import {DEFAULTS} from '../src/constants/seo'

class AppWithRedux extends App {

  props: any

  render() {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Metas metas={DEFAULTS}/>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(AppWithRedux)
