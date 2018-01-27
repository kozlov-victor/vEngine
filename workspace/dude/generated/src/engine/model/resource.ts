
import BaseModel from './baseModel'
import Game from "../core/game";

export default class Resource extends BaseModel {

    resourcePath:string = ''; // todo map

    constructor(game:Game){
        super(game);
    }

}