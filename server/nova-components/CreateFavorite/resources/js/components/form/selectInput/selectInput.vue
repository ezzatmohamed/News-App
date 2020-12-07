<template>
    <div class="custom-dropdown big">
        <select  v-bind:name ="name" @input="handleChange">
            <option disabled value="" selected="selected">Please select a user</option>
            <option v-for="option in options" :key="option.id" :value="option.value"> 
                {{option.key}} 
            </option>
        </select>
    </div>
</template>



<script>
  export default {
    name:"selectInput",
    props:["options","name"],
    methods: {
      handleChange(e) {
        this.$emit('handleChange', e.target);
      }
    }
  }
</script>

<style scoped>

  .big {
    font-size: 1.2em;
  }

  .small {
    font-size: .7em;
  }

  .square {
    width: .7em;
    height: .7em;
    margin: .5em;
    display: inline-block;
  }

  /* Custom dropdown */
  .custom-dropdown {
    display: inline-block;
    vertical-align: middle;
    /* margin: 10px; demo only */
    margin:auto;
    padding:10px;
    margin-bottom:5px;

  }

  .custom-dropdown select {
    background-color: #1a66bc;
    color: #fff;
    font-size: inherit;
    padding: .5em;
    padding-right: 2.5em;	
    border: 0;
    margin: 0;
    border-radius: 3px;
    text-indent: 0.01px;
    text-overflow: '';
    -webkit-appearance: button; /* hide default arrow in chrome OSX */
  }

</style>