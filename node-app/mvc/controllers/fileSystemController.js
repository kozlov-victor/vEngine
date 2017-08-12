
const fs = require.main.require('./node-app/base/fs');

class FileSystemController{
    /**
     * @Method("renameFolder");
     * @Request({"type":"post"});
     */
    renameFolder(params){
        fs.renameSync(params.oldName,params.newName);
        return {success:true};
    }
    /**
     * @Method("deleteFolder");
     * @Request({"type":"post"});
     */
    deleteFolder(params){
        fs.deleteFolderSync(params.name);
        return {success:true};
    }
    /**
     * @Method("createFile");
     * @Request({"type":"post"});
     */
    createFile(params){
        if (!params.projectName) throw 'project name not specified';
        fs.writeFileSync('workspace/'+params.projectName+'/resources/'+params.path,params.content);
        return {};
    }
    /**
     * @Method("removeFile");
     * @Request({"type":"post"});
     */
    removeFile(params){
        if (!params.projectName) throw 'project name not specified';
        fs.deleteFileSync('workspace/'+params.projectName+'/resources/'+params.path);
        return {success:true};
    }
    /**
     * @Method("uploadFile");
     * @Request({"type":"multipart"});
     */
    uploadFile(params){
        fs.writeFileSync(
            `workspace/${params.projectName}/resources/${params.fileName}`,
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
        if (!params.projectName) throw 'project name not specified';
        return fs.readFileSync('workspace/'+params.projectName+'/resources/'+params.path);
    }
}

module.exports.controller = FileSystemController;