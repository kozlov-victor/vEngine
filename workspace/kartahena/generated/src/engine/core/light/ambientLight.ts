
import {AbstractLight} from "./abstract/abstractLight";
import {Game} from "../game";

export class AmbientLight extends AbstractLight{

    direction;

    constructor(game: Game) {
        super(game);
        this.direction = [1,1,1];
    }

    setUniforms(uniform:Object){
        uniform['u_ambientLight.color'] = this.color.asGL();
        uniform['u_ambientLight.direction'] = this.direction;
    }

}