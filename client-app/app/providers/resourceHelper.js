
import editData from 'app/providers/editData';
import http from 'app/providers/rest/httpClient';
import resourceRest from 'app/providers/rest/resource';

import repository from 'coreEngine/src/engine/repository';
import CommonBehaviour from 'coreEngine/src/model/generic/commonBehaviour';

class ResourceHelper {

     async loadProject(projectName){
        editData.reset();
        editData.projectName = projectName;
        document.title = editData.projectName;
        sessionStorage.projectName = editData.projectName;

        let allData =  await resourceRest.getAll(projectName);
        editData.commonBehaviourProtos = allData.commonBehaviourProtos.map(it=>{
           return new CommonBehaviour().fromJSON(it);
        });
        editData.gameProps = allData.gameProps;
        repository.setDescriptions(allData.repository);
        RF.Router.navigateTo('editor');
    }
}

export default new ResourceHelper();