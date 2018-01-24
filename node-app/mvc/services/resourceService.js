
const fs = require.main.require('./node-app/base/fs');


let dataSourceHelper = require.main.require('./node-app/mvc/services/dataSourceHelper');


module.exports.getCommonBehaviourAttrs = function(projectName){
    if (!projectName) throw 'project name is not specified';
    return dataSourceHelper.loadModel('client-app/engine/commonBehaviour/impl/desc/desc.json');
};