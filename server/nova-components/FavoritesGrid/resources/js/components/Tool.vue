<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />

        <multiselect-input name="filter" title="Filter Favorites" :options="favoriteFilter" 
                       optionKey="name" optionValue="id"  
                      :handleChange="changeFilter" />
        
        <favorites-table :columns="columns" 
                         :rowsData="favoritesList"
                                    />
        <pagination :handleNext="nextPage"
                    :handlePrev="prevPage"
                    :isNext="paginationInfo.isNext"
                    :isPrev="paginationInfo.isPrev"
                    :currentPage="paginationInfo.page"
        />
    </div>
</template>


<script>
import { mapState, mapActions} from 'vuex' 

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
        changeFilter(filters){  
            if(typeof this.changeFiltersAction === 'function')
                this.changeFiltersAction({filters})
            if(typeof this.retrieveFavorites === 'function')
                this.retrieveFavorites({columnAttribute:this.columnAttribute})
        },
        nextPage(){
            if(typeof this.getNextPage === 'function')
                this.getNextPage({columnAttribute:this.columnAttribute})
        },
        prevPage(){
            if(typeof this.getPrevPage === 'function')
                this.getPrevPage({columnAttribute:this.columnAttribute})
        }

    },
    beforeMount(){
        if(typeof this.retrieveFavorites === 'function')
            this.retrieveFavorites({columnAttribute:this.columnAttribute})
        if(typeof this.retrieveFilters === 'function')
            this.retrieveFilters()
    },

}
</script>