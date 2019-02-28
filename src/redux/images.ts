import {Reducer} from 'redux'
import {Image, ImageTag} from '../@types/data'
import {filter} from 'lodash'

enum Actions {
  APPEND_IMAGES = 'IMAGES_APPEND_IMAGES',
  CHANGE_IMAGE_VOTE_UP = 'IMAGES_CHANGE_IMAGE_VOTE_UP',
  CHANGE_IMAGE_VOTE_DOWN = 'IMAGES_CHANGE_IMAGE_VOTE_DOWN',
  REMOVE_IMAGE = 'IMAGES_REMOVE_IMAGE',
  UPDATE_IMAGE_TAG_VOTE = 'IMAGES_UPDATE_IMAGE_TAG_VOTE',
  CREATE_FAVORITE = 'IMAGES_CREATE_FAVORITE',
  DELETE_FAVORITE = 'IMAGES_DELETE_FAVORITE',
}

export interface ImagesState {
  data: Image[]
}

const defaultState = {data: [], downloadSetting: {type: 'AUTO', height: undefined, width: undefined}}

export const reducer: Reducer<ImagesState> = (state = defaultState, action) => {
  const {type, data} = action
  switch (type) {
    case Actions.APPEND_IMAGES:
      return {...state, data: [...state.data, ...data]}
    case Actions.CHANGE_IMAGE_VOTE_UP:
      state.data.map((image: Image) => {
        if (image.id === data.imageId) {
          image.voteUp += data.step
        }
      })
      return state
    case Actions.CHANGE_IMAGE_VOTE_DOWN:
      state.data.map((image: Image) => {
        if (image.id === data.imageId) {
          image.voteDown += data.step
        }
      })
      return state
    case Actions.UPDATE_IMAGE_TAG_VOTE:
      state.data.map((image: Image) => {
        if (image.id === data.imageId) {
          image.tagsList.map((tag: ImageTag) => {
            if (tag.id === data.tagId) {
              tag.isVoted = !tag.isVoted
            }
          })
        }
      })
      return state
    case Actions.REMOVE_IMAGE:
      const removeId = data
      const images = filter(state.data, (image: Image) => {
        return image.id !== removeId
      })
      return {...state, data: images}
    case Actions.CREATE_FAVORITE:
      state.data.map((image: Image) => {
        if (image.id === data) {
          image.favorited = true
        }
      })
      return state
    case Actions.DELETE_FAVORITE:
      state.data.map((image: Image) => {
        if (image.id === data) {
          image.favorited = false
        }
      })
      return state
  }

  return state
}

export const appendImages = (data: Image[]) => ({type: Actions.APPEND_IMAGES, data})
export const changeImageVoteUp = (imageId: number, step: number) => ({
  type: Actions.CHANGE_IMAGE_VOTE_UP,
  data: {imageId, step},
})
export const removeImage = (data: number) => ({type: Actions.REMOVE_IMAGE, data})
export const changeImageVoteDown = (imageId: number, step: number) => ({
  type: Actions.CHANGE_IMAGE_VOTE_DOWN,
  data: {imageId, step},
})

export const updateImageTagVote = (imageId: number, tagId: number) => {
  return {type: Actions.UPDATE_IMAGE_TAG_VOTE, data: {imageId, tagId}}
}
export const createFavorite = (data: number) => ({type: Actions.CREATE_FAVORITE, data})
export const deleteFavorite = (data: number) => ({type: Actions.DELETE_FAVORITE, data})