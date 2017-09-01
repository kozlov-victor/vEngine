
import http from 'app/providers/rest/httpClient';

class Project{
    getAll(callback){
        return http.get('/project/getAll',{},callback);
    }
    create(projectName,callback){
        return http.post('/project/create',{projectName:projectName},callback);
    }
}

export default new Project();
