import {FETCH_HEADLINES_REQUEST,
    FETCH_HEADLINES_SUCCESS,
    FETCH_HEADLINES_FAILURE} from './headlineTypes'
import api from './../../api'

export const fetchHeadlinesRequest= ()=>{
    return {
            type:FETCH_HEADLINES_REQUEST,
    }
}
export const fetchHeadlinesSucess= (payload)=>{

    return {
            type:FETCH_HEADLINES_SUCCESS,
            payload:payload
    }
}
export const fetchHeadlinesFailure= (err)=>{

    return {
            type:FETCH_HEADLINES_FAILURE,
            payload:err
    }
}

export const fetchHeadlines = () => {
    return (dispatch)=>{
        dispatch(fetchHeadlinesRequest())
        api.get('/todos')
            .then(res=>{

                dispatch(fetchHeadlinesSucess(res.data))
            })
            .catch(err=>{
                dispatch(fetchHeadlinesFailure(err.message))
            })
    }
}