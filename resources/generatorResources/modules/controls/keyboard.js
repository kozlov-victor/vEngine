var Keyboard = function(){

    var buffer = {};
    var KEY_PRESSED = 1;
    var KEY_JUST_PRESSED = 2;
    var KEY_RELEASED = 0;
    var KEY_JUST_RELEASED = -1;
    var self = this;

    this.KEY_UP = 38;
    this.KEY_DOWN = 40;
    this.KEY_LEFT = 37;
    this.KEY_RIGHT = 39;

    this.isPressed = function(key){
        return buffer[key]>KEY_RELEASED;
    };

    this.isJustPressed = function(key){
        return buffer[key]==KEY_JUST_PRESSED;
    };

    this.isReleased = function(key) {
        return  buffer[key]<=KEY_RELEASED || !buffer[key];
    };

    this.isJustReleased = function(key) {
        return buffer[key] == KEY_JUST_RELEASED;
    };

    this.update = function(){
        [
            this.KEY_UP,
            this.KEY_DOWN,
            this.KEY_LEFT,
            this.KEY_RIGHT
        ].forEach(function(key){
                if (buffer[key]==KEY_JUST_PRESSED) buffer[key] = KEY_PRESSED;
                else if (buffer[key]==KEY_JUST_RELEASED) buffer[key] = KEY_RELEASED;
            });
    };

    window.addEventListener('keydown',function(e){
        var code = e.keyCode;
        switch (code) {
            case self.KEY_UP:
            case self.KEY_DOWN:
            case self.KEY_LEFT:
            case self.KEY_RIGHT:
                buffer[code] = KEY_PRESSED;
                break;
        }
    });

    window.addEventListener('keyup',function(e){
        var code = e.keyCode;
        switch (code) {
            case self.KEY_UP:
            case self.KEY_DOWN:
            case self.KEY_LEFT:
            case self.KEY_RIGHT:
                buffer[code] = KEY_JUST_RELEASED;
                break;
        }
    });
};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Keyboard();
    return instance;
};