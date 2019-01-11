<template>
    <div class="gui-h5-editor">
        <div class="gui-h5-editor-tools">
            <div class="h5-tool-item" v-for="(item,i) in tools" @click="tools_selected_index=i" :key="i" :class="tools_actived(item,i)">{{item.text}}</div>
        </div>
        <gui-h5-menubar></gui-h5-menubar>
        <table>
            <tr>
                <td valign="top">
                    <div class="gui-h5-editor-main" :style="editor_style">
                        <div class="gui-h5-editor-main-page" :class="{actived:page_selected_index==i}" v-for="(item,i) in pages" :key="i" :style="page_style" @click="evt=>{onPageClick(evt,i)}">
                            <gui-h5-page :editable="page_selected_index==i" v-model="pages[i]" ref="page" @select="onElementSelect"></gui-h5-page>
                        </div>
                        <div class="gui-h5-editor-addpage" @click="addPage">+</div>
                    </div>
                </td>
                <td valign="top">
                    <div class="property-panel">
                        <gui-property-grid :attributes="attributes" v-model="element_selected" v-if="element_selected"></gui-property-grid>
                    </div>
                </td>
            </tr>
        </table>
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
                tools: [{
                    text: "文本",
                    type: "text"
                }, {
                    text: "图片",
                    type: "image"
                }],
                tools_selected_index: -1,
                pages: [],
                page_selected_index: -1,
                attributes: [{
                    text: "文本",
                    type: 'text'
                }],

                element_selected:null
            }
        },
        mounted() {},
        methods: {
            addPage() {
                this.pages.push({
                    elements: []
                });
                this.page_selected_index = this.pages.length - 1;
            },
            addElement(evt, i) {
                const x = evt.offsetX;
                const y = evt.offsetY;
                console.log(evt);
                if (this.tools_selected_index > -1) {
                    this.$refs.page[i].addElement({
                        x,
                        y
                    });
                    this.tools_selected_index = -1;
                }
            },
            onPageClick(evt, i) {
                this.page_selected_index = i;
                this.addElement(evt, i);
            },
            tools_actived(tool, i) {
                if (this.tools_selected_index == i) {
                    return "actived"
                }
                return "";
            },
            onElementSelect(el){
                this.element_selected=el;
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
    .gui-h5-editor ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    .gui-h5-editor ::-webkit-scrollbar-thumb {
        background: #c5c5c5;
        border-radius: 10px;
        border: whiteSmoke solid 3px;
    }
    .gui-h5-editor ::-webkit-scrollbar-track {
        background: whiteSmoke;
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
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
        overflow-y: auto;
    }
    .h5-tool-item {
        padding: 5px;
        display: inline-block;
        font-size: 12px;
    }
    .h5-tool-item:hover,
    .h5-tool-item.actived {
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
    .gui-h5-editor-main-page.actived {
        outline: 1px solid #59c7f9;
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
