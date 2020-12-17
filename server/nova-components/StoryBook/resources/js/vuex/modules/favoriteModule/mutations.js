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
        state.paginationInfo.page++
    },
    prevPage(state){
        state.paginationInfo.page--
    },
    resetPage(state){
        state.paginationInfo.page=1
    },
    setIsNext(state,value){
        state.paginationInfo.isNext = value
    },
    setIsPrev(state,value){
        state.paginationInfo.isPrev = value
    }
}

export default mutations