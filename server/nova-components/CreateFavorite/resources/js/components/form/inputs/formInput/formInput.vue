
<template>
    <div class="form-input-box">
      <!-- {{require}} -->
        <p class ="input-title" >{{title}} <span v-if="req===true">*</span></p>
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
      req: {
        type:Boolean,
        default:false
      },
      handleChange:{
        type:Function
      }
    },
    methods: {
      onChange(e) {
        console.log(1)
        if(typeof this.handleChange === 'function')
            this.handleChange(e.target)

      }
    }
    
  }
</script>

