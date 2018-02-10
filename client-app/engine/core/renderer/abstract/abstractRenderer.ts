import AbstractFilter from "../webGl/filters/abstract/abstractFilter";

declare const IN_EDITOR:boolean,DEBUG:boolean;

import TextField from '../../../model/impl/ui/components/textField'
import Device from '../../device'
import {SCALE_STRATEGY} from "../../misc/consts";
import Game from "../../game";
import GameObjectProto from '../../../model/impl/gameObjectProto';
import Rect from "../../geometry/rect";
import Point2d from "../../geometry/point2d";
import Color from "../../color";
import {TextureInfo} from "../webGl/renderPrograms/abstract/abstractDrawer";
import Texture from "../webGl/base/texture";

declare const document:any, window:any;

export default abstract class AbstractRendere {

    public container:HTMLElement;
    public debugTextField:TextField;

    protected renderableCache:{[path:string]:TextureInfo} = {};
    protected fullScreenSize:{w:number,h:number,scaleFactor:number} =
        {w:0,h:0,scaleFactor:1};
    protected game:Game;

    constructor(game:Game){
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

    onResize(){}

    requestFullScreen(){
        let element = this.container as any;
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

    flipFrameBuffer(filters:Array<AbstractFilter>){}

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
              dstRect:Rect){}

    drawImageEx(texturePath:string,
              srcRect:Rect,
              dstRect:Rect,
              filters:AbstractFilter[]
            ){}

    drawNinePatch(
        texturePath:string,
        destRect:Rect,
        filters:AbstractFilter[],
        a:number,b:number,c:number,d:number
    ){}

    drawTiledImage(texturePath:string,
                   srcRect:Rect,
                   dstRect:Rect,
                   offset:Point2d){}

    fillRect(rect:Rect, color:Color){}

    drawRect(rect:Rect,color:Color){}

    drawLine(x1:number,y1:number,x2:number,y2:number,color:Color){}

    fillCircle(x:number,y:number,r:number,color:Color){}

    clear(){}

    clearColor(c:Color){}

    save(){}

    restore(){}

    translate(x,y,z?){}

    scale(x,y,z?){}

    rotateZ(a:number){}

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

    getTextureInfo(textureId:string):TextureInfo{
        return this.renderableCache[textureId];
    }
}