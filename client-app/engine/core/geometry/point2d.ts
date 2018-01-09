
export default class Point2d {

    x:number = 0;
    y:number = 0;

    constructor(x:number = 0,y:number = 0){
        this.setXY(x,y);
    }

    setXY(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    setX(x:number){
        this.x = x;
    }

    setY(y:number){
        this.y = y;
    }

    set(another:Point2d){
        this.setXY(another.x,another.y);
    }


    add(another:Point2d){
        this.addXY(another.x,another.y);
    }

    addXY(x:number,y:number){
        this.x+=x;
        this.y+=y;
    }

    addX(x:number){
        this.x+=x;
    }

    addY(y:number){
        this.y+=y;
    }

    equal(val:number) {
        return this.x===val && this.y===val;
    }

    fromJSON(json){
        this.set(json);
    }

    toJSON(){
        return {x:this.x,y:this.y}
    }



}