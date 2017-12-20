/*global DEBUG:true*/
import mathEx from '../mathEx'

export default class Mouse {

    objectsCaptured = {};

    constructor(game){
        this.game = game;
        this.lastPoint = {};
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

    resolveScreenPoint(e){ // todo this is world point
        let game = this.game;
        let camera = this.game.camera;
        let rectScaled = camera.getRectScaled();
        let res = {
            x: ~~((((e.clientX - game.pos.x ) / game.scale.x ) + rectScaled.x)),
            y: ~~((((e.clientY - game.pos.y ) / game.scale.y ) + camera.pos.y)),
            id: e.identifier || 0
        };
        let fi = Math.atan2(res.y,res.x);
        let r = Math.sqrt(res.x*res.x+res.y*res.y);

        // todo avoid calculation if scale eq 1
        let oldPosX = r*Math.cos(fi); // todo DRY in camera
        let oldPosY = r*Math.sin(fi);
        let newPosX = r/camera.scale.x*Math.cos(fi); // delta screen offset due to camera view scaling
        let newPosY = r/camera.scale.y*Math.sin(fi);
        let scaleOffsetX = newPosX - oldPosX;
        let scaleOffsetY = newPosY - oldPosY;

        res.x+=scaleOffsetX;
        res.y+=scaleOffsetY;

        this.lastPoint = res;
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
        if (window.canceled) return;
        this.triggerEvent(e,'click');
        this.triggerEvent(e,'mouseDown');
    }

    resolveMouseMove(e,isMouseDown){
        if (DEBUG && window.canceled) return;
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