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
        result.repository = fs.readFileSync(`workspace/${params.projectName}/repository.json`);
        result.gameProps = JSON.parse(fs.readFileSync(`workspace/${params.projectName}/gameProps.json`));
        result.commonBehaviourProto = resourceService.getCommonBehaviourAttrs(params.projectName);
        return result;
    }

    /**
     * @Method("save");
     * @Request({"type":"post"});
     */
    save(params) {
        let repository = dataSourceHelper.loadModel(`workspace/${params.projectName}/repository.json`);
        if (!repository[params.type]) repository[params.type] = [];
        let createdId;
        if (!params.id) {
            createdId = dataSourceHelper.uuid();
            params.id = createdId;
            repository[params.type].push(params);
        } else {
            let objectToUpdateIndex = repository[params.type].findIndex(it => it.id == params.id);
            if (objectToUpdateIndex == -1)
                throw `can not find object with type ${params.type} and id ${params.id}`;
            repository[params.type][objectToUpdateIndex] = params;
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
        let objectToRemoveIndex = repository[params.type].findIndex(it => it.id == params.id);
        if (objectToRemoveIndex == -1)
            throw `can not find object with type ${params.type} and id ${params.id}`;
        repository[params.type].splice(objectToRemoveIndex,1);
        dataSourceHelper.saveModel(`workspace/${params.projectName}/repository.json`,repository);
    }

    /**
     * @Method("generate");
     * @Request({"type":"get"});
     */
    generate(params){
        throw 'not supported now!'
    }

}

module.exports.controller = ResourceController;

