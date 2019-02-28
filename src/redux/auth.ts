import {Reducer} from 'redux'
import {pull, pullAll} from 'lodash'

enum Actions {
  SET_AUTH = 'AUTH_SET_AUTH',
  REMOVE_AUTH = 'AUTH_REMOVE_AUTH',
  APPEND_TO_CREATED_ALBUM = 'AUTH_APPEND_TO_CREATED_ALBUM',
  APPEND_VOTE_UP_IMAGE_IDS = 'AUTH_APPEND_VOTE_UP_IMAGE_IDS',
  APPEND_VOTE_DOWN_IMAGE_IDS = 'AUTH_APPEND_VOTE_DOWN_IMAGE_IDS',
  REMOVE_IMAGE_VOTE = 'AUTH_REMOVE_IMAGE_VOTE',
  UPDATE_SCORE = 'AUTH_UPDATE_SCORE',
}

export interface SimpleAlbum {
  id: number
  title: string
}

export interface AuthState {
  id: number
  name: string
  albumId: number
  favorites: number[]
  albums: SimpleAlbum[]
  voteUpImageIds: number[]
  voteDownImageIds: number[]
  score: number,

  [key: string]: any
}

export const defaultState = {
  id: 0,
  name: '',
  albumId: 0,
  favorites: [],
  albums: [],
  token: '',
  voteUpImageIds: [],
  voteDownImageIds: [],
  score: 0,
}

export const reducer: Reducer<AuthState> = (state = defaultState, action) => {
  const {type, data} = action

  switch (type) {
    case Actions.SET_AUTH:
      return {...state, ...data}
    case Actions.REMOVE_AUTH:
      return defaultState
    case Actions.APPEND_TO_CREATED_ALBUM:
      return {...state, albums: [...state.albums, data]}
    // FIXME  修改为每个image 自带voted 属性
    case Actions.APPEND_VOTE_UP_IMAGE_IDS:
      // 删除对立面投票
      pullAll(state.voteDownImageIds, data)
      return {...state, voteUpImageIds: [...state.voteUpImageIds, ...data], voteDownImageIds: state.voteDownImageIds}
    case Actions.APPEND_VOTE_DOWN_IMAGE_IDS:
      // 删除对立面投票
      pullAll(state.voteUpImageIds, data)
      return {...state, voteDownImageIds: [...state.voteDownImageIds, ...data], voteUpImageIds: state.voteUpImageIds}
    case Actions.REMOVE_IMAGE_VOTE:
      pull(state.voteUpImageIds, data)
      pull(state.voteDownImageIds, data)
      return {...state, voteUpImageIds: state.voteUpImageIds, voteDownImageIds: state.voteDownImageIds}
    case Actions.UPDATE_SCORE:
      return {...state, score: data}
  }

  return state
}

export const setAuth = (data: AuthState) => ({type: Actions.SET_AUTH, data})
export const removeAuth = () => ({type: Actions.REMOVE_AUTH})
export const appendToCreatedAlbum = (data: SimpleAlbum) => ({type: Actions.APPEND_TO_CREATED_ALBUM, data})
export const removeVoteImage = (data: number) => ({type: Actions.REMOVE_IMAGE_VOTE, data})
export const appendVoteUpImageIds = (data: number[]) => ({type: Actions.APPEND_VOTE_UP_IMAGE_IDS, data})
export const appendVoteDownImageIds = (data: number[]) => ({type: Actions.APPEND_VOTE_DOWN_IMAGE_IDS, data})
export const updateScore = (data: number) => ({type: Actions.UPDATE_SCORE, data})