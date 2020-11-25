
import { combineReducers } from 'redux'
// import cakeReducer from './cake/cakeReducer'
import headlinesReducer from './headline/headlinesReducers'

const rootReducer = combineReducers({
    headlinesReducer
})

export default rootReducer