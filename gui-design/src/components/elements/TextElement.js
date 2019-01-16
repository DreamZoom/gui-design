import Element from "./Element";
class TextElement extends Element{
    constructor(){

        super();
        this.addProperty('text','text',{},'文本',"");
        

    }

    render(){
        var p=this.propertys;
        return `<div>${p.text}</div>`;
    }

    
}

export default TextElement;
