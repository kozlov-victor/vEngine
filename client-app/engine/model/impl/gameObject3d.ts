import { GameObject } from './gameObject';
import { WebGlRenderer } from '../../core/renderer/webGl/webGlRenderer';
import { _global } from '../../core/global';
import {BufferInfo} from "../../core/renderer/webGl/base/bufferInfo";
import {IPrimitive} from "../../core/renderer/webGl/primitives/abstractPrimitive";


export class GameObject3d extends GameObject {

    model:IPrimitive;
    texture;
    bufferInfo:BufferInfo;
    angleY:number = 0;

    protected isNeedAdditionalTransform():boolean{
        return !(this.angle===0 && this.angleY===0 && this.scale.equal(1));
    }

    protected doAdditionalTransform(){
        this.game.renderer.rotateY(this.angleY);
    }

    draw(){
        (this.game.renderer as WebGlRenderer).drawModel(this);
    }


}


_global['GameObject3d'] = GameObject;