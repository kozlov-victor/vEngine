
import AbstractDomRenderer from './abstractDomRender'
import mathEx from 'engine/core/mathEx'

export default class HtmlRenderer extends AbstractDomRenderer {

    constructor(game){
        super(game);
        let container = document.createElement('div');
        document.body.appendChild(container);
        container.style.position = 'relative';
        container.style.width = `${game.width}px`;
        container.style.height = `${game.height}px`;
        container.style.margin = '0 auto';
        this.container = container;
    }

    setNodeAttribute(el,name,value){
        el.style[name] = value;
    }

    draw(renderable){
        let item;
        if (!this.renderableCache[renderable.id]) {
            item = {};
            this.renderableCache[renderable.id] = item;
            let domEl = document.createElement('div');
            domEl.style.position = 'absolute';
            domEl.style.backgroundRepeat =  'no-repeat';
            this.container.appendChild(domEl);
            item.state = {pos:{},spriteSheet:{}};
            item.domEl = domEl;
        } else item = this.renderableCache[renderable.id];

        let state = item.state;
        this.setPropertiesIfChanged(item.domEl,[
            [state.pos,renderable.pos,'x',v=>{return {left:`${v}px`}}],
            [state.pos,renderable.pos,'y',v=>{return {top:`${v}px`}}],
            [state,renderable,'width',v=>{return {width:`${v}px`}}],
            [state,renderable,'height',v=>{return {height:`${v}px`}}],
            [state.spriteSheet,renderable.spriteSheet,'resourcePath',v=>{return {backgroundImage:`url(${v})`}}],
            [state,renderable,'_sprPosX',v=>{return {backgroundPositionX:`-${v}px`}}],
            [state,renderable,'_sprPosY',v=>{return {backgroundPositionY:`-${v}px`}}],
            [state,renderable,'alpha',v=>{return {opacity:`${v}`}}],
            [state,renderable,undefined,(v,obj)=>{return {backgroundSize:`${obj.spriteSheet.numOfFramesH*obj.width}px ${obj.spriteSheet.numOfFramesV*obj.height}px`}}],
            [state,renderable,undefined,(v,obj)=>{return {transform:`scale(${obj.scale.x},${obj.scale.y}) rotateZ(${mathEx.radToDeg(obj.angle)}deg)`}}]
        ]);
    }

    loadTextureInfo(resourcePath,onLoad){
        let img = new Image();
        img.src = resourcePath;
        img.onload = ()=>{
            this.renderableCache[resourcePath] = img;
            onLoad();
        }
    }

}