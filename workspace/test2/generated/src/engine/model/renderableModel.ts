
import {AbstractRenderer} from "../core/renderer/abstract/abstractRenderer";
import {Resource} from "./resource";

export abstract class RenderableModel extends Resource {

    parent:RenderableModel|null = null;
    children:RenderableModel[] = [];


    _setDirty(){
        this._dirty = true;
        if (this.parent) this.parent._dirty = true;
    }

    abstract draw();

    protected beforeRender(){
        this.game.renderer.translate(this.pos.x,this.pos.y);
    }

    render(){
        let renderer:AbstractRenderer = this.game.renderer;

        renderer.save();
        this.beforeRender();
        if (!(this.angle===0 && this.scale.equal(1))) {
            let pivX = this.rotatePivot.x;
            let pivY = this.rotatePivot.y;
            renderer.translate(pivX,pivY);
            renderer.scale(this.scale.x,this.scale.y);
            renderer.rotateZ(this.angle);
            //ctx.rotateY(a);
            renderer.translate(-pivX, -pivY);
        }

        this.draw();

        if (this.children.length>0) {
            for(let i=0,max=this.children.length;i<max;i++) {
                renderer.save();
                this.children[i].render();
                renderer.restore();
            }
        }

        renderer.restore();
    }
}