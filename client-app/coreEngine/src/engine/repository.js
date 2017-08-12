
import * as models from '../model/all'

class Repository {

    constructor(){
        this.descriptions = {};
        this.arrays = {};
        this.cache = {};
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
        if (id==null) {
            console.trace("id is null");
            throw `::getObject() id not specified for type ${type}`;
        }
        let clazz = models[type];
        if (!clazz) {
            throw `::getObject() unknown object type ${type}`
        }
        if (!this.descriptions[type]) throw `no repository description for type ${type}`;
        let desc = this.descriptions[type].find(it=>it.id==id);
        if (!desc) {
            throw `can not find object "${type}" with id ${id}`;
        }
        if (forceNew || !this.cache[desc[id]]) this.cache[id] = new clazz().fromJSON(desc);
        return this.cache[id];
    }

    addObject(obj){
        if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
        this.arrays[obj.type].push(obj);
        this.descriptions[obj.type].push(obj.toJSON());
    }

    updateObject(obj){
        let objInRepo = this.getObject(obj.id,obj.type);
        let json = obj.toJSON();
        objInRepo.fromJSON(json);
        let index = this.descriptions[obj.type].findIndex(it=>it.id==obj.id);
        this.descriptions[obj.type][index] = json;
    }

    removeObject(obj){
        let index = this.arrays[obj.type].findIndex(it=>it.id===obj.id);
        this.arrays[obj.type].splice(index,1);

        index = this.descriptions[obj.type].findIndex(it=>it.id===obj.id);
        this.descriptions[obj.type].splice(index,1);

        delete this.cache[obj.id];

    }

    getArray(type){
        if (this.arrays[type]) return this.arrays[type];
        let res = [];
        if (!this.descriptions[type]) this.descriptions[type] = [];
        this.descriptions[type].forEach(desc=>{
            if (desc.id===null || desc.id===undefined) {
                console.error(desc);
                throw `object id must me specified`;
            }
            res.push(this.getObject(desc.id,desc.type));
        });
        return this.arrays[type] = res;
    }

}

export default new Repository();