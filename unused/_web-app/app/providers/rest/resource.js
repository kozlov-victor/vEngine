
const http = require('providers/http');
const editData = require('providers/editData');

class Resource{
    save(model,callback){
        if (model.toJSON) model = model.toJSON();
        return http.post('/resource/save',{projectName:editData.projectName,model:model},callback);
    }
    saveGameProps(model,callback){
        return http.post('/resource/saveGameProps',{projectName:editData.projectName,model:model},callback);
    }
    remove(model,callback){
        return http.post('/resource/remove',{projectName:editData.projectName,model:{
            id: model.id,
            type:model.type
        }},callback);
    }
}


module.exports = new Resource();