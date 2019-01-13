import { handleActions } from 'redux-actions'
import * as T from './actionTypes'

export const Language = handleActions({
  [T.CHANGE_LANGUAGE]: (state, action) => action.payload
}, 'zh')
