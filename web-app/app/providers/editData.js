
var collections = _require('collections');

var res = {};

res.reset = function(){

    res.testEditData = 'edit data ok';
    res.commonBehaviourList = null;
    res.currGameObjectInEdit = null;
    res.currSpriteSheetInEdit = null;
    res.currFrAnimationInEdit = null;
    res.currSceneInEdit = null;
    res.currSceneGameObjectInEdit = null;
    res.currLayerInEdit = null;
    res.currFontInEdit = null;
    res.currCommonBehaviourInEdit = null;
    res.currSoundInEdit = null;
    res.currParticleSystemInEdit = null;
    res.currProjectInEdit = null;
    res.currTileIndexInEdit = null;
    res.gameProps = {};

    res.userInterfaceList = new collections.List();

    res.debugFrameUrl = '/about:blank';
    res.scriptEditorUrl = '';

    res.tileMapPosY = res.tileMapPosX = 0;

    res.projectName = undefined;
    res.projects = null;
    res.buildOpts = {
        debug: false,
        embedResources: false,
        embedScript: false,
        minify:false
    };
};

res.reset();

module.exports = res;
