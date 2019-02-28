import * as React from 'react'
import AlbumsGrid from '../src/components/Grids/AlbumsGrid'
import {RootState} from '../src/redux'
import {Album, AuthProps} from '../src/@types/data'
import {connect} from 'react-redux'
import {albums as albumsApi} from '../src/api/image'
import {AlbumsRes} from '../pb/imgtrip_pb'
import Empty from '../src/components/Widgets/Empty'
import {setTokenHash} from '../src/service/token'
import LoginToContinue from '../src/components/Widgets/LoginToContinue'
import {PER_PAGE, VISITOR_MAX_VIEW_ALBUM_PAGE} from '../src/constants/conf'
import InfiniteScroll from '../src/components/HOC/InfiniteScroll'
import Loading from '../src/components/Widgets/Loading'
import {info} from '../src/lib/message'
import {lang} from '../src/constants/lang'
import Layout from '../src/components/Layouts/Layout'
import {getPage} from '../src/service/paginate'
import {ALBUMS, HOME} from '../src/constants/seo'
import Metas from '../src/components/Widgets/Metas'

interface Props extends AuthProps {
  albums: Album[]
  appendAlbums: (albums: Album[]) => void
  total: number
  page: number
}

class Albums extends React.Component<Props> {

  static async getInitialProps({token, req}) {
    setTokenHash(token)
    let albums: Album[]
    let total: number

    const page = getPage(req)

    await albumsApi(page, PER_PAGE, true)
      .then((res: AlbumsRes) => {
        albums = res.toObject().itemsList
        total = res.toObject().total
      })
      .catch(() => {
      })

    return {page, albums, total}
  }

  state = {
    loading: false,
    loginToContinueVisible: false,
  }
  page = 0

  constructor(props) {
    super(props)
    this.page = props.page
  }

  loadMore(page) {
    if (this.requireLoginToContinue()) {
      return new Promise(resolve => resolve())
    }

    const that = this
    return new Promise((resolve, reject) => {
      albumsApi(page)
        .then((res: AlbumsRes) => {
          const albums = res.toObject().itemsList
          that.page++
          if (albums.length < PER_PAGE) {
            info(lang.no_more_content)
          }

          resolve({data: albums, total: res.toObject().total})
        })
        .catch((error) => {
          reject({error})
        })
    })
  }


  requireLoginToContinue() {
    const {auth} = this.props
    const authId = auth.id
    const loginRequired = !authId && this.page > VISITOR_MAX_VIEW_ALBUM_PAGE
    if (loginRequired) {
      this.setState({loginToContinueVisible: true})
    }
    return loginRequired
  }

  content() {
    const {auth} = this.props
    const authId = auth.id

    return (albums, loading) => {
      return <React.Fragment>
        <div>
          {albums.length === 0
            ? <Empty/>
            : <AlbumsGrid albums={albums} newTab={true}/>}
          {loading ? <Loading/> : null}
          {authId ? null : <LoginToContinue visible={this.state.loginToContinueVisible}/>}
        </div>
      </React.Fragment>
    }
  }

  render() {
    return <Layout padding={'0'}>
      <Metas metas={ALBUMS}/>

      <InfiniteScroll
        perPage={PER_PAGE}
        initPage={this.page}
        initData={this.props.albums}
        loadMore={this.loadMore.bind(this)}
      >{this.content()}</InfiniteScroll>
    </Layout>

  }
}

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
