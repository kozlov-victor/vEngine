/*global DEBUG:true*/

import ShaderProgram from "../../base/shaderProgram";
import {textureShaderGen} from "../../shaders/shaderGenerator";
import SpriteRectDrawer from "../../renderPrograms/generic/spriteRectDrawer";
import * as mat4 from "../../../../geometry/mat4";

const makePositionMatrix = function(dstX,dstY,dstWidth,dstHeight,viewWidth,viewHeight){
    // proj * modelView
    let zToWMatrix = mat4.makeZToWMatrix(1);
    let projectionMatrix = mat4.ortho(0,viewWidth,0,viewHeight,-1000,1000);
    let scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    let translationMatrix = mat4.makeTranslation(dstX, dstY, 0);

    let matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
    //matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
    matrix = mat4.matrixMultiply(matrix, projectionMatrix);
    matrix = mat4.matrixMultiply(matrix, zToWMatrix);
    return matrix;
};

const makeTextureMatrix = function(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight){

    let texScaleMatrix = mat4.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
    let texTranslationMatrix = mat4.makeTranslation(srcX / texWidth, srcY / texHeight, 0);
    return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
};

export default class AbstractFilter {

    programGen;
    spriteRectDrawer = null;

    constructor(gl){
        if (DEBUG && !gl) throw "can not create Filter, gl context not passed to constructor, expected: Filter(gl)";
        this.gl = gl;
        this.programGen = textureShaderGen.clone();
    }

    prepare(){}

    afterPrepare(){
        let program = new ShaderProgram(
            this.gl,
            this.programGen.getVertexSource(),
            this.programGen.getFragmentSource()
        );
        this.spriteRectDrawer = new SpriteRectDrawer(this.gl,program);
    }

    doFilter(srcTexture,destFrameBuffer){
        srcTexture.bind();
        destFrameBuffer.bind();
        let w = srcTexture.size.width;
        let h = srcTexture.size.height;
        this.spriteRectDrawer.bind();
        this.spriteRectDrawer.setUniform("u_textureMatrix",
            makeTextureMatrix(0,0,w,h,w,h));
        this.spriteRectDrawer.setUniform("u_vertexMatrix",
            makePositionMatrix(
                0,0,w,h,w,h)
        );
        //this.spriteRectDrawer.setUniform('u_alpha',1); // alpha
        this.spriteRectDrawer.draw();
    }
}