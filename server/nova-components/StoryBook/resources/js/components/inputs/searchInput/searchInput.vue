<template>
  <div class="search-box">
    <input
      type="text"
      v-bind:name="name"
      @input="onChange"
      v-bind:placeholder="title"
      :value="value"
    />
  </div>
</template>

<script>
import "./searchInput.css";
export default {
  name: "search-input",
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    handleChange: {
      type: Function
    }
  },
  methods: {
    onChange(e) {
      if (typeof this.handleChange === "function")
        this.handleChange(e.target.value);
    }
  }
};
</script>