import Element from "./Element";
class ImageElement extends Element{
    constructor(){

        super();
        this.addProperty('src','image',{},'图片',"");
        

    }

    render(){
        var p=this.propertys;
        var image =``;
        if(p.src){
            image =`<img src="${p.src}" style="max-width:100%" />`
        }
        return `<div>${image}</div>`;
    }

    
}

export default ImageElement;
