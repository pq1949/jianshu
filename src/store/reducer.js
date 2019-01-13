import { combineReducers } from 'redux'
import * as LanguageReducers from '../routes/reducers'

export default combineReducers({
  ...LanguageReducers
})
