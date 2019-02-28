import * as React from 'react'
import Modal from 'antd/lib/modal/Modal'
import Row from 'antd/lib/grid/row'
import Col from 'antd/lib/grid/col'
import {AuthState, setAuth} from '../../redux/auth'
import {connect} from 'react-redux'
import {createJwt} from '../../api/user'
import {CreateJwtRes} from '../../../pb/imgtrip_pb'
import RegisterForm from '../Forms/RegisterForm'
import LoginForm from '../Forms/LoginForm'
import {BaseModalProps} from './base'
import {setJwtCookie} from '../../service/cookie'
import {Icon} from 'antd'

interface Props extends BaseModalProps {
}

interface InjectedProps extends Props {
  setAuth: (user: AuthState) => void
}

const privilegeStyle = {color: 'green'}

class AuthModal extends React.Component<Props> {

  get getProps() {
    return this.props as InjectedProps
  }

  ok(e) {
    e.stopPropagation()
    this.getProps.hide()
  }

  cancel(e) {
    e.stopPropagation()
    this.getProps.hide()
  }

  onAuthSuccess(user: AuthState) {
    this.getProps.setAuth(user)
    createJwt(user.id)
      .then((res: CreateJwtRes) => {
        setJwtCookie(res.getHash())
      })
      .catch(() => {
      })

    this.getProps.hide()
  }

  render() {
    return (
      <Modal
        visible={this.getProps.visible}
        onCancel={this.cancel.bind(this)}
        width={960}
        footer={null}
      >
        <div style={{padding: 20}}>
          <Row gutter={64}>
            <Col span={12} style={{borderRight: '1px solid #e4e4e4'}}>
              <RegisterForm submitted={this.onAuthSuccess.bind(this)}/>
            </Col>
            <Col span={12}>
              <LoginForm submitted={this.onAuthSuccess.bind(this)}/>
              <div style={{paddingLeft: 50}}>
                <p><b>登录特权</b></p>
                <p><Icon type="check-circle" style={privilegeStyle}/> 下载无水印原图</p>
                <p><Icon type="check-circle" style={privilegeStyle}/> 收藏喜欢的图</p>
                <p><Icon type="check-circle" style={privilegeStyle}/> 留言评论</p>
                <p><Icon type="check-circle" style={privilegeStyle}/> 淘汰低质量内容</p>
                <p><Icon type="check-circle" style={privilegeStyle}/> 参与社区活动</p>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = () => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: (user: AuthState) => dispatch(setAuth(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal)

