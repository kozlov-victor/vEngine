
/*global DEBUG:true*/

const KEY_PRESSED = 1;
const KEY_JUST_PRESSED = 2;
const KEY_RELEASED = 0;
const KEY_JUST_RELEASED = -1;

export default class Keyboard {

    static KEY = {
        SPACE: 32,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 80,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };

    buffer = {};

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
        return this.buffer[key]===KEY_JUST_PRESSED;
    }

    isReleased(key) {
        return  this.buffer[key]<=KEY_RELEASED || !this.buffer[key];
    }

    isJustReleased(key) {
        return this.buffer[key] === KEY_JUST_RELEASED;
    }

    update(){
        if (DEBUG && window.canceled) return;
        Object.keys(this.buffer).forEach(key=>{
            if (this.buffer[key]===KEY_JUST_PRESSED) this.buffer[key] = KEY_PRESSED;
            else if (this.buffer[key]===KEY_JUST_RELEASED) this.buffer[key] = KEY_RELEASED;
        });
    }

    listenTo(){
        window.addEventListener('keydown',e=>{
            let code = e.keyCode;
            this.buffer[code] = KEY_PRESSED;
        });
        window.addEventListener('keyup',e=>{
            let code = e.keyCode;
            this.buffer[code] = KEY_JUST_RELEASED;
        });
    }


}