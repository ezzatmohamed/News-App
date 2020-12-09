
<template>
    <div>
      <table class = "table-container">

        <row :cells="colsData" :isHeader="true"/>
        <row v-for="data in rowData" :key="data.id" :cells="data"/>
      </table>
    </div>
</template>

<script>
  import './favoritesTable.css';
  import row from './../../row/row'

  export default {
    name:"favorites-table",
    components:{row},
    data(){
      return{
        rowData:[
          {
            id:1,
            title:2,
            url:3,
            image:4,
            description:5
          },
          {
            id:1,
            title:2,
            url:3,
            image:4,
            description:3,
          }
        ],
        colsData:{
            id:"ID",
            title:"Title",
            Url:"Url",
            Image:"Image",
            Description:"Description"
        }
      }
    },
  }
</script>
 
