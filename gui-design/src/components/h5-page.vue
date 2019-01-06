<template>
  <div class="gui-h5-page">
    <div v-for="(item,i) in page.elements" :key="i">{{i}}</div>

    <gui-h5-drag></gui-h5-drag>
  </div>
</template>
<script>
export default {
  props: {
    value: { type: Object, required: true }
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      page: this.value
    };
  },
  methods: {
    init() {
      const page = this.page;
      page.elements = page.elements || [];
      this.addElement();
      this.addElement();
      this.addElement();
      console.log(page);
      this.$forceUpdate();
    },

    addElement() {
      this.page.elements.push({
        propertys: {}
      });
    },
    onMouseMove() {
      console.log(arguments);
    }
  }
};
</script>
<style scoped>
.gui-h5-page {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
}
</style>
