import * as React from 'react'
import Layout from '../src/components/Layouts/Layout'
import CommentsWithFormCard from '../src/components/Cards/CommentsWithFormCard'
import OptionalTags from '../src/components/Tags/OptionalTags'
import {Post, User} from '../src/@types/data'
import {showPost} from '../src/api/post'
import {setTokenHash} from '../src/service/token'
import {showUser} from '../src/api/user'
import {ShowUserRes, ShowPostRes} from '../pb/imgtrip_pb'
import {RootState} from '../src/redux'
import {connect} from 'react-redux'
import NotFound from '../src/components/Widgets/NotFound'
import {POSTS} from '../src/constants/seo'
import Metas from '../src/components/Widgets/Metas'
import {println} from '../src/service/system'

interface Props {
  post: Post
  user: User
}

interface InjectedProps extends Props {
  authId: number
}

class PostShow extends React.Component<Props> {

  static async getInitialProps({reduxStore, req, token}) {
    setTokenHash(token)
    const {id} = req.params
    let post = undefined as Post
    let user = undefined as User

    await showPost(id)
      .then(async (res: ShowPostRes) => {
        post = res.toObject().post
        await showUser(post.userId)
          .then((res: ShowUserRes) => {
            user = res.toObject().user
          })
          .catch((err) => {
            println(err)
          })
      })
      .catch((err) => {
        println(err)
      })

    return {post, user}
  }

  get getProps() {
    return this.props as InjectedProps
  }

  postBody() {
    const {post, user, authId} = this.getProps
    const {title, body, commentHostId} = post
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        <div style={{marginBottom: '20px', textAlign: 'center'}}>
          <OptionalTags
            data={post}
            user={user}
            linkable
            tags={['user', 'views', 'comments', 'createdAt']}
          />
        </div>
        <div style={{marginBottom: '40px', overflow: 'hidden'}}>
          <div dangerouslySetInnerHTML={{__html: body}}/>
        </div>
        {commentHostId > 0 ? <CommentsWithFormCard commentHostId={commentHostId} authId={authId}/> : null}
      </div>
    )
  }

  render() {
    const {post} = this.getProps
    return (
      <Layout shadow>
        <Metas metas={{
          title: post.title,
          description: post.title,
          keywords: post.title,
        }}/>
        {post ? this.postBody() : <NotFound/>}
        <style jsx global>{`
        .postBody img {
            max-width: 100%;
          }
        `}</style>
      </Layout>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    authId: state.auth.id,
  }
}

export default connect(mapStateToProps)(PostShow)
