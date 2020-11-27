import {SUCCESS_MSG,
        FAILURE_MSG,
        RESET_MSG} from './messageTypes'


export const successMsg= payload=>{
    return {
            type:SUCCESS_MSG,
            payload:payload
    }
}
export const failureMsg= (payload)=>{

    return {
            type:FAILURE_MSG,
            payload:payload
    }
}

export const resetMsg= ()=>{

    return {
            type:RESET_MSG
    }
}

export const displayMsg = (success,msg) => {
    return (dispatch)=>{
        if(success)
            dispatch(successMsg(msg))
        else{

        
            dispatch(failureMsg(msg))

        }
        setTimeout(()=>dispatch(resetMsg()),3000)
    }
}
