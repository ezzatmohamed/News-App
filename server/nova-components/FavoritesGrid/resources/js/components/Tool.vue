<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />

        <multiselect-input name="filter" title="Filter Favorites" :options="favoriteFilter" 
                       optionKey="name" optionValue="id"  
                      :handleChange="changeFilter" />

        <favorites-table :columns="columns" 
                         :rowsData="favoritesList"
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
                }),
    },
    methods:{
        ...mapActions(['retrieveFavorites','retrieveFilters'],),
        changeFilter(filters){
            this.retrieveFavorites({columnAttribute:this.columnAttribute,filters})
        }
    },
    beforeMount(){
        this.retrieveFavorites({columnAttribute:this.columnAttribute})
        this.retrieveFilters()
    },

}
</script>
 