import Element from "./Element";
class TextElement extends Element{
    constructor(){

        super();
        this.addProperty('text','text',{},'文本',"请输入文本");
        this.addProperty('lineHeight','number',{},'行高',50);
        this.setValue("width",200);
        this.setValue("height",50);
        

    }

    render(){
        var p=this.propertys;
        return `<div>${p.text}</div>`;
    }

    getStyle(){
        const style=  super.getStyle();
        return {
            ...style,
            lineHeight:this.propertys.lineHeight+"px"
        }
    }
    
}

export default TextElement;
