import {MOUSE_EVENTS, MousePoint} from "../../../../core/control/mouse";
import {Container} from "./container";
import {closeTo} from "../../../../core/mathEx";

export interface ScrollInitDesc {
    vertical: boolean
}

interface ScrollPointDesc {
    point: MousePoint,
    time: number
}

export class ScrollInfo {

    private _container:Container;

    private _lastPoint:ScrollPointDesc;
    private _prevPoint:ScrollPointDesc;
    private _scrollVelocity: number = 0;
    private _deceleration: number = 0;

    offset: number = 0;
    scrollHeight: number = 0;
    enabled: boolean = false;
    
    listenScroll(container: Container) {
        this._container = container;
        container.on(MOUSE_EVENTS.mouseDown, (p: MousePoint) => {
            this._lastPoint = {
                point: p,
                time: Date.now()
            };
            this._prevPoint = {
                point: this._lastPoint.point,
                time: this._lastPoint.time
            };
            this._scrollVelocity = 0;
            this._deceleration = 0;
        });
        container.on(MOUSE_EVENTS.mouseMove, (p: MousePoint) => {
            if (!p.isMouseDown) return;
            let lastPoint = this._lastPoint;
            this._lastPoint = {
                point: p,
                time: Date.now()
            };
            if (!lastPoint) lastPoint = this._lastPoint;
            this._prevPoint = {
                point: lastPoint.point,
                time: lastPoint.time,
            };


            this.offset -=
                this._lastPoint.point.screenY - this._prevPoint.point.screenY;

            if (this.offset > this.scrollHeight - this._container.height)
                this.offset = this.scrollHeight - this._container.height;
            if (this.offset < 0) this.offset = 0;
            this._container.trigger('scrollVertical');
        });
        container.on(MOUSE_EVENTS.scroll, (p: MousePoint) => {
            this._scrollVelocity = -p.nativeEvent.wheelDelta;
            this._deceleration = 0;
        });
        container.on(MOUSE_EVENTS.mouseUp, (p: MousePoint) => {
            if (!this._lastPoint) return;
            if (!this._prevPoint) return;
            if (this._lastPoint.time === this._prevPoint.time) {
                this._scrollVelocity = 0;
            } else if (Date.now() - this._lastPoint.time > 100) {
                this._scrollVelocity = 0;
            }
            else {
                this._scrollVelocity = 1000 *
                    (this._prevPoint.point.screenY - this._lastPoint.point.screenY) /
                    (this._lastPoint.time - this._prevPoint.time);
            }
            this._deceleration = 0;
        });

    }

    private _scrollBy(val:number){
        this.offset += val;
        if (this.offset > this.scrollHeight - this._container.height) {
            this.offset = this.scrollHeight - this._container.height;
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }

        if (this.offset < 0) {
            this.offset = 0;
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }
        this._container.trigger('scrollVertical');
    }
    
    update(time:number,delta:number){
        if (!this.enabled) return;

        if (this._scrollVelocity) this._container.trigger('scrollVertical');

        if (this._scrollVelocity) {
            this._scrollBy(this._scrollVelocity * delta /1000)
        }
        this._deceleration = this._deceleration + 0.5 / delta;

        if (delta>1000) {
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }

        if (this._scrollVelocity > 0) this._scrollVelocity -= this._deceleration;
        else if (this._scrollVelocity < 0) this._scrollVelocity += this._deceleration;

        if (closeTo(this._scrollVelocity, 0,3)) {
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }

    }

}


export abstract class ScrollableContainer extends Container {

    protected vScrollInfo: ScrollInfo;

    protected initScrolling(desc: ScrollInitDesc) {
        if (desc.vertical) {
            this.vScrollInfo = new ScrollInfo();
            this.vScrollInfo.listenScroll(this);
        }
    }

    update(time:number,delta:number){
        if (this.vScrollInfo) this.vScrollInfo.update(time,delta);
        super.update(time,delta);
    }

}