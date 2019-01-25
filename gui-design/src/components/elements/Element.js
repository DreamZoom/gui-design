class Element{
    constructor(){

        this.addProperty('x','number',{},'横坐标',100);
        this.addProperty('y','number',{},'纵坐标',100);
        this.addProperty('width','number',{},'宽度',100);
        this.addProperty('height','number',{},'高度',100);
        this.addProperty('rotate','number',{},'旋转',0);

        this.addProperty('backgroundColor','color',{},'背景色','#fff');
        this.addProperty('color','color',{},'前景色','#000');

        this.animations=[];

    }

    addProperty(name,type,meta,label,defaultValue){


        this.propertys=this.propertys||{};
        this.__proto__.attributes=this.__proto__.attributes||[];
        this.propertys[name]=defaultValue;
        if(this.__proto__.attributes.some(item=>item.name==name)) return;
        this.__proto__.attributes.push({name,type,meta,label,defaultValue});
    }

    deleteProperty(name){
        this.__proto__.attributes=this.__proto__.attributes||[];
        if(this.__proto__.attributes.some(item=>item.name==name)) {
            this.__proto__.attributes.splice(this.__proto__.attributes.findIndex(item => item.name === name), 1)
        }
    }

    render(){
        return `<div>hello</div>`;
    }


    getPostionStyle(){
        const {
            x = 0, y = 0, width = 100, height = 100, rotate = 0
        } = this.propertys;
        const left = x - width / 2;
        const top = y - height / 2;
        return {
            left: left + "px",
            top: top + "px",
            width: width + "px",
            height: height + "px",
            transform: 'rotateZ(' +rotate + 'deg)'
        }
    }

    getStyle(){
        const property = this.propertys;
        return {
            backgroundColor:property.backgroundColor,
            color:property.color
        }
    }

    getAnimations(){
        var animations = this.animations||[];
        return animations.map(item=>{
            // return {
            //     animationName:item.animationName ,
            //     animationDelay:item.animationDelay+"s",
			//     animationDuration:item.animationDuration+"s",
			//     animationIterationCount:item.animationIterationCount==0?"infinite":item.animationIterationCount,
            // }
            return `${item.animationName} ${item.animationDuration}s ${item.animationDelay}s ${item.animationIterationCount==0?"infinite":item.animationIterationCount}`;
        });
    }
    
}

export default Element;