<template>
    <div>
        <gui-template-form-editor :template="template" ref="editor"></gui-template-form-editor>

        <!-- <gui-template-editor v-model="html"></gui-template-editor> -->
        
        <!-- <table>
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
        </div> -->

        <div @click="showJson">show</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            html:"",
            h5:{

            },
            template:`
            <div>
                <gui-field-object v-model="model">
                    <template slot-scope="scope">
                        患者姓名:
                        <gui-cell-editor v-model="scope.model.title" type="text"></gui-cell-editor>

                        回访记录:
                        <gui-field-array v-model="scope.model.visits">
                            <template slot-scope="scope2">
                                <table>
                                    <tr>
                                        <td><gui-cell-editor v-model="scope2.model.record" type="text"></gui-cell-editor></td>
                                        <td><gui-cell-editor v-model="scope2.model.record1" type="text"></gui-cell-editor></td>
                                        <td><gui-cell-editor v-model="scope2.model.record2" type="text"></gui-cell-editor></td>
                                    </tr>
                                </table>
                                
                            </template>
                        </gui-field-array>
                    </template>
                </gui-field-object>
            </div>
            `
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

        ,
        showJson(){
            var json = this.$refs.editor.getModel();
            var str = JSON.stringify(json);
            alert(str);
        }
    }
}
</script>
