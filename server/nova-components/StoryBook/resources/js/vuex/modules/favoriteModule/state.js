const state = () => ({

    favoritesList:[],
    favoriteFilter:[],
    selectedFilters:[],
    paginationInfo:{
        page:1,
        perPage:5,
        isNext:false,
        isPrev:false,
    }
    
})

export default state