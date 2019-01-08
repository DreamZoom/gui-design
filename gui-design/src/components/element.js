
class Element{
    constructor(){
        this.propertys={
            x:100,
            y:100,
            width:100,
            height:100,
            rotate:0
        }
    }

    propertys={}

    animations=[]

    render(){
        return `<div>hello</div>`;
    }

    static addProperty(name,type,label,meta){
        Element.attributes=Element.attributes||[];
        Element.attributes.push({
            name,type,label,meta
        });
    }

}

Element.addProperty('x',Number,"横坐标");
Element.addProperty('y',Number,"纵坐标");
Element.addProperty('width',Number,"宽度");
Element.addProperty('height',Number,"高度");

export default Element;
