
ve.commonBehaviour.Walk4Dir = Class.extend(
    {
        _parameters: {},
        _gameObject: null,
        init: function(_gameObj,_params){
            this._gameObject = _gameObj;
            this._parameters = ve.utils.merge(ve.utils.clone(ve.behaviours.Walk4Dir),_params);
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
        onUpdate: function(){
            var self = this;
            var go = self._gameObject;
            if (ve.keyboard.isPressed(ve.keyboard.KEY_UP)) {
                go.velY = self._parameters.velocity;
                self.upAnim.play();
            }
            if (ve.keyboard.isPressed(ve.keyboard.KEY_DOWN)) {
                go.velY = -self._parameters.velocity;
                self.downAnim.play();
            }
            if (ve.keyboard.isPressed(ve.keyboard.KEY_LEFT)) {
                go.velX = self._parameters.velocity;
                self.leftAnim.play();
            }
            if (ve.keyboard.isPressed(ve.keyboard.KEY_RIGHT)) {
                go.velX = -self._parameters.velocity;
                self.rightAnim.play();
            }

            if (ve.keyboard.isJustReleased(ve.keyboard.KEY_LEFT)) {
                self._stop('Left');
            } else if (ve.keyboard.isJustReleased(ve.keyboard.KEY_RIGHT)) {
                self._stop('Right');
            } else if (ve.keyboard.isJustReleased(ve.keyboard.KEY_UP)) {
                self._stop('Up');
            } else if (ve.keyboard.isJustReleased(ve.keyboard.KEY_DOWN)) {
                self._stop('Down');
            }
        }
    },
    {
        defaultParameters: {
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
        description:'Walking up, down, left, right'
    }
);