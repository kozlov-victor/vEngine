/*global DEBUG:true*/
if (DEBUG) {
    window.addEventListener("gamepadconnected", e => {
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
            e.gamepad.index, e.gamepad.id,
            e.gamepad.buttons.length, e.gamepad.axes.length);
    });
    window.addEventListener("gamepaddisconnected", e => {
        console.log("Gamepad disconnected from index %d: %s",
            e.gamepad.index, e.gamepad.id);
    });
}

export default class GamePad {

    static AXIS_TOLERANCE = 0.9;

    constructor(game){
        this.game = game;
        //this.gamepads = gamepads;
    }

    update(){

        this.gamepads =
            (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) ||
            navigator.webkitGamepads || navigator.mozGamepads ||
            navigator.msGamepads || navigator.gamepads ||
            (navigator.getGamepads && navigator.getGamepads()) || [];

        for (let i=0,max=this.gamepads.length;i<max;i++) {
            let gp = this.gamepads[i];
            if (!gp) continue;
            let maxButtons = gp.buttons.length;
            if (maxButtons>7) maxButtons = 7; // only 8-buttons gamePad is supported for now
            for (let j=0;j<maxButtons;j++) {
                let btn = gp.buttons[j];
                if (btn.pressed) {
                    this.game.keyboard.press(j);
                } else {
                    this.game.keyboard.release(j);
                }
            }
            if (gp.axes[0]===0) return; // to avoid oscillations
            if (gp.axes[1]===0) return;

            let axis0 = ~~(gp.axes[0]);
            let axis1 = ~~(gp.axes[1]);

            if (axis0===1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT);
            } else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT);
            }
            if (axis0===-1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT);
            } else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT);
            }

            if (axis1===1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
            } else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
            }
            if (axis1===-1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
            } else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
            }
        }
    }

}