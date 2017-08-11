
import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import utils from 'app/providers/utils';

import GameObject  from  'coreEngine/src/model/generic/gameObject';

export default RF.registerComponent('app-curr-scene', {
    template: {
        type: 'string',
        value: require('./scene.html')
    },
    editData,
    i18n: i18n.getAll(),
    utils,
    frameWidth(){
        if (!editData.currSceneInEdit.tileMap) return 0;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
        return  editData.currSceneInEdit.tileMap._spriteSheet._frameWidth || 0;
    },
    frameHeight(){
        if (!editData.currSceneInEdit.tileMap) return 0;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
        return  editData.currSceneInEdit.tileMap._spriteSheet._frameHeight || 0;
    },

    _onDropFromLeftPanel(droppedObj,x,y) {
        let go = new GameObject({
            pos: {x,y},
            layerId: editData.currLayerInEdit.id,
            protoId: droppedObj.obj.id
        });
        restResource.
        save(go).
        then(resp=>{
            if (resp.created) {
                go.id = resp.id;
                editData.gameObjectList.add(go);
                editData.currLayerInEdit.addGameObject(go);
            } else if (resp.updated) {
                //gs.updateCloner();
            }
            RF.digest();
        });
    },

    _onDropFromCentralPanel(droppedObj,x,y){
        let go = editData.currLayerInEdit.gameObjects.find({id:droppedObj.obj.id});
        go.pos = {x,y};
        restResource.
        save(go).
        then(resp=>{
            RF.digest();
        });
    },

    onDrop(droppedObj,e,coords){
        let x = e.offsetX - coords.mouseX;
        let y = e.offsetY - coords.mouseY;
        if (droppedObj.src=='leftPanel') this._onDropFromLeftPanel(droppedObj,x,y);
        else this._onDropFromCentralPanel(droppedObj,x,y);
    }
});