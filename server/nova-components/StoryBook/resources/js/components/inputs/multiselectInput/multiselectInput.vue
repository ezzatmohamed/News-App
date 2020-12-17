<template>
    <div class="custom-dropdown">
        <p class="multiselect-title">{{title}}</p>
        <ul class="multiselect-dropdown"  v-bind:name ="name" >
            <list-item-input
                v-for="option in options" 
                :key="option[optionKey]" 
                :value="option[optionValue]" 
                :name="option[optionKey]"
                :handleChange="handleClick"
                :isSelected="selectedValues.includes(option[optionValue])"  
              />
            <list-item-input
              value="all" 
              name="all"
              :handleChange="handleClick"
              :isSelected="selectedValues.includes('all')"  
            />

      
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
        const allIndex = this.selectedValues.indexOf('all') ;
        if(index!=-1)
        {
          this.selectedValues.splice(index, 1);
          if(value == 'all')
            this.selectedValues = []
          else if( allIndex != -1 ) 
              this.selectedValues.splice(allIndex, 1);
          
        }
        else
        {
          this.selectedValues.push(value)
          if(value == 'all' || (this.selectedValues && this.options && this.selectedValues.length  === this.options.length) )
          { 
             this.selectedValues= ['all']
             this.options.map(option => this.selectedValues.push(option[this.optionValue])  )
          }
        } 
        if(typeof this.handleChange === 'function') 
              this.handleChange(this.selectedValues)
      }
    }
  }
</script>