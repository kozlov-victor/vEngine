
import {TextureInfo} from "../../renderPrograms/abstract/abstractDrawer";

declare const IN_EDITOR:boolean,DEBUG:boolean;

import ShaderProgram from "../../base/shaderProgram";
import SpriteRectDrawer from "../../renderPrograms/impl/base/spriteRectDrawer";
import * as mat4 from "../../../../geometry/mat4";
import TexShaderGenerator from "../../shaders/generators/impl/texShaderGenerator";
import ShaderGenerator from "../../shaders/generators/shaderGenerator";
import Texture from "../../base/texture";
import FrameBuffer from "../../base/frameBuffer";


const makePositionMatrix = function(dstX,dstY,dstWidth,dstHeight){
    let projectionMatrix = mat4.ortho(0,dstWidth,0,dstHeight,-1,1);
    let scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    return mat4.matrixMultiply(scaleMatrix, projectionMatrix);
};

const identity = mat4.makeIdentity();

export default abstract class AbstractFilter {

    programGen:ShaderGenerator;
    gl:WebGLRenderingContext;
    spriteRectDrawer:SpriteRectDrawer = null;
    uniformsToSet:any = {};

    constructor(gl:WebGLRenderingContext){
        if (DEBUG && !gl) {
            console.error(this);
            throw "can not create Filter, gl context not passed to constructor, expected: Filter(gl)";
        }
        this.gl = gl;
        let gen = new TexShaderGenerator();
        this.prepare(gen);
        this._afterPrepare(gen);
    }

    prepare(gen:ShaderGenerator){}

    _afterPrepare(gen:ShaderGenerator){
        let program = new ShaderProgram(
            this.gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );
        this.spriteRectDrawer = new SpriteRectDrawer(this.gl,program);
    }

    doFilter(textureInfos:Array<TextureInfo>,destFrameBuffer:FrameBuffer){
        destFrameBuffer.bind();
        let w = textureInfos[0].texture.size.width;
        let h = textureInfos[0].texture.size.height;
        this.uniformsToSet.u_textureMatrix = identity;
        this.uniformsToSet.u_vertexMatrix = makePositionMatrix(0,0,w,h);
        this.spriteRectDrawer.draw(textureInfos,this.uniformsToSet,null);
    }

    setParam(name:string,value){
        this.uniformsToSet[name] = value;
    }

}