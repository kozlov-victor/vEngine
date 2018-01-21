
import Game from "../../game";

export default abstract class AbstractLight {

    public color = [1,1,1,1];
    public intensity:number = 1.0;

    protected game:Game;

    constructor(game:Game){
        this.game = game;
    }

}