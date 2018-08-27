import { GameObject } from './gameObject';
import { WebGlRenderer } from '../../core/renderer/webGl/webGlRenderer';
import { _global } from '../../core/global';


export class GameObject3d extends GameObject {

    model;
    texture;
    angleY:number = 0;

    protected isNeedAdditionalTransform():boolean{
        return !(this.angle===0 && this.angleY!==0 && this.scale.equal(1));
    }

    protected doAdditionaltransform(){
        this.game.renderer.rotateY(this.angleY);
    }

    draw(){
        // todo
        this.model.texture = this.texture;
        (this.game.renderer as WebGlRenderer).drawModel(this.model);
    }


}


_global['GameObject3d'] = GameObject;