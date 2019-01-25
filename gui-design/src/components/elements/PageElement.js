import Element from "./Element";
class PageElement extends Element{
    constructor(){

        super();
        this.deleteProperty('x');
        this.deleteProperty('y');
        this.deleteProperty('width');
        this.deleteProperty('height');
        this.deleteProperty('rotate');
        this.elements=[];

    }  

    getPostionStyle(){
        return {
            
        }
    }
}

export default PageElement;
