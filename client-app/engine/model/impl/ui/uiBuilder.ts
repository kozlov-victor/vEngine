

import {Game} from "../../../core/game";
import * as allUIClasses from './all';
import {Container} from "./generic/container";
import {DebugError} from "../../../debugError";
import {AbsoluteLayout} from "./layouts/absoluteLayout";

declare const DEBUG:boolean;

interface UIDescription {
    [key:string]:any
}

interface Clazz<T> { // todo extract to separate file
    new(game:Game) : T;
}

const isObject = (obj:any):boolean=>{ // todo extract to
    return obj === Object(obj);
};


export class UIBuilder {

    private game:Game;

    constructor(game: Game) {
        this.game = game;
    }

    private _normalizeSetterName(name:string):string{
        return `set${name[0].toUpperCase()}${name.substr(1)}`;
    }

    private _getFirstKey(desc:UIDescription):string{
        if (!isObject(desc)) return undefined;
        return Object.keys(desc)[0];
    }

    private _getAllKeys(desc:UIDescription):string[]{
        return Object.keys(desc);
    }

    private _getKeysLength(desc:UIDescription):number{
        return this._getAllKeys(desc).length;
    }

    private _resolveProperties(instance:Container,desc:UIDescription,appendChildren:boolean) {

        this._getAllKeys(desc).forEach((propName:string)=>{

            if (propName==='children') {
                if (!desc.children.splice) throw new DebugError(`'children' property must be an array`);
                desc.children.forEach((descChild: UIDescription) => {
                    let key = this._getFirstKey(descChild);
                    let Cl: Clazz<Container> = allUIClasses[key] as Clazz<Container>;
                    let child: Container = new Cl(this.game);
                    this._resolveProperties(child, descChild[key],true);
                    instance.appendChild(child);
                });
                return;
            }

            else if (allUIClasses[propName]) {
                let Cl:Clazz<Container> = allUIClasses[propName] as Clazz<Container>;
                let child:Container;
                if (appendChildren) child = new Cl(this.game);
                else child = instance;
                this._resolveProperties(child,desc[propName],appendChildren);
                if (appendChildren) instance.appendChild(child);
            } else {
                let setterName = this._normalizeSetterName(propName);
                let hasProperty:boolean = propName in instance;
                let hasSetter:boolean = setterName in instance;
                if (DEBUG && !hasProperty && !hasSetter)
                    throw new DebugError(`uiBuilder error: object ${instance.type} has not property ${propName} not associated setter ${setterName}`);

                if (allUIClasses[this._getFirstKey(desc[propName])]) {
                    let PropClass = allUIClasses[this._getFirstKey(desc[propName])];
                    let propInstance = new PropClass(this.game);
                    this._resolveProperties(propInstance,desc[propName],false);
                    desc[propName] = propInstance;
                }

                if (hasSetter) {
                    let args = desc[propName];
                    if (!args.splice) args = [desc[propName]];
                    instance[setterName].apply(instance,args);
                }
                else {
                    if (instance[propName] && instance[propName].fromJSON) {
                        instance[propName].fromJSON(desc[propName]);
                    }
                    else if (instance[propName] && instance[propName].apply) {
                        let args = desc[propName];
                        if (!args.splice) args = [args];
                        if (propName=='on') instance[propName].apply(this.game.getCurrScene(),args);
                        else instance[propName].apply(instance,args);
                    }
                    else {
                        instance[propName] = desc[propName];
                    }
                }
            }
        });
        instance.revalidate();
    }

    build(desc:UIDescription):Container{
        if (DEBUG && this._getKeysLength(desc)>1)
            throw new DebugError(`only one root element is supported. Found: ${this._getAllKeys(desc)}`);
        let firstKey:string = this._getFirstKey(desc);
        let Cl:Clazz<Container> = allUIClasses[firstKey] as Clazz<Container>;
        if (DEBUG && !Cl) throw new DebugError(`no such ui class: ${firstKey}`);
        let instance:Container = new Cl(this.game);
        this._resolveProperties(instance,desc[firstKey],true);
        (instance as AbsoluteLayout).testLayout();
        (window as any).l = instance;
        return instance;
    }

}

