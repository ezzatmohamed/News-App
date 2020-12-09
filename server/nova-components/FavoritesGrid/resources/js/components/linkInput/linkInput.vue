
<template>
    <a  class="link-input" :href="link" >{{text}}</a>
</template>

<script>
  import './linkInput.css';
  export default {
    name:"link-input",
    props:{
      link:{
        type:String,
        default:""
      },
      text:{
        type:String,
        default:""
      }
    },
  }
</script>
 
