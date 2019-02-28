import {RootState} from '../redux'
import {Store} from 'redux'
import {createLogger} from 'redux-logger'
import App, {Container} from 'next/app'
import * as React from 'react'
import {initToken, setTokenHash} from '../service/token'
import {setToken} from '../redux/system'
import {JWT_COOKIE_NAME_V1, JWT_AUTH_KEY, JWT_COOKIE_NAME, TOKEN_COOKIE_NAME} from '../constants/conf'
import * as jwt from 'jsonwebtoken'
import {imageVotes, showUser} from '../api/user'
import {ShowUserRes, AlbumImagesRes, UserAlbumsRes, ImageVotesRes} from '../../pb/imgtrip_pb'
import {AuthState, setAuth, SimpleAlbum} from '../redux/auth'
import {albumImages, userAlbums} from '../api/image'
import {ImageVote} from '../@types/data'
import {initStore} from '../store'

const isNode = require('detect-node')
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

interface JwtPayload {
  id: number
}

export const getStore = (state?: any): Store<RootState> => {
  if (isNode) {
    return initStore(state)
  } else {
    if (!window[__NEXT_REDUX_STORE__]) {
      window[__NEXT_REDUX_STORE__] = initStore(state)
    }
    return window[__NEXT_REDUX_STORE__]
  }
}
const initUserRequest = async (userId: number) => {
  let resUser = {} as AuthState
  await showUser(userId)
    .then(async (res: ShowUserRes) => {
      const user = res.toObject().user
      await Promise.all([
        userAlbums(user.id),
        albumImages(user.albumId),
        imageVotes(),
      ]).then(async (values: any) => {
        const responses: [UserAlbumsRes, AlbumImagesRes, ImageVotesRes] = values
        const albums = responses[0].toObject().itemsList as SimpleAlbum[]
        const favorites = []
        responses[1].toObject().itemsList.map((image) => {
          favorites.push(image.id)
        })

        const imageVotes = responses[2].toObject().itemsList
        const upIds = []
        const downIds = []
        await imageVotes.map((v: ImageVote) => {
          if (v.vote > 0) {
            upIds.push(v.imageId)
          } else if (v.vote < 0) {
            downIds.push(v.imageId)
          }
        })
        resUser = {...user, favorites, albums, voteUpImageIds: upIds, voteDownImageIds: downIds}
      }).catch((err) => {
        console.error(err)
      })
    })
    .catch((err) => {
      console.error(err)
    })
  return resUser
}

export const withReduxStore = (App) => {
  return class Redux extends React.Component {
    reduxStore = {}

    static async getInitialProps(appContext) {
      const reduxStore = getStore()

      if (isNode) {
        const cookies = appContext.ctx.req.cookies
        const jwtCookie = cookies[JWT_COOKIE_NAME]
        const jwtCookieV1 = cookies[JWT_COOKIE_NAME_V1]
        const tokenCookie = cookies[TOKEN_COOKIE_NAME]

        let userId = 0
        if (jwtCookieV1) {
          // 兼容旧数据
          try {
            const decodedJwt = await jwt.verify(jwtCookieV1, JWT_AUTH_KEY) as JwtPayload
            userId = decodedJwt.id
          } catch (err) {
            //pass
          }
        } else if (jwtCookie) {
          try {
            const decodedJwt = await jwt.verify(jwtCookie, JWT_AUTH_KEY) as JwtPayload
            userId = decodedJwt.id
          } catch (err) {
            //pass
          }
        }
        let tokenHash

        if (!tokenCookie) {
          await initToken(userId).then((resToken) => {
            tokenHash = resToken
          }).catch(() => {
            tokenHash = ''
          })
        } else {
          tokenHash = tokenCookie
        }

        setTokenHash(tokenHash)
        reduxStore.dispatch(setToken(tokenHash))
        appContext.ctx.token = tokenHash

        if (userId > 0) {
          const authUser = await initUserRequest(userId)
          reduxStore.dispatch(setAuth(authUser))
        }
      }

      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      }
    }

    constructor(props) {
      super(props)
      const store = getStore(props.initialReduxState)
      this.reduxStore = store
      setTokenHash(store.getState().system.token)
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore}/>
    }
  }
}

