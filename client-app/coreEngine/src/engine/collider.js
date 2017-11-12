

import {isRectIntersectRect} from './mathEx'

export default class Collider {

    constructor(game){
        this.game = game;
    }

    manage(obj,newX,newY){
        if (obj.pos.x==newX && obj.pos.y==newY) return;
        if (!obj.rigid) {
            obj.pos.x = newX;
            obj.pos.y = newY;
            return;
        } else {
            // let tileOn = scene.getTileAt(
            //     newX + obj.getRect().width / 2,
            //     newY + obj.getRect().height / 2
            // );
            // if (tileOn==16 || tileOn==17) return;
        }
        let hasCollision = false;
        let all = this.game.getCurrScene().getAllGameObjects();
        for (let i = 0,l = all.length;i<l;i++) {
            let go = all[i];
            if (obj==go) continue;

            let objRect = obj.getRect();
            objRect.x = newX;
            objRect.y = newY;

            if (isRectIntersectRect(objRect,go.getRect())) {
                if (obj.rigid && go.rigid) {
                    hasCollision = true;
                    obj.trigger('collide',go);
                    //console.log('collided',obj.name,go.name,go.rigid);
                } else {
                    obj.trigger('overlap',go);
                }
            }
        }
        if (!hasCollision) {
            obj.pos.x = newX;
            obj.pos.y = newY;
        }
        return hasCollision;
    }


}