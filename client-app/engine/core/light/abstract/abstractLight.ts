
import Game from "../../game";

export default class AbstractLight {

    color = [1,1,1,1];
    intensivity:number = 1.0;

    protected game:Game;

    constructor(game:Game){
        this.game = game;
    }

}