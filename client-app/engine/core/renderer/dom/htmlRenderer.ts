
import AbstractDomRenderer from './abstractDomRender'
import * as mathEx from '../../../core/mathEx'
import Game from "../../game";
import GameObject from "../../../model/generic/gameObject";
import Rect from "../../geometry/rect";
import Point2d from "../../geometry/point2d";
import Color from "../../color";

export default class HtmlRenderer extends AbstractDomRenderer {

    private bgColor;

    constructor(game:Game){
        super(game);
        let container = document.createElement('div');
        document.body.appendChild(container);
        container.style.position = 'relative';
        container.style.width = `${game.width}px`;
        container.style.height = `${game.height}px`;
        container.style.margin = '0 auto';
        container.style.overflow = 'hidden';
        this.container = container;
    }

    private getFromCacheOrCreate(id):any{
        let item;
        if (!this.renderableCache[id]) {
            item = {};
            this.renderableCache[id] = item;
            let domEl = document.createElement('div');
            domEl.style.position = 'absolute';
            domEl.style.backgroundRepeat =  'no-repeat';
            this.container.appendChild(domEl);
            item.state = {pos:{},spriteSheet:{}};
            item.domEl = domEl;
        } else item = this.renderableCache[id];
        return item;
    }

    setNodeAttribute(el,name,value){
        el.style[name] = value;
    }

    draw(renderable:GameObject){
        let item = this.getFromCacheOrCreate(renderable.id);
        let state = item.state;
        let cameraRect:Rect = this.game.camera.getRectScaled();
        let p:Point2d = renderable.pos.clone().add(cameraRect.getPoint().negative());
        this.setPropertiesIfChanged(item.domEl,[
            [state.pos,p,'x',v=>{return {left:`${~~(v)}px`}}],
            [state.pos,p,'y',v=>{return {top:`${~~(v)}px`}}],
            [state,renderable,'width',v=>{return {width:`${v}px`}}],
            [state,renderable,'height',v=>{return {height:`${v}px`}}],
            [state.spriteSheet,renderable.spriteSheet,'resourcePath',v=>{return {backgroundImage:`url(${v})`}}],
            [state,renderable,'_sprPosX',v=>{return {backgroundPositionX:`-${v}px`}}],
            [state,renderable,'_sprPosY',v=>{return {backgroundPositionY:`-${v}px`}}],
            [state,renderable,'alpha',v=>{return {opacity:`${v}`}}],
            [state,renderable,undefined,(v,obj)=>{return {
                backgroundSize:`${obj.spriteSheet.numOfFramesH*obj.width}px ${obj.spriteSheet.numOfFramesV*obj.height}px`}}],
            [state,renderable,undefined,(v,obj)=>{return {
                transform:`scale(${obj.scale.x},${obj.scale.y}) rotateZ(${mathEx.radToDeg(obj.angle)}deg)`}}]
        ]);
    }


    clearColor(color:Color) {
        let c = color.asCSS();
        this.setPropertiesIfChanged(this.container,[
            [this,c,'backgroundColor',v=> {
                this.bgColor = c;
                return {backgroundColor: c};
            }]
        ]);
    }

    loadTextureInfo(resourcePath:string,onLoad:()=>void){
        let img = new Image();
        img.src = resourcePath;
        img.onload = ()=>{
            this.renderableCache[resourcePath] = img;
            onLoad();
        }
    }

}