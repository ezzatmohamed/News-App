
<template>
    <div class="form-input">
        <p id ="input-title" >{{title}}</p>
        <input  v-bind:type ="type"
                v-bind:name ="name"
                @input ="handleChange"
                v-bind:placeholder ="name"
        />
    </div>
</template>

<script>
  import './formInput.css'

  export default {
    name:"formInput",
    props: {
      type:{
        type:String,
        default:'text'
      },
      name:{
        type:String,
        required:true
      },
      title:{
        type:String,
        default:""
      }
    },
    methods: {
      handleChange(e) {
        this.$emit('handleChange', e.target);
      }
    }
    
  }
</script>

