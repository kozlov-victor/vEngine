
var collider = require('collider').instance();
var BaseModel = require('baseModel').BaseModel;

exports.Moveable = BaseModel.extend({
    _gameObject: null,
    update: function(time,delta){
        var _gameObject = this._gameObject;
        var deltaX = _gameObject.vel.x * delta / 1000;
        var deltaY = _gameObject.vel.y * delta / 1000;
        var posX = _gameObject.pos.x+deltaX;
        var posY = _gameObject.pos.y+deltaY;
        collider.manage(_gameObject,posX,posY);
    }
});