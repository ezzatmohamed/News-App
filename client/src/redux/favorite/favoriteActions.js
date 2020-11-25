import {FETCH_FAVORITE_REQUEST,
        FETCH_FAVORITE_SUCCESS,
        FETCH_FAVORITE_FAILURE,
        DELETE_FROM_FAVORITE} from './favoriteTypes'
import api from './../../api'

export const fetchFavoritesRequest= ()=>{
    return {
            type:FETCH_FAVORITE_REQUEST,
    }
}
export const fetchFavoritesSucess= (payload)=>{

    return {
            type:FETCH_FAVORITE_SUCCESS,
            payload:payload
    }
}
export const fetchFavoritesFailure= (err)=>{

    return {
            type:FETCH_FAVORITE_FAILURE,
            payload:err
    }
}
export const deleteFromFavorite= (id)=>{

    return {
            type:DELETE_FROM_FAVORITE,
            payload:id
    }
}

export const fetchFavorites = () => {
    return (dispatch)=>{
        dispatch(fetchFavoritesRequest())
        api.get('/todos')
            .then(res=>{

                dispatch(fetchFavoritesSucess(res.data))
            })
            .catch(err=>{
                dispatch(fetchFavoritesFailure(err.message))
            })
    }
}