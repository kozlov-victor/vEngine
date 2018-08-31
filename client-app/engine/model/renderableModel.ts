
import {AbstractRenderer} from "../core/renderer/abstract/abstractRenderer";
import {Resource} from "./resource";
import {ArrayEx} from "../declarations";

export abstract class RenderableModel extends Resource {

    parent:RenderableModel|null = null;
    children:ArrayEx<RenderableModel> = [] as ArrayEx<RenderableModel>;

    appendChild(c:RenderableModel){
        c.parent = this;
        this.children.push(c);
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

    render(){
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