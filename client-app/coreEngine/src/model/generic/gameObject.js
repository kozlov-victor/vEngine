
import BaseModel from '../baseModel'

export default class GameObject extends BaseModel{

    constructor(){
        super();
        this.protoId =  null;
        this.type =  'gameObject';
        this.layerId =  null;
        this.pos = null;
    }

};