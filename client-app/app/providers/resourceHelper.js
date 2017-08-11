
import editData from 'app/providers/editData';
import http from 'app/providers/rest/httpClient';
import resourceRest from 'app/providers/rest/resource';

class ResourceHelper {

     async loadProject(projectName){
        editData.reset();
        editData.projectName = projectName;
        document.title = editData.projectName;
        sessionStorage.projectName = editData.projectName;

        let allData =  await resourceRest.getAll(projectName);
        console.log(allData);

        // Promise.
        // resolve().
        // then(function(){
        //     return _loadResources(projectName);
        // }).
        // then(function(){
        //     if (!bundle.sceneList.isEmpty()) editData.currSceneInEdit = bundle.sceneList.get(0);
        //     if (editData.currSceneInEdit._layers) {
        //         if (editData.currSceneInEdit._layers.size()) {
        //             editData.currLayerInEdit = editData.currSceneInEdit._layers.get(0);
        //         }
        //     }
        //     RF.Router.navigateTo('editor');
        // });
    }


    // todo remove
    saveGameProps(gameProps){
        http.post(
            '/gameProps/save',
            {
                model:gameProps,
                projectName: editData.projectName
            }
        )
    }
}

export default new ResourceHelper();