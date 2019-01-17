<template>
    <div class="gui-h5-editor">
        <div class="gui-h5-editor-tools">
            <div class="h5-tool-item" v-for="(item,i) in tools" @click="tools_selected_index=i" :key="i" :class="tools_actived(item,i)">{{item.text}}</div>
        </div>
        <div class="gui-h5-editor-wapper">
            <div class="gui-h5-slider" :style="{height:height+'px'}">
                <div class="page-item" v-for="(page,i) in pages" :class="{actived:page_selected_index==i}" :key="i" @click="evt=>{onPageClick(evt,i)}">
                    <span class="number">{{i+1}}</span> <span class="text">第{{i+1}}页</span>
                </div>
                <div class="page-item" @click="addPage">新页面</div>
            </div>
            <div class="gui-h5-editor-main" :style="editor_style" @click="evt=>{addElement(evt,page_selected_index)}">
                <div class="gui-h5-editor-main-page" v-if="page_selected_index>=0">
                    <gui-h5-page :editable="true" v-model="pages[page_selected_index]" :width="width" :height="height" ref="page" @select="onElementSelect"></gui-h5-page>
                </div>
            </div>
            <div class="gui-h5-rightbox">
                <div class="property-panel">
                    <gui-tabs v-model="tabs_active" type="card">
                        <gui-tab-pane label="属性" name="first">
                            <gui-property-grid :attributes="attributes" v-model="element_selected.propertys" v-if="element_selected"></gui-property-grid>
                        </gui-tab-pane>
                        <gui-tab-pane label="动画" name="second">
                            <gui-h5-animation-editor></gui-h5-animation-editor>
                        </gui-tab-pane>
                    </gui-tabs>
                    

                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
 import {
        Tabs,
        TabPane,
    } from "element-ui"
    export default {
        components:{
            'gui-tabs':Tabs,
            'gui-tab-pane':TabPane
        },
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
                attributes: [],
                element_selected: null,
                tabs_active:""
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
                    const tool=this.tools[this.tools_selected_index];
                    this.$refs.page.addElement({
                        x,
                        y,
                        type:tool.type
                    });
                    this.tools_selected_index = -1;
                }
            },
            onPageClick(evt, i) {
                this.page_selected_index = i;
                console.log(this.page_selected_index);
            },
            tools_actived(tool, i) {
                if (this.tools_selected_index == i) {
                    return "actived"
                }
                return "";
            },
            onElementSelect(el) {
                this.element_selected = el;
                console.log(el);
                this.attributes = el.attributes;
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
        width: 6px;
        height: 6px;
    }
    .gui-h5-editor ::-webkit-scrollbar-thumb {
        background: #c5c5c5;
        border-radius: 6px;
        border: whiteSmoke solid 1px;
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
        margin-left: 200px;
        margin-right: 200px;
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
    .gui-h5-editor-wapper {
        position: relative;
    }
    .gui-h5-slider {
        position: absolute;
        width: 200px;
        top: 0px;
        bottom: 0px;
        overflow-y: auto;
        background-color: #fff;
    }
    .gui-h5-slider .page-item {
        font-size: 14px;
        /* text-align: center; */
        background: #fff;
        color: #444;
        padding: 10px;
    }
    .gui-h5-slider .page-item:hover,
    .gui-h5-slider .page-item.actived {
        color: #000;
        background: #ddd;
        cursor: pointer;
    }
    .page-item .number {
        background-color: #ccc;
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: 12px;
        color: #fff;
    }
    .page-item .text {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        text-align: center;
        margin-left: 20px;
    }
    .gui-h5-rightbox {
        position: absolute;
        right: 0px;
        width: 200px;
        top: 0px;
        bottom: 0px;
    }
    .gui-h5-editor-main .gui-h5-editor-main-page {
        margin-top: 20px;
        margin-bottom: 40px;
    }
    .gui-h5-editor-main-page {
        text-align: center;
    }
    .gui-h5-editor-main-page.actived {
        outline: 1px solid #59c7f9;
    }
</style>
