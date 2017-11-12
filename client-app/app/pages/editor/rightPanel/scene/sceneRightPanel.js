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
        if (!editData.currSceneInEdit.tileMap.spriteSheet) return 0;
        return (
                editData.currSceneInEdit.tileMap.spriteSheet.numOfFramesV *
                editData.currSceneInEdit.tileMap.spriteSheet.numOfFramesH
            ) || 0;
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