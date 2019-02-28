import * as React from 'react'
import Layout from 'antd/lib/layout/layout'
import Header from './Header'
import Footer from './Footer'
import BodyCard from '../Cards/ShadowCard'
import {connect} from 'react-redux'
import {AuthState} from '../../redux/auth'


const {Content} = Layout

interface Props {
  auth?: AuthState
  shadow?: boolean
  padding?: string
}

interface InjectedProps extends Props {
}

class DefaultLayout extends React.Component<Props> {

  get getProps() {
    return this.props as InjectedProps
  }

  render() {
    const {shadow, padding, auth} = this.getProps
    const {children} = this.props
    const authId = auth.id
    const authName = auth.name

    let main = children
    if (typeof shadow !== 'undefined' && shadow) {
      main = <BodyCard shadow>{children}</BodyCard>
    }

    return (
      <Layout style={{background: 'white'}}>
        <Header authId={authId} name={authName}/>
        <Content style={{minWidth: '960px', padding: padding || '20px 50px', marginTop: '50px'}}>
          <main>{main}</main>
        </Content>
        <Footer/>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)