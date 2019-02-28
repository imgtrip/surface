import {PostsReq, ShowPostReq} from '../../pb/imgtrip_pb'
import {request} from './request'
import {Imgtrip} from '../../pb/imgtrip_pb_service'
import {PER_PAGE} from '../constants/conf'

export const posts = (start = 0, limit = PER_PAGE) => {
  const req = new PostsReq()
  req.setStart(start)
  req.setLimit(limit)
  return request(req, Imgtrip.Posts)
}

export const showPost = (id: number) => {
  const req = new ShowPostReq()
  req.setId(id)
  return request(req, Imgtrip.ShowPost)
}