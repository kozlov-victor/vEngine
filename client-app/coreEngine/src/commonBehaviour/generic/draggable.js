/**
 *
 exports.parameters =  {};
 exports.description = 'draggable behaviour with multitouch supporting';
 */
import BaseAbstractBehaviour from '../abstract/baseAbstractBehaviour'

export default class DraggableBehaviour extends BaseAbstractBehaviour {

    static _getEventId(e){
        return e.id || 1;
    };

    constructor(game){
        super();
        this.game = game;
        this.points = {};
    }

    manage(gameObject,params) {
        gameObject.on('click',e=>{
            this.points[DraggableBehaviour._getEventId(e)] = {
                mX: e.objectX,
                mY: e.objectY,
                target: gameObject,
                preventDefault(){
                    this.defaultPrevented = true;
                }
            };
        });
        let scene = this.game.getCurrScene();
        scene.on('mouseDown',e=>{
            let pointId = DraggableBehaviour._getEventId(e);
            let point = this.points[pointId];
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
            // collider.manage(
            //     self,
            //     e.screenX - point.mX,
            //     e.screenY - point.mY
            // );
            gameObject.pos.x = e.screenX - point.mX;
            gameObject.pos.y = e.screenY - point.mY;
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
    }

}

