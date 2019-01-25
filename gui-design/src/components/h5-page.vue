<template>
  <div class="gui-h5-page" @click="unselect">
    <div class="gui-h5-page-wapper" :style="style">
      <gui-h5-element v-for="(item,i) in page.elements" :key="i" :model="item" @click.native.stop="select(item,i)" ref="elements"> </gui-h5-element>
    </div>
    <gui-h5-drag v-model="page.elements[element_selected_index]" v-if="dragable" @change="update"></gui-h5-drag>
  </div>
</template>
<script>
  import TextElement from "./elements/TextElement";
  import ImageElement from "./elements/ImageElement";
  import PageElement from "./elements/PageElement";
  export default {
    props: {
      value: {
        type: PageElement,
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
      },
      style(){
        const css = this.page.getStyle();
        return {
          width:this.width+'px',height:this.height+'px',
          ...css
        }
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
        let element = null;//new TextElement();
        if(options.type=="image"){
          element =new ImageElement();
        }else{
          element =new TextElement();
        }
        element.propertys = {
          ...element.propertys,
          x:options.x,
          y:options.y
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
        this.$emit("unselect");
      },
      playAnimate(index){
        if(this.element_selected_index>-1&&this.element_selected_index<this.$refs.elements.length){
          this.$refs.elements[this.element_selected_index].playAnimate(index);
        }
        else{
          this.$refs.elements.map((el)=>{
              el.playAnimate(-1);
          })
        }
          
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
