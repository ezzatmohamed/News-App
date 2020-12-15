import {parseNovaApi} from './../../../helpers'

const actions = {
    
    retrieveFavorites({commit},payload){

        let endpoint = '/nova-api/favorites?trashed=with'
        if(payload.filter)
        {   
            commit('setFavoriteFilter',payload.filter)
            if(payload.filter == 1 )
                endpoint += '&liked'
            else if(payload.filter == 2)
                endpoint += '&notliked'
        }

        Nova.request()
            .get(endpoint)
            .then(res=>{    
                if(res)
                {
                    const favorites = parseNovaApi(res,payload.columnAttribute)
                    
                    if(Array.isArray(favorites))
                    {
                        favorites.forEach((data,i)=>{
                          
                          data['deleted_at'] = res && res.data && 
                                              res.data.resources[i] && 
                                              res.data.resources[i].softDeleted ? "Yes" : "No" 
                        })
                    }
                    commit('setFavoritesList',favorites)
                    
                } 

            })
            .catch(err=>{
                Nova.error("Error fetching favorites")
            })
        
    },
    
}
export default actions