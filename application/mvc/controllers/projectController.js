
'use strict';

const fs = require.main.require('./application/base/fs');
const projectService = require.main.require('./application/mvc/services/projectService');

module.exports.controller = function(){

    this.getAll = {
        type:'get',
        code: function(params){
            return fs.getDirListSync('workspace/').map(function(item){
                return {name:item}
            });
        }
    };

    this.create = {
        type:'post',
        code: function(params){
            return projectService.createProject(params.projectName)
        }
    };


};