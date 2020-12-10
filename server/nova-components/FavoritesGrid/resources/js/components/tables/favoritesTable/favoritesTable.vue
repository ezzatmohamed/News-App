
<template>
    <div class="container">
      <table class = "table-container">
        <thead>
            <tr class = "table-header">
                <th v-for="title in columnTitle" :key="title">{{title}}</th>
            </tr>
        </thead>
        <row v-for="data in rowsData" :key="data.id" :cells="data" :columns="columnProp"/>
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
        columnTitle:[],
        columnProp:[],
      }
    },
    props:{
      columns:{
        type:Object,
        default:{}
      }
    },
    created()
    {
        // Separate Columns (key&value) pairs into ColumnTitle and ColumnProp
        for( let key in this.columns)
        {
            this.columnProp.push(key)
            this.columnTitle.push(this.columns[key])
        }
        Nova.request()
            .get('/nova-api/favorites')
            .then(res=>{
                if(res)
                {
                    const favorites = parseNovaApi(res,this.columnProp)
                    this.rowsData = favorites ? favorites : []

                } 
            })
            .catch(err=>{
              Nova.error("Error fetching favorites")
            })
    }
  }
</script>
 
