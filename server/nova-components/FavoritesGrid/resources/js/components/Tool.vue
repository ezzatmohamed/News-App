<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />
        
        <select-input name="filter" title="select an option" :options="favoriteFilter" 
                       optionKey="name" optionValue="name"  
                      :handleChange="changeFilter" :multiple="true" />

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
                        deleted_at:'Is Deleted'
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
    created(){
        this.retrieveFavorites({columnAttribute:this.columnAttribute})
        this.retrieveFilters()
    },

}
</script>
 