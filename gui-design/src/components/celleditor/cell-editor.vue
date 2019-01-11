<template>
    <div class="gui-cell-editor">
        <gui-input-number v-if="p.type=='number'" size="mini" v-model="value"></gui-input-number>
        <gui-input v-if="p.type=='text'" v-model="value" size="mini"></gui-input>
        <gui-color-picker v-if="p.type=='color'" v-model="value" size="mini" popper-class="gui-cell-editor-picker"></gui-color-picker>
        <gui-upload v-if="p.type=='image'" class="gui-image-uploader" action="http://image.service.sqhm.cn/upload" :show-file-list="false" :on-success="handleUploadSuccess">
            <img v-if="value" :src="value" class="gui-image">
            <span v-else class="gui-image-uploader-icon">+</span>
        </gui-upload>
    </div>
</template>
<script>
    import {
        InputNumber,
        Input,
        ColorPicker,
        Upload
    } from "element-ui";
    export default {
        components: {
            'gui-input': Input,
            'gui-input-number': InputNumber,
            'gui-color-picker': ColorPicker,
            'gui-upload': Upload
        },
        props: {
            value: Object
        },
        data() {
            return {
                p: {
                    type: "image",
                    label: "文本",
                }
            }
        },
        methods:{
            handleUploadSuccess(res, file){
                this.$emit("input",res.data.fileUrl);
            }
        }
    }
</script>
<style>
    .gui-cell-editor {
        padding-left: 5px;
    }
    .gui-cell-editor-picker .el-color-dropdown__link-btn {
        border: 1px solid #dcdcdc;
        color: #409EFF;
        line-height: 24px;
        border-radius: 2px;
        padding: 0 20px;
        cursor: pointer;
        background-color: transparent;
        outline: 0;
        font-size: 12px;
    }
    .gui-image-uploader{
        display: inline-block;
        border: #409EFF 1px solid;
        height: 26px;
    }
    .gui-image-uploader-icon{
        display: inline-block;
        font-size: 26px;
        line-height: 26px;
        width: 26px;
        text-align: center;
    }
</style>
