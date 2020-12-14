import {parseNovaApi} from './../../../helpers'

const actions = {
    
    retrieveFavorites({commit},payload){
        
        Nova.request()
            .get('/nova-api/favorites?trashed=with')
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
                    commit('successRetrieve',favorites)
                    
                } 

            })
            .catch(err=>{
                Nova.error("Error fetching favorites")
            })
        
    }
}
export default actions