import { createAction } from 'redux-actions'
import * as T from './actionTypes'

export const getTrending = createAction(T.GET_TRENDING,
  options => ({
    trending: fetch('/data/trending.json').then(res => res.json())
  }),
  options =>({
    showLoading: false
  }) )
