import * as React from 'react'
import BodyCard from '../src/components/Cards/ShadowCard'
import Layout from '../src/components/Layouts/Layout'
import ReviewsList from '../src/components/Lists/ReviewsList'
import Loading from '../src/components/Widgets/Loading'
import {reviews as reviewsApi} from '../src/api/review'
import {ReviewsOrder, ReviewsRes} from '../pb/imgtrip_pb'
import {loading} from '../src/lib/loading'
import InfiniteScroll from '../src/components/HOC/InfiniteScroll'
import {setTokenHash} from '../src/service/token'
import {Image, Review} from '../src/@types/data'
import {LIST_PER_PAGE} from '../src/constants/conf'
import {getPage} from '../src/service/paginate'
import Metas from '../src/components/Widgets/Metas'
import {REVIEWS} from '../src/constants/seo'
import {lang} from '../src/constants/lang'
import Button from 'antd/lib/button/button'
import {reviews} from '../src/service/link'
import {println} from '../src/service/system'
import {appendImages} from '../src/redux/images'
import {connect} from 'react-redux'
import {indexOf} from 'lodash'

const initState = {
  reviews: [],
  loading: false,
}

interface Props {
  reviews: Review[]
  page: number
  loading: false
  order: ReviewsOrder

  appendImages: (data: Image[]) => void
}


type State = typeof initState;


class Reviews extends React.Component<Props, State> {
  readonly state: State = initState

  static async getInitialProps({token, req}) {
    setTokenHash(token)
    const page = getPage(req)
    const order = req.query.order || ReviewsOrder.UPDATE

    let reviews = []
    await reviewsApi(page, LIST_PER_PAGE, order, true)
      .then((res: ReviewsRes) => {
        const result = res.toObject()
        reviews = result.itemsList
      })
      .catch((err) => {
        println(err)
      })

    return {reviews, page, order}
  }

  page = 0

  constructor(props: Props) {
    super(props)
    this.state.reviews = props.reviews
    this.page = props.page
    this.dispatchImages(props.reviews)
  }

  dispatchImages(reviews: Review[]) {
    let images = []
    let ids = []
    const len = reviews.length
    for (let i = 0; i < len; i++) {
      const current = reviews[i].image
      if (indexOf(ids, current.id) < 0) {
        images.push(current)
        ids.push(current.id)
      }
    }
    this.props.appendImages(images)
  }

  loadMore(page) {
    loading(this)
    const {order} = this.props
    const that = this
    return new Promise((resolve, reject) => {
      reviewsApi(page, LIST_PER_PAGE, order)
        .then((res: ReviewsRes) => {
          const result = res.toObject()
          const {itemsList, total} = result
          that.dispatchImages(itemsList)
          resolve({data: itemsList, total})
        })
        .catch(error => {
          reject({error})
        })
    })
  }

  content() {
    return (reviews, loading) => {
      return <React.Fragment>
        <ReviewsList reviews={reviews}/>
        {loading ? <Loading/> : null}
      </React.Fragment>
    }
  }

  buttonColor(type: ReviewsOrder) {
    return Number(this.props.order) === type ? 'primary' : 'default'
  }

  render() {
    return (
      <Layout>
        <BodyCard shadow>
          <Metas metas={REVIEWS}/>
          <p dangerouslySetInnerHTML={{__html: lang.reviews_page_description}}/>

          <div style={{textAlign: 'center'}}>
            <Button.Group>
              <Button type={this.buttonColor(ReviewsOrder.UPDATE)} href={`${reviews}?order=${ReviewsOrder.UPDATE}`}>
                最近更新
              </Button>
              <Button type={this.buttonColor(ReviewsOrder.CREATE)} href={`${reviews}?order=${ReviewsOrder.CREATE}`}>
                最新创建
              </Button>
              <Button type={this.buttonColor(ReviewsOrder.ENDING)} href={`${reviews}?order=${ReviewsOrder.ENDING}`}>
                临近结束
              </Button>
              <Button type={this.buttonColor(ReviewsOrder.ENDED)} href={`${reviews}?order=${ReviewsOrder.ENDED}`}>
                已结束
              </Button>
              <Button type={this.buttonColor(ReviewsOrder.CREATOR_HISTORY)}
                      href={`${reviews}?order=${ReviewsOrder.CREATOR_HISTORY}`}>
                我发起的
              </Button>
            </Button.Group>
          </div>

          <InfiniteScroll
            perPage={LIST_PER_PAGE}
            initData={this.state.reviews}
            loadMore={this.loadMore.bind(this)}
          >{this.content()}</InfiniteScroll>
        </BodyCard>
      </Layout>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    appendImages: (data: Image[]) => dispatch(appendImages(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)