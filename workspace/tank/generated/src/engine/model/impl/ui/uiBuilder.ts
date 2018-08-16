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


// let widget = this.game.uiBuilder.build({
//     AbsoluteLayout: {
//         properties: {
//             pos: {x:0,y:0},
//             width:200,height:200,
//             background: {
//                 type: 'Rectangle',
//             },
//             on: ['click',()=>{console.log('clicked on layout');}]
//         },
//         children: [
//             {
//                 Button: {
//                     pos: {x: 0, y: 0},
//                     font: {type: 'Font', name: 'font1'},
//                     text: 'button1',
//                     paddings: 10,
//                     describeStates: {
//                         NORMAL: {
//                             type: 'NinePatchImage',
//                             resourceMap: {main:'resources/nineP.png'},
//                             setABCD: 45
//                         },
//                         ACTIVE: {
//                             type: 'NinePatchImage',
//                             resourceMap: {main:'resources/ninePactive.png'},
//                             setABCD: 45
//                         }
//                     },
//                     on: ['click',()=>{console.log('clicked on button 1');}]
//                 }
//             },
//             {
//                 Button: {
//                     pos: {x: 120, y: 0},
//                     font: {type: 'Font', name: 'font1'},
//                     text: 'button2',
//                     paddings: 10,
//                     background: {
//                         type: 'NinePatchImage',
//                         resourceMap: {main:'resources/nineP.png'},
//                         ABCD: 45
//                     },
//                     on: ['click',()=>{console.log('clicked on button 2');}]
//                 }
//             },
//             {
//                 TextField: {
//                     pos: {x: 250, y: 0},
//                     font: {type: 'Font', name: 'font1'},
//                     text: '12345\n12345\n54321',
//                     paddings: 0,
//                     on: ['click',()=>{console.log('clicked text field');}]
//                 }
//             }
//         ]
//     }
// });


import {Game} from "../../../core/game";

declare const DEBUG:boolean;

interface UIDescription {
    [key:string]:any
}

import * as allUIClasses from './all';
import {AbsoluteLayout} from "./layouts/absoluteLayout";
import {Container} from "./generic/container";

export class UIBuilder {

    private game:Game;

    constructor(game: Game) {
        this.game = game;
    }

    private static normalizeSetterName(name:string):string{
        return `set${name[0].toUpperCase()}${name.substr(1)}`;
    }

    private resolveObjProperties(instance:Container,obj:any):void {
        Object.keys(obj).forEach((propName:string)=>{
            if (propName==='type') return; //reserved word, just skip
            if (obj[propName].type) {
                if (obj[propName].name) {
                    let typeToFind = obj[propName].type;
                    let nameToFind = obj[propName].name;
                    obj[propName] = this.game.repository.getArray(typeToFind).find(it=>it.name==nameToFind);
                    if (!obj[propName]) throw `can not find object {type:${typeToFind},name:${nameToFind}}`;
                }
                else obj[propName] = this.resolveObj(obj[propName].type,obj[propName]);
            }
            let setterName:string = UIBuilder.normalizeSetterName(propName);
            let hasSetter:boolean = instance[setterName] && instance[setterName].call;
            let hasProperty:boolean = propName in obj;
            if (DEBUG && !hasProperty && !hasSetter) {
                console.error(instance);
                throw `nor method ${setterName} not property ${propName} found`;
            }
            if (hasSetter) instance[setterName].call(instance,...obj[propName]);
            else {
                if (instance[propName] && instance[propName].fromJSON) instance[propName].fromJSON(obj[propName]);
                else if (instance[propName] && instance[propName].call) instance[propName].call(instance,...obj[propName]);
                else {
                    if (!(propName in instance)) {
                        console.error(instance);
                        let constructorName = (instance.constructor && instance.constructor.name)||'';
                        throw `uiBuilder error: object ${constructorName} has not property ${propName}`;
                    }
                    instance[propName] = obj[propName];
                }
            }
        });
    }



    private resolveObj(key:string,obj:any):Container{
        let Clazz = allUIClasses[key];
        if (DEBUG && !Clazz) throw `no such ui class: ${key}`;
        let instance = new Clazz(this.game);
        this.resolveObjProperties(instance,obj);
        instance.revalidate();
        return instance;
    }


    private resolveAbsoluteLayout(props):AbsoluteLayout{
        let children = props.children || [];
        delete props.children;

        let l:AbsoluteLayout = new AbsoluteLayout(this.game);
        this.resolveObjProperties(l,props);
        children.forEach(v=>{
            let firstKey = Object.keys(v)[0];
            l.appendChild(this.resolveObj(firstKey,v[firstKey]));
        });
        l.testLayout();
        return l;
    }

    build(desc:UIDescription):Container{
        let allKeys = Object.keys(desc);
        if (DEBUG && allKeys.length>1) throw `only one root element is supported. Found: ${allKeys}`;
        let firstKey = Object.keys(desc)[0];
        let rootObj = desc[firstKey];
        if (firstKey==='AbsoluteLayout') return this.resolveAbsoluteLayout(rootObj);
        else return this.resolveObj(firstKey,rootObj);
    }

}

