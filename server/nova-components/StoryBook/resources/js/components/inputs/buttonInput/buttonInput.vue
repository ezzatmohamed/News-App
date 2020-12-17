
<template>
    <button :disabled="disabled" class="form-button" :type="type" v-on:click="onClick">{{text}}</button>
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
      },
      handleClick:{
        type:Function
      }
    },
    methods:{
      onClick(){
          if(typeof this.handleClick === 'function')
            this.handleClick()
      }
    }
  }
</script>
 
