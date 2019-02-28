import {ReviewOpinions, ReviewsOrder, ReviewsReq, UpdateReviewOpinionReq} from '../../pb/imgtrip_pb'
import {Imgtrip} from '../../pb/imgtrip_pb_service'
import {request} from './request'
import {LIST_PER_PAGE} from '../constants/conf'

export const reviews = (page = 1, limit = LIST_PER_PAGE, order: ReviewsOrder, total: boolean = false) => {
  const req = new ReviewsReq()
  req.setStart((page > 0 ? page - 1 : 0) * limit)
  req.setLimit(limit)
  req.setTotal(total)
  req.setOrder(order)
  return request(req, Imgtrip.Reviews)
}


export const updateReviewOpinion = (reviewId: number, opinion: ReviewOpinions) => {
  const req = new UpdateReviewOpinionReq()
  req.setOpinion(opinion)
  req.setReviewId(reviewId)
  return request(req, Imgtrip.UpdateReviewOpinion)
}



