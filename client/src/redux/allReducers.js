
import { combineReducers } from 'redux'
// import cakeReducer from './cake/cakeReducer'
import favoritesReducer from './favorite/favoriteReducers'

const rootReducer = combineReducers({
    favoritesReducer
})

export default rootReducer