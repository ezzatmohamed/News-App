
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
    name:"form-input",
    props: {
      type:{
        type:String,
        default:''
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
        type:String,
        default:''
      },
      handleChange:{
        type:Function
      }
    },
    methods: {
      onChange(e) {
        if(typeof this.handleChange === 'function')
            this.handleChange(e.target)

      }
    }
    
  }
</script>

