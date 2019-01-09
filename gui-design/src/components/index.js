import h5_page from "./h5-page";
import h5_editor from "./h5-editor";
import h5_drag from "./h5-drag";
import h5_element from "./h5-element";
import h5_menubar from "./h5-menubar";
import propertygrid from "./propertygrid";

const components={
    'h5-page':h5_page,
    'h5-editor':h5_editor,
    'h5-drag':h5_drag,
    'h5-element':h5_element,
    'h5-menubar':h5_menubar,
    propertygrid
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