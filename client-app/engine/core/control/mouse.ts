
import * as mathEx from '../mathEx'
import Point2d from "../geometry/point2d";
import ObjectPool from "../misc/objectPool";
import Game from "../game";
import Camera from "../camera";

interface MouseEventEx extends MouseEvent {
    identifier:number,
    touches:Array<any>
}

class MousePoint extends Point2d{

    screenX:number;
    screenY:number;
    id:number;
    target;
    static mousePointsPool:ObjectPool<MousePoint> = new ObjectPool<MousePoint>(MousePoint);

    constructor(){
        super();
    }

    static fromPool():MousePoint{
        return MousePoint.mousePointsPool.getNextObject();
    }

}

export default class Mouse {

    objectsCaptured = {};
    container:HTMLElement = null;
    game:Game;

    constructor(game:Game){
        this.game = game;
    }


    //MouseEvent|TouchEvent|PointerEvent
    resolvePoint(e:MouseEventEx):MousePoint{
        let game:Game = this.game;
        let camera:Camera = this.game.camera;

        let screenX:number = (e.clientX - game.pos.x ) / game.scale.x;
        let screenY:number = (e.clientY - game.pos.y ) / game.scale.y;

        let p:Point2d = game.camera.screenToWorld(screenX,screenY);

        let mousePoint:MousePoint = MousePoint.fromPool();
        mousePoint.set(p);
        mousePoint.screenX = screenX;
        mousePoint.screenY = screenY;
        mousePoint.id = e.identifier || 0;
        return mousePoint;
    }

    triggerEvent(e:MouseEventEx,eventName:string,isMouseDown?:boolean){
        if (isMouseDown===undefined) isMouseDown = false;
        let g = this.game;
        let scene = g.getCurrScene();
        if (!scene) return;
        let point = this.resolvePoint(e);

        exit:
        for (let i=0;i<scene.layers.length;i++){
            let layer = scene.layers[scene.layers.length - 1 - i];
            for (let j=0;j<layer.gameObjects.length;j++){
                let go = layer.gameObjects[j];
                if (
                    mathEx.isPointInRect(point,go.getRect())
                ) {
                    go.trigger(eventName,{
                        screenX:point.x,
                        screenY:point.y,
                        objectX:point.x - go.pos.x,
                        objectY:point.y - go.pos.y,
                        id:point.id,
                        target:go,
                        isMouseDown
                    });
                    break exit;
                }
            }
        }

        scene.trigger(eventName,{
            screenX:point.x,
            screenY:point.y,
            id:point.id,
            target:scene,
            isMouseDown
        });

        return point;
    }

    resolveClick(e:MouseEventEx){
        this.triggerEvent(e,'click');
        this.triggerEvent(e,'mouseDown');
    }

    resolveMouseMove(e:MouseEventEx,isMouseDown:boolean){
        let point:MousePoint = this.triggerEvent(e,'mouseMove',isMouseDown);
        if (!point) return;
        let lastMouseDownObject = this.objectsCaptured[point.id];
        if (lastMouseDownObject && lastMouseDownObject!==point.target) {
            lastMouseDownObject.trigger('mouseLeave');
            delete this.objectsCaptured[point.id];
        }
        if (point.target && lastMouseDownObject!==point.target) {
            point.target.trigger('mouseEnter');
            this.objectsCaptured[point.id] = point.target;
        }
    }

    resolveMouseUp(e:MouseEventEx){
        let point = this.triggerEvent(e,'mouseUp');
        if (!point) return;
        let lastMouseDownObject = this.objectsCaptured[point.id];
        if (!lastMouseDownObject) return;
        lastMouseDownObject.trigger('mouseUp');
        delete this.objectsCaptured[point.id];
    }

    resolveDoubleClick(e:MouseEventEx){
        let point = this.triggerEvent(e,'doubleClick');
        if (!point) return;
        delete this.objectsCaptured[point.id];
    }

    listenTo(container) {
        this.container = container;
        // mouseDown
        container.ontouchstart = (e:MouseEventEx)=>{
            let l = e.touches.length;
            while (l--){
                this.resolveClick(e.touches[l]);
            }
        };
        container.onmousedown = e=>{
            (e.button === 0) && this.resolveClick(e);
        };
        // mouseUp
        container.ontouchend = container.ontouchcancel = e=>{
            let l = e.changedTouches.length;
            while (l--){
                this.resolveMouseUp(e.changedTouches[l]);
            }
        };
        container.onmouseup = e=>{
            this.resolveMouseUp(e);
        };
        // mouseMove
        container.ontouchmove = e=>{
            let l = e.touches.length;
            while (l--){
                this.resolveMouseMove(e.touches[l],true);
            }
        };
        container.onmousemove = e=>{
            let isMouseDown = e.buttons === 1;
            this.resolveMouseMove(e,isMouseDown);
        };
        // other
        container.ondblclick = e=>{ // todo now only on pc
            this.resolveDoubleClick(e);
        }
    }

    destroy(){
        [
            'mouseMove','ontouchstart','onmousedown',
            'ontouchend','onmouseup','ontouchmove',
            'onmousemove','ondblclick'].forEach(evtName=>{
                this.container[evtName] = null;
        })
    }

}