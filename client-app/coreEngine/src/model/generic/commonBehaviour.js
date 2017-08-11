
import BaseModel from '../baseModel'

export default class CommonBehaviour extends BaseModel {

    constructor(){
        super();
        this.parameters = [];
        this.description = null;
    }
}