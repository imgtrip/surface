import {grpc} from 'grpc-web-client'
import {
  TOKEN_COOKIE_EXPIRES,
  TOKEN_COOKIE_NAME,
  TOKEN_UPDATE_SECONDS,
} from '../constants/conf'
import {getTokenHash} from '../service/token'
import * as jsCookie from 'js-cookie'
import * as moment from 'moment'
import {updateToken} from './user'
import {UpdateTokenRes} from '../../pb/imgtrip_pb'
import {println} from '../service/system'

const isNode = require('detect-node')
const apiHost = isNode ? process.env.API_HOST : document.head.querySelector('[property=api_host]').content

if (!isNode) {
  window.tokenLastUpdatedAt = moment()
}

const updateTokenHandler = (token) => {
  const now = moment()
  const tokenLastUpdatedAt = window.tokenLastUpdatedAt
  const diff = now.diff(tokenLastUpdatedAt, 'seconds')
  if (diff < TOKEN_UPDATE_SECONDS) {
    return
  }

  jsCookie.set(
    TOKEN_COOKIE_NAME,
    token,
    {expires: TOKEN_COOKIE_EXPIRES},
  )

  updateToken()
    .then((res: UpdateTokenRes) => {
      window.tokenLastUpdatedAt = now
    })
    .catch(() => {

    })
}

export const request = (req, target, tokenInput?: string) => {
  const token = tokenInput || getTokenHash()
  return new Promise((resolve, reject) => {
    grpc.invoke(target, {
      request: req,
      host: apiHost,
      metadata: {token},
      onMessage: (message: any) => {
        resolve(message)
      },
      onHeaders: () => {
      },
      onEnd: (code: grpc.Code, message: string | undefined, trailers: grpc.Metadata) => {
        if (code !== grpc.Code.OK) {
          console.error(code, message, trailers)
          // FIXME 在这里判断运行模式，输出错误或请求API（Api已开发）
          println(code, message, trailers)

          reject({code, message, trailers})
        } else {
          if (!isNode) {
            updateTokenHandler(token)
          }
        }
      },
    })
  })
}

