<template>
    <div>

        <!-- <gui-template-editor v-model="html"></gui-template-editor> -->
        
        <table>
            <tr>
                <td>
                    <gui-h5-editor v-model="h5" @input="oninput"></gui-h5-editor>
                </td>
                <td>
                     <gui-h5-viewer v-model="h5"></gui-h5-viewer>
                </td>
            </tr>
        </table>
       

        <div>
            {{json}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            html:"",
            h5:{

            }
        }
    },
    computed:{
        json(){
            return JSON.stringify(this.h5);
        }
    },
    methods:{
        oninput(){

            this.h5 = {...this.h5};
        }
    }
}
</script>
