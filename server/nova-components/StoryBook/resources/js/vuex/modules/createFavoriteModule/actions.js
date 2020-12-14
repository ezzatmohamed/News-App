import {parseNovaApi} from './../../../helpers'

const actions = {
    
    createFavorite({commit},payload){
        
        
        
    },
    retrieveUsers({commit}){
        Nova.request()
        .get('/nova-api/users')
        .then(res=>{
            const users = parseNovaApi(res,["id","name"])
            commit('setUsersList',users)
        })
        .catch(err=>{
            Nova.error(err)
        })
    }

}
export default actions