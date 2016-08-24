

Class.extend(
    {
        _parameters: {},
        _gameObject: null,
        initialize: function(_gameObj,_params){
            this._gameObject = _gameObj;
            this._parameters = _params;
            this.mouse = require('mouse').instance();
        },
        onCreate: function(){
            var self = this;
            var g = this._gameObject;
            self._mouseDown = false;
            var mX = 0;
            var mY = 0;
            var scene = g.getScene();
            g.on('click',function(e){
                self._mouseDown = true;
                mX = e.objectX;
                mY = e.objectY;
            });
            scene.on('mouseMove',function(e){
                if (self._mouseDown) {
                    g.posX = e.screenX - mX;
                    g.posY = e.screenY - mY;
                }
            });
        },
        onUpdate: function(){
            if (!this.mouse.isMouseDown) this._mouseDown = false;
        }
    },
    {
        parameters: {

        },
        description:'draggable behaviour'
    }
);