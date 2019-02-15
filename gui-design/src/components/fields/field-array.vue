<template>
    <div>
        <div v-for="(item,i) in value" :key="i">
             <gui-field-object v-model="value[i]">
                 <template slot-scope="scope">
                     <slot :model="scope.model"></slot>
                 </template>
             </gui-field-object>         
        </div>
        <div>
            <div @click="addRow">add</div>
        </div>  
    </div>
</template>

<script>
    export default {
        props: {
            value: Array,

        },
        mounted() {
            if (!this.value) {
                //this.value = [];
                this.$emit("input", []);
            }
            console.log(this);
        },
        methods:{
            addRow(){
                this.value.push({});
            }
        }
    }
</script>

