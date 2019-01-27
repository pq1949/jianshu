import { createAction } from 'redux-actions'
import * as T from './actionTypes'
import dp from '../../dataProvider'

export const getTrending = createAction(T.GET_TRENDING, opt => fetch(dp.header.getTrending).then(res => res.json()))
