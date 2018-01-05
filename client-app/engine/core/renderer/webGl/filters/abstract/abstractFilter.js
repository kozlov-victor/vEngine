/*global DEBUG:true*/

import ShaderProgram from "../../base/shaderProgram";
import {textureShaderGen} from "../../shaders/shaderGenerator";
import SpriteRectDrawer from "../../renderPrograms/generic/spriteRectDrawer";
import * as mat4 from "../../../../geometry/mat4";

const makePositionMatrix = function(dstX,dstY,dstWidth,dstHeight){
    let projectionMatrix = mat4.ortho(0,dstWidth,0,dstHeight,-1,1);
    let scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    return mat4.matrixMultiply(scaleMatrix, projectionMatrix);
};

const identity = mat4.makeIdentity();

export default class AbstractFilter {

    programGen;
    spriteRectDrawer = null;
    uniformsToSet = {};

    constructor(gl){
        if (DEBUG && !gl) throw "can not create Filter, gl context not passed to constructor, expected: Filter(gl)";
        this.gl = gl;
        this.programGen = textureShaderGen.clone();
        this.prepare(this.programGen);
        this._afterPrepare();
    }

    prepare(){}

    _afterPrepare(){
        let program = new ShaderProgram(
            this.gl,
            this.programGen.getVertexSource(),
            this.programGen.getFragmentSource()
        );
        this.spriteRectDrawer = new SpriteRectDrawer(this.gl,program);
    }

    doFilter(srcTexture,destFrameBuffer){
        destFrameBuffer.bind();
        let w = srcTexture.size.width;
        let h = srcTexture.size.height;
        this.uniformsToSet.u_textureMatrix = identity;
        this.uniformsToSet.u_vertexMatrix = makePositionMatrix(0,0,w,h);
        this.spriteRectDrawer.draw(srcTexture,this.uniformsToSet);
    }

    setParam(name,value){
        this.uniformsToSet[name] = value;
    }
}