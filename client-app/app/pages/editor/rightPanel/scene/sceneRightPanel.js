/*global RF:true*/
import BaseComponent from 'app/baseComponent'
import './sceneRightPanel.less'
import Scene from 'coreEngine/src/model/generic/scene';

@RF.decorateComponent({
    name: 'app-scene-right-panel',
    template: require('./sceneRightPanel.html')
})
export default class SceneRightPanel extends BaseComponent {

    constructor(){
        super();
    }

    numOfFramesForSceneSpriteSheet(){
        let editData = this.editData;
        if (!editData.currSceneInEdit) return 0;
        if (!editData.currSceneInEdit.tileMap) return 0;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
        return (
                editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesV *
                editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesH
            ) || 0;
    }

    frameWidth(){
        let editData = this.editData;
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet._frameWidth;
    }
    frameHeight(){
        let editData = this.editData;
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet._frameHeight;
    }
    framePosX(){
        let editData = this.editData;
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet.getFramePosX) return null;
        if (!editData.currTileIndexInEdit) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet.getFramePosX(editData.currTileIndexInEdit);
    }
    framePosY(){
        let editData = this.editData;
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet.getFramePosY) return null;
        if (!editData.currTileIndexInEdit) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet.getFramePosY(editData.currTileIndexInEdit);
    }
    resourcePath(){
        let editData = this.editData;
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet.resourcePath
    }
    numOfFramesH(){
        let editData = this.editData;
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesH;
    }

    setCurrSelectedTile(i){
        this.editData.currTileIndexInEdit = i;
    }
    setTileMapSpriteSheet(){
        // ??
        // editData.currSceneInEdit = new Scene(editData.currSceneInEdit.toJSON())
    }
    editScene(){
        this.restResource.save(this.editData.currSceneInEdit);
    }
}