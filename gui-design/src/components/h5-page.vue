<template>
  <div class="gui-h5-page" @click="unselect">
    <div class="gui-h5-page-wapper">
      <gui-h5-element v-for="(item,i) in page.elements" :key="i" :model="item" @click.native.stop="select(item,i)"> </gui-h5-element>
    </div>
    <gui-h5-drag v-model="page.elements[element_selected_index]" v-if="dragable" @change="update"></gui-h5-drag>
    <div class="gui-h5-page-actions" v-if="editable">
      <div class="action-item">
        <i class="fa fa-arrow-up"></i>
      </div>
      <div class="action-item">
        <i class="fa fa-arrow-down"></i>
      </div>
      <div class="action-item">
        <i class="fa fa-cog"></i>
      </div>
    </div>
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
    methods: {
      init() {
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
        this.$emit("select",item);
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
  .gui-h5-page-actions {
    position: absolute;
    left: 100%;
    top: 50%;
  }
</style>
