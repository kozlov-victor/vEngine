
var utils = require.main.require('./application/utils/utils');
var resourcesService = require.main.require('./application/mvc/services/resourcesService');
var generatorService = require.main.require('./application/mvc/services/generatorService');


module.exports.controller = function(){



    this.getAll = {
        type:'post',
        code: function(params){
            var result = {};
            var projectName = params.projectName;
            resourcesService.RESOURCE_NAMES.forEach(function(key){
                result[key] = resourcesService.getAll(key,projectName);
            });
            result.gameProps = resourcesService.getGameProps(projectName);
            result.commonBehaviour = resourcesService.getCommonBehaviourAttrs(projectName);
            return result;
        }
    };


    this.generateEngine = {
        type:'get',
        code: function(params){
            return generatorService.generateEngine(params);
        }
    };


    this.generate = {
        type:'get',
        code: function(params){
            generatorService.generate(params,function(result){});
        }
    };

};
