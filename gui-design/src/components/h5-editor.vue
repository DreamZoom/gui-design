<template>
    <div class="gui-h5-editor" :style="editor_style">
        <gui-h5-page v-model="page"></gui-h5-page>
    </div>
</template>
<script>
export default {
    props:{
        width:{
            type:Number,
            default:320
        },
        height:{
            type:Number,
            default:640
        },
    },
    computed:{
        editor_style(){
            return {
                width:this.width+"px",
                height:this.height+"px"
            }
        }
    },
    data(){
        return {
            page:{}
        }
    }
}
</script>
<style scoped>
.gui-h5-editor{
    padding: 20px;
    display: inline-block;
    position: relative;
    outline: 1px solid #eee;
}
</style>
