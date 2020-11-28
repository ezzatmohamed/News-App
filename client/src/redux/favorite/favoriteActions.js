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

export const fetchFavorites = (page) => {
    return (dispatch)=>{
        dispatch(fetchFavoritesRequest())
        api().get(`/favorites?page=${page}`)
            .then(res=>{
                console.log(res)
                const response = res.data.data
                const NextPage = response.next_page_url == null ? -1 : page+1
                dispatch(fetchFavoritesSucess({data:response.data,next:NextPage}))
            })
            .catch(err=>{
                const message = err.response && err.response.data && err.response.data.message ? err.response.data.message : "";
                dispatch(fetchFavoritesFailure(message))
            })
    }
}



