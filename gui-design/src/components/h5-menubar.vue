<template>
    <div class="gui-menu-bar">
        <div class="gui-menu-item">
            <i class="fa fa-undo"></i>
        </div>
        <div class="gui-menu-item">
            <i class="fa fa-repeat"></i>
        </div>
        <div class="gui-menu-item">
             <popover placement="top-start"  trigger="click">
                <sketch v-model="propertys.color" />
                <i slot="reference" class="fa fa-font"></i>
            </popover>
        </div>
        <div class="gui-menu-item">
            <popover placement="top-start"  trigger="click">
                <sketch v-model="propertys.color" />
                <i slot="reference" class="fa fa-stop"></i>
            </popover>
        </div>
        <div class="gui-menu-item">
            <popover placement="top-start"  trigger="click">
                <gui-propertygrid :attributes="attributes"></gui-propertygrid>
                <i slot="reference" class="fa fa-cog"></i>
            </popover>
        </div>
    </div>
</template>
<script>
    import {
        ColorPicker,
        Popover
    } from "element-ui";
    import { Sketch } from 'vue-color'
    export default {
        components: {
            colorPicker: ColorPicker,
            popover: Popover,
            sketch:Sketch
        },
        data() {
            return {
                menus: [],
                propertys:{
                    color:"#fff"
                },
                attributes:[{text:"文本",type:String}]
            }
        },
        mounted() {
            this.addMenu("撤销", "fa-undo", () => {
                this.$emit("cmd", {
                    cmd: "undo"
                })
            });
            this.addMenu("重做", "fa-repeat", () => {
                this.$emit("cmd", {
                    cmd: "redo"
                })
            });
            // this.addMenu("居左","fa-align-left");
            // this.addMenu("居中","fa-align-center");
            // this.addMenu("居右","fa-align-right");
            // this.addMenu("两端对齐","fa-align-justify");
            this.addMenu("前景色", "fa-font", () => {
                this.$emit("cmd", {
                    cmd: "color"
                })
            });
            this.addMenu("背景色", "fa-stop", () => {
                this.$emit("cmd", {
                    cmd: "background"
                })
            });
            this.addMenu("删除", "fa-trash", () => {
                this.$emit("cmd", {
                    cmd: "delete"
                })
            });
        },
        methods: {
            addMenu(text, icon, func) {
                this.menus.push({
                    text,
                    icon,
                    func
                });
            }
        }
    }
</script>
<style>
    .gui-menu-bar {
        border-bottom: solid 1px #ccc;
    }
    .gui-menu-item {
        display: inline-block;
        padding: 10px;
    }
    .gui-menu-item:hover {
        background-color: #efefef;
        cursor: pointer;
    }
    .vc-sketch{
        box-shadow: none !important;
    }
</style>
