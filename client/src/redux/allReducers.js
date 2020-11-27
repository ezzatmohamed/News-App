
import { combineReducers } from 'redux'
import favoritesReducer from './favorite/favoriteReducers'
import messageReducer from './message/messageReducers'
import authReducer from './auth/authReducers'

const rootReducer = combineReducers({
    favoritesReducer,
    messageReducer,
    authReducer
})

export default rootReducer