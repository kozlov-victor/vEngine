/*global DEBUG:true*/

import TextField from '../../../model/generic/ui/textField'

export default class AbstractRenderer {

    renderableCache = {};
    container = null;
    debugTextField = null;

    constructor(game){
        this.game = game;
    }

    onResize(){
        let canvasRatio = this.container.height / this.container.width;
        let windowRatio = window.innerHeight / window.innerWidth;
        let width;
        let height;

        if (windowRatio < canvasRatio) {
            height = window.innerHeight;
            width = height / canvasRatio;
        } else {
            width = window.innerWidth;
            height = width * canvasRatio;
        }
        this.game.scale.x = width / this.game.width;
        this.game.scale.y = height / this.game.height;
        this.game.pos.x = (window.innerWidth - width) / 2;
        this.game.pos.y = (window.innerHeight - height) / 2;

        this.container.style.width = width + 'px';
        this.container.style.height = height + 'px';

    }

    beginFrameBuffer(){}

    flipFrameBuffer(){
        if (DEBUG) {
            if (this.debugTextField) this.debugTextField._render();
        }
    }

    registerResize(){
        this.onResize();
        window.addEventListener('resize',()=>{this.onResize()});
    }

    getError(){
        return 0;
    }

    log(txt){
        if (!DEBUG) return;
        let textField = this.debugTextField;
        if (txt===undefined) txt = 'undefined';
        if (txt===null) txt = 'null';
        if (txt.toJSON) {
            txt = JSON.stringify(txt.toJSON(),null,4);
        }
        else {
            try{
                txt = JSON.stringify(txt);
            } catch (e){}
        }
        txt = txt.toString();
        if (!textField) {
            textField = new TextField(this.game);
            textField.name = 'defaultName';
            textField.revalidate();
            this.debugTextField = textField;
        }
        textField.pos.x = 10;
        textField.pos.y = 10;
        textField.setText(txt);
    }

    loadTextureInfo(textureId,info){}

    getTextureInfo(textureId){}
}