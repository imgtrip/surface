import {REHYDRATE} from 'redux-persist/constants'
import {createActions, FAIL, REQUEST, SUCCESS} from './common'
import {Reducer} from 'redux'

enum Actions {
  BOOT = 'SYSTEM_BOOT',
  SESSION = 'SYSTEM_SESSION',
  SET_TOKEN = 'SYSTEM_SET_TOKEN',
}


interface SystemState {
  boot: boolean
  reHydrated: boolean
  token: string
}

const defaultState = {} as SystemState

export const reducer: Reducer<SystemState> = (state = defaultState, action) => {
  const {type, data} = action
  switch (type) {
    case Actions.BOOT:
      return {...state, boot: true}
    case REHYDRATE:
      return {...state, reHydrated: true}
    case Actions.SET_TOKEN:
      return {...state, token: data}
    default:
      return state
  }
}


const boot = () => ({type: Actions.BOOT})


const SESSION = createActions(Actions.SESSION)
const setToken = (data: string) => ({type: Actions.SET_TOKEN, data})


function session() {
  return async (dispatch, getState) => {
    dispatch({type: SESSION[REQUEST]})
    try {
      const userInfo: any = await (async _ => {
        throw new Error('write session manging code')
      })()
      dispatch({type: SESSION[SUCCESS]})
      // dispatch(initializeGa(userInfo.id))
    } catch (ex) {
      dispatch({type: SESSION[FAIL]})
      // dispatch(initializeGa())
    } finally {
      dispatch(boot())
    }
  }
}

export {
  SystemState,
  session,
  boot,
  setToken
}


