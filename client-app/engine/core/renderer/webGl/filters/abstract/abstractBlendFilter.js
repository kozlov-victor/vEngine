
import AbstractFilter from './abstractFilter'
import * as mat4 from "../../../../geometry/mat4";

const makePositionMatrix = function(dstX,dstY,dstWidth,dstHeight){
    let projectionMatrix = mat4.ortho(0,dstWidth,0,dstHeight,-1,1);
    let scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    return mat4.matrixMultiply(scaleMatrix, projectionMatrix);
};

export default class AbstractBlendFilter  extends AbstractFilter {

    constructor(gl) {
        super(gl);
    }

    doFilter(srcTexture,destTexture,x,y,w,h){
        this.spriteRectDrawer.bind();
        this.uniformsToSet.u_textureMatrix = identity;
        this.uniformsToSet.u_vertexMatrix = makePositionMatrix(x,y,w,h);
        this.spriteRectDrawer.draw(srcTexture,this.uniformsToSet);
    }

}