
<template>
    <button :disabled="disabled" class="form-button" :type="submit" >{{text}}</button>
</template>

<script>
  import './buttonInput.css';
  export default {
    name:"button-input",
    props:{
      type:{
        type:String,
        default:""
      },
      text:{
        type:String,
        default:""
      },
      disabled:{
        type:Boolean,
        default:true
      }
    },
  }
</script>
 
