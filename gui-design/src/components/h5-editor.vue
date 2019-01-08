<template>
    <div class="gui-h5-editor">
        <div class="gui-h5-editor-tools">
            <div class="h5-tool-item">文本</div>
            <div class="h5-tool-item">图片</div>
            <div class="h5-tool-item">图表</div>
        </div>
        <div class="gui-h5-editor-main">
            <gui-h5-page :style="editor_style" v-model="page"></gui-h5-page>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            width: {
                type: Number,
                default: 320
            },
            height: {
                type: Number,
                default: 640
            },
        },
        computed: {
            editor_style() {
                return {
                    width: this.width + "px",
                    height: this.height + "px"
                }
            }
        },
        data() {
            return {
                page: {}
            }
        }
    }
</script>
<style scoped>
    .gui-h5-editor {
        display: inline-block;
        position: relative;
        outline: 1px solid #ccc;
    }
    .gui-h5-editor-tools {
        background-color: #f5f5f5;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }
    .gui-h5-editor-main {
        padding: 20px;
        background-color: #ebebeb;
        overflow: hidden;
    }
    .h5-tool-item {
        padding: 5px;
        display: inline-block;
        font-size: 12px;
    }
    .h5-tool-item:hover {
        background: #eeeeee;
        cursor: default;
    }
</style>
