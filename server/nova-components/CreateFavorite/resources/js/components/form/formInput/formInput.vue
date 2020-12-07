
<template>
    <div class="form-input">
        <p id ="input-title" >{{title}}</p>
        <input  v-bind:type ="type"
                v-bind:name ="name"
                @input ="handleChange"
                v-bind:placeholder ="name"
        />
    </div>
</template>

<script>
  export default {
    name:"formInput",
    props:["type","name","title"],
    methods: {
      handleChange(e) {
        this.$emit('handleChange', e.target);
      }
    }
    
  }
</script>


<style scoped>

  .form-input {
    padding: 12px;
  }
  
  .form-input input {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    padding: 16px;
    outline: 0;
    font-family: inherit;
    font-size: 0.95em;
  }
    
  .form-input input[type="email"],
  .form-input input[type="password"] {
    background: #fff;
    border-color: #bbb;
    color: #555;
  }


  #input-title{
      color:#05a;
      text-transform: uppercase;
      font-size: 2vh;
      padding:13px;
  }

</style>