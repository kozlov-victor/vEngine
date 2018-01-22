
import BaseAbstractBehaviour, {BehaviourParameters} from '../abstract/baseAbstractBehaviour'
import Game from "../../core/game";
import GameObject from "../../model/generic/gameObject";
import Scene from "../../model/generic/scene";
import {MouseEventEx} from "../../declarations";

interface MouseDragPoint {
    mX: number,
    mY: number,
    target: GameObject,
    preventDefault():void,
    dragStartX:number,
    dragStartY:number
}


export default class DraggableBehaviour extends BaseAbstractBehaviour {

    private static _getEventId(e:MouseEventEx):number{
        return e.id || 1;
    };

    private blurListener:(e:MouseEvent)=>void;

    private points:{number:any};

    constructor(game:Game){
        super(game);
        this.points = {} as {number:any};
    }

    manage(gameObject:GameObject,params:BehaviourParameters) {
        gameObject.on('click',(e)=>{
            this.points[DraggableBehaviour._getEventId(e)] = {
                mX: e.objectX,
                mY: e.objectY,
                target: gameObject,
                preventDefault(){
                    this.defaultPrevented = true;
                },
                dragStartX:0,
                dragStartY:0
            } as MouseDragPoint;
        });
        let scene:Scene = this.game.getCurrScene();
        scene.on('mouseDown',e=>{
            let pointId:number = DraggableBehaviour._getEventId(e);
            let point:MouseDragPoint = this.points[pointId];
            if (!point) return;
            point.dragStartX = point.target.pos.x;
            point.dragStartY = point.target.pos.y;
        });
        scene.on('mouseMove',e=>{
            let pointId = DraggableBehaviour._getEventId(e);
            let point = this.points[pointId];
            if (!point) return;
            if (!point.dragStart) {
                point.dragStart = true;
                point.target.trigger('dragStart',point);
                if (point.defaultPrevented) {
                    delete this.points[pointId];
                    return;
                }
            }
            gameObject.pos.x = e.screenX - point.mX;
            gameObject.pos.y = e.screenY - point.mY; // todo check collision ant then move
            // this.game._collider.moveTo(
            //     gameObject,
            //     e.screenX - point.mX,
            //     e.screenY - point.mY
            // );
        });
        scene.on('mouseUp',e=>{
            let pointId = DraggableBehaviour._getEventId(e);
            let point = this.points[pointId];
            if (!point) return;
            if (point.dragStart) {
                point.x = gameObject.pos.x;
                point.y = gameObject.pos.y;
                point.target.trigger('dragStop',point);
            }
            delete this.points[pointId];
        });
        this.blurListener = (e)=>{
            scene.trigger('mouseUp',e);
        };
        this.game.renderer.container.addEventListener('mouseleave',this.blurListener);
    }

    destroy(){
        this.game.renderer.container.removeEventListener('mouseleave',this.blurListener);
    }

}

