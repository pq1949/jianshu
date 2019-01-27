import { combineReducers } from 'redux'
import * as LanguageReducers from '../routes/reducers'
import * as HeaderReducers from '../modules/header/reducers'
import * as HomeReducers from '../modules/home/reducers'

export default combineReducers({
  ...LanguageReducers,
  ...HeaderReducers,
  ...HomeReducers
})
