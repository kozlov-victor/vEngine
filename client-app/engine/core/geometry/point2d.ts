import ObjectPool from "../misc/objectPool";
import ObservableEntity from "./abstract/observableEntity";

declare const IN_EDITOR:boolean,DEBUG:boolean;

export default class Point2d extends ObservableEntity{

    x:number = 0;
    y:number = 0;

    private static pool = new ObjectPool<Point2d>(Point2d,4);
    private _arr:Array<number>;

    static fromPool():Point2d{
        return Point2d.pool.getNextObject();
    }


    constructor(x:number = 0,y:number = 0,onChangedFn?:()=>void){
        super();
        this.x = x;
        this.y = y;
        if (onChangedFn) this.addListener(onChangedFn);
    }

    protected checkObservableChanged():boolean{
        return this._state.setState(this.x,this.y);
    }

    observe(onChangedFn:()=>void){
        this.addListener(onChangedFn);
    }

    setXY(x:number,y?:number):Point2d{
        if (y===undefined) y = this.x;
        this.x = x;
        this.y = y;
        this.triggerObservable();
        return this;
    }

    setX(x:number):Point2d{
        this.x = x;
        this.triggerObservable();
        return this;
    }

    setY(y:number):Point2d{
        this.y = y;
        this.triggerObservable();
        return this;
    }

    set(another:Point2d):Point2d{
        this.setXY(another.x,another.y);
        this.triggerObservable();
        return this;
    }


    add(another:Point2d):Point2d{
        this.addXY(another.x,another.y);
        this.triggerObservable();
        return this;
    }

    substract(another:Point2d):Point2d{
        this.addXY(-another.x,-another.y);
        this.triggerObservable();
        return this;
    }

    multiply(n:number):Point2d {
        this.x*=n;
        this.y*=n;
        this.triggerObservable();
        return this;
    }

    addXY(x:number,y:number):Point2d{
        this.x+=x;
        this.y+=y;
        this.triggerObservable();
        return this;
    }

    addX(x:number):Point2d{
        this.x+=x;
        this.triggerObservable();
        return this;
    }

    addY(y:number):Point2d{
        this.y+=y;
        this.triggerObservable();
        return this;
    }

    negative(){
        this.x = - this.x;
        this.y = -this.y;
        this.triggerObservable();
        return this;
    }

    equal(val:number) {
        return this.x===val && this.y===val;
    }

    equalXY(x:number,y:number) {
        return this.x===x && this.y===y;
    }

    equalPoint(point:Point2d) {
        return this.x===point.x && this.y===point.y;
    }

    clone():Point2d {
        return new Point2d(this.x,this.y);
    }

    fromJSON(json:{x:number,y:number}){
        this.setXY(json.x,json.y);
    }

    toJSON():{x:number,y:number}{
        return {x:this.x,y:this.y}
    }

    toArray():Array<number>{
        if (!this._arr) this._arr = new Array(2);
        this._arr[0] = this.x;
        this._arr[1] = this.y;
        return this._arr;
    }



}