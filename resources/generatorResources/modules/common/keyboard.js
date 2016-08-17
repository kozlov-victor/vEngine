var buffer = {};
var KEY_PRESSED = 1;
var KEY_JUST_PRESSED = 2;
var KEY_RELEASED = 0;
var KEY_JUST_RELEASED = -1;
var self = module.exports;

self.KEY_UP = 38;
self.KEY_DOWN = 40;
self.KEY_LEFT = 37;
self.KEY_RIGHT = 39;

self.isPressed = function(key){
    return buffer[key]>KEY_RELEASED;
};

self.isJustPressed = function(key){
    return buffer[key]==KEY_JUST_PRESSED;
};

self.isReleased = function(key) {
    return  buffer[key]<=KEY_RELEASED || !buffer[key];
};

self.isJustReleased = function(key) {
    return buffer[key] == KEY_JUST_RELEASED;
};

self.update = function(){
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