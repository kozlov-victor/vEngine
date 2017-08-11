
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

    addDescriptions(descs){
        for (let desc of descs) {
            this.addDescription(desc);
        }
    }

    getObject(id,type,forceNew = false){
        let clazz = models[type];
        if (!clazz) {
            console.error(id,type);
            throw `::getObject() unknown object type ${type}`
        }
        let desc = this.descriptions[type].find(it=>it.id==id);
        if (!desc) throw `can not find object with id ${id}`;
        if (forceNew || !this.cache[desc[id]]) this.cache[id] = new clazz().fromJSON(desc);
        return this.cache[id];
    }

    addObject(obj){
        if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
        this.arrays[obj.type].push(obj);
    }

    removeObject(obj){
        let index = this.arrays[obj.type].findIndex(it=>it.id===obj.id);
        this.arrays[obj.type].splice(index,1);
    }

    getArray(type){
        if (this.arrays[type]) return this.arrays[type];
        let res = [];
        this.descriptions[type].forEach(desc=>{
            res.push(this.getObject(desc.id,desc.type));
        });
        return this.arrays[type] = res;
    }

}

export default new Repository();