
export default class Point2d {

    x;
    y;

    constructor(x = 0,y = 0){
        this.setXY(x,y);
    }

    setXY(x,y){
        this.x = x;
        this.y = y;
    }

    set(another){
        this.setXY(another.x,another.y);
    }

    add(another){
        this.x+=another.x;
        this.y+=another.y;
    }

    fromJSON(json){
        this.set(json);
    }

    toJSON(){
        return {x:this.x,y:this.y}
    }



}