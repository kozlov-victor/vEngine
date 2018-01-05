

import SpriteRectDrawer from "../generic/base/spriteRectDrawer";
import {textureShaderGen} from "../../shaders/generators/shaderGenerator";
import {GL_TYPE} from "../../base/shaderProgramUtils";

export default class AbstractBlendDrawer {

    spriteRectDrawer;

    constructor(gl){
        let gen = textureShaderGen.clone(); // todo replace by new TextureShaderGen()
        gen.addFragmentUniform(GL_TYPE.FLOAT_VEC2,'u_destOffset');
        gen.addFragmentUniform(GL_TYPE.SAMPLER_2D,'destTexture');
        let program = new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );
        this.spriteRectDrawer = new SpriteRectDrawer(gl,program);
    }

}