import {FETCH_FAVORITE_REQUEST,
        FETCH_FAVORITE_SUCCESS,
        FETCH_FAVORITE_FAILURE,
        DELETE_FROM_FAVORITE} from './favoriteTypes'


const initialState = {
    loading:false,
    headlines:[],
    error:''
}


const reducer = (state=initialState,action) => {

    switch(action.type){
        case FETCH_FAVORITE_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_FAVORITE_SUCCESS:
            return{
                loading:false,
                favorites: action.payload,
                error:''
            }

        case FETCH_FAVORITE_FAILURE:
            return{
                loading:false,
                favorites: [],
                error:action.payload
            }
        case DELETE_FROM_FAVORITE:

            const newFavorites =[]
            return{
                loading:false,
                favorites:newFavorites,
                error:""
            }
        default :
            return state
    }
}

export default reducer