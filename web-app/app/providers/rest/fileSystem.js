
import http from 'providers/rest/httpClient';
import editData from 'providers/editData';

class FileSystem {
    createFile(path,content,callback){
        return http.post('/fileSystem/createFile',{
            path:path,
            content:content,
            projectName: editData.projectName
        },callback);
    }
    uploadFile(file,params,callback){
        params = params || {};
        params.projectName = editData.projectName;
        return http.postMultiPart('/fileSystem/uploadFile',file,params,callback);
    }
    removeFile(path,callback){
        return http.post('/fileSystem/removeFile',{
            path:path,
            projectName: editData.projectName
        },callback);
    }
    readFile(path,callback){
        return http.post('/fileSystem/readFile',{
            path:path,
            projectName: editData.projectName
        },callback);
    }
    renameFolder(oldName,newName,callback){
        return http.post('/fileSystem/renameFolder',{oldName:oldName,newName:newName},callback);
    }
    deleteFolder(name,callback){
        return http.post('/fileSystem/deleteFolder',{name:name},callback);
    }
}

module.exports = new FileSystem();