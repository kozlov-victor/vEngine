/*global RF:true*/
/*global alertEx:true*/
import BaseComponent from 'app/baseComponent'
import './sceneCentralPanel.less'

import GameObject  from  'engine/model/generic/gameObject'
import GameObjectProto  from  'engine/model/generic/gameObjectProto';

@RF.decorateComponent({
    name: 'app-scene-central-panel',
    template: require('./sceneCentralPanel.html')
})
export default class SceneCentralPanel extends BaseComponent {
    constructor(){
        super();
    }

    showThisTile(j,i){
        let editData = this.editData;
        if (!editData.currSceneInEdit.tileMap) return false;
        if (!editData.currSceneInEdit.tileMap.data) return false;
        let data = editData.currSceneInEdit.tileMap.data;
        let res = data[j]!==undefined && data[j][i]!==undefined;
        if (j===undefined || i===undefined) return false;
        return res;
    }

    getTilePos(j,i){
        let res = {x:0,y:0};
        if (!this.editData.currSceneInEdit.tileMap) return res;
        let tileMapData = this.editData.currSceneInEdit.tileMap.data;
        let currCell = tileMapData[j] && tileMapData[j][i] && tileMapData[j][i];
        if (!currCell) return res;
        let index = currCell.index;

        let editData = this.editData;
        return {
            x: editData.currSceneInEdit.tileMap.spriteSheet.getFramePosX(index),
            y: editData.currSceneInEdit.tileMap.spriteSheet.getFramePosY(index)
        };
    }

    getCharCss(item,ch){
        if (!item) return;
        let symbol = item.font.fontContext.symbols[ch] || {};
        return {
            left:item.pos.x+'px',
            top: item.pos.y+'px',
            display:ch==='\n'?'block':'inline-block',
            width:symbol.width+'px',
            height:symbol.height+'px',
            backgroundImage:'url('+this.editData.projectName+'/'+item.font.resourcePath+')',
            backgroundRepeat:     'no-repeat',
            backgroundPositionX: -symbol.x+'px',
            backgroundPositionY: -symbol.y+'px'
        }
    }

    async onDropFromCentralPanel(go,{x,y}){

        go.pos = {x,y};
        let json = go.toJSON();
        json.type==='GameObject' && Object.keys(json).forEach(key=>{
            if (!['id','name','pos','font','scale','angle','alpha','type','layerId', 'gameObjectProto'].includes(key))
                delete json[key];
        });
        await this.restResource.save(json,null);
    }

    async onDropFromLeftPanel(droppedObj,e,coords){

        if (!droppedObj) return null;
        if (droppedObj.src!=='leftPanel') return null;
        let x = e.offsetX - coords.mouseX;
        let y = e.offsetY - coords.mouseY;

        let editData = this.editData;
        let Clazz = droppedObj.obj instanceof GameObjectProto?GameObject:droppedObj.obj.constructor;
        let objInScene = new Clazz(editData.game);
        if ('font' in objInScene && !objInScene.font) {
            let firstFont = editData.game.repository.getFirst('Font');
            if (!firstFont) {
                alertEx(this.i18n.get('noFont'));
                return null;
            }
            objInScene.setFont(firstFont);
            let allTextFields = editData.game.repository.getArray('TextField');
            let size = (allTextFields && allTextFields.length) || 1;
            objInScene.name = `textField${size}`;
            objInScene.setText(objInScene.name);
        }
        objInScene.pos =  {x,y};
        objInScene.layerId = editData.currLayerInEdit.id;
        if (objInScene instanceof GameObject) objInScene.gameObjectProto = droppedObj.obj;

        let resp = await this.restResource.save(objInScene);
        objInScene.id = resp.id;
        editData.game.repository.addObject(objInScene);
        editData.currLayerInEdit.addGameObject(objInScene);
        let l = editData.currLayerInEdit;
        l.updateCloner();
        editData.game.repository.updateObject(l);
        this.restResource.save(l);
        objInScene.revalidate();
    }

    async onCentralSceneClick(e){
        if (!this.editData.editTileMapModeOn) return;
        if (this.editData.currTileIndexInEdit===null) return;
        let tileMap = this.editData.currSceneInEdit.tileMap;
        if (!tileMap) return;
        let coords = this.utils.getCoords('#sceneDiv',e);
        let x = ~~(coords.x / this.editData.currSceneInEdit.tileMap.spriteSheet._frameWidth);
        let y = ~~(coords.y / this.editData.currSceneInEdit.tileMap.spriteSheet._frameHeight);
        let index = +this.editData.currTileIndexInEdit;
        let tile = {
            meta: {tileMapId:this.editData.currSceneInEdit.tileMap.id},
            x,y,
            index
        };
        tileMap.data = tileMap.data || {};
        tileMap.data[y] = tileMap.data[y] || {};
        tileMap.data[y][x] = {index};
        await this.restResource.saveTile(tile);
    }
}