import { parseNovaApi } from './../../../helpers'

const actions = {

    createFavorite({ commit, state }) {

        Nova.request()
            .post('/nova-api/favorites', state.info)
            .then(res => {
                Nova.success('Created successfully')
                commit('clearInfo')
            })
            .catch(err => {
                Nova.error(`Error: can't submit`)
            })
    },

}
export default actions