import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import promiseMiddleware from 'redux-promise'
// import promiseMiddleware from 'redux-promise-middleware'
import { genesis, terminator } from 'redux-async-promise'
import promiseMiddleware from 'redux-async-promise'
import reducer from './reducer'

// const middleWares = [logger, thunk,promiseMiddleware]
const middleWares = [ thunk, genesis, terminator, promiseMiddleware, logger]


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleWares))
)

export default store
