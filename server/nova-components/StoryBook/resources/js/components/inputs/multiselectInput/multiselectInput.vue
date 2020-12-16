<template>
    <div class="custom-dropdown">
        <p class="multiselect-title">{{title}}</p>
        <ul class="multiselect-dropdown"  v-bind:name ="name" >
            <li 
                v-for="option in options" 
                :key="option[optionKey]" 
                :value="option[optionValue]"
                v-bind:class="{'selected-option': selectedValues.includes(option[optionKey])}" 
                v-on:click="handleClick(option[optionKey])"  
              >

              {{option[optionKey]}} 
            </li> 
        </ul>

        <span v-if="required">*</span>
    </div>
</template>



<script>
import  './multiselectInput.css'
  export default {
    name:"multiselect-input",
    data(){
      return {
        selectedValues:[]
      }
    },
    props: { 
      options:{
        type:Array,
        default:[]
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
      required:{
        type:Boolean,
        default:false
      },
      handleChange:{
        type:Function
      },
      optionKey:{
        type:String,
        default:""
      },
      optionValue:{
        type:String,
        default:""
      }
    } ,
    methods: {

      handleClick(value)
      {
        let index = this.selectedValues.indexOf(value);
        if(index!=-1)
          this.selectedValues.splice(index, 1);
        else
          this.selectedValues.push(value)
          
        if(typeof this.handleChange === 'function') 
              this.handleChange(this.selectedValues)
      }
    }
  }
</script>