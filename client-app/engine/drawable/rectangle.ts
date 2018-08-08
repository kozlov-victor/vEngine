
import {AbstractFilter} from "../core/renderer/webGl/filters/abstract/abstractFilter";
import {Rect} from "../core/geometry/rect";
import {Color} from "../core/color";
import {Game} from "../core/game";
import {UIDrawable} from "./interface/uiDrawable";
import {DrawableInfo} from "../core/renderer/webGl/renderPrograms/interface/drawableInfo";
import {_global} from "../core/global";
import {AbstractRenderer} from "../core/renderer/abstract/abstractRenderer";
import {RenderableModel} from "../model/renderableModel";

export class Rectangle extends RenderableModel{

    filters:AbstractFilter[] = [];
    blendMode:string = '';
    drawingRect:Rect = new Rect(); // todo need?
    color:Color = Color.BLACK.clone();
    lineWidth:number = 1;
    fillColor:Color = Color.RGB(100,100,100);

    constructor(game: Game) {
        super(game);
        this.width = 16;
        this.height = 16;
    }

    getDrawableInfo():DrawableInfo {
        return {blendMode:this.blendMode,acceptLight:false};
    }


    draw(){
        let r:AbstractRenderer = this.game.renderer;
        let rect = this.getRect();
        this.drawingRect.setXYWH(0,0,rect.width,rect.height);
        if (this.fillColor) {
            r.fillRect(this.drawingRect,this.fillColor);
        }
        r.drawRect(this.drawingRect,this.color,this.lineWidth);
    }

}

_global['Rectangle'] = Rectangle;