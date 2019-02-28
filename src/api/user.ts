import {
  AuthUserReq,
  CommentsReq,
  CreateCommentReq,
  CreateJwtReq,
  CreateTokenReq,
  CreateUserReq, CreateVerificationEmailReq, ImageVotesReq, ScoreLogOrders, ScoreLogsReq,
  ShowUserReq,
  UpdateFingerprintReq, UpdatePasswordReq,
  UpdateTokenReq,
} from '../../pb/imgtrip_pb'
import {request} from './request'
import {Imgtrip} from '../../pb/imgtrip_pb_service'
import {NODE_AUTH_TOKEN, PER_PAGE} from '../constants/conf'

export const createUser = (name: string, email: string, password: string, verificationCode: string, refererEmail: string) => {
  const req = new CreateUserReq()
  req.setName(name)
  req.setEmail(email)
  req.setPassword(password)
  req.setVerificationCode(verificationCode)
  req.setReferrerEmail(refererEmail)
  return request(req, Imgtrip.CreateUser)
}

export const updateUser = () => {
  //avatar
}

export const imageVotes = () => {
  const req = new ImageVotesReq()
  return request(req, Imgtrip.ImageVotes)
}

export const createToken = (userId = 0) => {
  const req = new CreateTokenReq()
  req.setUserId(userId)
  return request(req, Imgtrip.CreateToken, NODE_AUTH_TOKEN)
}

export const updateToken = (userId?: number) => {
  const req = new UpdateTokenReq()
  req.setUserId(userId || 0)
  return request(req, Imgtrip.UpdateToken)
}

export const authUser = (email: string, password: string) => {
  const req = new AuthUserReq()
  req.setEmail(email)
  req.setPassword(password)
  return request(req, Imgtrip.AuthUser)
}

export const comments = (commentHostId: number, page = 0, perPage?: number) => {
  const req = new CommentsReq()
  req.setCommentHostId(commentHostId)
  req.setStart(page * PER_PAGE)
  req.setLimit(perPage || PER_PAGE)
  return request(req, Imgtrip.Comments)
}

export const createComment = (commentHostId: number, content: string, replyId = 0) => {
  const req = new CreateCommentReq()
  req.setCommentHostId(commentHostId)
  req.setContent(content)
  return request(req, Imgtrip.CreateComment)
}

export const updateComment = (albumId: number, content) => {

}

export const updateFingerprint = (hash: string, userId: number) => {
  const req = new UpdateFingerprintReq()
  req.setHash(hash)
  req.setUserId(userId)
  return request(req, Imgtrip.UpdateFingerprint)
}

export const showUser = (id: number) => {
  const req = new ShowUserReq()
  req.setId(id)
  return request(req, Imgtrip.ShowUser)
}

export const createJwt = (id: number) => {
  const req = new CreateJwtReq()
  req.setId(id)
  return request(req, Imgtrip.CreateJwt)
}

export const createVerificationEmail = (email: string) => {
  const req = new CreateVerificationEmailReq()
  req.setEmail(email)
  return request(req, Imgtrip.CreateVerificationEmail)
}

export const updatePassword = (email: string, password: string, verificationCode: string) => {
  const req = new UpdatePasswordReq()
  req.setEmail(email)
  req.setPassword(password)
  req.setVerificationCode(verificationCode)
  return request(req, Imgtrip.UpdatePassword)
}


export const scoreLogs = (start: number, limit: number, order: ScoreLogOrders) => {
  const req = new ScoreLogsReq()
  req.setStart(start)
  req.setLimit(limit)
  req.setOrder(order)
  // req.setCategoryId()
  return request(req, Imgtrip.ScoreLogs)
}
