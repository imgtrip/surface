import * as React from 'react'
import Menu from 'antd/lib/menu'
import Layout from 'antd/lib/layout/layout'
import Link from 'next/link'
import AuthModal from '../Modals/AuthModal'
import {albums, forum, home, hot, reviews, showUser} from '../../service/link'
import {lang} from '../../constants/lang'
import {APP_LOGO, SITE_NAME, SITE_TITLE} from '../../constants/conf'
import {Tag} from 'antd'
import {isStaging} from '../../lib/browser'

interface Props {
  selected?: 'home' | 'albums'
  authId?: number
  name?: string
}

const pages = {'home': '1', 'albums': '2'}
const {Header} = Layout

const textColor = 'black'
const loginStyle = {color: 'black'}


export default class  extends React.Component<Props> {

  state = {
    authModalVisible: false,
    staging: false,
  }

  changeAuthModalVisible(visible: boolean) {
    this.setState({authModalVisible: visible})
  }

  componentDidMount() {
    if (isStaging()) {
      this.setState({staging: true})
    }
  }

  tourist() {
    return (
      <div>
        <span
          style={{cursor: 'pointer'}}
          onClick={this.changeAuthModalVisible.bind(this, true)}
        >
          <a style={loginStyle} href="#">{lang.register_and_login}</a>
        </span>
        <AuthModal
          visible={this.state.authModalVisible}
          hide={this.changeAuthModalVisible.bind(this, false)}
        />
      </div>
    )
  }

  authed(authId: number, name: string) {
    const userShowLink = showUser(authId)
    return (
      <Link href={userShowLink}>
        <a style={loginStyle}>{name}</a>
      </Link>
    )
  }

  render() {
    const selected = this.props.selected ? pages[this.props.selected] : '0'
    const {authId, name} = this.props

    return (
      <Header style={{
        minWidth: '960px',
        background: 'white',
        width: '100%',
        position: 'fixed',
        zIndex: 999,
        height: '50px',
        lineHeight: '50px',
        boxShadow: '0 0 20px 4px rgba(0, 0, 0, .11)',
        WebkitBoxShadow: '0 0 20px 4px rgba(0, 0, 0, .11)',
      }}>
        <div style={{margin: 'auto', maxWidth: '1200px', height: '50px', overflow: 'hidden'}}>
          <div style={{
            width: 20,
            height: 50,
            margin: '0 24px',
            float: 'left',
          }}
          >
            {this.state.staging ? <Tag color="red">staging</Tag> : null}
          </div>
          <div style={{
            width: '120px',
            height: '50px',
            margin: '0 24px',
            float: 'left',
          }}>
            <Link href="/">
              <a>
                <img src={APP_LOGO} style={{width: '100%'}} title={SITE_TITLE} alt={SITE_NAME}/>
              </a>
            </Link>
          </div>
          <div style={{
            width: '120px',
            height: '50px',
            margin: '0 24px 0 0',
            color: textColor,
            float: 'right',
          }}>
            {authId > 0 ? this.authed(authId, name) : this.tourist()}
          </div>

          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[selected]}
            style={{lineHeight: '50px', background: 'none'}}
          >
            <Menu.Item key="1">
              <Link href={home}>
                <a>旅图</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href={albums}>
                <a>图辑</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href={forum}>
                <a>言图</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href={hot}>
                <a>热门</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link href={reviews}>
                <a>审核</a>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    )
  }
}
