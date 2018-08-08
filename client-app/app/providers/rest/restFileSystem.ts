
import {httpClient as http} from '../rest/httpClient';
import {editData} from '../editData';

export abstract class RestFileSystem {
    static createFile(path,content,callback?){
        return http.post('/fileSystem/createFile',{
            path:path,
            content:content,
            projectName: editData.projectName
        },callback);
    }
    static uploadFile(file,params,callback){
        params = params || {};
        params.projectName = editData.projectName;
        return http.postMultiPart('/fileSystem/uploadFile',file,params,callback);
    }
    static removeFile(path,callback){
        return http.post('/fileSystem/removeFile',{
            path:path,
            projectName: editData.projectName
        },callback);
    }
    static readFile(path,callback){
        return http.post('/fileSystem/readFile',{
            path:path,
            projectName: editData.projectName
        },callback);
    }
    static renameFolder(oldName,newName,callback){
        return http.post('/fileSystem/renameFolder',{oldName:oldName,newName:newName},callback);
    }
    static deleteFolder(name,callback){
        return http.post('/fileSystem/deleteFolder',{name:name},callback);
    }
}
