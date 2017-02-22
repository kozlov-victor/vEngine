
var resourcesService = require.main.require('./application/mvc/services/resourcesService');
var fs = require.main.require('./application/base/fs');

module.exports.controller = function(){

    this.renameFolder = {
        type:'post',
        code: function(params){
            resourcesService.renameFolder(params.oldName,params.newName);
        }
    };

    this.deleteFolder = {
        type:'post',
        code: function(params){
            resourcesService.deleteFolder(params.name);
        }
    };

    this.createFile = {
        type:'post',
        code: function(params){
            resourcesService.createFile(params.path,params.content,params.projectName)
        }
    };

    this.uploadFile = {
        type:'multipart',
        code: function(params){
            fs.writeFileSync(
                [
                    'workspace',
                    params.projectName,
                    'resources/spriteSheet',
                    params.fileName
                ].join('/'),
                params.file,
                true
            );
            return {success:true}
        }
    };

    this.readFile = {
        type:'post',
        code: function(params){
            return resourcesService.readFile(params.path,params.projectName);
        }
    };

};