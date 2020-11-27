import {SUCCESS_MSG,
        FAILURE_MSG,
        RESET_MSG} from './messageTypes'


const initialState = {
    display:false,
    msg:"",
    success:false
}


const reducer = (state=initialState,action) => {

    switch(action.type){

        case FAILURE_MSG:
            return{

                display:true,
                msg:action.payload,
                success:false
            }
        case SUCCESS_MSG:
            return {
                ...state,
                display:true,
                msg:action.payload,
                success:true
            }
        case RESET_MSG:
            return{
                ...state,
                display:false,
                msg:""
            }
        default :
            return state
    }
}

export default reducer