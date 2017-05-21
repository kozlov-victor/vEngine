
import http from 'providers/http';
import editData from 'providers/editData';

const bundle = _require('bundle');
const collections = _require('collections');
const TextField = _require('textField');
const CommonBehaviour = _require('commonBehaviour');

const _loadResources = function(projectName){
    http.post('/resource/getAll',{projectName:projectName},function(response){
        bundle.prepare(response);
        Object.keys(bundle).forEach(function(key){
            if (bundle[key] && bundle[key].call) return;
            if (editData[key] && editData[key].clear) {
                editData[key].clear();
                bundle[key].forEach(function(el){
                    editData[key].add(el);
                });
            }
            Vue.set(editData,key,bundle[key]);
        });
        editData.gameProps = bundle.gameProps;
        response.commonBehaviourProto.forEach(function (el) {
            editData.commonBehaviourProto.add(new CommonBehaviour(el));
        });
        editData.userInterfaceList.clear().add(new TextField({protoId:'0_0_1'}));
    });
};


class Project{
    getAll(callback){
        return http.get('/project/getAll',{},callback);
    }
    create(projectName,callback){
        return http.post('/project/create',{projectName:projectName},callback);
    }
    load(projectName) {
        editData.reset();
        editData.projectName = projectName;
        document.title = editData.projectName;
        sessionStorage.projectName = editData.projectName;
        Promise.resolve().then(function () {
            return _loadResources(projectName);
        }).then(function () {
            if (!bundle.sceneList.isEmpty()) editData.currSceneInEdit = bundle.sceneList.get(0);
            if (editData.currSceneInEdit._layers) {
                if (editData.currSceneInEdit._layers.size()) {
                    editData.currLayerInEdit = editData.currSceneInEdit._layers.get(0);
                }
            }
            location.href = '#/editor';
        });
    }
}


const p = new Project();

// if (sessionStorage.projectName) {
//     p.load(sessionStorage.projectName);
// } else {
//     location.href = '#/explorer';
// }

module.exports = new Project();
