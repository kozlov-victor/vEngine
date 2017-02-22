
var http = require('providers/http');

var Project = function(){
    this.getAll = function(callback){
        http.get('/project/getAll',{},callback);
    };
    this.create = function(projectName,callback){
        http.post('/project/create',{projectName:projectName},callback);
    };
};


module.exports = new Project();
