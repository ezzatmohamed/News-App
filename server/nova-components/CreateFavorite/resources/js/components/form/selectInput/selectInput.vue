<template>
    <div class="custom-dropdown big">
        <select  v-bind:name ="name" @input="handleChange">
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
      }
    } ,
    methods: {
      handleChange(e) {
        this.$emit('handleChange', e.target);
      }
    }
  }
</script>