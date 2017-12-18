import AbstractPrimitive from './abstractPrimitive'

export default class Circle extends AbstractPrimitive {

    constructor(){
        super();
        this.vertexArr = [];
        //this.indexArr = [];
        let i = 0;
        this.vertexArr.push(0.5);
        this.vertexArr.push(0.5);
        for (let a=0,max=Math.PI*2;a<max;a+=0.1) {
            this.vertexArr.push(Math.cos(a)/2 + 0.5);
            this.vertexArr.push(Math.sin(a)/2 + 0.5);
            //this.indexArr.push(i++);

            //this.indexArr.push(i++);
        }
        this.vertexArr = [
            0,0,
            0,1,
            1,1,
            1,0.5,
            0.2,0.2,
            0.5,0.2
        ]
    }

}