<template>
        <div>
            <li class = "list-item"
                :value="value"
                v-bind:class="{'selected-option': isSelected}" 
                v-on:click="handleClick()"  
              >
              {{value}} 
              <span v-if="isSelected">&#10004;</span>

            </li> 
        </div>
</template>

<script>
import  './listItemInput.css'
  export default {
    name:"list-item-input",
    props: { 

      value: {
        type:String
      },
      handleChange:{
        type:Function
      },
      isSelected:{
        type:Boolean,
        default:false
      }
    } ,
    methods: {
      handleClick()
      {
        if(typeof this.handleChange === 'function') 
              this.handleChange(this.value)
      }
    }
  }
</script>