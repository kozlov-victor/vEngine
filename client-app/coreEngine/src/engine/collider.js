

import {isRectIntersectRect} from './mathEx'

export default class Collider {

    constructor(game){
        this.game = game;
    }

    manage(obj,newX,newY){
        if (obj.pos.x===newX && obj.pos.y===newY) return;
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
            if (obj===go) continue;

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

    overlapTest(a, b) {
        return a.x < b.x + b.width && a.x + a.width > b.x &&
            a.y < b.y + b.height && a.y + a.height > b.y
    }

    move(player, newX, newY) {

        let all = this.game.getCurrScene().getAllGameObjects();
        // Move rectangle along y axis
        for (let i = 0,l = all.length;i<l;i++) {
            let c = { x: player.pos.x + newX, y: player.pos.y, width: player.width, height: player.height };
            let goRect = all[i].getRect();
            if (player!==all[i] && this.overlapTest(c, goRect)) {
                if (newX < 0) newX = goRect.x + goRect.width - player.pos.x;
                else if (newX > 0) newX = goRect.x - player.pos.x - player.width;
            }
        }
        player.pos.x += newX;

        // Move rectangle along y axis
        for (let i = 0,l = all.length;i<l;i++) {
            let c = { x: player.pos.x, y: player.pos.y + newY, width: player.width, height: player.height };
            let goRect = all[i].getRect();
            if (player!==all[i] && this.overlapTest(c, goRect)) {
                if (newY < 0) newY = goRect.y + goRect.height - player.pos.y;
                else if (newY > 0) newY = goRect.y - player.pos.y - player.height;
            }
        }
        player.pos.y += newY;

    }


}