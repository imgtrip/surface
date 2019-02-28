import * as React from 'react'
import Layout from '../src/components/Layouts/Layout'
import {userAlbums} from '../src/api/image'
import {ShowUserRes, UserAlbumsRes} from '../pb/imgtrip_pb'
import {AuthState, removeAuth, SimpleAlbum} from '../src/redux/auth'
import {showUser, updateToken} from '../src/api/user'
import {Album, User} from '../src/@types/data'
import {setTokenHash} from '../src/service/token'
import AlbumsGrid from '../src/components/Grids/AlbumsGrid'
import {Button, Divider, Icon} from 'antd'
import UserCard from '../src/components/Cards/UserCard'
import {connect} from 'react-redux'
import {RootState} from '../src/redux'
import {success} from '../src/lib/message'
import {lang} from '../src/constants/lang'
import {deleteJwtCookie} from '../src/service/cookie'
import Metas from '../src/components/Widgets/Metas'
import {SITE_NAME} from '../src/constants/conf'
import Col from 'antd/lib/grid/col'
import Row from 'antd/lib/grid/row'
import * as moment from 'moment'
import {ServiceError} from '../pb/imgtrip_pb_service'
import {Code} from 'grpc-web-client/dist/Code'
import {error} from '../src/service/link'


interface Props {
  albums: Album[],
  user: User
}

interface InjectedProps extends Props {
  auth: AuthState,
  removeAuth: () => void
}


class UserShow extends React.Component<Props> {

  static async getInitialProps({reduxStore, req, res, token}) {
    setTokenHash(token)

    const {id} = req.params
    let albums = []
    let user = {} as User
    await  showUser(id)
      .then(async (res: ShowUserRes) => {
        user = res.toObject().user

        await Promise.all([
          userAlbums(user.id),
        ]).then((values: any) => {
          const responses: [UserAlbumsRes] = values
          albums = responses[0].toObject().itemsList as SimpleAlbum[]
        }).catch(() => {
        })
      })
      .catch((err: ServiceError) => {
        if (err.code === Code.NotFound) {
          res.status(404)
        } else {
          res.status(500)
        }
      })

    return {albums, user}
  }

  get getProps() {
    return this.props as InjectedProps
  }

  logout() {
    const {user, auth} = this.getProps
    if (user.id !== auth.id) {
      return null
    }

    return (
      <div style={{textAlign: 'right'}}>
        <Button type="danger" onClick={this.onLogout.bind(this)}><Icon type="logout"/>{lang.logout}</Button>
      </div>
    )
  }

  onLogout() {
    const that = this
    updateToken()
      .then(() => {
        that.getProps.removeAuth()
        deleteJwtCookie()
        success()
      })
      .catch(() => {
        fail()
      })
  }

  render() {
    const {albums, user} = this.getProps
    return (
      <Layout shadow>
        {user.name ? <Metas metas={{
          title: `${user.name} - ${SITE_NAME}`,
          description: user.name,
          keywords: user.name,
        }}/> : null}


        <div style={{marginBottom: '40px'}}>
          <UserCard user={user}/>
          {this.logout()}
        </div>

        <div style={{marginBottom: '2em'}}>
          <Row type="flex" style={{textAlign: 'center'}}>
            <Col span={8} order={1}>
              <Icon type="pay-circle"/> 积分:{user.score}
            </Col>
            <Col span={8} order={2}>
              <Icon type="cloud-download"/> 无条件下载额度:{user.dailyFreeDownloadNumber}张/天
            </Col>
            <Col span={8} order={3}>
              <Icon type="clock-circle"/> 加入时间：{user.createdAt ? moment(user.createdAt).format('YYYY-MM-DD') : ''}
            </Col>
          </Row>
        </div>

        <Divider>{lang.created_albums}</Divider>
        <AlbumsGrid albums={albums} newTab={false}/>
      </Layout>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeAuth: () => dispatch(removeAuth()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
