import * as cookies from 'js-cookie'
import {
  ARROW_SWITCH_NOTIFIED,
  BIND_FINGERPRINT,
  JWT_COOKIE_EXPIRES,
  JWT_COOKIE_NAME, TOKEN_COOKIE_EXPIRES,
  TOKEN_COOKIE_NAME
} from '../constants/conf'
import {info} from '../lib/message'
import * as localForage from 'localforage'
import {createFingerprint} from '../api/log'


export const hasJwtCookie = () => {
  return typeof cookies.get(JWT_COOKIE_NAME) !== 'undefined'
}

export const setJwtCookie = (jwt: string) => {
  cookies.set(
    JWT_COOKIE_NAME,
    jwt,
    {expires: JWT_COOKIE_EXPIRES}
  )
}

export const deleteJwtCookie = () => {
  cookies.remove(JWT_COOKIE_NAME)
}

export const setTokenCookie = (token: string) => {
  if (token.length > 0) {
    cookies.set(TOKEN_COOKIE_NAME, token, {expires: TOKEN_COOKIE_EXPIRES})
  }
}


export const hasBindFingerprint = () => {
  return new Promise((resolve, reject) => {
    localForage.getItem(BIND_FINGERPRINT, (err, value) => {
      if (!err) {
        resolve(value)
      } else {
        reject(err)
      }
    }).catch((err) => {
      reject(err)
    })
  })
}

const setBoundFingerprint = () => {
  localForage.setItem(BIND_FINGERPRINT, true).then().catch()
}

export const bindFingerprint = () => {
  if (!hasJwtCookie()) {
    return
  }

  hasBindFingerprint().then((bound: boolean) => {
    if (!bound) {
      createFingerprint()
      setBoundFingerprint()
    }
  })
}


export const arrowSwitchableMessage = () => {
  localForage.getItem(ARROW_SWITCH_NOTIFIED).then((value) => {
    if (value) {
      return
    }
    localForage.setItem(ARROW_SWITCH_NOTIFIED, true)
      .then((value) => {
        info('支持键盘 ← → 键切换')
      })
  })
}
