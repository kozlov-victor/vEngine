(function(){

    var keyboard = {};

    var buffer = {};
    var KEY_PRESSED = 1;
    var KEY_JUST_PRESSED = 2;
    var KEY_RELEASED = 0;
    var KEY_JUST_RELEASED = -1;

    keyboard.KEY_UP = 38;
    keyboard.KEY_DOWN = 40;
    keyboard.KEY_LEFT = 37;
    keyboard.KEY_RIGHT = 39;

    keyboard.isPressed = function(key){
        return buffer[key]>0;
    };

    keyboard.isJustPressed = function(key){
        return buffer[key]==KEY_JUST_PRESSED;
    };

    keyboard.isReleased = function(key) {
        return  buffer[key]<=0 || !buffer[key];
    };

    keyboard.isJustReleased = function(key) {
        return buffer[key] == KEY_JUST_RELEASED;
    };

    keyboard._onNextTick = function(){
        [
            keyboard.KEY_UP,
            keyboard.KEY_DOWN,keyboard.KEY_LEFT,
            keyboard.KEY_RIGHT
        ].forEach(function(key){
            if (buffer[key]==KEY_JUST_PRESSED) buffer[key] = KEY_PRESSED;
            else if (buffer[key]==KEY_JUST_RELEASED) buffer[key] = KEY_RELEASED;
        });
    };

    window.addEventListener('keydown',function(e){
        var code = e.keyCode;
        switch (code) {
            case keyboard.KEY_UP:
            case keyboard.KEY_DOWN:
            case keyboard.KEY_LEFT:
            case keyboard.KEY_RIGHT:
                buffer[code] = KEY_PRESSED;
                break;
        }
    });

    window.addEventListener('keyup',function(e){
        var code = e.keyCode;
        switch (code) {
            case keyboard.KEY_UP:
            case keyboard.KEY_DOWN:
            case keyboard.KEY_LEFT:
            case keyboard.KEY_RIGHT:
                buffer[code] = KEY_JUST_RELEASED;
                break;
        }
    });

    ve.keyboard = keyboard;

})();