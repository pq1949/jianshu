import { handleActions } from 'redux-actions'
import * as T from './actionTypes'
import { FULFILLED } from 'redux-promise-middleware'

export const trending = handleActions({
  [`${T.GET_TRENDING}_${FULFILLED}`]: (state, action) => {
    return action.payload
  }
}, [])
