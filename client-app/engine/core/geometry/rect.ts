
export default class Rect {

    x:number;
    y:number;
    width:number;
    height:number;
    right:number;
    bottom:number;

    constructor(x:number = 0,y:number = 0,width:number = 0,height:number = 0){
        this.set(x,y,width,height);
    }

    set(x:number,y:number,width:number,height:number){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.right = this.x+this.width;
        this.bottom = this.y+this.height;
    }

    addXY(x:number,y:number):Rect{
        this.x = x;
        this.y = y;
        return this;
    }

}