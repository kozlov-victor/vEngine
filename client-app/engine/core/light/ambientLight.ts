
import AbstractLight from "./abstract/abstractLight";
import Game from "../game";

export default class AmbientLight extends AbstractLight{

    constructor(game: Game) {
        super(game);
    }

    setUniforms(uniform){
        uniform['u_ambientLight.color'] = this.color.asGL()
    }

}