<template>

    <div>
        <component :is="getTemplate()" :model="model"></component>   
    </div>
    
</template>
<script>
export default {

    props:{
        template:String
    },

    data(){

        return {
            model:{}
        }
    },

    methods:{
        getTemplate(){
            console.log(this);

            return {
                template:this.template,
                props:{
                    model:Object
                }
            }

        },
        getModel(){
            return this.model;
        }
    }
    
}
</script>
