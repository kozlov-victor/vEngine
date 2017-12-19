/*global DEBUG:true*/

import TextField from '../../../model/generic/ui/textField'
import Device from '../../device'

export default class AbstractRenderer {

    renderableCache = {};
    container = null;
    debugTextField = null;
    fullScreenSize = {w:0,h:0,scaleFactor:1};

    constructor(game){
        this.game = game;
        if (Device.isCocoonJS) {
            this.fullScreenSize.w = window.innerWidth*Device.scale;
            this.fullScreenSize.h = window.innerHeight*Device.scale;
            this.fullScreenSize.scaleFactor =
                Math.min(this.fullScreenSize.w / this.game.width, this.fullScreenSize.h / this.game.height);
        } else {
            this.fullScreenSize.w = game.width;
            this.fullScreenSize.h = game.height;
        }
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

    log(){
        if (!DEBUG) return;
        let textField = this.debugTextField;
        let res = '';
        Array.prototype.slice.call(arguments).forEach(txt=>{
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
            if (typeof txt!=='string') txt = txt.toString();
            res+=`${txt}\n`;
        });
        if (!textField) {
            textField = new TextField(this.game);
            textField.name = 'defaultName';
            textField.revalidate();
            this.debugTextField = textField;
        }
        textField.pos.x = 10;
        textField.pos.y = 10;
        textField.setText(textField.getText()+res);
    }

    loadTextureInfo(textureId,info){}

    getTextureInfo(textureId){}
}