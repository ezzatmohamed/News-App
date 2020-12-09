
<template>

    <tr class="table-row">
        <th v-for="col in columns" :key="col">
          {{cells[col]}}
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
 
