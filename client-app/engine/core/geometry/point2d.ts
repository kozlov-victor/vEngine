import ObjectPool from "../misc/objectPool";

declare const IN_EDITOR:boolean,DEBUG:boolean;

export default class Point2d {

    x:number = 0;
    y:number = 0;

    private static pool = new ObjectPool<Point2d>(Point2d,4);
    private _arr:Array<number>;

    static fromPool():Point2d{
        return Point2d.pool.getNextObject();
    }

    constructor(x:number = 0,y:number = 0){
        this.x = x;
        this.y = y;
    }

    setXY(x:number,y:number):Point2d{
        this.x = x;
        this.y = y;
        return this;
    }

    setX(x:number):Point2d{
        this.x = x;
        return this;
    }

    setY(y:number):Point2d{
        this.y = y;
        return this;
    }

    set(another:Point2d):Point2d{
        this.setXY(another.x,another.y);
        return this;
    }


    add(another:Point2d):Point2d{
        this.addXY(another.x,another.y);
        return this;
    }

    substract(another:Point2d):Point2d{
        this.addXY(-another.x,-another.y);
        return this;
    }

    multiply(n:number):Point2d {
        this.x*=n;
        this.y*=n;
        return this;
    }

    addXY(x:number,y:number):Point2d{
        this.x+=x;
        this.y+=y;
        return this;
    }

    addX(x:number):Point2d{
        this.x+=x;
        return this;
    }

    addY(y:number):Point2d{
        this.y+=y;
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

    fromJSON(json){
        this.set(json);
    }

    toJSON(){
        return {x:this.x,y:this.y}
    }

    toArray(){
        if (!this._arr) this._arr = new Array(2);
        this._arr[0] = this.x;
        this._arr[1] = this.y;
        return this._arr;
    }



}