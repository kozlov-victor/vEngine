
import BaseModel from './baseModel'
import Game from "../core/game";

export default class Resource extends BaseModel {

    resourcePath:string = '';

    constructor(game:Game){
        super(game);
    }

}