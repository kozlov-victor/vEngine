
import {Game} from "@engine/core/game";
import {Color} from "@engine/core/color";

type float = number;

export class Polygon {

    fillColor: Color = Color.NONE;
    private vertices:float[] = [];

    constructor(private game:Game){}

    setVertices(vertices:float[]){
        this.vertices = vertices;
    }

}