
<template>
    <div class="form-input-box"
         v-bind:class="{ 'error-input': errorMessage}"
    >
      <!-- {{require}} -->
        <p class ="input-title" >{{title}} 
          <span class="required-astrisk" v-if="required">*</span>
          <span class="error-msg" v-if="errorMessage">Error: {{errorMessage}}</span>
        
        </p>
        
        <input  v-bind:type ="type"
                v-bind:name ="name"
                @input ="onChange"
                v-bind:placeholder ="title"
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
      required: {
        type:Boolean,
        default:false
      }
      ,
      errorMessage:{
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

