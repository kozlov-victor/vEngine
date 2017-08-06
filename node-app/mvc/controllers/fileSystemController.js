
const resourceService = require.main.require('./node-app/mvc/services/resourceService');
const fs = require.main.require('./node-app/base/fs');

class FileSystemController{
    /**
     * @Method("renameFolder");
     * @Request({"type":"post"});
     */
    renameFolder(params){
        return resourceService.renameFolder(params.oldName,params.newName);
    }
    /**
     * @Method("deleteFolder");
     * @Request({"type":"post"});
     */
    deleteFolder(params){
        return resourceService.deleteFolder(params.name);
    }
    /**
     * @Method("createFile");
     * @Request({"type":"post"});
     */
    createFile(params){
        return resourceService.createFile(params.path,params.content,params.projectName);
    }
    /**
     * @Method("removeFile");
     * @Request({"type":"post"});
     */
    removeFile(params){
        return resourceService.removeFile(params.path,params.projectName);
    }
    /**
     * @Method("uploadFile");
     * @Request({"type":"multipart"});
     */
    uploadFile(params){
        fs.writeFileSync(
            `workspace/${params.projectName}/resources/${params.type}/${params.fileName}`,
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
        return resourceService.readFile(params.path,params.projectName);
    }
}

module.exports.controller = FileSystemController;