
import http from '../rest/httpClient';

export default class Project{
    static getAll(callback){
        return http.get('/project/getAll',{},callback);
    }
    static create(projectName,callback?){
        return http.post('/project/create',{projectName:projectName},callback);
    }
    static exist(projectName,callback?){
        return http.post('/project/exist',{projectName:projectName},callback);
    }
}

