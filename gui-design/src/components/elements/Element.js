class Element{
    constructor(){

        this.addProperty('x','number',{},'横坐标',100);
        this.addProperty('y','number',{},'纵坐标',100);
        this.addProperty('width','number',{},'宽度',100);
        this.addProperty('height','number',{},'高度',100);
        this.addProperty('rotate','number',{},'旋转',0);
        this.addProperty('backgroundColor','color',{},'背景色','#ccc');

    }

    addProperty(name,type,meta,label,defaultValue){


        this.propertys=this.propertys||{};
        this.__proto__.attributes=this.__proto__.attributes||[];
        this.propertys[name]=defaultValue;
        if(this.__proto__.attributes.some(item=>item.name==name)) return;
        this.__proto__.attributes.push({name,type,meta,label,defaultValue});
    }

    render(){
        return `<div>hello</div>`;
    }

    
}

export default Element;