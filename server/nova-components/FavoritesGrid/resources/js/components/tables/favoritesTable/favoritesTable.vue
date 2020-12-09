
<template>
    <div>
      <table class = "table-container">
        <tr class = "table-header">
            <th>ID</th>
            <th>Title</th>
            <th>Url</th>
            <th>Image</th>
            <th>Description</th>
            <th>Author</th>
            <th>Published At</th>
            <th>User</th>
        </tr>
        <row v-for="data in rowsData" :key="data.id" :cells="data"/>
      </table>
    </div>
</template>

<script>
  import './favoritesTable.css';
  import row from './../../row/row'
  import {parseNovaApi} from './../../../../../../CreateFavorite/resources/js/helpers'
  export default {
    name:"favorites-table",
    components:{row},
    data(){
      return{
        rowsData:[]
      }
    },
    created()
    {
        Nova.request()
            .get('/nova-api/favorites')
            .then(res=>{
                if(res)
                {
                    const favorites = parseNovaApi(res,["id","url","title","urlToImage","description","author","publishedAt","user"])
                    this.rowsData = favorites ? favorites : []
                } 
            })
            .catch(err=>{
              Nova.error("Error fetching favorites")
            })
    }
  }
</script>
 
