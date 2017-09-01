
import editData from 'app/providers/editData';
import resourceRest from 'app/providers/rest/resource';

import CommonBehaviour from 'coreEngine/src/model/generic/commonBehaviour';

class ResourceHelper {

     async loadProject(projectName){
         document.title = editData.projectName;
         sessionStorage.projectName = projectName;

         let allData =  await resourceRest.getAll(projectName);
         editData.reset(allData.gameProps);
         editData.projectName = projectName;
         editData.commonBehaviourProtos = allData.commonBehaviourProtos.map(it=>{
           return new CommonBehaviour(editData.game).fromJSON(it);
         });
         editData.game._repository.setDescriptions(allData.repository);

         let scenes = editData.game._repository.getArray('Scene');
         editData.currSceneInEdit = scenes[0];
         editData.currLayerInEdit = scenes[0] && scenes[0].layers[0];
         RF.Router.navigateTo('editor');
    }
}

export default new ResourceHelper();