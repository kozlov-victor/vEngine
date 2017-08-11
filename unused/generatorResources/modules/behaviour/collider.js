
const mathEx = require('mathEx');

let gos;
let scene;

exports.setUp = function(){
    scene = require('game').getCurrScene();
    gos = scene.getAllGameObjects();
};

exports.manage = function(obj,newX,newY){
    if (obj.pos.x==newX && obj.pos.y==newY) return;
    if (!obj.rigid) {
        obj.pos.x = newX;
        obj.pos.y = newY;
    } else {
        let tileOn = scene.getTileAt(
            newX + obj.getRect().width / 2,
            newY + obj.getRect().height / 2
        );
        if (tileOn==16 || tileOn==17) return;
    }
    let hasCollision = false;
    let all = gos.rs;
    for (let i = 0,l = all.length;i<l;i++) {
        let go = all[i];
        if (obj==go) continue;

        let objRect = obj.getRect();
        objRect.x = newX;
        objRect.y = newY;

        if (mathEx.isRectIntersectRect(objRect,go.getRect())) {
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
};