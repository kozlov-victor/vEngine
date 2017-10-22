
'use strict';

const fs = require.main.require('./node-app/base/fs');
const projectService = require.main.require('./node-app/mvc/services/projectService');

class ProjectController {
    /**
     * @Method("getAll");
     * @Request({"type":"get"});
     */
    getAll(params){
        return fs.getDirListSync('./workspace').map(it=>{
            return {name:it}
        });
    }
    /**
     * @Method("create");
     * @Request({"type":"post"});
     */
    create(params){
        return projectService.createProject(params.projectName)
    }

    /**
     * @Method("exist");
     * @Request({"type":"post"});
     */
    exist(params){
        return projectService.exist(params.projectName)
    }
}

module.exports.controller = ProjectController;