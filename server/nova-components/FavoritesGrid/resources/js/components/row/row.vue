
<template>

    <tr class="table-row">
        <th v-for="(title,attribute) in columns" :key="attribute">
          {{cells[attribute]}}
          <span v-if="!cells[attribute]">{{title}} is not available</span>
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
          type:Object,
          default:{}
        }
    },
  }
</script>
 
