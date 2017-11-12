
/*global DEBUG:true*/

const KEY_PRESSED = 1;
const KEY_JUST_PRESSED = 2;
const KEY_RELEASED = 0;
const KEY_JUST_RELEASED = -1;

export default class Keyboard {

    buffer = {};
    static KEY_UP = 38;
    static KEY_DOWN = 40;
    static KEY_LEFT = 37;
    static KEY_RIGHT = 39;

    constructor(game) {
        this.game = game;
    }

    emulatePress(code){
        this.buffer[code] = KEY_PRESSED;
    }

    emulateRelease(code){
        this.buffer[code] = KEY_JUST_RELEASED;
    }

    isPressed(key){
        return this.buffer[key]>KEY_RELEASED;
    }

    isJustPressed(key){
        return this.buffer[key]==KEY_JUST_PRESSED;
    }

    isReleased(key) {
        return  this.buffer[key]<=KEY_RELEASED || !this.buffer[key];
    }

    isJustReleased(key) {
        return this.buffer[key] == KEY_JUST_RELEASED;
    }

    update(){
        if (DEBUG && window.canceled) return;
        [
            Keyboard.KEY_UP,
            Keyboard.KEY_DOWN,
            Keyboard.KEY_LEFT,
            Keyboard.KEY_RIGHT
        ].forEach(key=>{
            if (this.buffer[key]==KEY_JUST_PRESSED) this.buffer[key] = KEY_PRESSED;
            else if (this.buffer[key]==KEY_JUST_RELEASED) this.buffer[key] = KEY_RELEASED;
        });
    };


    listenTo(){
        window.addEventListener('keydown',e=>{
            let code = e.keyCode;
            switch (code) {
                case Keyboard.KEY_UP:
                case Keyboard.KEY_DOWN:
                case Keyboard.KEY_LEFT:
                case Keyboard.KEY_RIGHT:
                    this.buffer[code] = KEY_PRESSED;
                    break;
            }
        });
        window.addEventListener('keyup',e=>{
            let code = e.keyCode;
            switch (code) {
                case Keyboard.KEY_UP:
                case Keyboard.KEY_DOWN:
                case Keyboard.KEY_LEFT:
                case Keyboard.KEY_RIGHT:
                    this.buffer[code] = KEY_JUST_RELEASED;
                    break;
            }
        });
    }


}