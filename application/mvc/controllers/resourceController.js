"use strict";

let utils = require.main.require('./application/utils/utils');
let resourceService = require.main.require('./application/mvc/services/resourceServiceNew');
let generatorService = require.main.require('./application/mvc/services/generatorService');
let collectionHelper = require.main.require('./application/mvc/services/collectionHelper');

module.exports.controller = function(){

    this.getAll = {
        type:'post',
        code(params){
            let result = {};
            let projectName = params.projectName;
            resourceService.RESOURCE_NAMES.forEach(function(key){
                result[key] = resourceService.getAll(key,projectName);
            });
            result.gameProps = resourceService.getGameProps(projectName);
            //result.commonBehaviour = resourcesService.getCommonBehaviourAttrs(projectName);
            return result;
        }
    };

    this.save = {
        type:'post',
        code(params){
            return collectionHelper.save(params);
        }
    };


    this.generateEngine = {
        type:'get',
        code(params){
            return generatorService.generateEngine(params);
        }
    };


    this.generate = {
        type:'get',
        code(params){
            generatorService.generate(params,function(result){});
        }
    };

};
