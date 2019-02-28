import {Comment as ProtoComment, User as ProtoUser} from '../../pb/imgtrip_pb'
import {
  Album as ProtoAlbum,
  Image as ProtoImage,
  Post as ProtoPost,
  ImageVote as ProtoImageVote,
  ImageTag as ProtoImageTag,
  Review as ProtoReview,
} from '../../pb/imgtrip_pb'
import {AuthState} from '../redux/auth'

export interface Image extends ProtoImage.AsObject {
}

export interface User extends ProtoUser.AsObject {

}

export interface Comment extends ProtoComment.AsObject {
}

export interface Album extends ProtoAlbum.AsObject {
  user?: User
}

export interface Post extends ProtoPost.AsObject {
  user?: User
}

export interface Posts {
  items: Post[]
}

export interface ImageVote extends ProtoImageVote.AsObject {
}

export interface ImageVotes {
  items: ImageVote[]
}

export interface ImageTag extends ProtoImageTag.AsObject {
}


export interface AlbumDetail {
  album: Album,
  images: Image[]
  user: User
}

export interface AuthProps {
  auth: AuthState
}

export interface Review extends ProtoReview.AsObject {
}


export enum Modals {
  COLLECT = 'COLLECT',
  ZOOM = 'ZOOM',
  AUTH = 'AUTH',
  DOWNLOAD = 'DOWNLOAD',
  CREATE_IMAGE_TAG = 'CREATE_IMAGE_TAG'
}

