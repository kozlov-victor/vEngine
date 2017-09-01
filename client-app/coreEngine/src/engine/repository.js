
import * as models from '../model/all'

export default class Repository {

    constructor(game){
        this._game = game;
        this.reset();
    }

    addDescription(desc){
        if (!this.descriptions[desc.type]) this.descriptions[desc.type] = [];
        this.descriptions[desc.type].push(desc);
    }

    setDescriptions(descs){
        Object.keys(descs).forEach(key=>{
            if (!this.descriptions[key]) this.descriptions[key] = [];
            this.descriptions[key] = this.descriptions[key].concat(descs[key]);
        });
    }

    getObject(id,type,forceNew = false){
        if (DEBUG && id==null) {
            console.trace("id is null");
            throw `::getObject() id not specified for type ${type}`;
        }
        let clazz = models[type];
        if (DEBUG && !clazz) {
            throw `::getObject() unknown object type ${type}`
        }
        if (DEBUG && !this.descriptions[type]) throw `no repository description for type ${type}`;
        let desc = this.descriptions[type].find(it=>it.id==id);
        if (!desc) {
            throw `can not find object "${type}" with id ${id}`;
        }
        if (forceNew || !this.cache[desc[id]]) this.cache[id] = new clazz(this._game).fromJSON(desc);
        return this.cache[id];
    }

    addObject(obj){
        if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
        this.arrays[obj.type].push(obj);
        if (!this.descriptions[obj.type]) this.descriptions[obj.type] = [];
        this.descriptions[obj.type].push(obj.toJSON());
    }

    updateObject(obj){
        let json = obj.toJSON();
        let index = this.descriptions[obj.type].findIndex(it=>it.id==obj.id);
        this.descriptions[obj.type][index] = json;

        let objInRepo = this.getObject(obj.id,obj.type,true);
        if (objInRepo) objInRepo.fromJSON(json);
    }

    removeObject(obj){
        if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
        let index = this.arrays[obj.type].findIndex(it=>it.id===obj.id);
        this.arrays[obj.type].splice(index,1);

        if (!this.descriptions[obj.type]) this.descriptions[obj.type] = [];
        index = this.descriptions[obj.type].findIndex(it=>it.id===obj.id);
        this.descriptions[obj.type].splice(index,1);

        delete this.cache[obj.id];

    }

    getArray(type){
        if (this.arrays[type]) return this.arrays[type];
        let res = [];
        if (!this.descriptions[type]) this.descriptions[type] = [];
        this.descriptions[type].forEach(desc=>{
            if (DEBUG && (desc.id===null || desc.id===undefined)) {
                console.error(desc);
                throw `object id must me specified`;
            }
            res.push(this.getObject(desc.id,desc.type));
        });
        return this.arrays[type] = res;
    }

    reset(){
        this.descriptions = {};
        this.arrays = {};
        this.cache = {};
    }

}