/**
 * let widget = this.game.uiBuilder.build({
            Button: {
                pos: {x:12,y:30},
                font: {type:'Font',name:'font1'},
                text: 'button1',
                paddings: 50,
                background: {
                    type: 'NinePatchImage',
                    resourcePath: 'resources/nineP.png',
                    ABCD: 45
                },
                onClick: ()=>{
                    console.log('clicked',this);
                }
            }
        });
 */


import Game from "../../../core/game";

declare const DEBUG:boolean;

interface UIDescription {
    [key:string]:any
}

import * as allUIClasses from './all';
import AbsoluteLayout from "./layouts/absoluteLayout";

export default class UIBuilder {

    private game:Game;

    constructor(game: Game) {
        this.game = game;
    }

    private static normalizeSetterName(name:string):string{
        return `set${name[0].toUpperCase()}${name.substr(1)}`;
    }

    private resolveObjProperties(instance,obj) {
        Object.keys(obj).forEach(propName=>{
            if (propName==='type') return; //reserved word, just skip
            if (obj[propName].type) {
                if (obj[propName].name) {
                    obj[propName] = this.game.repository.getArray(obj[propName].type).find(it=>it.name==obj[propName].name);
                    if (!obj[propName]) throw `can not find object {type:${obj[propName].type},name:${obj[propName].type}}`;
                }
                else obj[propName] = this.resolveObj(obj[propName].type,obj[propName]);
            }
            let setterName:string = UIBuilder.normalizeSetterName(propName);
            let hasSetter = instance[setterName] && instance[setterName].call;
            let hasProperty = propName in obj;
            if (DEBUG && !hasProperty && !hasSetter) {
                console.error(instance);
                throw `nor method ${setterName} not property ${propName} found`;
            }
            if (hasSetter) instance[setterName].call(instance,...obj[propName]);
            else {
                if (instance[propName] && instance[propName].fromJSON) instance[propName].fromJSON(obj[propName]);
                else instance[propName] = obj[propName];
            }
        });
    }

    private resolveObj(key,obj){
        let clazz = allUIClasses[key];
        if (DEBUG && !clazz) throw `no such ui class: ${key}`;
        let instance = new clazz(this.game);
        this.resolveObjProperties(instance,obj);
        return instance;
    }


    private resolveAbsoluteLayout(props,arr){
        let l:AbsoluteLayout = new AbsoluteLayout(this.game);
        this.resolveObjProperties(l,props);
        arr.forEach(v=>{
            let firstKey = Object.keys(v)[0];
            l.addView(this.resolveObj(firstKey,v[firstKey]));
        });
        return l;
    }

    build(desc:UIDescription){
        let allKeys = Object.keys(desc);
        if (DEBUG && allKeys.length>1) throw `only one root element is supported. Found: ${allKeys}`;
        let firstKey = Object.keys(desc)[0];
        let rootObj = desc[firstKey];
        if (firstKey==='AbsoluteLayout') return this.resolveAbsoluteLayout(rootObj.properties,rootObj.children);
        else return this.resolveObj(firstKey,rootObj);
    }

}

