
<template>
    <button class="form-button" :type="submit" >{{text}}</button>
</template>

<script>
  import './buttonInput.css';
  export default {
    name:"buttonInput",
    props:{
      type:{
        type:String,
        default:"button"
      },
      text:{
        type:String,
        default:"Click"
      }
    },
  }
</script>
 
