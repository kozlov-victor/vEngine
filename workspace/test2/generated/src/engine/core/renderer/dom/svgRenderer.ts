
import {AbstractDomRenderer} from './abstractDomRender'
import {Game} from "../../game";

export class SvgRenderer extends AbstractDomRenderer {

    constructor(game:Game){
        super(game);
        let container = document.createElement('svg');
        document.body.appendChild(container);
        container.setAttribute('width',game.width.toString());
        container.setAttribute('height',game.height.toString());
        this.container = container;
    }

    setNodeAttribute(el,name,value){
        el.setAttribute(name,value);
    }

    draw(renderable){
        let item;
        if (!this.renderableCache[renderable.id]) {
            item = {};
            this.renderableCache[renderable.id] = item;
            let domEl = this.renderableCache[renderable.spriteSheet.getDefaultResourcePath()].texture.cloneNode(true);
            this.container.appendChild(domEl);
            item.state = {pos:{},spriteSheet:{}};
            item.domEl = domEl;
            item.domEl.setAttribute('id',renderable.id);
        } else item = this.renderableCache[renderable.id];

        let state = item.state;
        this.setPropertiesIfChanged(item.domEl,[
            [state.pos,renderable.pos,'x',v=>{return {x:`${v}`}}],
            [state.pos,renderable.pos,'y',v=>{return {y:`${v}`}}],
            [state,renderable,'width',(v,obj)=>{return {width:`${v}`}}],
            [state,renderable,'height',(v,obj)=>{return {height:`${v}`}}],
            [state,renderable,undefined,(v,obj)=>{
                return {
                    viewBox:
                        `${obj._sprPosX/obj.spriteSheet._frameWidth}  ` +
                        `${obj._sprPosY/obj.spriteSheet._frameHeight} ` +
                        `${obj.spriteSheet.width} ` +
                        `${obj.spriteSheet.height}`

                }
            }],
        ]);
    }

    loadTextureInfo(resourcePath,onLoad){
        setTimeout(()=>{
            let resDomId = resourcePath.split(/[/.]/).join('_');
            let svgEmbeddedInDom = document.getElementById(resDomId);
            if (!svgEmbeddedInDom) throw `not found embedded svg with id ${resDomId}_svg`;
            this.renderableCache[resourcePath].texture =
                svgEmbeddedInDom.querySelector('svg').cloneNode(true) as SVGElement;
            svgEmbeddedInDom.parentNode.removeChild(svgEmbeddedInDom);
            onLoad();
        },0);
    }

}