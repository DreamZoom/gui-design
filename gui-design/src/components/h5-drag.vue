<template>
  <div ref="drag" class="gui-h5-dragbox" :style="style" @click.stop="onClick">
    <div class="gui-h5-drag-resize gui-h5-drag-translate" @mousedown.stop="onMoveStart"></div>
    <div class="gui-h5-drag-resize gui-h5-drag-point gui-h5-drag-resize-n" @mousedown.stop="evt=>{onResizeStart(evt,'n')}"></div>
    <div class="gui-h5-drag-resize gui-h5-drag-point gui-h5-drag-resize-w" @mousedown.stop="evt=>{onResizeStart(evt,'w')}"></div>
    <div class="gui-h5-drag-resize gui-h5-drag-point gui-h5-drag-resize-e" @mousedown.stop="evt=>{onResizeStart(evt,'e')}"></div>
    <div class="gui-h5-drag-resize gui-h5-drag-point gui-h5-drag-resize-s" @mousedown.stop="evt=>{onResizeStart(evt,'s')}"></div>
    <div class="gui-h5-drag-resize gui-h5-drag-point gui-h5-drag-resize-nw" @mousedown.stop="evt=>{onResizeStart(evt,'nw')}"></div>
    <div class="gui-h5-drag-resize gui-h5-drag-point gui-h5-drag-resize-ne" @mousedown.stop="evt=>{onResizeStart(evt,'ne')}"></div>
    <div class="gui-h5-drag-resize gui-h5-drag-point gui-h5-drag-resize-sw" @mousedown.stop="evt=>{onResizeStart(evt,'sw')}"></div>
    <div class="gui-h5-drag-resize gui-h5-drag-point gui-h5-drag-resize-se" @mousedown.stop="evt=>{onResizeStart(evt,'se')}"></div>
    <div class="gui-h5-drag-resize gui-h5-drag-resize-rotate" @mousedown.stop="onRotateStart"></div>
  </div>
</template>
<script>
  //draggable="true" @dragstart="onDragStart" @drag="onDrag" @dragend="onDragEnd"
  export default {
    props:{
        value:{
          type:Object,
          required:true
        }
    },
    mounted() {
     this.init();
    },
    data() {
      return {
        rect: {
          x: 50,
          y: 0,
          width: 100,
          height: 100,
          rotate: 0
        },
        start: {}
      };
    },
    computed: {
      style() {
        const left=this.rect.x-this.rect.width/2;
        const top=this.rect.y-this.rect.height/2;
        return {
          left: left + "px",
          top: top + "px",
          width: this.rect.width + "px",
          height: this.rect.height + "px",
          transform: 'rotateZ('+this.rect.rotate+'deg)'
        };
      }
    },
    watch:{
      value(v,o){
        this.init();
      }
    },
    methods: {
      init(){
         const {x,y,width,height,rotate} = this.value.propertys;
         this.rect={x,y,width,height,rotate};
      },
      onMoveStart(evt) {
        const distance = {
          x: evt.pageX - this.rect.x,
          y: evt.pageY - this.rect.y
        }
        const context = this;
        document.onmousemove = evt => {
          context.rect.x = evt.pageX - distance.x;
          context.rect.y = evt.pageY - distance.y;
          context.update();
        };
        document.onmouseup = evt => {
          document.onmousemove = document.onmouseup = null;
        }
      },
      onResizeStart(evt, dir) {
        const start = {
         ...this.rect
        }
        const point = {
          x: evt.pageX,
          y: evt.pageY
        }
        const context = this;
        document.onmousemove = evt => {
          const dx = evt.pageX - point.x;
          const dy = evt.pageY - point.y;
          if (dir.indexOf('n') > -1) {
            //context.rect.y = start.y + dy/2;
            context.rect.height = start.height - dy;
          }
          if (dir.indexOf('s') > -1) {
            context.rect.height = start.height + dy;
          }
          if (dir.indexOf('w') > -1) {
            //context.rect.x = start.x + dx/2;
            context.rect.width = start.width - dx;
          }
          if (dir.indexOf('e') > -1) {
            context.rect.width = start.width + dx;
          }
          context.update();
        };
        document.onmouseup = evt => {
          document.onmousemove = document.onmouseup = null;
        }
      },
      onRotateStart(evt) {
        const offset = this.offsetPosition(this.$refs.drag);
        const point = {
          x: offset.left + this.rect.width / 2,
          y: offset.top + this.rect.height / 2
        }
        const context = this;
        document.onmousemove = evt => {
          const px = evt.pageX;
          const py = evt.pageY;
          const rotate = Math.atan2(px - point.x, py - point.y) / Math.PI * 180;
          context.rect.rotate =180 -rotate;
          context.update();
        };
        document.onmouseup = evt => {
          document.onmousemove = document.onmouseup = null;
        }
      },
      offsetPosition(element) {
        var left = 0;
        var top = 0;
        while (element) {
          left += element.offsetLeft;
          top += element.offsetTop;
          element = element.offsetParent;
        }
        return {
          left,
          top
        };
      },
      update(){
        this.value.propertys={
          ...this.value.propertys,
          ...this.rect
        };
        this.$emit("input",this.value);
        this.$emit("change",this.value);
      },
      onClick(){
        console.log("stop pop event");
      }
    }
  };
</script>
<style>
  .gui-h5-dragbox {
    position: absolute;
    background: rgba(red, green, blue, 0);
    left: 0px;
    top: 0px;
    width: 100px;
    height: 100px;
    transform: translate(-50%,-50%);
  }
  .gui-h5-drag-resize {
    position: absolute;
    z-index: 9;
  }
  .gui-h5-drag-resize-n {
    width: 100%;
    height: 5px;
    top: -3px;
    background: url(../assets/point.png) repeat-x center;
    cursor: ns-resize;
  }
  .gui-h5-drag-resize-s {
    width: 100%;
    height: 5px;
    bottom: -3px;
    background: url(../assets/point.png) repeat-x center;
    cursor: ns-resize;
  }
  .gui-h5-drag-resize-e {
    width: 5px;
    height: 100%;
    top: 0;
    right: -3px;
    background: url(../assets/point.png) repeat-y center;
    cursor: ew-resize;
  }
  .gui-h5-drag-resize-w {
    width: 5px;
    height: 100%;
    top: 0;
    left: -3px;
    background: url(../assets/point.png) repeat-y center;
    cursor: ew-resize;
  }
  .gui-h5-drag-resize-nw {
    top: 0;
    left: 0;
    cursor: nwse-resize;
  }
  .gui-h5-drag-resize-ne {
    top: 0;
    right: 0;
    cursor: nesw-resize;
  }
  .gui-h5-drag-resize-sw {
    bottom: 0;
    left: 0;
    cursor: nesw-resize;
  }
  .gui-h5-drag-resize-se {
    bottom: 0;
    right: 0;
    cursor: nwse-resize;
  }
  .gui-h5-drag-resize-rotate {
    width: 1px;
    height: 18px;
    background-color: #44cb83;
    top: -18px;
    left: 50%;
    margin-left: -.5px;
    /* transform: translateX(-50%); */
    z-index: 0;
  }
  .gui-h5-drag-resize-rotate::before {
    content: " ";
    display: block;
    width: 12px;
    height: 12px;
    background-color: #44cb83;
    border: none;
    border-radius: 12px;
    position: absolute;
    left: 50%;
    top: -6px;
    transform: translate(-50%, -50%);
    cursor: crosshair;
  }
  .gui-h5-drag-point::before {
    content: " ";
    display: block;
    width: 12px;
    height: 12px;
    background-color: #fff;
    border: 1px solid #59c7f9;
    border-radius: 12px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .gui-h5-drag-translate {
    width: 100%;
    height: 100%;
    cursor: move;
  }
</style>
