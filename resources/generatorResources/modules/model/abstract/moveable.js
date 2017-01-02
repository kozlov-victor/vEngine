
var collider = require('collider');
var BaseModel = require('baseModel');

var Moveable = BaseModel.extend({
    _gameObject: null,
    update: function(time,delta){
        var _gameObject = this._gameObject;
        var deltaX = _gameObject.vel.x * delta / 1000;
        var deltaY = _gameObject.vel.y * delta / 1000;
        var posX = _gameObject.pos.x+deltaX;
        var posY = _gameObject.pos.y+deltaY;
        if (_gameObject.angleVel) _gameObject.angle += _gameObject.angleVel * delta / 1000;
        collider.manage(_gameObject,posX,posY);
    }
});

module.exports = Moveable;