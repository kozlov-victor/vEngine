
import Color from "../color";

export default class OpticMaterial {

    ambient:Color = Color.BLACK;
    specular:Color = Color.GREY;
    diffuse:Color = Color.WHITE;
    shininess:number = 60;

    constructor(){}

    setUniforms(uniforms){
        uniforms['u_material.ambient'] = this.ambient.asGL();
        uniforms['u_material.specular'] = this.specular.asGL();
        uniforms['u_material.diffuse'] = this.diffuse.asGL();
        uniforms['u_material.shininess'] = this.shininess;
    }

}