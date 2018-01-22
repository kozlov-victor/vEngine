
import Game from "../../game";
import Color from "../../color";

export default abstract class AbstractLight {

    public color:Color = Color.WHITE;
    public intensity:number = 1.0;

    protected game:Game;

    constructor(game:Game){
        this.game = game;
    }

}