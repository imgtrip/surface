import * as React from 'react'
import Layout from '../src/components/Layouts/Layout'
import RetrievePasswordForm from '../src/components/Forms/RetrievePasswordForm'
import Button from 'antd/lib/button/button'
import AuthModal from '../src/components/Modals/AuthModal'
import {RootState} from '../src/redux'
import {connect} from 'react-redux'
import {Alert} from 'antd'
import Link from 'next/link'

interface Props {
}

interface InjectedProps extends Props {
  authId: number | undefined
}


class RetrievePassword extends React.Component<Props> {

  state = {
    succeed: false,
    authModalVisible: false
  }
  email = undefined
  password = undefined

  get getProps() {
    return this.props as InjectedProps
  }


  get Form() {
    const onSucceed = (email: string, password: string) => {
      this.email = email
      this.password = password
      this.setState({succeed: true})
    }

    return <RetrievePasswordForm onSucceed={onSucceed.bind(this)}/>
  }

  get LoginButton() {
    return (
      <div style={{textAlign: 'center'}}>
        <Button onClick={this.changeAuthModalVisible.bind(this, true)} type="primary">登录</Button>
        <AuthModal
          visible={this.state.authModalVisible}
          hide={this.changeAuthModalVisible.bind(this, false)}
        />
      </div>
    )
  }

  get Body() {
    const {authId} = this.getProps
    if (authId > 0) {
      return (
        <div>
          <Alert message="您已成功登录" type="success" showIcon/>
          <div style={{textAlign: 'center', padding: '20px 0'}}>
            <Link href="/">
              <a>
                <Button>继续旅图</Button>
              </a>
            </Link>
          </div>
        </div>
      )
    }
    const {Form, LoginButton} = this
    const {succeed} = this.state
    return succeed ? LoginButton : Form
  }

  changeAuthModalVisible(visible: boolean) {
    this.setState({authModalVisible: visible})
  }

  render() {
    return (
      <div>
        <Layout shadow>
          <div style={{maxWidth: 680, margin: 'auto'}}>
            {this.Body}
          </div>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    authId: state.auth.id
  }
}

export default connect(mapStateToProps)(RetrievePassword)
