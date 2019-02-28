import {message as base} from 'antd'
import * as React from 'react'
import {loaded} from './loading'
import * as NProgress from 'nprogress'
import {lang} from '../constants/lang'


type Content = string | number | React.ReactNode

const success = (content?: Content) => {
  base.success(content || lang.operator_success)
}

const error = (content?: Content) => {
  base.error(content || lang.operator_fail)
}

const info = (content: Content) => {
  base.info(content)
}

const successWithLoaded = (component: React.Component, loading?: 'loading', content?: Content) => {
  loaded(component, loading)
  success(content)
  NProgress.done()
}

const errorWithLoaded = (component: React.Component, loading?: 'loading', content?: Content) => {
  loaded(component, loading)
  error(content)
  NProgress.done()
}


export {
  info,
  success,
  error,
  successWithLoaded,
  errorWithLoaded,
}
