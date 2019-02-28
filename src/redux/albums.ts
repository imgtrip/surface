import {Reducer} from 'redux'
import {Album} from '../@types/data'

export enum Actions {
  APPEND_ALBUMS = 'ALBUMS_APPEND_ALBUMS',
}

export interface AlbumsState {
  data: Album[]
}

const defaultState = {data: []} as AlbumsState

export const reducer: Reducer<AlbumsState> = (state = defaultState, action) => {
  const {type, data} = action
  switch (type) {
    case Actions.APPEND_ALBUMS:
      return {...state, data: [...state.data, ...data]}
    // case Actions.SET_ALBUM_DETAIL:
    //   return {...state, detail: {...state.detail, album: data}}
    // case Actions.APPEND_ALBUM_DETAIL_IMAGES:
    //   return {...state, detail: {...state.detail, images: [...state.detail.images, ...data]}}
    // case Actions.SET_ALBUM_DETAIL_USER:
    //   return {...state, detail: {...state.detail, user: data}}
    // case Actions.SAVE_TITLE:
    //   return {...state, detail: {...state.detail, album: {...state.detail.album, title: data}}}
    // case Actions.UPDATE_DESCRIPTION:
    //   return {...state, detail: {...state.detail, album: {...state.detail.album, description: data}}}
    // case Actions.REMOVE_IMAGE:
    //   const removeId = data
    //   const images = filter(state.detail.images, (image: Image) => {
    //     return image.id !== removeId
    //   })
    //   return {...state, detail: {...state.detail, images}}
    // case Actions.CHANGE_ALBUM_IMAGE_VOTE_UP:
    //   state.detail.images.map((image) => {
    //     if (image.id === data.imageId) {
    //       image.voteUp += data.step
    //     }
    //   })
    //   return state
    // case Actions.CHANGE_ALBUM_IMAGE_VOTE_DOWN:
    //   state.detail.images.map((image) => {
    //     if (image.id === data.imageId) {
    //       image.voteDown += data.step
    //     }
    //   })
    //   return state
    // case Actions.UPDATE_IMAGE_TAG_VOTE:
    //   state.detail.images.map((image: Image) => {
    //     if (image.id === data.imageId) {
    //       image.tagsList.map((tag: ImageTag) => {
    //         if (tag.id === data.tagId) {
    //           tag.isVoted = !tag.isVoted
    //         }
    //       })
    //     }
    //   })
    //   return state
  }
  return state
}

export const appendAlbums = (data: Album[]) => ({type: Actions.APPEND_ALBUMS, data})
// export const setAlbumDetail = (data: Album) => ({type: Actions.SET_ALBUM_DETAIL, data})
// export const setAlbumDetailUser = (data: User) => ({type: Actions.SET_ALBUM_DETAIL_USER, data})
// export const appendAlbumDetailImages = (data: Image[]) => ({type: Actions.APPEND_ALBUM_DETAIL_IMAGES, data})
// export const saveTitle = (data: string) => ({type: Actions.SAVE_TITLE, data})
// export const updateDescription = (data: string) => ({type: Actions.UPDATE_DESCRIPTION, data})
// export const removeAlbumImage = (data: number) => ({type: Actions.REMOVE_IMAGE, data})
// export const changeAlbumImageVoteUp = (imageId: number, step: number) => ({
//   type: Actions.CHANGE_ALBUM_IMAGE_VOTE_UP,
//   data: {imageId, step},
// })
// export const changeAlbumImageVoteDown = (imageId: number, step: number) => ({
//   type: Actions.CHANGE_ALBUM_IMAGE_VOTE_DOWN,
//   data: {imageId, step},
// })
//