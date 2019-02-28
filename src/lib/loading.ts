import * as React from 'react'

const loading = (component: React.Component, name = 'loading') => {
  const state = {}
  state[name] = true
  component.setState(state)
  // NProgress.start()
}

const loaded = (component: React.Component, name = 'loading') => {
  const state = {}
  state[name] = false
  component.setState(state)
}


export {
  loading,
  loaded
}

