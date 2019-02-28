import {createToken} from '../api/user'
import {CreateTokenRes} from '../../pb/imgtrip_pb'

let token = ''

const initToken = (userId?: number) => {
  return new Promise((resolve, reject) => {
    createToken(userId)
      .then((res: CreateTokenRes) => {
        token = res.toObject().token
        resolve(token)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const setTokenHash = (tokenHash: string) => {
  token = tokenHash
}

const getTokenHash = () => {
  return token
}

export {token, initToken, setTokenHash,getTokenHash}
