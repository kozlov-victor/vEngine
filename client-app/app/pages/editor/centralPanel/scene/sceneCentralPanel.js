/*global RF:true*/
/*global alertEx:true*/
import BaseComponent from 'app/baseComponent'
import './sceneCentralPanel.less'

import GameObject  from  'coreEngine/src/model/generic/gameObject'
import GameObjectProto  from  'coreEngine/src/model/generic/gameObjectProto';

@RF.decorateComponent({
    name: 'app-scene-central-panel',
    template: require('./sceneCentralPanel.html')
})
export default class SceneCentralPanel extends BaseComponent {
    constructor(){
        super();
    }
    frameWidth(){
        let editData = this.editData;
        if (!editData.currSceneInEdit) return 0;
        if (!editData.currSceneInEdit.tileMap) return 0;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
        return  editData.currSceneInEdit.tileMap._spriteSheet._frameWidth || 0;
    }
    frameHeight(){
        let editData = this.editData;
        if (!editData.currSceneInEdit) return 0;
        if (!editData.currSceneInEdit.tileMap) return 0;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
        return  editData.currSceneInEdit.tileMap._spriteSheet._frameHeight || 0;
    }

    getCharCss(item,ch){
        if (!item) return;
        let symbol = item.font.fontContext.symbols[ch] || {};
        return {
            left:item.pos.x+'px',
            top: item.pos.y+'px',
            display:ch=='\n'?'block':'inline-block',
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
        Object.keys(json).forEach(key=>{
            if (!['id','name','pos','scale','angle','alpha','type','layerId', 'gameObjectProto'].includes(key))
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
            objInScene.setText("testField");
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
}