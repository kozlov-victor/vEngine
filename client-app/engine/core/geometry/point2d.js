
export default class Point2d {

    x;
    y;

    constructor(x = 0,y = 0){
        this.set(x,y);
    }

    set(x,y){
        this.x = x;
        this.y = y;
    }

    add(another){
        this.x+=another.x;
        this.y+=another.y;
    }

}