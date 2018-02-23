
import Rect from "../../../../core/geometry/rect";

declare const DEBUG:boolean;

import Container, {LAYOUT_SIZE, OVERFLOW} from "../generic/container";

export default class AbsoluteLayout extends Container {

    constructor(game) {
        super(game);
    }

    appendChild(c:Container){
        c.testLayout();
        c.parent = this;
        super.appendChild(c);
    }

    onGeometryChanged(){
        super.onGeometryChanged();

        let maxX = 0, maxY = 0;
        for (let v of this.children) {
            v.onGeometryChanged();
            v._dirty = true;
            let r:Rect = v.getRect();
            if (r.right>maxX) maxX = r.right;
            if (r.bottom>maxY) maxY = r.bottom;
        }
        if (this.layoutWidth===LAYOUT_SIZE.WRAP_CONTENT) {
           this.width = maxX;
        }
        if (this.layoutHeight===LAYOUT_SIZE.WRAP_CONTENT) {
            this.height = maxY;
        }
        this.calcBgRectWithPadding(this.width,this.height);
        //this._dirty = true;
    }

    update(time:number,delta:number){
        super.update(time,delta);
        //if (this.overflow===OVERFLOW.HIDDEN) this.game.renderer.lockRect(this.getRect());
        let renderer = this.game.renderer;
        renderer.translate(
            this.pos.x + this.marginLeft,
            this.pos.y + this.marginTop
        );
        if (this.background) this.background.render();
        renderer.translate(
            this.paddingLeft,
            this.paddingTop
        );
        for (let c of this.children) {
            renderer.save();
            if (c._dirty) c.parent._dirty = true;
            c.update(time,delta);
            renderer.restore();
        }
        //if (this.overflow===OVERFLOW.HIDDEN) this.game.renderer.unlockRect();
    }

}