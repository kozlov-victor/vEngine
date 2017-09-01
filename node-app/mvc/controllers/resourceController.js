"use strict";

let utils = require.main.require('./node-app/utils/utils');
let resourceService = require.main.require('./node-app/mvc/services/resourceService');
let generatorService = require.main.require('./node-app/mvc/services/generatorService');
let dataSourceHelper = require.main.require('./node-app/mvc/services/dataSourceHelper');
const fs = require.main.require('./node-app/base/fs');

class ResourceController {

    constructor(){

    }


    /**
     * @Method("getAll");
     * @Request({"type":"post"});
     */
    getAll(params){
        let result = {};
        result.repository = JSON.parse(fs.readFileSync(`workspace/${params.projectName}/repository.json`));
        result.gameProps = JSON.parse(fs.readFileSync(`workspace/${params.projectName}/gameProps.json`));
        result.commonBehaviourProtos = resourceService.getCommonBehaviourAttrs(params.projectName);
        return result;
    }

    /**
     * @Method("save");
     * @Request({"type":"post"});
     */
    save(params) {
        let repository = dataSourceHelper.loadModel(`workspace/${params.projectName}/repository.json`);
        let model = params.model;
        if (!repository[model.type]) repository[model.type] = [];
        let createdId;
        if (!model.id) {
            createdId = dataSourceHelper.uuid();
            model.id = createdId;
            repository[model.type].push(model);
        } else {
            let objectToUpdateIndex = repository[model.type].findIndex(it => it.id == model.id);
            if (objectToUpdateIndex == -1)
                throw `can not find object with type ${model.type} and id ${model.id}`;
            repository[model.type][objectToUpdateIndex] = model;
        }
        dataSourceHelper.saveModel(`workspace/${params.projectName}/repository.json`,repository);
        if (createdId) return {created: true, id: createdId};
        return {updated: true};
    }

    /**
     * @Method("saveGameProps");
     * @Request({"type":"post"});
     */
    saveGameProps(params){
        let path = `workspace/${params.projectName}/gameProps.json`;
        let model = dataSourceHelper.loadModel(path);
        Object.keys(params.model).forEach(function(key){
            model[key]=params.model[key];
        });
        dataSourceHelper.saveModel(path,model);
        return {};
    }

    /**
     * @Method("remove");
     * @Request({"type":"post"});
     */
    remove(params){
        let repository = dataSourceHelper.loadModel(`workspace/${params.projectName}/repository.json`);
        let model = params.model;
        let objectToRemoveIndex = repository[model.type].findIndex(it => it.id == model.id);
        if (objectToRemoveIndex == -1)
            throw `can not find object with type ${model.type} and id ${model.id}`;
        repository[model.type].splice(objectToRemoveIndex,1);
        dataSourceHelper.saveModel(`workspace/${params.projectName}/repository.json`,repository);
    }

    /**
     * @Method("generate");
     * @Request({"type":"get"});
     */
    generate(params,callback){
        let onGenerated = res=>{
            if (!res.success) params.error = res.error;
            callback();
        };
        generatorService.generate(params,onGenerated);
        return callback;
    }

}

module.exports.controller = ResourceController;

