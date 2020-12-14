
<template>
    <div class="container">
      <table class = "table-container">
        <thead>
            <tr class = "table-header">
                <th v-for="title in columns" :key="title">{{title}}</th>
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
        rowsData:[]
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
        // Get Column Attribute from columns titles
        let columnAttribute = []
        for( let key in this.columns)
            columnAttribute.push(key)
        
        Nova.request()
            .get('/nova-api/favorites?trashed=with')
            .then(res=>{
                if(res)
                {
                    const favorites = parseNovaApi(res,columnAttribute)
                    this.rowsData = favorites ? favorites : []

                    this.rowsData.forEach((data,i)=>{
                      
                      data['deleted_at'] = res && res.data && 
                                           res.data.resources[i] && 
                                           res.data.resources[i].softDeleted ? "Yes" : "No" 
                    })

                } 
            })
            .catch(err=>{
              Nova.error(err)
            })
    }
  }
</script>
 
