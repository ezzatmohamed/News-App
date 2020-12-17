<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />

        <multiselect-input name="filter" title="Filter Favorites" :options="favoriteFilter" 
                       optionKey="name" optionValue="id"  
                      :handleChange="changeFilter" />
        
        <p class ="page-number">page: {{page}}</p>
        <favorites-table :columns="columns" 
                         :rowsData="favoritesList"
                                    />
        <pagination :handleNext="nextPage"
                    :handlePrev="prevPage"
                    :isNext="paginationInfo.isNext"
                    :isPrev="paginationInfo.isPrev"
        />
    </div>
</template>


<script>
import { mapState, mapActions, mapMutations} from 'vuex' 

export default {
    name:"favorites-grid",
    data(){
        return{
            columns:{
                        title:'Title',
                        url:'Url',
                        urlToImage:'Image',
                        description:'Description',
                        author:'Author',
                        publishedAt:'Date',
                        user:'Username',
                        email:'Email',
                        deleted_at:'Is Deleted',
                        states:'states'
                    },
        }
    },
    computed: {
            columnAttribute(){
                return Object.keys(this.columns)
            },
            ...mapState({
                    favoritesList: state => state.favoriteModule.favoritesList,
                    favoriteFilter: state => state.favoriteModule.favoriteFilter,
                    paginationInfo: state=>state.favoriteModule.paginationInfo,
                })
    },
    methods:{
        ...mapActions(['retrieveFavorites','retrieveFilters','getNextPage','getPrevPage','changeFiltersAction'],),
        // ...mapMutations(['setSelectedFilters']),
        changeFilter(filters){  
            this.changeFiltersAction({filters})
            this.retrieveFavorites({columnAttribute:this.columnAttribute})
        },
        nextPage(){
            this.getNextPage({columnAttribute:this.columnAttribute})
        },
        prevPage(){
            this.getPrevPage({columnAttribute:this.columnAttribute})
        }

    },
    beforeMount(){
        this.retrieveFavorites({columnAttribute:this.columnAttribute})
        this.retrieveFilters()
    },

}
</script>