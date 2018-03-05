import GameObject from "../../model/impl/gameObject";

declare const IN_EDITOR:boolean,DEBUG:boolean;

import * as mathEx from '../mathEx'
import Point2d from "../geometry/point2d";
import ObjectPool from "../misc/objectPool";
import Game from "../game";
import Scene from "../../model/impl/scene";
import BaseModel from "../../model/baseModel";
import Rect from "../geometry/rect";
import Container from "../../model/impl/ui/generic/container";

interface MouseEventEx extends MouseEvent {
    identifier:number,
    touches:Array<any>
}

export class MousePoint extends Point2d{

    public screenX:number;
    public screenY:number;
    public id:number;
    public target:BaseModel;
    public isMouseDown:boolean;

    private static mousePointsPool:ObjectPool<MousePoint> = new ObjectPool<MousePoint>(MousePoint);

    constructor(){
        super();
    }


    static fromPool():MousePoint{
        return MousePoint.mousePointsPool.getNextObject();
    }

    static unTransform(another:MousePoint):MousePoint{
        let p:MousePoint = MousePoint.fromPool();
        p.screenX = another.screenX;
        p.screenY = another.screenY;
        p.id = another.id;
        p.target = another.target;
        p.setXY(p.screenX,p.screenY);
        return p;
    }

}

export let MOUSE_EVENTS = {
    click       :   'click',
    mouseDown   :   'mouseDown',
    mouseMove   :   'mouseMove',
    mouseLeave  :   'mouseLeave',
    mouseEnter  :   'mouseEnter',
    mouseUp     :   'mouseUp',
    doubleClick :   'doubleClick'
};

export default class Mouse {

    private objectsCaptured:{[pointId:number]:BaseModel} = {};
    private container:HTMLElement;
    private game:Game;

    constructor(game:Game){
        this.game = game;
    }


    //MouseEvent|TouchEvent|PointerEvent
    resolvePoint(e:MouseEvent|TouchEvent|Touch|PointerEvent):MousePoint{
        let game:Game = this.game;
        let clientX:number = <number>(e as any).clientX;
        let clientY:number = <number>(e as any).clientY;

        let screenX:number = (clientX - game.pos.x ) / game.scale.x;
        let screenY:number = (clientY - game.pos.y ) / game.scale.y;

        let p:Point2d = game.camera.screenToWorld(Point2d.fromPool().setXY(screenX,screenY));

        let mousePoint:MousePoint = MousePoint.fromPool();
        mousePoint.set(p);
        mousePoint.screenX = screenX;
        mousePoint.screenY = screenY;
        mousePoint.id = (e as Touch).identifier  || 0; // (e as PointerEvent).pointerId
        return mousePoint;
    }

    private static triggerGameObjectEvent(eventName:string,point:MousePoint,go:BaseModel,offsetX = 0, offsetY = 0):boolean{
        let rectWithOffset = Rect.fromPool().set(go.getRect()).addXY(offsetX,offsetY);
        if (
            mathEx.isPointInRect(point,rectWithOffset)
        ) {
            point.target = go;
            go.trigger(eventName,{
                screenX:point.x,
                screenY:point.y,
                objectX:point.x - go.pos.x,
                objectY:point.y - go.pos.y,
                id:point.id,
                target:go,
                isMouseDown: point.isMouseDown
            });
            return true;
        }
        return false;
    }


    private triggerPossibleChildren(c:BaseModel[],eventName:string,point:MousePoint,offsetX:number,offsetY:number){
        for (let i=0;i<c.length;i++){
            let go = c[c.length - 1 - i];
            let isCaptured:boolean = Mouse.triggerGameObjectEvent(eventName,point,go,offsetX,offsetY);
            if (isCaptured) {
                if (go.children) this.triggerPossibleChildren(
                    go.children,
                    eventName,
                    point,
                    offsetX+go.pos.x,
                    offsetY+go.pos.y);
                break;
            }
        }
    }

    triggerEvent(e:MouseEvent|TouchEvent|Touch,eventName:string,isMouseDown?:boolean):MousePoint{
        if (isMouseDown===undefined) isMouseDown = false;
        let g = this.game;
        let scene = g.getCurrScene();
        let point:MousePoint = this.resolvePoint(e);
        point.isMouseDown = isMouseDown;
        point.target = undefined;

        for (let go of scene.getAllGameObjects()) {
            let isCaptured:boolean = Mouse.triggerGameObjectEvent(eventName,point,go);
            if (isCaptured) {
                if (go.children) this.triggerPossibleChildren(go.children,eventName,point,go.pos.x,go.pos.y);
                break;
            }
        }

        let untransformedPoint = MousePoint.unTransform(point);
        for (let j=0;j<scene.uiLayer.gameObjects.length;j++){
            let go = scene.uiLayer.gameObjects[scene.uiLayer.gameObjects.length - 1 - j];
            let isCaptured:boolean = Mouse.triggerGameObjectEvent(eventName,untransformedPoint,go);
            if (isCaptured) {
                if (go.children) this.triggerPossibleChildren(go.children,eventName,untransformedPoint,go.pos.x,go.pos.y);
                break;
            }
        }
        if (untransformedPoint.target) point.target = untransformedPoint.target;

        if (point.target===undefined) point.target = scene;
        scene.trigger(eventName,{
            screenX:point.x,
            screenY:point.y,
            id:point.id,
            target:scene,
            isMouseDown
        });
        return point;
    }

    resolveClick(e:TouchEvent|MouseEvent){
        this.triggerEvent(e,MOUSE_EVENTS.click);
        this.triggerEvent(e,MOUSE_EVENTS.mouseDown);
    }

    resolveMouseMove(e:Touch|MouseEvent,isMouseDown:boolean){
        let point:MousePoint = this.triggerEvent(e,MOUSE_EVENTS.mouseMove,isMouseDown);
        if (!point) return;
        let lastMouseDownObject:BaseModel = this.objectsCaptured[point.id];
        if (lastMouseDownObject && lastMouseDownObject!==point.target) {
            lastMouseDownObject.trigger(MOUSE_EVENTS.mouseLeave,point);
            delete this.objectsCaptured[point.id];
        }

        if (point.target && lastMouseDownObject!==point.target) {
            point.target.trigger(MOUSE_EVENTS.mouseEnter,point);
            this.objectsCaptured[point.id] = point.target;
        }
    }

    resolveMouseUp(e:MouseEvent|Touch){
        let point = this.triggerEvent(e,MOUSE_EVENTS.mouseUp);
        if (!point) return;
        let lastMouseDownObject = this.objectsCaptured[point.id];
        if (!lastMouseDownObject) return;
        lastMouseDownObject.trigger(MOUSE_EVENTS.mouseUp,point);
        delete this.objectsCaptured[point.id];
    }

    resolveDoubleClick(e:|MouseEvent){
        let point = this.triggerEvent(e,MOUSE_EVENTS.doubleClick);
        if (!point) return;
        delete this.objectsCaptured[point.id];
    }

    listenTo(container:HTMLElement) {
        this.container = container;
        // mouseDown
        container.ontouchstart = (e:TouchEvent)=>{
            let l = e.touches.length;
            while (l--){
                this.resolveClick((e.touches[l] as any));
            }
        };
        container.onmousedown = (e:MouseEvent)=>{
            (e.button === 0) && this.resolveClick(e);
        };
        // mouseUp
        container.ontouchend = container.ontouchcancel = (e:TouchEvent)=>{
            let l = e.changedTouches.length;
            while (l--){
                this.resolveMouseUp(e.changedTouches[l]);
            }
        };
        container.onmouseup = (e:MouseEvent)=>{
            this.resolveMouseUp(e);
        };
        // mouseMove
        container.ontouchmove = (e:TouchEvent)=>{
            let l = e.touches.length;
            while (l--){
                this.resolveMouseMove(e.touches[l],true);
            }
        };
        container.onmousemove = (e:MouseEvent)=>{
            let isMouseDown = e.buttons === 1;
            this.resolveMouseMove(e,isMouseDown);
        };
        // other
        container.ondblclick = (e:MouseEvent)=>{ // todo now only on pc
            this.resolveDoubleClick(e);
        }
    }

    destroy(){
        [
            'mouseMove','ontouchstart','onmousedown',
            'ontouchend','onmouseup','ontouchmove',
            'onmousemove','ondblclick'].forEach(evtName=>{
            (this.container as any)[evtName] = null;
        })
    }

}