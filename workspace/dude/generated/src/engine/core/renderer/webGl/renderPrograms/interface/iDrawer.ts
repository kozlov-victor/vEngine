
import FrameBuffer from "../../base/frameBuffer";
import {TextureInfo} from "../abstract/abstractDrawer";
import {UniformsInfo} from "./uniformsInfo";
import Texture from "../../base/texture";

export interface IDrawer {

    draw(textureInfos:TextureInfo[],uniforms:UniformsInfo,frameBuffer:FrameBuffer):void;

}