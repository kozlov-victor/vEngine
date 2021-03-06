



import {AbstractFilter} from "../webGl/filters/abstract/abstractFilter";
import {TextField} from '../../../model/impl/ui/components/textField'
import {Device} from '../../device'
import {Game} from "../../game";
import {GameObjectProto} from '../../../model/impl/gameObjectProto';
import {Rect} from "../../geometry/rect";
import {Point2d} from "../../geometry/point2d";
import {Color} from "../../renderer/color";
import {TextureInfo} from "../webGl/renderPrograms/abstract/abstractDrawer";
import {Size} from "../../geometry/size";
import {DebugError} from "../../../debugError";
import {Rectangle} from "../../../model/impl/ui/drawable/rectangle";
import {Ellipse} from "../../../model/impl/ui/drawable/ellipse";
import {NinePatchImage} from "../../../model/impl/ui/drawable/ninePatchImage";
import {Image} from "../../../model/impl/ui/drawable/image";

declare const document:any, window:any;

declare const IN_EDITOR:boolean;
declare const DEBUG:boolean;
declare const EMBED_RESOURCES:boolean;

export class AbstractRenderer {

    public container:HTMLElement;
    public debugTextField:TextField;

    renderableCache:{[path:string]:TextureInfo} = {};
    public fullScreenSize:Size = new Size(0,0);
    protected game:Game;

    constructor(game:Game){
        this.game = game;
        if (Device.isCocoonJS) {
            let dpr = window.devicePixelRatio||1;
            this.fullScreenSize.setW(window.innerWidth*dpr);
            this.fullScreenSize.setH(window.innerHeight*dpr);
        } else {
            this.fullScreenSize.setWH(this.game.width,this.game.height);
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

    getError():number{
        return 0;
    }

    drawImage(img:Image){}

    drawNinePatch(img:NinePatchImage){}

    drawTiledImage(texturePath:string,
                   srcRect:Rect,
                   dstRect:Rect,
                   offset:Point2d){}

    drawRectangle(rectangle:Rectangle){}

    lockRect(rect:Rect) {}

    unlockRect(){}

    drawLine(x1:number,y1:number,x2:number,y2:number,color:Color){}


    drawEllipse(ellispe:Ellipse){}

    resetTransform(){}

    clear(){}

    clearColor(c:Color){}

    save(){}

    restore(){}

    translate(x,y,z?){}

    scale(x,y,z?){}

    rotateZ(a:number){}

    rotateY(a:number){}

    draw(renderable:GameObjectProto){

    }

    log(args){
        if (!DEBUG) return;
        let textField = this.debugTextField;
        if (!textField) {
            textField = new TextField(this.game);
            textField.name = 'defaultName';
            textField.revalidate();
            this.debugTextField = textField;
        }
        let res = '';
        Array.prototype.slice.call(arguments).forEach((txt:any)=>{
            if (txt===undefined) txt = 'undefined';
            else if (txt===null) txt = 'null';
            else if (txt.toJSON) {
                txt = JSON.stringify(txt.toJSON(),null,4);
            }
            else {
                if (typeof txt !== 'string') {
                    try{
                        txt = JSON.stringify(txt);
                    } catch (e){}
                }
            }
            if (typeof txt!=='string') txt = txt.toString();
            res+=`${txt}\n`;
        });
        textField.pos.x = 10;
        textField.pos.y = 10;
        textField.setText(textField.getText()+res);
    }


    loadTextureInfo(textureId:string,onLoaded:()=>void){}

    getTextureInfo(textureId:string):TextureInfo{
        let t:TextureInfo =  this.renderableCache[textureId];
        if (!t) throw new DebugError(`can not find resource ${textureId}`);
        return t;
    }

    getResource(resourcePath){
        return EMBED_RESOURCES?
            this.game.repository.embeddedResources[resourcePath]:
            resourcePath;
    }
}