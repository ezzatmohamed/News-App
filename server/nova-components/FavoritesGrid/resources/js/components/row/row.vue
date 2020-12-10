
<template>

    <tr class="table-row">
        <th v-for="column in columns" :key="column">
          {{cells[column]}}
        </th>
        
    </tr>
        
</template>

<script>
  import './row.css';
  export default {
    name:"row",
    props:{
        cells:{
            type:Array,
            default:[]
        },
        columns:{
          type:Array,
          default:[]
        }
    },
  }
</script>
 
