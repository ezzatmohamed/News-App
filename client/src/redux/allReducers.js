
import { combineReducers } from 'redux'
import favoritesReducer from './favorite/favoriteReducers'
import messageReducer from './message/messageReducers'

const rootReducer = combineReducers({
    favoritesReducer,
    messageReducer
})

export default rootReducer