<template>
    <div>
        <table class="gui-property-grid">
            <thead cellspacing="0" cellpadding="0">
                <tr>
                    <th class="name">属性</th>
                    <th class="value">值</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,i) in attributes" :key="i">
                    <td>{{item.text}}</td>
                    <td>
                        <gui-cell-editor ></gui-cell-editor>
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
        }
    }
</script>
<style>
    .gui-property-grid {
        width: 250px;
        border: #eee solid 1px;
    }
    .gui-property-grid thead {
        background-color: #eee;
    }
    .gui-property-grid thead .name {
        width: 100px;
    }
</style>
