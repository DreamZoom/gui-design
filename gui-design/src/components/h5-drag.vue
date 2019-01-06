<template>
  <div
    ref="drag"
    class="gui-h5-dragbox"
    draggable="true"
    @dragstart="onDragStart"
    @drag="onDrag"
    @dragend="onDragEnd"
    :style="style"
  >
  <div class="gui-h5-drag-resize-w"></div>
  <div class="gui-h5-drag-resize-s"></div>
  <div class="gui-h5-drag-resize-n"></div>
  <div class="gui-h5-drag-resize-e"></div>
  <div class="gui-h5-drag-resize-ns"></div>
  <div class="gui-h5-drag-resize-nw"></div>
  <div class="gui-h5-drag-resize-es"></div>
  <div class="gui-h5-drag-resize-ew"></div>
  <div class="gui-h5-drag-resize-rotaio"></div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      rect: {
        left: 50,
        top: 0,
        width: 100,
        height: 100
      },
      start: {}
    };
  },
  computed: {
    style() {
      return {
        left: this.rect.left + "px",
        top: this.rect.top + "px",
        width: this.rect.width + "px",
        height: this.rect.height + "px"
      };
    }
  },
  methods: {
    onDragStart(evt) {
      this.start = {
        x: evt.pageX,
        y: evt.pageY,
        left: evt.pageX - this.rect.left,
        top: evt.pageY - this.rect.top
      };
    },
    onDrag(evt) {
      if (evt.screenX != 0) {
        this.rect.left = evt.pageX - this.start.left;
        this.rect.top = evt.pageY - this.start.top;
      }
    },
    onDragEnd(evt) {
      //   this.rect.left += evt.pageX - this.start.x;
      //   this.rect.top += evt.pageY - this.start.y;
    }
  }
};
</script>
<style>
.gui-h5-dragbox {
  position: absolute;
  background: #ff0000;
  left: 0px;
  top: 0px;
  width: 100px;
  height: 100px;
}
</style>
