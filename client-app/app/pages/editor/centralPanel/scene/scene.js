
import './scene.less'

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

    async _onDropFromLeftPanel(droppedObj,x,y) {
        let go = new GameObject(editData.game).fromJSON(droppedObj.obj.toJSON());
        go.pos =  {x,y};
        go.layerId = editData.currLayerInEdit.id;
        go.id = null;

        let l = editData.currLayerInEdit;
        let resp = await restResource.save(go);
        if (resp.created) {
            go.id = resp.id;
            editData.game._repository.addObject(go);
            editData.currLayerInEdit.addGameObject(go);
            l.updateCloner();
            editData.game._repository.updateObject(l);
            restResource.save(l);
        }
        RF.digest();
    },

    async _onDropFromCentralPanel(droppedObj,x,y){
        let go = editData.currLayerInEdit.gameObjects.find(it=>it.id==droppedObj.obj.id);
        go.pos = {x,y};
        await restResource.save(go);
        RF.digest();
    },

    onDrop(droppedObj,e,coords){
        let x = e.offsetX - coords.mouseX;
        let y = e.offsetY - coords.mouseY;
        if (droppedObj.src=='leftPanel') this._onDropFromLeftPanel(droppedObj,x,y);
        else this._onDropFromCentralPanel(droppedObj,x,y);
    }
});