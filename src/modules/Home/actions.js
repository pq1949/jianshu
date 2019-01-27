import { createAction } from 'redux-actions'
import * as T from './actionTypes'
import dp from '../../dataProvider'
import { getHost } from '../../env'
const api = getHost()

export const getCarouselInfo = createAction(T.GET_CAROUSEL_INFO, opt => {
  return fetch(dp.home.getCarouselInfo).then(res => res.json()).then(res => {
    return res.map(item => {
      item.src = api + item.src
      return item
    })
  })
})

export const getArticleAbstract = createAction(T.GET_ARTICLE_ABSTRACT, opt => {
  return fetch(dp.home.getArticleAbstract).then(res => res.json()).then(res => {
    return res.map(item => {
      item.imgSrc = api + item.imgSrc
      return item
    })
  })
})
