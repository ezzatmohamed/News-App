<template>
        <div>
            <li class = "list-item"
                :value="value"
                v-bind:class="{'selected-option': isSelected}" 
                v-on:click="handleClick()"  
              >
              {{name}} 
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
        type:String,
        default:""
      },
      name:{
        type:String,
        default:""
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
    },
    created(){
      if(typeof this.handleClick === 'function') 
          this.handleClick()
    }
  }
</script>