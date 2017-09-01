
import './scene.less'

import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import utils from 'app/providers/utils';

import Scene from 'coreEngine/src/model/generic/scene';

export default RF.registerComponent('app-info-curr-scene', {
    template: {
        type:'string',
        value: require('./scene.html')
    },
    form:{valid: ()=>{return true;}},
    editData,
    i18n:i18n.getAll(),
    utils,
    numOfFramesForSceneSpriteSheet: function(){
        if (!editData.currSceneInEdit) return 0;
        if (!editData.currSceneInEdit.tileMap) return 0;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
        return (
                editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesV *
                editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesH
            ) || 0;
    },
    frameWidth: function(){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet._frameWidth;
    },
    frameHeight: function(){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet._frameHeight;
    },
    framePosX: function(){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet.getFramePosX) return null;
        if (!editData.currTileIndexInEdit) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet.getFramePosX(editData.currTileIndexInEdit);
    },
    framePosY: function(){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet.getFramePosY) return null;
        if (!editData.currTileIndexInEdit) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet.getFramePosY(editData.currTileIndexInEdit);
    },
    resourcePath: function(){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet.resourcePath
    },
    numOfFramesH: function(){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
        return editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesH;
    },

    setCurrSelectedTile: function(i){
        editData.currTileIndexInEdit = i;
    },
    setTileMapSpriteSheet: function(){
        // ??
        // editData.currSceneInEdit = new Scene(editData.currSceneInEdit.toJSON())
    },
    editScene: function(){
        restResource.save(this.editData.currSceneInEdit);
    }
});