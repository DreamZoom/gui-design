import Element from "./element";
class TextElement extends Element{
    constructor(){

        super();
        this.addProperty('text','text',{},'文本',"");
        

    }

    render(){
        return `<div>hello</div>`;
    }

    
}

export default TextElement;
