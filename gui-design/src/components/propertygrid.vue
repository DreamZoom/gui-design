<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>属性</th>
                    <th>值</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,i) in attributes" :key="i">
                    <td>{{item.text}}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props:{
        attributes:{
            type:Array,
            required:true
        },
        value:Object
    },
    watch:{
        value(v){
            if(!v){
                this.value={};
            }
        }
    }
}
</script>
