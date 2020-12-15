import {parseNovaApi} from './../../../helpers'

const actions = {
    
    createFavorite({commit,state}){

        Nova.request()
            .post('/nova-api/favorites',state.info)
            .then(res=>{
                Nova.success('Created successfully')
                commit('clearInfo')
            })
            .catch(err=>{
                Nova.error(`Error: can't submit`)
            })
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
    },
    changeInfo({commit},payload){
        if(payload)
            commit('changeInfo',payload)
        
    },
    

}
export default actions