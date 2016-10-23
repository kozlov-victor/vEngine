
var bundle = require('bundle').instance();

var Camera = function(){

    var objFollowTo = null;
    var scene = null;
    var sceneWidth;
    var sceneHeight;

    this.pos = {
        x:0,
        y:0
    };

    this.follow = function(gameObject) {
        objFollowTo = gameObject;
        scene = gameObject.getScene();
        sceneWidth = scene.tileMap._spriteSheet._frameWidth*scene.tileMap.width;
        sceneHeight = scene.tileMap._spriteSheet._frameHeight*scene.tileMap.height;
    };


    this.update = function(ctx) {
        if (!objFollowTo) return;
        var pos = this.pos;
        var w = bundle.gameProps.width;
        var h = bundle.gameProps.height;
        var wDiv2 = w/2;
        var hDiv2 = h/2;
        pos.x = objFollowTo.pos.x;
        pos.y = objFollowTo.pos.y;
        if (pos.x<wDiv2) pos.x = wDiv2;
        if (pos.y<hDiv2) pos.y = hDiv2;
        if (pos.x>sceneWidth - wDiv2) pos.x = sceneWidth - wDiv2;
        if (pos.y>sceneHeight - hDiv2) pos.y = sceneHeight - hDiv2;
        ctx.translate(-pos.x + wDiv2,-pos.y + hDiv2);
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Camera();
    return instance;
};

