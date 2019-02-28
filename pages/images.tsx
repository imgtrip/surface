import * as React from 'react'
import InfiniteScroll from '../src/components/HOC/InfiniteScroll'
import {loading} from '../src/lib/loading'
import {ImagesRes} from '../pb/imgtrip_pb'
import {PER_PAGE, VISITOR_MAX_VIEW_IMAGE_PAGE} from '../src/constants/conf'
import {setTokenHash} from '../src/service/token'
import {images} from '../src/api/image'
import {AuthProps, Image} from '../src/@types/data'
import {appendImages} from '../src/redux/images'
import {RootState} from '../src/redux'
import {connect} from 'react-redux'
import LoginToContinue from '../src/components/Widgets/LoginToContinue'
import ImagesGrid from '../src/components/Grids/ImagesGrid'
import Loading from '../src/components/Widgets/Loading'
import Layout from '../src/components/Layouts/Layout'
import {getPage} from '../src/service/paginate'
import {println} from '../src/service/system'
import {HOME} from '../src/constants/seo'
import Metas from '../src/components/Widgets/Metas'

interface Props extends AuthProps {
  images: Image[]
  appendImages: (images: Image[]) => void
  total: number
  random: boolean
  page: number
}

class Images extends React.Component<Props> {

  static async getInitialProps(ctx) {
    const {reduxStore, token, req} = ctx
    setTokenHash(token)
    const {random} = req.query
    let total = 0
    const isRandom = !(random === '0')
    const page = getPage(req)

    await images(page, PER_PAGE, isRandom, true)
      .then((res: ImagesRes) => {
        total = res.toObject().total
        reduxStore.dispatch(appendImages(res.toObject().itemsList))
      })
      .catch((err) => {
        println(err)
      })

    return {random: isRandom, page, total}
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
    loading(this)
    return new Promise((resolve, reject) => {
      images(page, PER_PAGE, this.props.random)
        .then((res: ImagesRes) => {
          const images = res.toObject().itemsList
          that.props.appendImages(images)
          const total = res.toObject().total
          that.page++
          resolve({data: images, total})
        })
        .catch((error) => {
          reject({error})
        })
    })
  }


  requireLoginToContinue() {
    const {auth} = this.props
    const authId = auth.id
    const loginRequired = !authId && this.page > VISITOR_MAX_VIEW_IMAGE_PAGE
    if (loginRequired) {
      this.setState({loginToContinueVisible: true})
    }

    return loginRequired
  }

  content() {
    const {auth} = this.props
    const authId = auth.id

    return (images, loading) => {
      return <React.Fragment>
        <div>
          <ImagesGrid
            columns={3}
            authId={authId}
            images={images}
            loadMore={this.loadMore.bind(this)}
          />
          {loading ? <Loading/> : null}
          {authId ? null : <LoginToContinue visible={this.state.loginToContinueVisible}/>}
        </div>
      </React.Fragment>
    }
  }

  render() {
    return <Layout padding={'0'}>
      <Metas metas={HOME}/>

      <InfiniteScroll
        perPage={PER_PAGE}
        initPage={this.page}
        initData={this.props.images}
        loadMore={this.loadMore.bind(this)}
      >{this.content()}</InfiniteScroll>
    </Layout>
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth,
    images: state.images.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    appendImages: (images: Image[]) => dispatch(appendImages(images)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images)
