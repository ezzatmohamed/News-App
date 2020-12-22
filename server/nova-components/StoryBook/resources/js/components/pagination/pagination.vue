<template>
  <div>
    <div class="pagination">
      <div class="page-button page-prev">
        <button-input text="Prev" :disabled="!isPrev" type="button" :handleClick="onPrev" />
      </div>

      <p class="page-number">Page: {{currentPage}}</p>

      <div class="page-button page-next">
        <button-input text="Next" :disabled="!isNext" type="button" :handleClick="onNext" />
      </div>
    </div>
  </div>
</template>
<script>
import "./pagination.css";
export default {
  name: "pagination",
  props: {
    currentPage: {
      type: String,
      default: ""
    },
    handleNext: {
      type: Function
    },
    handlePrev: {
      type: Function
    },
    isNext: {
      type: Boolean,
      default: true
    },
    isPrev: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onNext() {
      if (typeof this.handleNext === "function") this.handleNext();
    },
    onPrev() {
      if (typeof this.handlePrev === "function") this.handlePrev();
    }
  }
};
</script>