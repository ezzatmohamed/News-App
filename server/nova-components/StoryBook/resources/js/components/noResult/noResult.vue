<template>
  <div class="no-result">
    <h1>No Result Found</h1>
    <p>
      Sorry, but nothing matched your search of {{value}}.
      Please try again with some different keywords.
    </p>
  </div>
</template>



<script>
import "./noResult.css";
export default {
  name: "no-result",
  props:{
      value:{
          type:String,
          default:""
      }
  }
 

};
</script>