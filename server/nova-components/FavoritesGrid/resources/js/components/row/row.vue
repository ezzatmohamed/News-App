
<template>

    <tr class="table-row">
        <th>{{cells.id}}</th>
        <th>{{cells.title}}</th>
        <th>{{cells.url}}</th>
        <th>{{cells.imageToUrl}}</th>
        <th>{{cells.description}}</th>
        <th>{{cells.author}}</th>
        <th>{{cells.publishedAt}}</th>
        <th>{{cells.user}}</th>
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
        }
    },
  }
</script>
 
