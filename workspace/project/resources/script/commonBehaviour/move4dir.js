
Class.extend(
    {
        _parameters: {},
        _gameObject: null,
        initialize: function(_gameObj,_params){
            this._gameObject = _gameObj;
            this._parameters = _params;
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
            var lastDir = '';
            self._gameObject.go = function(direction){
                self._go(direction);
                lastDir = direction;
            };
            self._gameObject.stop = function(){
                self._stop();
            }
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
            switch (direction) {
                case 'Up':
                    self._gameObject.velY = -self._parameters.velocity;
                    break;
                case 'Down':
                    self._gameObject.velY = self._parameters.velocity;
                    break;
                case 'Left':
                    self._gameObject.velX = -self._parameters.velocity;
                    break;
                case 'Right':
                    self._gameObject.velX = self._parameters.velocity;
                    break;
            }
        },
        onUpdate: function(){

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
        description:'allow character to walk up, down, left and right'
    }
);