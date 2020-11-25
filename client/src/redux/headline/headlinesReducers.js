import {FETCH_HEADLINES_REQUEST,
    FETCH_HEADLINES_SUCCESS,
    FETCH_HEADLINES_FAILURE} from './headlineTypes'


const initialState = {
    loading:false,
    headlines:[],
    error:''
}


const reducer = (state=initialState,action) => {

    switch(action.type){
        case FETCH_HEADLINES_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_HEADLINES_SUCCESS:
            return{
                loading:false,
                headlines: action.payload,
                error:''
            }

        case FETCH_HEADLINES_FAILURE:
            return{
                loading:false,
                headlines: [],
                error:action.payload
            }
        default :
            return state
    }
}

export default reducer