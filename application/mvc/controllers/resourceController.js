"use strict";

let utils = require.main.require('./application/utils/utils');
let resourceService = require.main.require('./application/mvc/services/resourceServiceNew');
let generatorService = require.main.require('./application/mvc/services/generatorService');
let collectionHelper = require.main.require('./application/mvc/services/collectionHelper');

class ResourceController {
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
        return collectionHelper.save(params);
    }

    /**
     * @Method("remove");
     * @Request({"type":"post"});
     */
    remove(params){
        return collectionHelper.remove(params);
    }

    /**
     * @Method("generateEngine");
     * @Request({"type":"get"});
     */
    generateEngine(params){
        return generatorService.generateEngine(params);
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

