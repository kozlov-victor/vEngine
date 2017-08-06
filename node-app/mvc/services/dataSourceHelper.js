"use strict";

const fs = require.main.require('./node-app/base/fs');

const loadModel = (path)=> {
    return JSON.parse(fs.readFileSync(path))
};

const saveModel = (path, col)=>{
    fs.writeFileSync(path,JSON.stringify(col,null,4));
};

const findById = (col,id)=>{
    let filtered = col.filter((it)=>{return it.id==id})||[];
    return filtered[0]
};

const findIndexById = (col,id)=>{
    let filtered = col.filter((it)=>{return it.id==id})||[];
    if (!filtered.length) return -1;
    return col.indexOf(filtered[0]);
};

let _uidCnt = 0;

class DataSourceHelper {
    save(params){
        let path = ['workspace',params.projectName,'resources',params.model.type,'map.json'].join('/');
        let col = loadModel(path);
        let model = params.model;
        if (!model.id){
            model.id = this.uuid();
            col.push(model);
            saveModel(path,col);
            return {id:model.id,created:true};
        } else {
            let modelInCol = findById(col,model.id);
            if (!modelInCol) throw `cannot find ${model.id} at collection ${model.type}`;
            Object.keys(model).forEach(function(key){
                modelInCol[key]=model[key];
            });
            saveModel(path,col);
            return {updated:true}
        }
    }

    saveGameProps(params){
        let path = `workspace/${params.projectName}/gameProps.json`;
        let model = loadModel(path);
        Object.keys(params.model).forEach(function(key){
            model[key]=params.model[key];
        });
        saveModel(path,model);
        return {};
    }

    remove(params){
        let path = `workspace/${params.projectName}/resources/${params.model.type}/map.json`;
        let col = loadModel(path);
        let model = params.model;
        let modelInColIndex = findIndexById(col,model.id);
        if (modelInColIndex==-1) throw `cannot find index of ${model.id} at collection ${model.type}`;
        col.splice(modelInColIndex,1);
        saveModel(path,col);
        return {deleted:true,index:modelInColIndex}
    }

    _uid(){
        return ''+(~~(Math.random()*10));
    }
    uuid() {
        let timeStr = new Date().getTime().toString();
        return this._uid() + this._uid() + this._uid() + this._uid() + '_' + timeStr.substring(timeStr.length - 4) + '_' + (_uidCnt++);
    }
}

module.exports = new DataSourceHelper();