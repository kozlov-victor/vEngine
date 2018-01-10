
import Point2d from "./point2d";
import Size from "./size";

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

    private onSet(){
        this.right = this.x+this.width;
        this.bottom = this.y+this.height;
    }

    set(x:number,y:number,width:number,height:number){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.onSet();
        return this;
    }

    addXY(x:number,y:number):Rect{
        this.x+=x;
        this.y+=y;
        this.onSet();
        return this;
    }

    addPoint(another:Point2d){
        this.addXY(another.x,another.y);
        return this;
    }

    clone(){
        return new Rect(this.x,this.y,this.width,this.height);
    }


    toJSON(){
        return {x:this.x,y:this.y,width:this.width,height:this.height};
    }

    fromJSON(x,y,width,height){
        this.set(x,y,width,height);
    }

}