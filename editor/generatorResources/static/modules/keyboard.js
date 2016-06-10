(function(){

    var buffer = {};

    var keyboard = {};

    var JUST_PRESSED = 1;
    var PRESSED = 2;
    var UN_PRESSED = 0;
    var JUST_UNPRESSED = -1;

    keyboard.KEY_UP = 38;
    keyboard.KEY_DOWN = 40;
    keyboard.KEY_LEFT = 37;
    keyboard.KEY_RIGHT = 39;

    keyboard.isKeyPressed = function(key){
        return buffer[key]>0;
    };

    keyboard.isKeyJustPressed = function(key){
        var res = buffer[key]==JUST_PRESSED;
        if (res) buffer[key] = PRESSED;
        return res;
    };

    keyboard.isKeyJustUnPressed = function(key){
        var res = buffer[key]==JUST_UNPRESSED;
        if (res) buffer[key] = UN_PRESSED;
        return res;
    };

    window.addEventListener('keydown',function(e){
        if (!!buffer[e.keyCode]>0) return;
        buffer[e.keyCode] = JUST_PRESSED;
    });

    window.addEventListener('keyup',function(e){
        buffer[e.keyCode] = JUST_UNPRESSED;
    });

    ve.keyboard = keyboard;

})();