import {FETCH_FAVORITE_REQUEST,
        FETCH_FAVORITE_SUCCESS,
        FETCH_FAVORITE_FAILURE,
        DELETE_FROM_FAVORITE} from './favoriteTypes'


const initialState = {
    loading:false,
    headlines:[],
    error:'',
    NextPage:2
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
                ...state,
                NextPage:action.payload.next,
                loading:false,
                favorites: action.payload.data,
                error:''
            }

        case FETCH_FAVORITE_FAILURE:
            return{
                ...state,
                loading:false,
                favorites: [],
                error:action.payload
            }
        case DELETE_FROM_FAVORITE:

            const newFavorites = [...state.favorites]

            for(let i = 0; i < newFavorites.length;i++){
                console.log(newFavorites[i].id)
                if(newFavorites[i].id === action.payload){
                    newFavorites.splice(i,1)
                    break
                }
            }
            
            return{
                ...state,
                loading:false,
                favorites:[...newFavorites],
                error:""
            }
        default :
            return state
    }
}

export default reducer