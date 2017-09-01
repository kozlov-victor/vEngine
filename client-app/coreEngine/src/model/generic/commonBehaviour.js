
import BaseModel from '../baseModel'

export default class CommonBehaviour extends BaseModel {

    constructor(game){
        super(game);
        this.type = 'CommonBehaviour';
        this.parameters = [];
        this.description = null;
    }
}