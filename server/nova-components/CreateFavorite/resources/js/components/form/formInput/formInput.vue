
<template>
    <div class="form-input">
        <p id ="input-title" >{{title}}</p>
        <input  v-bind:type ="type"
                v-bind:name ="name"
                @input ="onChange"
                v-bind:placeholder ="name"
                :value="value"

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
      },
      value: {
        type:String
      },
      handleChange:{
        type:Function
      }
    },
    methods: {
      onChange(e) {
        this.handleChange(e.target)
      }
    }
    
  }
</script>

