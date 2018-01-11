

import SpriteRectDrawer from "../generic/base/spriteRectDrawer";
import {GL_TYPE} from "../../base/shaderProgramUtils";
import TexShaderGenerator from "../../shaders/generators/generic/texShaderGenerator";
import ShaderProgram from "../../base/shaderProgram";
import SimpleCopyFilter from "../../filters/textureFilters/simpleCopyFilter";
import ShaderGenerator from "../../shaders/generators/shaderGenerator";
import Texture from "../../base/texture";
import FrameBuffer from "../../base/frameBuffer";

export default class AbstractBlendDrawer {

    spriteRectDrawer:SpriteRectDrawer;
    simpleCopyFilter:SimpleCopyFilter;
    gl:WebGLRenderingContext;

    constructor(gl:WebGLRenderingContext) {
        this.gl = gl;
        let gen = new TexShaderGenerator();
        gen.addVarying(GL_TYPE.FLOAT_VEC4, 'v_destTexCoord');
        gen.addFragmentUniform(GL_TYPE.SAMPLER_2D,'destTexture');
        gen.setVertexMainFn(`
            gl_Position = u_vertexMatrix * a_position;
            v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;
            v_destTexCoord = gl_Position*0.5+0.5;  
        `);
        this.prepare(gen);
        this._afterPrepare(gen);
        this.simpleCopyFilter = new SimpleCopyFilter(gl);
    }

    _afterPrepare(gen){
        let program = new ShaderProgram(
            this.gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );
        this.spriteRectDrawer = new SpriteRectDrawer(this.gl,program);
    }


    prepare(programGen:ShaderGenerator){}

    // destTex is copy or current destination texture
    // to avoid "Source and destination textures of the draw are the same" error
    draw(sourceTex:Texture,frameBuffer:FrameBuffer,uniforms){
        let destTex = frameBuffer.texture;
        destTex = destTex.applyFilters([this.simpleCopyFilter],frameBuffer);
        destTex.bind(1);
        uniforms.texture = 0;
        uniforms.destTexture = 1;
        this.spriteRectDrawer.draw(sourceTex,uniforms);
    }

}