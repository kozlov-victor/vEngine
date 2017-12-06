/*global DEBUG:true*/
import mathEx from '../mathEx'


export default class Mouse {

    objectsCaptured = {};

    constructor(game){
        this.game = game;
    }

    listenTo(container) {
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
        // mouseMove
        container.ontouchmove = e=>{
            let l = e.touches.length;
            while (l--){
                this.resolveMouseMove(e.touches[l]);
            }
        };
        container.onmousemove = e=>{
            this.resolveMouseMove(e);
        };
        // other
        container.ondblclick = e=>{
            this.resolveDoubleClick(e);
        }
    }

    resolveScreenPoint(e){
        return {
            x: ~~((e.clientX - this.game.pos.x ) / this.game.scale.x) + this.game.camera.pos.x,
            y: ~~((e.clientY - this.game.pos.y ) / this.game.scale.y) + this.game.camera.pos.y,
            id: e.identifier || 0
        };
    }

    triggerEvent(e,eventName){
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
                        id:point.id
                    });
                    break exit;
                }
            }
        }

        scene.trigger(eventName,{
            screenX:point.x,
            screenY:point.y,
            id:point.id,
            target:scene
        });

        return point;
    }

    resolveClick(e){
        if (window.canceled) return;
        this.triggerEvent(e,'click');
        this.triggerEvent(e,'mouseDown');
    }

    resolveMouseMove(e){
        if (DEBUG && window.canceled) return;
        let point = this.triggerEvent(e,'mouseMove');
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
        if (DEBUG && window.canceled) return;
        let point = this.triggerEvent(e,'mouseUp');
        if (!point) return;
        let lastMouseDownObject = this.objectsCaptured[point.id];
        if (!lastMouseDownObject) return;
        lastMouseDownObject.trigger('mouseUp');
        delete this.objectsCaptured[point.id];
    }

    resolveDoubleClick(e){
        if (DEBUG && window.canceled) return;
        let point = this.triggerEvent(e,'doubleClick');
        if (!point) return;
        delete this.objectsCaptured[point.id];
    }

}