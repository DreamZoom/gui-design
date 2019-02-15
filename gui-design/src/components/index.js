import h5_page from "./h5-page";
import h5_editor from "./h5-editor";
import h5_drag from "./h5-drag";
import h5_element from "./h5-element";
import h5_menubar from "./h5-menubar";
import h5_viewer from "./h5-viewer";

import celleditor from "./celleditor/cell-editor.vue";
import propertygrid from "./property-grid";

import h5_animate_editor from "./h5-animate-editor";
import template_editor from "./template-editor";

import fieldObject from "./fields/field-object.vue";
import fieldArray from "./fields/field-array.vue";
import template_form_editor from "./template-form-editor";
const components={
    'h5-page':h5_page,
    'h5-editor':h5_editor,
    'h5-drag':h5_drag,
    'h5-element':h5_element,
    'h5-menubar':h5_menubar,
    'h5-viewer':h5_viewer,
    'property-grid':propertygrid,
    'cell-editor':celleditor,
    'h5-animate-editor':h5_animate_editor,
    'template-editor':template_editor,
    'field-object':fieldObject,
    'field-array':fieldArray,
    'template-form-editor':template_form_editor
}


const install=function(Vue,opts){
    if(install.installed) return ;

    Object.keys(components).forEach((key)=>{
        Vue.component("gui-"+key, components[key]);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}


export default {
    install
}