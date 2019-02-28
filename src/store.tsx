import {applyMiddleware, createStore, Store} from 'redux'
import {reducer, RootState} from './redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import * as React from 'react'

export const initStore = (state?: any): Store<RootState> => {
  return createStore<RootState>(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
