declare const IN_EDITOR:boolean,DEBUG:boolean;

import TextField from '../../../model/generic/ui/textField'
import Device from '../../device'
import {SCALE_STRATEGY} from "../../misc/consts";
import Game from "../../game";
import GameObjectProto from '../../../model/generic/gameObjectProto';
import Rect from "../../geometry/rect";
import Point2d from "../../geometry/point2d";

declare const document:any, window:any;

export default abstract class AbstractRenderer {

    renderableCache = {};
    container = null;
    debugTextField = null;
    fullScreenSize = {w:0,h:0,scaleFactor:1};
    game:Game;

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
        //document.body.addEventListener('click',()=>this.requestFullScreen());
    }

    onResize(){
        if (this.game.scaleStrategy===SCALE_STRATEGY.NO_SCALE) return;
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
        this.game.scale.setXY(width / this.game.width, height / this.game.height);
        this.game.pos.setXY(
            (window.innerWidth - width) / 2,
            (window.innerHeight - height) / 2
        );

        this.container.style.width = width + 'px';
        this.container.style.height = height + 'px';
        this.container.style.marginTop = `${this.game.pos.y}px`;

    }

    requestFullScreen(){
        let element = this.container;
        if(element.requestFullScreen) {
            element.requestFullScreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    }

    cancelFullScreen(){
        if(document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }

    beginFrameBuffer(){}

    flipFrameBuffer(filters){
        if (DEBUG) {
            if (this.debugTextField) this.debugTextField._render();
        }
    }

    registerResize(){
        this.onResize();
        window.addEventListener('resize',()=>this.onResize());
    }

    destroy(){
        window.removeEventListener('resize',this.onResize);
    }

    getError(){
        return 0;
    }

    drawImage(texturePath:string,
              srcRect:Rect,
              dstPoint:Point2d){
    }

    clear(){

    }

    clearColor({r,g,b}){

    }

    restore(){

    }

    translate(x,y,z?){}

    scale(x,y,z?){}

    draw(renderable:GameObjectProto){

    }

    log(args){
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