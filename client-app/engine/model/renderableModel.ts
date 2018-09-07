
import {AbstractRenderer} from "../core/renderer/abstract/abstractRenderer";
import {Resource} from "./resource";
import {ArrayEx} from "../declarations";
import * as matEx from "../core/mathEx";
import {DebugError} from "../debugError";
import {Layer} from "./impl/layer";

declare const DEBUG:boolean;

export interface IParentChild {
    parent:IParentChild,
    children:ArrayEx<IParentChild>
}

export abstract class RenderableModel extends Resource implements IParentChild{

    parent:RenderableModel = null;
    children:ArrayEx<RenderableModel> = [] as ArrayEx<RenderableModel>;

    appendChild(c:RenderableModel){
        c.parent = this;
        this.children.push(c);
        c.onShow();
    }


    prependChild(c:RenderableModel){
        c.parent = this;
        this.children.unshift(c);
        c.onShow();
    }

    _setDirty(){
        this._dirty = true;
        if (this.parent) this.parent._dirty = true;
    }

    abstract draw();

    protected beforeRender(){
        this.game.renderer.translate(this.pos.x,this.pos.y);
    }

    protected isNeedAdditionalTransform():boolean{
        return !(this.angle===0 && this.scale.equal(1));
    }

    protected doAdditionalTransform(){
        this.game.renderer.rotateZ(this.angle);
        if (this['angleY']) this.game.renderer['rotateY'](this['angleY']);
    }

    protected isInViewPort():boolean{
        return matEx.overlapTest(this.game.camera.getRectScaled(),this.getRect());
    }

    moveToFront(){
        let index = this.parent.children.indexOf(this);
        if (DEBUG && index==-1) throw new DebugError(`can not move to front: gameObject is detached`);
        this.parent.children.splice(index,1);
        this.parent.children.push(this);

    }

    moveToBack(){
        let index = this.parent.children.indexOf(this);
        if (DEBUG && index==-1) throw new DebugError(`can not move to back: gameObject is detached`);
        this.parent.children.splice(index,1);
        this.parent.children.unshift(this);
    }

    render(){
        if (!this.isInViewPort()) return;
        let renderer:AbstractRenderer = this.game.renderer;

        renderer.save();
        this.beforeRender();

        renderer.translate(-this.anchor.x,-this.anchor.y);

        if (this.isNeedAdditionalTransform()) {
            let dx = this.width/2,dy = this.height/2;
            renderer.translate(dx,dy);
            renderer.scale(this.scale.x,this.scale.y);
            this.doAdditionalTransform();
            renderer.translate(-dx, -dy);
        }

        this.draw();

        if (this.children.length>0) {
            renderer.save();
            renderer.translate(this.anchor.x,this.anchor.y);
            for(let i=0,max=this.children.length;i<max;i++) {
                //renderer.save();
                this.children[i].render();
                //renderer.restore();
            }
            renderer.restore();
        }

        renderer.restore();
    }

    update(time:number,delta:number){
        super.update(time,delta);
        this.children.forEach((c:RenderableModel)=>{
            c.update(time,delta);
        });
    }

}