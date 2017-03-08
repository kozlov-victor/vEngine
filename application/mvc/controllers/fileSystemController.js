
const resourcesService = require.main.require('./application/mvc/services/resourcesService');
const fs = require.main.require('./application/base/fs');

class FileSystemController{
    /**
     * @Method("renameFolder");
     * @Request({"type":"post"});
     */
    renameFolder(params){
        resourcesService.renameFolder(params.oldName,params.newName);
    }
    /**
     * @Method("deleteFolder");
     * @Request({"type":"post"});
     */
    deleteFolder(params){
        resourcesService.deleteFolder(params.name);
    }
    /**
     * @Method("createFile");
     * @Request({"type":"post"});
     */
    createFile(params){
        resourcesService.createFile(params.path,params.content,params.projectName);
    }
    /**
     * @Method("uploadFile");
     * @Request({"type":"multipart"});
     */
    uploadFile(params){
        fs.writeFileSync(
            [
                'workspace',
                params.projectName,
                `resources/${params.type}`,
                params.fileName
            ].join('/'),
            params.file,
            true
        );
        return {success:true}
    }

    /**
     * @Method("readFile");
     * @Request({"type":"post"});
     */
    readFile(params){
        return resourcesService.readFile(params.path,params.projectName);
    }
}

module.exports.controller = FileSystemController;