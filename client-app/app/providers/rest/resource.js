
import http from 'app/providers/rest/httpClient';
import editData from 'app/providers/editData';

class Resource{
    getAll(){
        return http.post('/resource/getAll',{projectName:editData.projectName});
    }
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


export default new Resource();