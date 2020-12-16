import {parseNovaApi} from './../../../helpers'

const actions = {
    
    retrieveUsers({commit}){
        Nova.request()
        .get('/nova-api/users')
        .then(res=>{
            if(res)
            {
                const users = parseNovaApi(res,["id","name"])
                commit('setUsersList',users)
            }
            
        })
        .catch(err=>{
            Nova.error(err)
        })
    },    

}
export default actions