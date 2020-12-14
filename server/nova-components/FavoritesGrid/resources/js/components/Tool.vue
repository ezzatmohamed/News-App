<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />
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
                    }
        }
    },
    computed: {
            ...mapState({
                    favoritesList: state => state.favoriteModule.favoritesList,
                }),
    },
    methods:{
        ...mapActions(['retrieveFavorites'],)
    },
    created(){
        // Get Column Attribute from columns titles
        let columnAttribute = []
        for( let key in this.columns)
            columnAttribute.push(key)
            
        this.retrieveFavorites({columnAttribute})
        
    },

}
</script>
 