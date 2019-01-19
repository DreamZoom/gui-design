<template>
     <div class="template-editor">
        <section class="section-template" @click="handleSelected" ref="html">
            <component :is="component" ></component>
        </section>

        <section>

        </section>
    </div>
</template>
<script>
export default {
    props:{
        value:String
    },
    methods:{
        handleSelected(evt){
            console.log(evt);
        }
    }
}
</script>
