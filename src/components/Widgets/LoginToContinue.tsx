import {Card} from 'antd'
import Row from 'antd/lib/grid/row'
import Col from 'antd/lib/grid/col'
import {lang} from '../../constants/lang'
import Button from 'antd/lib/button/button'
import * as React from 'react'
import AuthModal from '../Modals/AuthModal'

interface Props {
  visible: boolean
}

class LoginToContinue extends React.Component<Props> {

  state = {
    authModalVisible: false
  }

  changeAuthModalVisible(visible: boolean) {
    this.setState({authModalVisible: visible})
  }

  render() {
    if (!this.props.visible) {
      return null
    }

    return (
      <Card style={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        padding: '20px 0',
        left: 0,
        boxShadow: 'rgb(239, 239, 239) 0px 0px 20px 4px'
      }}>
        <Row>
          <Col span={8} offset={8} style={{textAlign: 'center'}}>
            <p>{lang.login_to_continue_view}</p>
            <Button
              type="primary"
              style={{margin: '5px 10px'}}
              onClick={this.changeAuthModalVisible.bind(this, true)}
            >
              {lang.register_and_login}
            </Button>
            <AuthModal
              visible={this.state.authModalVisible}
              hide={this.changeAuthModalVisible.bind(this, false)}
            />
          </Col>
        </Row>
      </Card>
    )
  }
}

export default LoginToContinue