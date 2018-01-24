import BaseComponent from "../../../../baseComponent";

declare const RF;

import './sceneRightPanel.less'
import TileMap from "../../../../../engine/model/impl/tileMap";

@RF.decorateComponent({
    name: 'app-scene-right-panel',
    template: require('./sceneRightPanel.html')
})
export default class SceneRightPanel extends BaseComponent {

    constructor(){
        super();
        let keyPressed = false;
        document.addEventListener('keydown',e=>{
            if (keyPressed) return;
            keyPressed = true;
            if (e.keyCode===16) { // shift
                this.toggleEditMode();
                RF.digest();
            }
        });
        document.addEventListener('keyup',e=>{
            keyPressed = false;
            if (e.keyCode===16) { // shift
                this.toggleEditMode();
                RF.digest();
            }
        });
    }

    numOfFramesForSceneSpriteSheet(){
        let editData = this.editData;
        if (!editData.currSceneInEdit) return 0;
        if (!editData.currSceneInEdit.tileMap) return 0;
        if (!editData.currSceneInEdit.tileMap.spriteSheet) return 0;
        return (
                editData.currSceneInEdit.tileMap.spriteSheet.numOfFramesV *
                editData.currSceneInEdit.tileMap.spriteSheet.numOfFramesH
            ) || 0;
    }

    async createTileMap(){
        let currScene = this.editData.currSceneInEdit;
        let t = new TileMap(this.editData.game);
        let res = await this.restResource.save(t);
        t.id = res.id;
        this.editData.game.repository.addObject(t);
        currScene.tileMap = t;
        await this.restResource.save(currScene);
    }

    setCurrSelectedTile(i){
        this.editData.currTileIndexInEdit = i;
    }
    editScene(){
        this.restResource.save(this.editData.currSceneInEdit);
    }
    toggleEditMode(){
        this.editData.editTileMapModeOn = !this.editData.editTileMapModeOn;
    }
    async editTileMap(){
        let currScene = this.editData.currSceneInEdit;
        let tileMap = currScene.tileMap;
        await this.restResource.save(tileMap);
        this.editData.game.repository.updateObject(tileMap);
    }
}