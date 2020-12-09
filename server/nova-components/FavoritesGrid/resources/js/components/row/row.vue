
<template>
    <tr class="table-row"
        v-bind:class="{'table-header': isHeader}"
    >
        <th v-for="cell in cells" :key="cell.id">
            {{cell}}
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
        isHeader:{
            type:Boolean,
            default:false
        }
    },
  }
</script>
 
