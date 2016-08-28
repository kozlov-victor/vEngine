
Class.extend(
    {
        _parameters: {},
        _gameObject: null,
        initialize: function(_gameObj,_params){
            this._gameObject = _gameObj;
            this._parameters = _params;
            this.keyboard = require('keyboard').instance();
        },
        onCreate: function(){
            var dirs = ['Left','Right','Up','Down'];
            var self = this;
            dirs.forEach(function(dir){
                var keyWalk = 'walk'+dir+'Animation', keyIdle = 'idle'+dir+'Animation';
                self[keyWalk] = self._gameObject.getFrAnimation(self._parameters[keyWalk]);
                if (!self[keyWalk]) throw 'can not find animation ' + self._parameters[keyWalk] +' an gameObject ' + self._gameObject.name;
                self._parameters[keyIdle] && (self[keyIdle] = self._gameObject.getFrAnimation(self._parameters[keyIdle]));
            });
        },
        _stop: function(lastDirection){
            var self = this;
            var go = self._gameObject;
            go.stopFrAnimations();
            go.velX = 0;
            go.velY = 0;
            var idleKey = 'idle'+lastDirection+'Animation';
            self[idleKey] && (self[idleKey].play());
        },
        _go: function(direction){
            var self = this;
            self['walk'+direction+'Animation'].play();
        },
        onUpdate: function(){
            var self = this;
            var go = self._gameObject;
            if (this.keyboard.isPressed(ve.keyboard.KEY_UP)) {
                go.velY = -self._parameters.velocity;
                self._go('Up');
            }
            if (this.keyboard.isPressed(ve.keyboard.KEY_DOWN)) {
                go.velY = self._parameters.velocity;
                self._go('Down');
            }
            if (this.keyboard.isPressed(ve.keyboard.KEY_LEFT)) {
                go.velX = -self._parameters.velocity;
                self._go('Left');
            }
            if (this.keyboard.isPressed(ve.keyboard.KEY_RIGHT)) {
                go.velX = self._parameters.velocity;
                self._go('Right');
            }

            if (this.keyboard.isJustReleased(ve.keyboard.KEY_LEFT)) {
                self._stop('Left');
            } else if (this.keyboard.isJustReleased(ve.keyboard.KEY_RIGHT)) {
                self._stop('Right');
            } else if (this.keyboard.isJustReleased(ve.keyboard.KEY_UP)) {
                self._stop('Up');
            } else if (this.keyboard.isJustReleased(ve.keyboard.KEY_DOWN)) {
                self._stop('Down');
            }
        }
    },
    {
        parameters: {
            velocity: 100,
            walkLeftAnimation: 'left',
            walkRightAnimation: 'right',
            walkUpAnimation:'up',
            walkDownAnimation:'down',
            idleLeftAnimation: 'idleLeft',
            idleRightAnimation: 'idleRight',
            idleUpAnimation:'idleUp',
            idleDownAnimation:'idleDown'
        },
        description:'control character with cursor to walk up, down, left and right'
    }
);