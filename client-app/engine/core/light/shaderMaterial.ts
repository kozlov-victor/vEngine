
import {Color} from "../renderer/color";

export class ShaderMaterial {

    static DEFAULT = new ShaderMaterial();

    ambient:Color = Color.BLACK.clone();
    specular:Color = Color.GREY.clone();
    diffuse:Color = Color.WHITE.clone();
    shininess:number = 10;

    constructor(){}

    setUniforms(uniforms:Object){
        uniforms['u_material.ambient'] = this.ambient.asGL();
        uniforms['u_material.specular'] = this.specular.asGL();
        uniforms['u_material.diffuse'] = this.diffuse.asGL();
        uniforms['u_material.shininess'] = this.shininess;
    }

}