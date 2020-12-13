
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
  import {parseNovaApi} from './../../../helpers'

  export default {
    name:"favorites-table",
    components:{row},
    props:{
      columns:{
        type:Object,
        default:{}
      },
      rowsData:{
        type:Array,
        default:[]
      }
    }
  }
</script>
 
