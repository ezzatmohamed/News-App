
<template>
    <div class="container">
      <table class = "table-container">
        <thead>
            <tr class = "table-header">
                <th v-for="column in columns" :key="column">{{column}}</th>
            </tr>
        </thead>
        <row v-for="data in rowsData" :key="data.id" :cells="data" :columns="columns"/>
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
        rowsData:[],
      }
    },
    props:{
      columns:{
        type:Array,
        default:[]
      }
    },
    created()
    {
        Nova.request()
            .get('/nova-api/favorites')
            .then(res=>{
                if(res)
                {
                    const favorites = parseNovaApi(res,this.columns)
                    this.rowsData = favorites ? favorites : []
                } 
            })
            .catch(err=>{
              Nova.error("Error fetching favorites")
            })
    }
  }
</script>
 
