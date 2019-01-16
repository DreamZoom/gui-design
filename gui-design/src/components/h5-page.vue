<template>
  <div class="gui-h5-page" @click="unselect">
    <div class="gui-h5-page-wapper" :style="{width:width+'px',height:height+'px'}">
      <gui-h5-element v-for="(item,i) in page.elements" :key="i" :model="item" @click.native.stop="select(item,i)"> </gui-h5-element>
    </div>
    <gui-h5-drag v-model="page.elements[element_selected_index]" v-if="dragable" @change="update"></gui-h5-drag>
  </div>
</template>
<script>
  import TextElement from "./elements/TextElement";
  export default {
    props: {
      value: {
        type: Object,
        required: true
      },
      editable: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 320
      },
      height: {
        type: Number,
        default: 568
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
    computed: {
      dragable() {
        return this.element_selected_index > -1 && this.editable;
      }
    },
    watch: {
      value(v, o) {
        this.init();
      }
    },
    methods: {
      init() {
        this.page = this.value;
        this.element_selected_index = -1;
        const page = this.page;
        page.elements = page.elements || [];
      },
      update() {
        this.$forceUpdate();
      },
      addElement(options) {
        const element = new TextElement();
        element.propertys = {
          ...element.propertys,
          ...options
        };
        this.page.elements.push(element);
        console.log(element);
      },
      select(item, i) {
        if (!this.editable) return;
        this.element_selected_index = i;
        this.$emit("select", item);
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
  .gui-h5-page-wapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    overflow: hidden;
  }
</style>
