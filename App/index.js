import React from 'react'
import { Provider } from 'react-redux'

import { Main } from './screens'
import { createStore } from './store'


const store = createStore()

/**
 * Root application.
 */
const Apps = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default Apps