"use strict";

let utils = require.main.require('./application/utils/utils');
let resourceService = require.main.require('./application/mvc/services/resourceServiceNew');
let generatorService = require.main.require('./application/mvc/services/generatorService');
let dataSourceHelper = require.main.require('./application/mvc/services/dataSourceHelper');

class ResourceController {

    constructor(){
        this.cache = {};
    }


    /**
     * @Method("getAll");
     * @Request({"type":"post"});
     */
    getAll(params){
        let result = {};
        let projectName = params.projectName;
        resourceService.RESOURCE_NAMES.forEach(function(key){
            result[key] = resourceService.getAll(key,projectName);
        });
        result.gameProps = resourceService.getGameProps(projectName);
        result.commonBehaviourProto = resourceService.getCommonBehaviourAttrs(projectName);
        return result;
    }

    /**
     * @Method("save");
     * @Request({"type":"post"});
     */
    save(params){
        return dataSourceHelper.save(params);
    }

    /**
     * @Method("saveGameProps");
     * @Request({"type":"post"});
     */
    saveGameProps(params){
        return dataSourceHelper.saveGameProps(params);
    }

    /**
     * @Method("remove");
     * @Request({"type":"post"});
     */
    remove(params){
        return dataSourceHelper.remove(params);
    }

    /**
     * @Method("generateEngine");
     * @Request({"type":"get"});
     */
    generateEngine(params){
        let key = JSON.stringify(params);
        if (!this.cache[key]) {
            this.cache[key] = generatorService.generateEngine(params);
        }
        return this.cache[key];
    }

    /**
     * @Method("generate");
     * @Request({"type":"post"});
     */
    generate(params){
        generatorService.generate(params,function(result){});
    }

}

module.exports.controller = ResourceController;

