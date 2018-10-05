
import {AbstractRenderer} from "../core/renderer/abstract/abstractRenderer";
import {Resource} from "./resource";
import {ArrayEx} from "../declarations";
import {DebugError} from "../debugError";
import {MathEx} from '../core/mathEx'
import {isObjectMatch} from "../core/misc/object";

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

    findObject(query:{[key:string]:any}):RenderableModel{
        if (isObjectMatch(this,query)) return this;
        for (let c of this.children) {
            let possibleObject:RenderableModel = c.findObject(query);
            if (possibleObject) return possibleObject;
        }
        return null;
    }

    _setDirty(){
        this._dirty = true;
        //if (this.parent) this.parent._dirty = true;
    }

    abstract draw():boolean;

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
        return MathEx.overlapTest(this.game.camera.getRectScaled(),this.getRect());
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

    render(force:boolean = false){
        if (!force && !this.isInViewPort()) return;
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

        let drawResult:boolean = this.draw();

        if (drawResult && this.children.length>0) {
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
        for (let c of this.children) {
            if (this._dirty) c._setDirty();
            c.update(time,delta);
        }
    }

}