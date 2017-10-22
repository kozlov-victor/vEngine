/*global RF:true*/
/*global sessionStorage:true*/
import editData from 'app/providers/editData';
import resourceRest from 'app/providers/rest/resource';
import projectRest from 'app/providers/rest/project';

import CommonBehaviour from 'coreEngine/src/model/generic/commonBehaviour';
import TextField from 'coreEngine/src/model/generic/ui/textField'

export default class ResourceHelper {

     static async loadProject(projectName){

         let exist = await projectRest.exist(projectName);
         if (!exist) {
             delete sessionStorage.projectName;
             RF.Router.navigateTo('explorer');
             return false;
         } else {
             document.title = editData.projectName;
             sessionStorage.projectName = projectName;
             editData.reset();
             let allData =  await resourceRest.getAll(projectName);
             editData.reset(allData.gameProps);
             editData.projectName = projectName;
             editData.commonBehaviourProtos = allData.commonBehaviourProtos.map(it=>{
                 return new CommonBehaviour(editData.game).fromJSON(it);
             });
             editData.game.repository.setDescriptions(allData.repository);

             editData.ui = [
                 (()=>{
                     let t = new TextField(editData.game);
                     t.name = 'text field';
                     t.id = t.type + '_1';
                     let font = editData.game.repository.getFirst('Font');
                     if (font) t.setFont(font);
                     editData.game.repository.addDescription(t.toJSON(),t.type);
                     return t;
                 })()
             ];

             let scenes = editData.game.repository.getArray('Scene');
             editData.currSceneInEdit = scenes[0];
             editData.currLayerInEdit = scenes[0] && scenes[0].layers[0];
             RF.Router.navigateTo('editor');
         }
    }
}

window.e = editData;