/**
 *
 exports.parameters =  {};
 exports.description = 'draggable behaviour with multitouch supporting';
 */

export default class DraggableBehaviour {

    static _getEventId(e){
        return e.id || 1;
    };

    constructor(game){
        this.game = game;
        this.points = {};
    }

    manage(gameObject,params) {
        gameObject.on('click',e=>{
            this.points[DraggableBehaviour._getEventId(e)] = {
                isMouseDown:true,
                mX: e.objectX,
                mY: e.objectY,
                target: gameObject
            };
        });
        let scene = this.game.getCurrScene();
        scene.on('mouseMove',e=>{
            let point = this.points[DraggableBehaviour._getEventId(e)];
            if (point && point.isMouseDown) {
                // collider.manage(
                //     self,
                //     e.screenX - point.mX,
                //     e.screenY - point.mY
                // );
                gameObject.pos.x = e.screenX - point.mX;
                gameObject.pos.y = e.screenY - point.mY;
            }
        });
        scene.on('mouseUp',e=>{
            delete this.points[DraggableBehaviour._getEventId(e)];
        });
    }

}

