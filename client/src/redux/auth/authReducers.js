import {LOGIN,
        LOGOUT
        } from './authTypes'

const initialState = {
    logged : localStorage.getItem("token") ? true : false
}


const reducer = (state=initialState,action) => {

    
    switch(action.type){

        case LOGIN:
            return{
                ...state,
                logged:true
            }
        case LOGOUT:
            
            return {
                ...state,
                logged:false
            }
      
        default :
            return state
    }
}

export default reducer