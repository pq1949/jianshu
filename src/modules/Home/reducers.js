import { handleActions } from 'redux-actions'
import * as T from './actionTypes'
import { FULFILLED } from 'redux-promise-middleware'

export const carouselInfo = handleActions({
  [`${T.GET_CAROUSEL_INFO}_${FULFILLED}`]: (state, action) => {
    return action.payload
  }
}, [])

export const abstractInfo = handleActions({
  [`${T.GET_ARTICLE_ABSTRACT}_${FULFILLED}`]: (state, action) => {
    return [...state, ...action.payload]
  }
}, [])
