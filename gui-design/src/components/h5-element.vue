<template>
    <div class="gui-h5-element" :style="style">
    </div>
</template>
<script>
    export default {
        props: {
            model: Object
        },
        mounted() {
        },
        computed: {
            style() {
                const {
                    x = 0, y = 0, width = 100, height = 100, rotate = 0
                } = this.model.propertys;
                const left = x - width / 2;
                const top = y - height / 2;
                return {
                    left: left + "px",
                    top: top + "px",
                    width: width + "px",
                    height: height + "px",
                    transform: 'rotateZ(' +rotate + 'deg)'
                };
            }
        }
    }
</script>
<style>
.gui-h5-element{
    position: absolute;
    background: #000;
}
</style>
