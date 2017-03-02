"use strict";

const fs = require.main.require('./application/base/fs');

const loadCollection = (path)=> {
    return JSON.parse(fs.readFileSync(path))
};

const saveCollection = (path,col)=>{
    fs.writeFileSync(path,JSON.stringify(col,null,4));
};

const findById = (col,id)=>{
    let filtered = col.filter((it)=>{return it.id==id})||[];
    return filtered[0]
};

let _uidCnt = 0;

class CollectionHelper {
    save(params){
        let path = ['workspace',params.projectName,'resources',params.model.type,'map.json'].join('/');
        let col = loadCollection(path);
        let model = params.model;
        if (!model.id){
            model.id = this.uuid();
            col.push(model);
            saveCollection(path,col);
            return {id:model.id,created:true};
        } else {
            let modelInCol = findById(col,model.id);
            if (!modelInCol) throw `cannot find ${model.id} at collection ${model.type}`;
            Object.keys(model).forEach(function(key){
                modelInCol[key]=model[key];
            });
            saveCollection(path,col);
            return {updated:true}
        }
    }

    _uid(){
        return ''+(~~(Math.random()*10));
    }
    uuid() {
        let timeStr = new Date().getTime().toString();
        return this._uid() + this._uid() + this._uid() + this._uid() + '_' + timeStr.substring(timeStr.length - 4) + '_' + (_uidCnt++);
    }
}

module.exports = new CollectionHelper();