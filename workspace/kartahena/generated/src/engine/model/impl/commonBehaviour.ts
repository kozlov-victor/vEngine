
import {BaseModel} from '../baseModel'

export class CommonBehaviour extends BaseModel {

    type = 'CommonBehaviour';
    parameters = [];
    description = null;

    constructor(game){
        super(game);
    }
}