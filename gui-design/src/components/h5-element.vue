<template>
    <div class="gui-h5-element" :style="style" >
        <div class="gui-h5-element-box" :style="style2" ref="element">
            <component :is="component" />
        </div> 
    </div>
</template>
<script>
    import Element from "./elements/Element"
    export default {
        props: {
            model: Element
        },
        mounted() {},
        computed: {
            style() {
                const postion = this.model.getPostionStyle();
               
                return { ...postion };
            },
            style2(){
                 const style = this.model.getStyle();
                return {...style};
            },
            component() {
                console.log(this.model.render());
                return {
                    template: this.model.render()
                }
            }
        },
        methods: {
            playAnimate(index) {
                var animations = this.model.getAnimations();
                console.log(index);
                console.log(animations);
                var element = this.$refs.element;
                if (index > -1 && index < animations.length) {
                    var ani = animations[index];
                    console.log(ani);
                    element.style.animation="";
                    setTimeout(()=>{
                        element.style.animation=ani;
                    },100)
                    
                } else {
                    element.style.animation="";
                    setTimeout(()=>{
                        element.style.animation=animations.join(',');
                    },100);
                }
            }
        }
    }
</script>
<style>
    .gui-h5-element {
        position: absolute;
    }
    .gui-h5-element-box{
        width:100%;
        height: 100%;
    }
</style>
