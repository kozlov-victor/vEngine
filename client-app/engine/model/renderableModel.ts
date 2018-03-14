
import BaseModel from "./baseModel";
import AbstractRenderer from "../core/renderer/abstract/abstractRenderer";
import Resource from "./resource";

export default abstract class RenderableModel extends Resource {

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
            let halfV = this.width /2;
            let halfH = this.height/2;
            renderer.translate(halfV,halfH);
            renderer.scale(this.scale.x,this.scale.y);
            renderer.rotateZ(this.angle);
            //ctx.rotateY(a);
            renderer.translate(-halfV, -halfH);
        }

        this.draw();
        renderer.restore();

        if (this.children.length>0) {
            for(let i=0,max=this.children.length;i<max;i++) {
                renderer.save(); // todo need?
                this.children[i].render();
                renderer.restore();
            }
        }
    }
}