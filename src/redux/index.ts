import {combineReducers} from 'redux'
import {reducer as system, SystemState} from './system'
import {reducer as album, AlbumState} from './album'
import {reducer as albums, AlbumsState} from './albums'
import {reducer as auth, AuthState} from './auth'
import {reducer as images, ImagesState} from './images'


export interface RootState {
  system: SystemState
  album: AlbumState
  albums: AlbumsState
  auth: AuthState
  images: ImagesState
}

export const reducer = combineReducers<RootState>({
  system,
  album,
  albums,
  auth,
  images,
})
