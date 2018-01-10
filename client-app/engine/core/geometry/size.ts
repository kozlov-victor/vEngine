
export default class Size {
    width:number;
    height:number;

    constructor(width:number,height:number){
        this.width = width;
        this.height = height;
    }

    setW(width:number){this.width = width}
    setH(height:number){this.height = height}

    setWH(width:number,height:number){
        this.width = width;
        this.height = height;
    }

}