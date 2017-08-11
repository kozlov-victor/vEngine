
const collider = require('collider');
const BaseModel = require('baseModel');

const Moveable = BaseModel.extend({
    _gameObject: null,
    update: function(time,delta){
        let _gameObject = this._gameObject;
        let deltaX = _gameObject.vel.x * delta / 1000;
        let deltaY = _gameObject.vel.y * delta / 1000;
        let posX = _gameObject.pos.x+deltaX;
        let posY = _gameObject.pos.y+deltaY;
        if (_gameObject.angleVel) _gameObject.angle += _gameObject.angleVel * delta / 1000;
        collider.manage(_gameObject,posX,posY);
    }
});

module.exports = Moveable;