import h5_page from "./h5-page";
import h5_editor from "./h5-editor";
import h5_drag from "./h5-drag";

const components={
    'h5-page':h5_page,
    'h5-editor':h5_editor,
    'h5-drag':h5_drag
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