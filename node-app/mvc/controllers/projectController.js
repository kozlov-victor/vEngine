
'use strict';

const fs = require.main.require('./node-app/base/fs');
const projectService = require.main.require('./node-app/mvc/services/projectService');

class ProjectController {
    /**
     * @Method("getAll");
     * @Request({"type":"get"});
     */
    getAll(params){
        return fs.getDirListSync('workspace/').map(function(item){
            return {name:item}
        });
    }
    /**
     * @Method("create");
     * @Request({"type":"post"});
     */
    create(params){
        return projectService.createProject(params.projectName)
    }
}

module.exports.controller = ProjectController;