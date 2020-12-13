<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />
        <favorites-table :columns="columns" 
                         :rowsData="rowsData"
                                    />

    </div>
</template>


<script>
import {parseNovaApi} from './../../../../StoryBook/resources/js/helpers'

export default {
    name:"favorites-grid",
    data(){
        return{
            rowsData:[],
            columns:{
                        title:'Title',
                        url:'Url',
                        urlToImage:'Image',
                        description:'Description',
                        author:'Author',
                        publishedAt:'Date',
                        user:'Username',
                        email:'Email'
                    }
        }
    },
    created(){
        // Get Column Attribute from columns titles
        let columnAttribute = []
        for( let key in this.columns)
            columnAttribute.push(key)

        Nova.request()
            .get('/nova-api/favorites')
            .then(res=>{
                if(res)
                {
                    const favorites = parseNovaApi(res,columnAttribute)
                    this.rowsData = favorites ? favorites : []
                } 
            })
            .catch(err=>{
                Nova.error("Error fetching favorites")
            })
    },

}
</script>
 