import {Reducer} from 'redux'
import {Album, User} from '../@types/data'

export enum Actions {
  SET_ALBUM = 'ALBUM_SET_ALBUM',
  SET_ALBUM_USER = 'ALBUM_SET_ALBUM_USER',
  SAVE_TITLE = 'ALBUM_SAVE_TITLE',
  UPDATE_DESCRIPTION = 'ALBUM_UPDATE_DESCRIPTION',
}

export interface AlbumState {
  data: Album
}

const defaultState = {data: {}} as AlbumState

export const reducer: Reducer<AlbumState> = (state = defaultState, action) => {
  const {type, data} = action
  switch (type) {
    case Actions.SET_ALBUM:
      return {...state, data}
    case Actions.SET_ALBUM_USER:
      return {...state, data: {...state.data, user: data}}
    case Actions.SAVE_TITLE:
      return {...state, data: {...state.data, title: data}}
    case Actions.UPDATE_DESCRIPTION:
      return {...state, data: {...state.data, description: data}}
  }
  return state
}

export const setAlbum = (data: Album) => ({type: Actions.SET_ALBUM, data})
export const setAlbumUser = (data: User) => ({type: Actions.SET_ALBUM_USER, data})
export const saveTitle = (data: string) => ({type: Actions.SAVE_TITLE, data})
export const updateDescription = (data: string) => ({type: Actions.UPDATE_DESCRIPTION, data})