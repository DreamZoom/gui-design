<template>
    <div class="gui-h5-element" :style="style">
        <component :is="component"/>
    </div>
</template>
<script>
import Element from "./elements/Element"
    export default {
        props: {
            model: Element
        },
        mounted() {
        },
        computed: {
            style() {
                const postion=this.model.getPostionStyle();
                const style = this.model.getStyle();
                return {...postion,...style};
            },
            component(){
                console.log(this.model.render());
                return {
                    template:this.model.render()
                }
            }
        }
    }
</script>
<style>
.gui-h5-element{
    position: absolute;
}
</style>
