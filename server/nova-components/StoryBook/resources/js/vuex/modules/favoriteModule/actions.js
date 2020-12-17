import {parseNovaApi} from './../../../helpers'

const actions = {
    
    retrieveFavorites({commit},payload){

        let endpoint = '/nova-api/favorites?trashed=with'
        if(!(payload.filters && payload.filters.length) )
        {
            commit('setFavoritesList',[])
            return
        }
        if( payload && payload.filters && payload.filters.length && !payload.filters.includes('all'))
        {   
            // make each filter has value "true" and separate them with a ',' for the request
            const filtersPayload = payload.filters.map(filter=>`"${filter}":1`).join()
            const filter = `[{"class":"App\\\\Nova\\\\Filters\\\\FavoriteState","value":{${filtersPayload}}}]`

            // convert it to base64 and add it to the url
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

                          if(data['states'])
                            data['states'] = data['states'].length !== 0 ?  data['states'].map(ele=>ele.name).join() : ''
                            
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
                    const filters = parseNovaApi(res,["name","id"])
                    filters.push({name:'no state',id:'no state'})
                    commit('setFavoriteFilter',filters)
                }

            })
            .catch(err=>{
                Nova.error("Error fetching filters")
            })

    }
    
}
export default actions