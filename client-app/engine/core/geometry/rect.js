
export default class Rect {

    x;
    y;
    width;
    height;

    constructor(x = 0,y = 0,width = 0,height = 0){
        this.set(x,y,width,height);
    }

    set(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

}