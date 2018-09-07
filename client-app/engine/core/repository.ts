import {DebugError} from "../debugError";

declare const DEBUG:boolean;

import {Game} from "./game";
import * as models from '../model/all'
import {CommonObject} from "../model/commonObject";

export class Repository {

    embeddedResources:{[path:string]:any};

    private _game:Game;
    private descriptions:any;
    private cache:any;
    private arrays:any;


    constructor(game:Game){
        this._game = game;
        this.reset();
    }

    addDescription(desc,type){
        if (!this.descriptions[type]) this.descriptions[type] = [];
        this.descriptions[type].push(desc);
    }

    setDescriptions(descs){
        Object.keys(descs).forEach(type=>{
            descs[type].forEach(desc=>{
                this.addDescription(desc,type);
            });
        });
    }

    getObject(id,type,forceNew = false):CommonObject{
        if (DEBUG && !type) throw new DebugError('repository.getObject: type not specified');
        if (DEBUG && id==null) {
            console.trace("id is null");
            throw new DebugError(`::getObject() id not specified for type ${type}`);
        }
        let Clazz = models[type];

        if (DEBUG && !Clazz) {
            throw new DebugError(`::getObject() undeclared object type ${type}`);
        }
        if (DEBUG && !this.descriptions[type]) throw `not found description for type: ${type}`;
        let desc = this.descriptions[type].find(it=>it.id==id);
        if (DEBUG && !desc) {
            throw new DebugError(`can not find object "${type}" with id ${id}`);
        }
        if (forceNew || !this.cache[desc[id]]) this.cache[id] = new Clazz(this._game).fromJSON(desc);
        return this.cache[id];
    }

    getFirst(type){
        let all = this.getArray(type);
        if (!all.length) return null;
        return all[0];
    }

    addObject(obj){
        if (DEBUG && !obj.id) {
            console.error(obj);
            throw new DebugError(`addObject: id is not provided`);
        }
        if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
        this.arrays[obj.type].push(obj);
        if (!this.descriptions[obj.type]) this.descriptions[obj.type] = [];
        this.descriptions[obj.type].push(obj.toJSON());
    }

    updateObject(obj,opts){
        let json = obj.toJSON(opts);
        let index = this.descriptions[obj.type].findIndex(it=>it.id==obj.id);
        this.descriptions[obj.type][index] = json;
        let objInRepo = this.getObject(obj.id,obj.type,true);
        if (objInRepo) objInRepo.fromJSON(json);
    }

    removeObject(obj){
        if (DEBUG && !this.arrays[obj.type]) this.arrays[obj.type] = [];
        let index = this.arrays[obj.type].findIndex(it=>it.id===obj.id);
        this.arrays[obj.type].splice(index,1);

        if (!this.descriptions[obj.type]) this.descriptions[obj.type] = [];
        index = this.descriptions[obj.type].findIndex(it=>it.id===obj.id);
        this.descriptions[obj.type].splice(index,1);

        delete this.cache[obj.id];

    }

    getArray(type){
        if (DEBUG && !models[type]) throw new DebugError(`getArray: unregistered type "${type}"`);
        if (this.arrays[type]) return this.arrays[type];
        let res = [];
        if (!this.descriptions[type]) this.descriptions[type] = [];
        this.descriptions[type].forEach(desc=>{
            if (DEBUG && (desc.id===null || desc.id===undefined)) {
                console.error(desc);
                throw new DebugError(`object id must me specified`);
            }
            res.push(this.getObject(desc.id,type));
        });
        return this.arrays[type] = res;
    }

    reset(){
        this.descriptions = {};
        this.arrays = {};
        this.cache = {};
    }

}