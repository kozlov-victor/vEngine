
var http = require('providers/http');
var editData = require('providers/editData');

var FileSystem = function(){
    this.createFile = function(path,content,callback){
        return http.post('/fileSystem/createFile',{
            path:path,
            content:content,
            projectName: editData.projectName
        },callback);
    };
    this.uploadFile = function(file,params,callback){
        params = params || {};
        params.projectName = editData.projectName;
        return http.postMultiPart('/fileSystem/uploadFile',file,params,callback);
    };
    this.readFile = function(path,callback){
        return http.post('/fileSystem/readFile',{
            path:path,
            projectName: editData.projectName
        },callback);
    };
    this.renameFolder = function(oldName,newName,callback){
        return http.post('/fileSystem/renameFolder',{oldName:oldName,newName:newName},callback);
    };
    this.deleteFolder = function(name,callback){
        return http.post('/fileSystem/deleteFolder',{name:name},callback);
    };
};

module.exports = new FileSystem();