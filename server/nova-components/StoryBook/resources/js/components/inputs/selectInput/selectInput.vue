<template>
    <div class="custom-dropdown">
        <select :value="info[name]" v-bind:name ="name" @input="onChange">
            <option  value=0  disabled key=0>{{title}}</option>
            <option v-for="option in options" :key="option[optionKey]" :value="option[optionValue]"> 
                {{option[optionKey]}} 
            </option>
        </select>
        <span v-if="required">*</span>
    </div>
</template>



<script>
import  './selectInput.css'
import { mapState, mapActions} from 'vuex'

  export default {
    name:"select-input",
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
    },
    computed:{
      ...mapState({   
                info: state => state.createFavoriteModule.info,
            })
    },
    methods: {
      onChange(e) {
        if(typeof this.changeInfo === 'function')
            this.changeInfo(e.target)
      },
      ...mapActions(['changeInfo'],)
    }
  }
</script>