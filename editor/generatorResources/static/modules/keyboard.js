(function(){

    var keyboard = {};

    keyboard.KEY_UP = 38;
    keyboard.KEY_DOWN = 40;
    keyboard.KEY_LEFT = 37;
    keyboard.KEY_RIGHT = 39;

    var keyDownFns = null;
    var keyUpFns = null;

    keyboard.onKeyDown = function(fn){
        keyDownFns.push(fn);
    };
    keyboard.onKeyUp = function(fn){
        keyUpFns.push(fn);
    };

    keyboard._reset = function(){
        keyDownFns = [];
        keyUpFns = [];
    };


    window.addEventListener('keydown',function(e){
        keyDownFns.forEach(function(fn){
            fn(e.keyCode);
        });
    });

    window.addEventListener('keyup',function(e){
        keyUpFns.forEach(function(fn){
            fn(e.keyCode);
        });
    });

    keyboard._reset();
    ve.keyboard = keyboard;

})();