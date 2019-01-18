<template>
    <div style="padding:0 10px" class="gui-animate-editor">
        <gui-collapse v-model="activeNames">
            <gui-collapse-item v-for="(item,i) in animations" :key="i" :name="i">
                <template slot="title">
                    <div class="animation-item-header">
                        <span>动画{{i+1}}</span><span class="gui-animate-action"><i class="fa fa-trash-o" @click.stop="deleteAnimate(i)"></i><i class="fa fa-play-circle-o" @click.stop="playAnimate(i)"></i></span>
                    </div>
                   
                </template>
                <gui-property-grid :attributes="attributes" v-model="animations[i]"></gui-property-grid>
            </gui-collapse-item>
        </gui-collapse>
        <div class="gui-actions">
            <gui-button @click="addAnimate" round size="mini">添加动画</gui-button>
            <gui-button @click="playAnimate(-1)" round size="mini">播放动画</gui-button>
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
        props:{
            value:{
                type:Array,
                required:true
            }
        },
        data() {
            return {
                activeNames: [],
                attributes: []
            };
        },
        mounted() {
            var attributes = [];
            var range = [];
            range.push({
                label: "淡入",
                value: "bounce"
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
        computed:{
            animations(){
                this.value = this.value||[];
                return this.value;
            }
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
                this.$emit("input",this.value);
            },
            deleteAnimate(i){
               this.animations.splice(i,1);
               console.log(this.value);
               this.$emit("input",this.value);
            },
            playAnimate(i){
                this.$emit("play-animate",i);
            }
        }
    }
</script>
<style>
.animation-item-header{
    flex: 1;
}
.gui-animate-editor .delete{
    margin-left: 20px;
    display: inline-block;
    width: 24px;
}
.gui-animate-editor .gui-animate-action{
    float: right;
}
.gui-animate-editor .gui-animate-action i{
    margin-right: 5px;
    color: #888;
}
.gui-animate-editor .gui-animate-action i:hover{
    color: #000;
}
    .gui-actions {
        text-align: center;
        margin-top: 20px;
    }
</style>
