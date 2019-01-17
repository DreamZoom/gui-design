<template>
    <div style="padding:10px" class="gui-animate-editor">
        <gui-collapse v-model="activeNames">
            <gui-collapse-item v-for="(item,i) in animations" :key="i" :name="i">
                <template slot="title">
                   <span>动画{{i+1}}</span><span class="delete">X</span>
                </template>
                <gui-property-grid :attributes="attributes" v-model="animations[i]"></gui-property-grid>
            </gui-collapse-item>
        </gui-collapse>
        <div class="gui-actions">
            <gui-button @click="addAnimate">添加动画</gui-button>
        </div>
    </div>
</template>
<script>
    import {
        Collapse,
        CollapseItem,
        Button
    } from "element-ui"
    export default {
        components: {
            'gui-collapse': Collapse,
            'gui-collapse-item': CollapseItem,
            'gui-button': Button
        },
        data() {
            return {
                activeNames: [],
                animations: [],
                attributes: []
            };
        },
        mounted() {
            var attributes = [];
            var range = [];
            range.push({
                label: "淡入",
                value: "fadeIn"
            });
            range.push({
                label: "淡出",
                value: "fadeOut"
            });
            attributes.push({
                name: "animationName",
                type: "select",
                meta: {
                    range: range
                },
                label: "动画",
                defaultValue: ""
            });
            attributes.push({
                name: "animationDuration",
                type: "number",
                meta: {},
                label: "时长",
                defaultValue: ""
            });
            attributes.push({
                name: "animationDelay",
                type: "number",
                meta: {},
                label: "延时",
                defaultValue: ""
            });
            attributes.push({
                name: "animationIterationCount",
                type: "number",
                meta: {},
                label: "次数",
                defaultValue: ""
            });
            this.attributes = attributes;
        },
        methods: {
            addAnimate() {
                this.animations.push({
                    animationName: "",
                    animationDuration: 1,
                    animationDelay: 0,
                    animationIterationCount: 1,
                    animationDirection: false
                });
            }
        }
    }
</script>
<style>
.gui-animate-editor .delete{
    margin-left: 20px;
    display: inline-block;
    width: 24px;
}
    .gui-actions {
        text-align: center;
        margin-top: 20px;
    }
</style>
