<template>
    <div class="custom-dropdown big">
        <select  v-bind:name ="name" @input="onChange">
            <option disabled value="" selected="selected">Please select a user</option>
            <option v-for="option in options" :key="option.key" :value="option.value"> 
                {{option.key}} 
            </option>
        </select>
    </div>
</template>



<script>
import  './selectInput.css'

  export default {
    name:"selectInput",
    props: { 
      options:{
        type:Array,
        default:[]
      },
      name:{
        type:String,
        required:true
      },
      handleChange:{
        type:Function
      }
    } ,
    methods: {
      onChange(e) {
        this.handleChange(e.target)
      }
    }
  }
</script>