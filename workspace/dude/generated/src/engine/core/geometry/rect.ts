import Size from "./size";

declare const IN_EDITOR:boolean,DEBUG:boolean;

import Point2d from "./point2d";
import ObjectPool from "../misc/objectPool";
import {_global} from "../global";

export default class Rect {

    x:number;
    y:number;
    width:number;
    height:number;
    right:number;
    bottom:number;

    private static rectPool:ObjectPool<Rect> = new ObjectPool<Rect>(Rect);
    private p:Point2d;
    private size:Size;

    constructor(x:number = 0,y:number = 0,width:number = 0,height:number = 0){
        this.setXYWH(x,y,width,height);
    }

    revalidate(){
        this.right = this.x+this.width;
        this.bottom = this.y+this.height;
    }

    setXYWH(x:number,y:number,width:number,height:number){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.revalidate();
        return this;
    }

    setXY(x:number,y:number){
        this.x = x;
        this.y = y;
        this.revalidate();
        return this;
    }

    setWH(width:number,height:number){
        this.width = width;
        this.height = height;
        this.revalidate();
        return this;
    }

    set(another:Rect) {
        this.setXYWH(another.x,another.y,another.width,another.height);
    }

    setSize(s:Size):Rect{
        this.width = s.width;
        this.height = s.height;
        this.revalidate();
        return this;
    }

    setPoint(p:Point2d){
        p.setXY(p.x,p.y);
    }

    addXY(x:number,y:number):Rect{
        this.x+=x;
        this.y+=y;
        this.revalidate();
        return this;
    }

    addPoint(another:Point2d){
        this.addXY(another.x,another.y);
        return this;
    }

    getPoint(){
        if (this.p===undefined) this.p = new Point2d();
        this.p.setXY(this.x,this.y);
        return this.p;
    }

    getSize(){
        if (this.size===undefined) this.size = new Size();
        this.size.setWH(this.width,this.height);
        return this.size;
    }

    clone(){
        return new Rect(this.x,this.y,this.width,this.height);
    }


    toJSON():{x:number,y:number,width:number,height:number}{
        return {x:this.x,y:this.y,width:this.width,height:this.height};
    }

    fromJSON(x:number,y:number,width:number,height:number){
        this.setXYWH(x,y,width,height);
    }

    static fromPool():Rect {
        return Rect.rectPool.getNextObject();
    }

}

_global.Rect = Rect;