
import http from 'app/providers/rest/httpClient'
import editData from 'app/providers/editData'
import utils from 'app/providers/utils'

export default class Resource{
    static getAll(projectName){
        return http.post('/resource/getAll',{projectName});
    }
    static save(model,callback,opts){

        let allModels = require('coreEngine/src/model/all');
        let Class = allModels[model.type];

        let modelSample = new Class(editData.game);
        if (model.toJSON) model = model.toJSON(opts);

        Object.keys(model).forEach(key=>{
            if (['name','type','id'].includes(key)) return;
            if (utils.deepEqual(model[key],modelSample[key])) delete model[key];
        });

        return http.post('/resource/save',{projectName:editData.projectName,model:model},callback);
    }
    static saveGameProps(model,callback){
        return http.post('/resource/saveGameProps',{projectName:editData.projectName,model:model},callback);
    }
    static remove(model,callback){
        return http.post('/resource/remove',{projectName:editData.projectName,model:{
            id: model.id,
            type:model.type
        }},callback);
    }
}
