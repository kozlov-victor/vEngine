
import Container, {OVERFLOW} from "../components/container";
import {MousePoint} from "../../../../core/control/mouse";
import Rect from "../../../../core/geometry/rect";

export default class AbsoluteLayout extends Container {

    private views:Container[]  = [];


    constructor(game) {
        super(game);
        this.width = 200;
        this.height = 200;
    }

    addView(v:Container){
        v.parent = this;
        this.views.push(v);
    }

    onGeometryChanged(){
        super.onGeometryChanged();
        for (let v of this.views) {
            v._dirty = true;
        }
    }

    update(time:number,delta:number){
        super.update(time,delta);
        if (this.overflow===OVERFLOW.HIDDEN) this.game.renderer.lockRect(this.getRect());
        for (let v of this.views) {
            v.update(time,delta);
        }
        if (this.overflow===OVERFLOW.HIDDEN) this.game.renderer.unlockRect();
    }

}