
var bundle = require('bundle');

var objFollowTo = null;
var scene = null;
var sceneWidth;
var sceneHeight;

exports.pos = {
    x:0,
    y:0
};

exports.follow = function(gameObject) {
    objFollowTo = gameObject;
    scene = gameObject.getScene();
    sceneWidth = scene.tileMap._spriteSheet._frameWidth*scene.tileMap.width;
    sceneHeight = scene.tileMap._spriteSheet._frameHeight*scene.tileMap.height;
};


exports.update = function(ctx) {
    if (!objFollowTo) return;
    var pos = exports.pos;
    var w = bundle.gameProps.width;
    var h = bundle.gameProps.height;
    var wDiv2 = w/2;
    var hDiv2 = h/2;
    pos.x = objFollowTo.pos.x - wDiv2;
    pos.y = objFollowTo.pos.y - hDiv2;
    if (pos.x<0) pos.x = 0;
    if (pos.y<0) pos.y = 0;
    if (pos.x>sceneWidth - w) pos.x = sceneWidth -w;
    if (pos.y>sceneHeight -h) pos.y = sceneHeight -h;
    ctx.translate(-pos.x,-pos.y);
};

