import { handleActions } from 'redux-actions'
import * as T from './actionTypes'

export const trending = handleActions({
  [T.GET_TRENDING]: (state, action) => {
    return action.payload.trending || []
  }
}, [])
