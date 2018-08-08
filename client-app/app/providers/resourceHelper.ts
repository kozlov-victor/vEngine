
declare const RF:any;

import {editData} from './editData';
import {RestResource as restResource} from './rest/restResource';
import {RestProject as restProject} from './rest/restProject';

import {CommonBehaviour} from '../../engine/model/impl/commonBehaviour';
import {TextField} from '../../engine/model/impl/ui/components/textField'

let cnt:number = 0;

export class ResourceHelper {

     static async loadProject(projectName){

         let exist = await restProject.exist(projectName);
         if (!exist) {
             delete sessionStorage['projectName'];
             RF.Router.navigateTo('explorer');
         } else {
             document.title = projectName;
             sessionStorage['projectName'] = projectName;
             editData.reset();
             let allData =  await restResource.getAll(projectName);
             editData.reset(allData.gameProps);
             editData.projectName = projectName;
             editData.commonBehaviourProtos = allData.commonBehaviourProtos.map(it=>{
                 return new CommonBehaviour(editData.game).fromJSON(it);
             });
             editData.game.repository.setDescriptions(allData.repository);
             editData.customScripts = allData.customScripts.map(it=>({name:it}));

             editData.ui = [
                 (()=>{
                     let t = new TextField(editData.game);
                     t.name = 'text field';
                     t.id = ~~(Math.random()*100)+(cnt++);
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
