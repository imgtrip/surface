import * as React from 'react'
import PostsList from '../src/components/Lists/PostsList'
import Layout from '../src/components/Layouts/Layout'
import BodyCard from '../src/components/Cards/ShadowCard'
import Loading from '../src/components/Widgets/Loading'
import {Post} from '../src/@types/data'
import {posts as postsApi} from '../src/api/post'
import {PostsRes} from '../pb/imgtrip_pb'
import {loaded, loading} from '../src/lib/loading'
import {errorWithLoaded} from '../src/lib/message'
import {PER_PAGE} from '../src/constants/conf'
import {setTokenHash} from '../src/service/token'
import {println} from '../src/service/system'
import Metas from '../src/components/Widgets/Metas'
import {POSTS} from '../src/constants/seo'

interface Props {
  posts: Post[]
}

export default class Posts extends React.Component<Props> {

  static async getInitialProps(ctx) {
    const {token} = ctx
    setTokenHash(token)
    let posts: Post[]

    await postsApi()
      .then((res: PostsRes) => {
        posts = res.toObject().itemsList
      })
      .catch((err) => {
        println(err)
      })

    return {posts}
  }

  state = {
    loading: false,
    posts: [],
  }
  nextPage = 1
  hasNextPage = true

  constructor(props) {
    super(props)
    this.state.posts = this.props.posts
  }

  loadMore() {
    const that = this
    loading(that)
    postsApi(that.nextPage)
      .then((res: PostsRes) => {
        const posts = res.toObject().itemsList
        that.setState({posts: [...that.state.posts, ...posts]})
        that.nextPage++
        if (posts.length < PER_PAGE) {
          that.hasNextPage = false
        }
        loaded(that)
      })
      .catch(() => {
        errorWithLoaded(that)
      })
  }


  render() {
    const {loading, posts} = this.state

    return (
      <Layout>
        <Metas metas={POSTS}/>

        <BodyCard shadow>
          <PostsList lists={posts}/>
          {loading ? <Loading/> : null}
        </BodyCard>
      </Layout>
    )
  }
}

