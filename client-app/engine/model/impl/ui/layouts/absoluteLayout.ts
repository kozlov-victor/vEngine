
import Rect from "../../../../core/geometry/rect";

declare const DEBUG:boolean;

import Container, {LAYOUT_SIZE, OVERFLOW} from "../generic/container";

export default class AbsoluteLayout extends Container {

    private views:Container[]  = [];


    constructor(game) {
        super(game);
    }

    addView(v:Container){
        v.testLayout();
        v.parent = this;
        this.views.push(v);
    }

    onGeometryChanged(){
        super.onGeometryChanged();

        let maxX = 0, maxY = 0;
        for (let v of this.views) {
            v.onGeometryChanged();
            v._dirty = true;
            let r:Rect = v.getRect();
            if (r.right>maxX) maxX = r.right;
            if (r.bottom>maxY) maxY = r.bottom;
        }
        if (this.layoutWidth===LAYOUT_SIZE.WRAP_CONTENT) {
           this.width = maxX - this.pos.x;
        }
        if (this.layoutHeight===LAYOUT_SIZE.WRAP_CONTENT) {
            this.height = maxY - this.pos.y;
        }
        this._dirty = true;
        this.getRect().setWH(this.width,this.height);
        if (this.background) this.background.drawingRect.set(this.getRect());

    }

    update(time:number,delta:number){
        super.update(time,delta);
        if (this.overflow===OVERFLOW.HIDDEN) this.game.renderer.lockRect(this.getRect());
        if (this.background) this.background.render();
            for (let v of this.views) {
            v.update(time,delta);
        }
        if (this.overflow===OVERFLOW.HIDDEN) this.game.renderer.unlockRect();
    }

}