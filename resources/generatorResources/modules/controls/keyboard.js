var buffer = {};
var KEY_PRESSED = 1;
var KEY_JUST_PRESSED = 2;
var KEY_RELEASED = 0;
var KEY_JUST_RELEASED = -1;

exports.KEY_UP = 38;
exports.KEY_DOWN = 40;
exports.KEY_LEFT = 37;
exports.KEY_RIGHT = 39;

exports.emulatePress = function(code){
    buffer[code] = KEY_PRESSED;
};

exports.emulateRelease = function(code){
    buffer[code] = KEY_JUST_RELEASED;
};

exports.isPressed = function(key){
    return buffer[key]>KEY_RELEASED;
};

exports.isJustPressed = function(key){
    return buffer[key]==KEY_JUST_PRESSED;
};

exports.isReleased = function(key) {
    return  buffer[key]<=KEY_RELEASED || !buffer[key];
};

exports.isJustReleased = function(key) {
    return buffer[key] == KEY_JUST_RELEASED;
};

exports.update = function(){
    //<code>{{#if opts.debug}}
    if (window.canceled) return;
    // {{/if}}
    [
        exports.KEY_UP,
        exports.KEY_DOWN,
        exports.KEY_LEFT,
        exports.KEY_RIGHT
    ].forEach(function(key){
            if (buffer[key]==KEY_JUST_PRESSED) buffer[key] = KEY_PRESSED;
            else if (buffer[key]==KEY_JUST_RELEASED) buffer[key] = KEY_RELEASED;
        });
};

window.addEventListener('keydown',function(e){
    var code = e.keyCode;
    switch (code) {
        case exports.KEY_UP:
        case exports.KEY_DOWN:
        case exports.KEY_LEFT:
        case exports.KEY_RIGHT:
            buffer[code] = KEY_PRESSED;
            break;
    }
});

window.addEventListener('keyup',function(e){
    var code = e.keyCode;
    switch (code) {
        case exports.KEY_UP:
        case exports.KEY_DOWN:
        case exports.KEY_LEFT:
        case exports.KEY_RIGHT:
            buffer[code] = KEY_JUST_RELEASED;
            break;
    }
});