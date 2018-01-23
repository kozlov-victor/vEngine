
declare const DEBUG:boolean;

import PointLight from "./pointLight";
import Game from "../game";

export default class LightArray {

    static NUM_OF_LIGHT_IN_VIEW = 4;

    private lights:Array<PointLight>;

    constructor(game:Game){
        if (DEBUG && !game) throw `game instance is not passed to LightArray constructor`;
        this.lights = new Array(LightArray.NUM_OF_LIGHT_IN_VIEW);
        for (let i=0;i<this.lights.length;i++){
            this.lights[i] = new PointLight(game);
        }
    }

    getLightAt(i:number):PointLight{
        return this.lights[i];
    }

    setUniforms(uniform){

        for (let i=0;i<this.lights.length;i++){
            let p:PointLight = this.lights[i];
            uniform[`u_pointLights[${i}].pos`] =  p.getPosScaled().toArray();
            uniform[`u_pointLights[${i}].nearRadius`] = p.nearRadius;
            uniform[`u_pointLights[${i}].farRadius`] = p.farRadius;
            uniform[`u_pointLights[${i}].isOn`] = p.isOn;
            uniform[`u_pointLights[${i}].color`] = p.color.asGL();
        }
    }

}