
import AbstractFilter from "./abstractFilter";
import Texture from "../../base/texture";
import FrameBuffer from "../../base/frameBuffer";
import Rect from "../../../../geometry/rect";

export default class AbstractBlendFilter extends AbstractFilter {

    private textures:Array<Texture> = [];

    constructor(gl:WebGLRenderingContext){
        super(gl);
    }

    doFilter(srcTexture:Texture,destFrameBuffer:FrameBuffer,destRect:Rect){
        super.doFilter(srcTexture,destFrameBuffer,destRect);
    }

}