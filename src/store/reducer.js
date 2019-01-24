import { combineReducers } from 'redux'
import * as LanguageReducers from '../routes/reducers'
import * as HeaderReducers from '../modules/header/reducers'

export default combineReducers({
  ...LanguageReducers,
  ...HeaderReducers
})
