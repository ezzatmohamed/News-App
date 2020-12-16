import {parseNovaApi} from './../../../helpers'

const actions = {
    
    retrieveFavorites({commit},payload){

        let endpoint = '/nova-api/favorites?trashed=with'
        if( payload && payload.filters && payload.filters.length && !payload.filters.includes('all'))
        {   
            let filters = ""
            for(let i=0; i < payload.filters.length;i++){
                filters += `"${ payload.filters[i]}":1`
                if(i <  payload.filters.length-1)
                    filters+=","
            }
            const filter = `[{"class":"App\\\\Nova\\\\Filters\\\\FavoriteState","value":{${filters}}}]`
            endpoint += '&filters='+btoa(filter)
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

    retrieveFilters({commit})
    {
        Nova.request()
            .get('/nova-api/states')
            .then(res=>{    
                if(res)
                {
                    const filters = parseNovaApi(res,["name"])
                    filters.push({name:'all'})
                    commit('setFavoriteFilter',filters)
                }

            })
            .catch(err=>{
                Nova.error("Error fetching filters")
            })

    }
    
}
export default actions