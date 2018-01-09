
/*global DEBUG:true*/

const KEY_JUST_PRESSED = 2;
const KEY_PRESSED = 1;
const KEY_JUST_RELEASED = 0;
const KEY_RELEASED = -1;

declare const DEBUG:boolean;
declare const window:any;

export default class Keyboard {

    keyDownListener = null;
    keyUpListener = null;

    KEY = {
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
        DOWN: 40,

        GAME_PAD_1: 0,
        GAME_PAD_2: 1,
        GAME_PAD_3: 2,
        GAME_PAD_4: 3,
        GAME_PAD_5: 4,
        GAME_PAD_6: 5,
        GAME_PAD_7: 6,
        GAME_PAD_8: 7,
        GAME_PAD_AXIS_LEFT: 8,
        GAME_PAD_AXIS_RIGHT: 9,
        GAME_PAD_AXIS_UP: 10,
        GAME_PAD_AXIS_DOWN: 11

    };

    buffer = {};
    game;

    constructor(game) {
        this.game = game;
    }

    press(key){
        if (this.isPressed(key)) return;
        //console.log('pressed',key);
        this.buffer[key] = KEY_JUST_PRESSED;
    }

    release(key){
        if (this.isReleased(key)) return;
        this.buffer[key] = KEY_JUST_RELEASED;
    }

    isPressed(key){
        return this.buffer[key]>=KEY_PRESSED;
    }

    isJustPressed(key){
        return this.buffer[key]===KEY_JUST_PRESSED;
    }

    isReleased(key) {
        if (this.buffer[key]===undefined) return true;
        return  this.buffer[key]<=KEY_JUST_RELEASED;
    }

    isJustReleased(key) {
        return this.buffer[key] === KEY_JUST_RELEASED;
    }

    update(){
        Object.keys(this.buffer).forEach(key=>{
            if (this.buffer[key]===KEY_RELEASED) delete this.buffer[key];
            else if (this.buffer[key]===KEY_JUST_RELEASED) this.buffer[key] = KEY_RELEASED;
            if (this.buffer[key]===KEY_JUST_PRESSED) {
                this.buffer[key] = KEY_PRESSED;
            }
        });
    }

    listenTo(){

        this.keyDownListener = e=>{
            let code = e.keyCode;
            this.press(code);
        };

        this.keyUpListener  = e=>{
            let code = e.keyCode;
            this.release(code);
        };

        window.addEventListener('keydown',this.keyDownListener);
        window.addEventListener('keyup',this.keyUpListener);
    }

    destroy(){
        window.removeEventListener('keydown',this.keyDownListener);
        window.removeEventListener('keyup',this.keyUpListener);
    }

}