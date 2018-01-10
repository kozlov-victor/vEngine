
export default class Point2d {

    x:number = 0;
    y:number = 0;

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

    clone():Point2d {
        return new Point2d(this.x,this.y);
    }

    fromJSON(json){
        this.set(json);
    }

    toJSON(){
        return {x:this.x,y:this.y}
    }



}