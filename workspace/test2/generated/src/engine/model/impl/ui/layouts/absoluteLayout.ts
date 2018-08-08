


declare const DEBUG:boolean;

import {Rect} from "../../../../core/geometry/rect";
import {Container,LAYOUT_SIZE, OVERFLOW} from "../generic/container";

export class AbsoluteLayout extends Container {

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
        this.calcDrawableRect(this.width,this.height);
    }

    update(time:number,delta:number){
        super.update(time,delta);
        for (let c of this.children) {
            if (c._dirty) c.parent._dirty = true;
            c.update(time,delta);
        }
    }

    draw(){
        let renderer = this.game.renderer;
        if (this.overflow===OVERFLOW.HIDDEN) renderer.lockRect(this.getRect());
        if (this.background) this.background.draw();
        renderer.translate(
            this.paddingLeft,
            this.paddingTop
        );
        if (this.overflow===OVERFLOW.HIDDEN) this.game.renderer.unlockRect();
    }

}