<template>
    <div class="gui-h5-editor">
        <div class="gui-h5-editor-tools">
            <div class="h5-tool-item" v-for="(item,i) in tools" @click="tools_selected_index=i" :key="i" :class="tools_actived(item,i)">{{item.text}}</div>
        </div>
        <gui-h5-menubar></gui-h5-menubar>
        
        <div class="gui-h5-editor-main" :style="editor_style">
            <div class="gui-h5-editor-main-page" v-for="(item,i) in pages" :key="i" :style="page_style" @click="evt=>{onPageClick(evt,i)}">
                <gui-h5-page v-model="pages[i]" ref="page"></gui-h5-page>
            </div>
            <div class="gui-h5-editor-addpage" @click="addPage">+</div>
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
                    width: (this.width + 20) + "px",
                    height: (this.height + 20) + "px"
                }
            },
            page_style() {
                return {
                    width: this.width + "px",
                    height: this.height + "px"
                }
            }
        },
        data() {
            return {
                tools:[{text:"文本",type:"text"},{text:"图片",type:"image"}],
                tools_selected_index:-1,
                menus:[{
                    text:"",
                    icon:""
                }],
                pages: [],
                page_selected_index:-1
            }
        },
        mounted(){
            const menus =[];
            menus.push({
                text:"undo"
            });

        },
        methods: {
            addPage() {
                this.pages.push({
                    elements: []
                });
                this.page_selected_index=this.pages.length-1;
            },
            addElement(evt,i){
                
                const x = evt.offsetX;
                const y = evt.offsetY;
                console.log(evt);
                if(this.tools_selected_index>-1){
                    this.$refs.page[i].addElement({x,y});
                    this.tools_selected_index=-1;
                }
            },
            onPageClick(evt,i){
                this.page_selected_index=i;
                this.addElement(evt,i);
            },
            tools_actived(tool,i){
                if(this.tools_selected_index==i){
                    return "actived"
                }
                return "";
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
        background: whiteSmoke;
        border-bottom: 1px solid #e0e0e0;
    }
    .gui-h5-editor-main {
        padding: 20px;
        background-color: #ebebeb;
        height: 650px;
        overflow: hidden;
        overflow-y: auto;
    }
    .h5-tool-item {
        padding: 5px;
        display: inline-block;
        font-size: 12px;
    }
    .h5-tool-item:hover ,.h5-tool-item.actived{
        background: #eeeeee;
        cursor: default;
    }
    .gui-h5-editor-main-page {
        text-align: center;
    }
    .gui-h5-editor-main .gui-h5-editor-main-page {
        margin-top: 20px;
        margin-bottom: 40px;
    }
    .gui-h5-editor-addpage {
        font-size: 90px;
        padding: 20px;
        text-align: center;
        background: #fff;
        color: #ccc;
    }
    .gui-h5-editor-addpage:hover {
        color: #888;
        cursor: pointer;
    }
</style>
