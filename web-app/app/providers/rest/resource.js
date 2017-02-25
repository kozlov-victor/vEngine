
const http = require('providers/http');
const editData = require('providers/editData');

class Resource{
    save(model,callback){
        return http.post('/resource/save',{projectName:editData.projectName,model:model},callback);
    }
}


module.exports = new Resource();