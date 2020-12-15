<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />
        
        <select-input name="filter" title="select an option" :options="favoriteFiltersList" 
                      :value="favoriteFilter" optionKey="name" optionValue="value"  
                      :handleChange="changeFilter" />

        <favorites-table :columns="columns" 
                         :rowsData="favoritesList"
                                    />
    </div>
</template>


<script>
import { mapState, mapActions} from 'vuex'
import {selectInput} from './../../../../StoryBook/resources/js/components/inputs'
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
            favoriteFiltersList:[
                {name:"All",value:0},
                {name:"Liked",value:1},
                {name:"Not Liked",value:2},
            ]
        }
    },
    computed: {
            columnAttribute(){
                let columnAttributes = []
                for( let key in this.columns)
                    columnAttributes.push(key)    
                return columnAttributes
            },
            ...mapState({
                    favoritesList: state => state.favoriteModule.favoritesList,
                    favoriteFilter: state => state.favoriteModule.favoriteFilter,
                }),
    },
    components:{selectInput},
    methods:{
        ...mapActions(['retrieveFavorites'],),
        changeFilter(e){
            const filter = e.value
            this.retrieveFavorites({columnAttribute:this.columnAttribute,filter})
        }
    },
    created(){
        this.retrieveFavorites({columnAttribute:this.columnAttribute})
    },

}
</script>
 