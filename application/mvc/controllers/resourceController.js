"use strict";

let utils = require.main.require('./application/utils/utils');
let resourcesService = require.main.require('./application/mvc/services/resourcesService');
let generatorService = require.main.require('./application/mvc/services/generatorService');
let collectionHelper = require.main.require('./application/mvc/services/collectionHelper');

module.exports.controller = function(){

    this.getAll = {
        type:'post',
        code(params){
            let result = {};
            let projectName = params.projectName;
            resourcesService.RESOURCE_NAMES.forEach(function(key){
                result[key] = resourcesService.getAll(key,projectName);
            });
            result.gameProps = resourcesService.getGameProps(projectName);
            result.commonBehaviourProto = resourcesService.getCommonBehaviourAttrs(projectName);
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
