import { combineReducers } from 'redux'
import friendsReducer from './friendsReducer'
import meetupReducer from './meetupReducer'
import userReducer from './userReducer'

export default combineReducers({
  friendsReducer, meetupReducer, userReducer
})
