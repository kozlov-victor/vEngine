/*global DEBUG:true*/
import mathEx from '../mathEx'

export default class Mouse {

    objectsCaptured = {};
    container = null;

    constructor(game){
        this.game = game;
        this.currPoint = null;
    }


    resolveScreenPoint(e){ // todo this is world point
        let game = this.game;
        let camera = this.game.camera;
        let rectScaled = camera.getRectScaled();

        let screenX = (e.clientX - game.pos.x ) / game.scale.x;
        let screenY = (e.clientY - game.pos.y ) / game.scale.y;


        let p = game.camera.screenToWorld(screenX,screenY);

        // let res = {
        //     x: ~~((((e.clientX - game.pos.x ) / game.scale.x ) + camera.pos.x)),
        //     y: ~~((((e.clientY - game.pos.y ) / game.scale.y ) + camera.pos.y)),
        //     id: e.identifier || 0
        // };

        let res = {
            x:camera.pos.x+p[0],
            y:camera.pos.y+p[1],
            id:0
        };
        this.currPoint = res;

        return res;
    }

    triggerEvent(e,eventName,isMouseDown){
        let g = this.game;
        let scene = g.getCurrScene();
        if (!scene) return;
        let point = this.resolveScreenPoint(e);

exit:   for (let i=0;i<scene.layers.length;i++){
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

    resolveClick(e){
        this.triggerEvent(e,'click');
        this.triggerEvent(e,'mouseDown');
    }

    resolveMouseMove(e,isMouseDown){
        let point = this.triggerEvent(e,'mouseMove',isMouseDown);
        if (!point) return;
        let lastMouseDownObject = this.objectsCaptured[point.id];
        if (lastMouseDownObject && lastMouseDownObject!==point.object) {
            lastMouseDownObject.trigger('mouseLeave');
            delete this.objectsCaptured[point.id];
        }
        if (point.object && lastMouseDownObject!==point.object) {
            point.object.trigger('mouseEnter');
            this.objectsCaptured[point.id] = point.object;
        }
    }

    resolveMouseUp(e){
        let point = this.triggerEvent(e,'mouseUp');
        if (!point) return;
        let lastMouseDownObject = this.objectsCaptured[point.id];
        if (!lastMouseDownObject) return;
        lastMouseDownObject.trigger('mouseUp');
        delete this.objectsCaptured[point.id];
    }

    resolveDoubleClick(e){
        let point = this.triggerEvent(e,'doubleClick');
        if (!point) return;
        delete this.objectsCaptured[point.id];
    }

    listenTo(container) {
        this.container = container;
        // mouseDown
        container.ontouchstart = e=>{
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
        //
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