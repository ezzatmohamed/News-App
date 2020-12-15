<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />

        <select :value="favoriteFilter" name ="filter" @input="changeFilter">
            <option :value="0">All</option>
            <option :value="1">Liked</option>
            <option :value="2">Not Liked</option>
        </select>
        
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
                    favoriteFilter: state => state.favoriteModule.favoriteFilter,
                }),
    },
    methods:{
        ...mapActions(['retrieveFavorites'],),
        changeFilter(e){
            const filter = e.target.value

            let columnAttribute = []
            for( let key in this.columns)
                columnAttribute.push(key)
                
            this.retrieveFavorites({columnAttribute,filter})
        }
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
 