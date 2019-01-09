<template>
  <div class="gui-h5-page" @click="unselect" >
    
    <gui-h5-element v-for="(item,i) in page.elements" :key="i" :model="item" @click.native.stop="select(item,i)"> </gui-h5-element>

    <gui-h5-drag v-model="page.elements[element_selected_index]" v-if="element_selected_index>-1" @change="update"></gui-h5-drag>
  </div>
</template>
<script>
  import Element from "./element";
  export default {
    props: {
      value: {
        type: Object,
        required: true
      }
    },
    mounted() {
      this.init();
    },
    data() {
      return {
        page: this.value,
        element_selected_index: -1
      };
    },
    methods: {
      init() {
        const page = this.page;
        page.elements = page.elements || [];
      },
      update(){
        this.$forceUpdate();
      },
      addElement(options) {
        const element = new Element();
        element.propertys={
          ...element.propertys,
          ...options
        };
        this.page.elements.push(element);
        //console.log(element);
      },
      select(item,i) {
        this.element_selected_index = i;
        console.log(item);
      },
      unselect() {
        this.element_selected_index = -1;
      }
    }
  };
</script>
<style scoped>
  .gui-h5-page {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: aliceblue;
  }
</style>
