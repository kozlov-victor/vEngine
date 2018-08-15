import {Rect} from "../../../../core/geometry/rect";
import {DrawableInfo} from "../../../../core/renderer/webGl/renderPrograms/interface/drawableInfo";
import {MOUSE_EVENTS} from "../../../../core/control/mouse";
import {RenderableModel} from "../../../renderableModel";

declare const DEBUG:boolean;

export enum OVERFLOW {
    HIDDEN,VISIBLE
}

export enum LAYOUT_SIZE {
    FIXED,WRAP_CONTENT,MATCH_PARENT
}

export enum STATE {
    NORMAL,ACTIVE,DISABLED
}

export abstract class Container extends RenderableModel {

    marginLeft      :number = 0;
    marginTop       :number = 0;
    marginRight     :number = 0;
    marginBottom    :number = 0;
    paddingLeft     :number = 0;
    paddingTop      :number = 0;
    paddingRight    :number = 0;
    paddingBottom   :number = 0;

    layoutWidth     :LAYOUT_SIZE =  LAYOUT_SIZE.WRAP_CONTENT;
    layoutHeight    :LAYOUT_SIZE =  LAYOUT_SIZE.WRAP_CONTENT;
    overflow        :OVERFLOW = OVERFLOW.HIDDEN; // todo change

    background      :Container = undefined;

    drawingRect:Rect = new Rect();


    private bgByState :{[state:number]:Container} = {};
    private state     :STATE = STATE.NORMAL;

    testLayout(){
        if (DEBUG) {
            if (this.layoutWidth===LAYOUT_SIZE.FIXED && this.width===0)
                throw `layoutWidth is LAYOUT_SIZE.FIXED so width must be specified`;
            if (this.layoutHeight===LAYOUT_SIZE.FIXED && this.height===0)
                throw `layoutHeight is LAYOUT_SIZE.FIXED so height must be specified`
        }
    }


    private static normalizeBorders(top:number,right:number,bottom:number,left:number){
        if (right===undefined && bottom===undefined && left===undefined) {
            right = bottom = left = top;
        }
        else if (bottom===undefined && left===undefined) {
            bottom = top;
            left = right;
        }
        else if (left===undefined) {
            left = right;
        }
        return {top,right,bottom,left};
    }

    setMargins(top:number);
    setMargins(top:number,right:number);
    setMargins(top:number,right:number,bottom:number);
    setMargins(top:number,right:number,bottom:number,left:number);
    setMargins(top:number,right?:number,bottom?:number,left?:number){

        ({top,right,bottom,left} = Container.normalizeBorders(top,right,bottom,left));
        this.marginTop = top;
        this.marginRight = right;
        this.marginBottom = bottom;
        this.marginLeft = left;
        this._setDirty();
    }

    setMarginsTopBottom(top:number,bottom?:number){
        if (bottom===undefined) bottom = top;
        this.paddingTop = top;
        this.paddingBottom = bottom;
        this._setDirty();
    }

    setMarginsLeftRight(left:number,right?:number){
        if (right===undefined) right = left;
        this.marginLeft = left;
        this.marginRight = right;
        this._setDirty();
    }

    setPaddings(top:number);
    setPaddings(top:number,right:number);
    setPaddings(top:number,right:number,bottom:number);
    setPaddings(top:number,right:number,bottom:number,left:number);
    setPaddings(top:number,right?:number,bottom?:number,left?:number){

        ({top,right,bottom,left} = Container.normalizeBorders(top,right,bottom,left));

        this.paddingTop = top;
        this.paddingRight = right;
        this.paddingBottom = bottom;
        this.paddingLeft = left;
        this._setDirty();
    }

    setPaddingsTopBottom(top:number,bottom?:number){
        if (bottom===undefined) bottom = top;
        this.paddingTop = top;
        this.paddingBottom = bottom;
        this._dirty = true;
    }

    setPaddingsLeftRight(left:number,right?:number){
        if (right===undefined) right = left;
        this.paddingLeft = left;
        this.paddingRight = right;
        this._setDirty();
    }


    describeStates(description:{[state:string]:any}){
        let allUIRenderable = require('../all');
        Object.keys(description).forEach(stateName=>{
            let state:STATE = STATE[stateName];
            let clazz = allUIRenderable[description[stateName].type];
            let instance = new clazz(this.game);
            instance.fromJSON(description[stateName]);
            this.bgByState[state] = instance;
        });
    }


    getDrawableInfo():DrawableInfo {
        return {blendMode:this.blendMode,acceptLight:false};
    }

    constructor(game){
        super(game);
        this.on(MOUSE_EVENTS.mouseDown,()=>{
           this.state = STATE.ACTIVE;
        });
        this.on(MOUSE_EVENTS.mouseUp,()=>{
            this.state = STATE.NORMAL;
        });
        this.on(MOUSE_EVENTS.mouseLeave,()=>{
            this.state = STATE.NORMAL;
        });
    }

    onGeometryChanged(){
        this.revalidate();
    }

    getRect():Rect{
        if (this._dirty) {
             this.calcLayoutRect();
        }
        return this._rect;
    }

    private calcLayoutRect(){
        this._rect.setXYWH(
            this.pos.x,this.pos.y,
            this.width + this.marginLeft + this.marginRight,
            this.height + this.marginTop + this.marginBottom
        )
    }

    private getBgByState():Container {
        let possibleBg:Container = this.bgByState[this.state];
        if (!possibleBg) possibleBg = this.background;
        return possibleBg;
    }

    setWH(w:number,h:number){
        this.width = w;
        this.height = h;
        this.drawingRect.setWH(w,h);
    }

    calcDrawableRect(contentWidth:number, contentHeight:number){
        let paddedWidth = contentWidth  + this.paddingLeft + this.paddingRight;
        let paddedHeight = contentHeight +  this.paddingTop +  this.paddingBottom;
        if (this.background) {
            this.background.setWH(paddedWidth,paddedHeight);
            this.width = this.background.drawingRect.width;
            this.height = this.background.drawingRect.height;
        } else {
            this.width = paddedWidth;
            this.height = paddedHeight;
        }
        this.calcLayoutRect();

    }

    update(time:number,delta:number){
        this.background = this.getBgByState();
        if (this._dirty) {
            this.onGeometryChanged();
            this._dirty = false;
        }
        super.update(time,delta);
    }

    beforeRender(){
        this.game.renderer.translate(
            this.pos.x + this.marginLeft,
            this.pos.y + this.marginTop
        );
    }

}