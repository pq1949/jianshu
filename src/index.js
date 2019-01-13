import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'
import Routes from './routes'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('root'))
