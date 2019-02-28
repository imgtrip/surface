import {STAGING_APP_DOMAIN} from '../constants/conf'

export const getScrollTop = () => {
  let bodyScrollTop = 0
  let documentScrollTop = 0
  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  // scrollTop
  return (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
}

// 文档的总高度
export const getScrollHeight = () => {
  let bodyScrollHeight = 0
  let documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
// scrollHeight
  return (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
}

// 浏览器视口的高度
export const getWindowHeight = () => {
  let windowHeight = 0
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  return windowHeight
}

export const isPaddingBottom = (distance = 500) => {
  return (getScrollHeight() - getScrollTop() - getWindowHeight()) < distance
}

export const isStaging = () => {
  return window.location.hostname === STAGING_APP_DOMAIN
}



