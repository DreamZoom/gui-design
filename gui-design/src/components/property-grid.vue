<template>
    <div>
        <table class="gui-property-grid">
            <tbody>
                <tr v-for="(item,i) in attributes" :key="i">
                    <td class="name"><span class="gui-property-grid-label">{{item.label}}</span></td>
                    <td>
                        <gui-cell-editor :type="item.type" v-model="value[item.name]" :meta="item.meta"></gui-cell-editor>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            attributes: {
                type: Array,
                required: true
            },
            value: Object
        },
        watch: {
            value(v) {
                if (!v) {
                    this.value = {};
                }
            }
        },
        mounted(){
            console.log(this.value);
        }
    }
</script>
<style>
    .gui-property-grid {
        width: 100%;
        /* border: #eee solid 1px; */
        font-size: 12px;
    }
    .gui-property-grid thead {
        background-color: #eee;
    }
    .gui-property-grid .name {
        width: 100px;
    }
    .gui-property-grid-label{
        display: inline-block;
        width: 100%;
        text-align: right;
        color: #444;
        
    }
</style>
