import state from "./state"

const mutations = {

    setFavoritesList(state,favorites){
        state.favoritesList = favorites
    },
    setFavoriteFilter(state,value){
        state.favoriteFilter = value
    },
    setSelectedFilters(state,value){
        state.selectedFilters = value
    },
    nextPage(state){
        state.page++
    },
    prevPage(state){
        state.page--
    },
    resetPage(state){
        state.page=1
    },
    setIsNext(state,value){
        state.isNext = value
        console.log('called')
    },
    setIsPrev(state,value){
        state.isPrev = value
        console.log(state.IsPrev)
    }
}

export default mutations