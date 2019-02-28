import {Imgtrip} from '../../pb/imgtrip_pb_service'
import {
  AlbumImagesReq,
  AlbumsReq,
  CreateAlbumImageReq,
  CreateAlbumReq, CreateImageTagReq,
  DeleteAlbumImageReq, DeleteImageTagReq, DownloadImageReq,
  ImagesReq,
  ShowAlbumReq,
  UpdateAlbumReq, UpdateImageNameReq, UpdateImageTagVoteReq,
  UpdateImageVoteReq,
  UserAlbumsReq,
} from '../../pb/imgtrip_pb'
import {PER_PAGE} from '../constants/conf'
import {request} from './request'


export const images = (page: number = 1, per: number = PER_PAGE, random: boolean = false, total: boolean = false) => {
  const req = new ImagesReq()
  req.setStart((page > 0 ? page - 1 : 0) * per)
  req.setLimit(per)
  req.setRandom(random)
  req.setTotal(total)
  return request(req, Imgtrip.Images)
}

export const updateImageVote = (imageId: number, vote: number) => {
  const req = new UpdateImageVoteReq()
  req.setImageId(imageId)
  req.setVote(vote)
  return request(req, Imgtrip.UpdateImageVote)
}

export const albums = (page = 1, perPage = PER_PAGE, total: boolean = false) => {
  const req = new AlbumsReq()
  req.setStart((page > 0 ? page - 1 : 0) * PER_PAGE)
  req.setLimit(perPage)
  req.setTotal(total)
  return request(req, Imgtrip.Albums)
}

export const showAlbum = (albumId: number) => {
  const req = new ShowAlbumReq()
  req.setId(albumId)
  return request(req, Imgtrip.ShowAlbum)
}

export const albumImages = (albumId: number, page = 1, perPage = PER_PAGE, total: boolean = false) => {
  const req = new AlbumImagesReq()
  req.setAlbumId(albumId)
  req.setStart((page > 0 ? page - 1 : 0) * PER_PAGE)
  req.setLimit(perPage || PER_PAGE)
  req.setTotal(total)
  return request(req, Imgtrip.AlbumImages)
}

export const createAlbum = (title: string, userId: number) => {
  const req = new CreateAlbumReq()
  req.setTitle(title)
  req.setUserId(userId)
  return request(req, Imgtrip.CreateAlbum)
}

export const createAlbumImage = (albumId: number, imageId: number) => {
  const req = new CreateAlbumImageReq()
  req.setAlbumId(albumId)
  req.setImageId(imageId)
  return request(req, Imgtrip.CreateAlbumImage)
}

export const deleteAlbumImage = (albumId: number, imageId: number) => {
  const req = new DeleteAlbumImageReq()
  req.setAlbumId(albumId)
  req.setImageId(imageId)
  return request(req, Imgtrip.DeleteAlbumImage)
}

export const updateAlbum = (id: number, req: UpdateAlbumReq) => {
  req.setId(id)
  return request(req, Imgtrip.UpdateAlbum)
}

export const userAlbums = (userId: number) => {
  const req = new UserAlbumsReq()
  req.setUserId(userId)
  return request(req, Imgtrip.UserAlbums)
}

export const createImageTag = (imageId: number, tagName: string) => {
  const req = new CreateImageTagReq()
  req.setImageId(imageId)
  req.setTag(tagName)
  return request(req, Imgtrip.CreateImageTag)
}

enum ImageTagVotes {
  AGREE = 1,
  CANCEL_AGREE = 0
}

export const updateImageTagVote = (imageId: number, tagId: number, vote: ImageTagVotes) => {
  const req = new UpdateImageTagVoteReq()
  req.setImageId(imageId)
  req.setTagId(tagId)
  req.setVote(vote)
  return request(req, Imgtrip.UpdateImageTagVote)
}

export const deleteImageTag = (imageId: number, tagId: number) => {
  const req = new DeleteImageTagReq()
  req.setImageId(imageId)
  req.setTagId(tagId)
  return request(req, Imgtrip.DeleteImageTag)
}

export const updateImageName = (imageId: number, name: string) => {
  const req = new UpdateImageNameReq()
  req.setImageId(imageId)
  req.setName(name)
  return request(req, Imgtrip.UpdateImageName)
}

export const downloadImage = (id: number) => {
  const req = new DownloadImageReq()
  req.setImageId(id)
  return request(req, Imgtrip.DownloadImage)
}

