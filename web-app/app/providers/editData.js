
var collections = _require('collections');

var res = {};

res.reset = function(){

    res.testEditData = 'edit data ok';
    res.commonBehaviourList = {};
    res.currGameObjectInEdit = {};
    res.currSpriteSheetInEdit = {};
    res.currFrAnimationInEdit = {};
    res.currSceneInEdit = {};
    res.currSceneGameObjectInEdit = {};
    res.currLayerInEdit = {};
    res.currFontInEdit = {};
    res.currCommonBehaviourInEdit = {};
    res.currSoundInEdit = {};
    res.currParticleSystemInEdit = {};
    res.currProjectInEdit = {};
    res.currTileIndexInEdit = {};
    res.gameProps = {};

    res.userInterfaceList = new collections.List();

    res.debugFrameUrl = '/about:blank';
    res.scriptEditorUrl = '';

    res.tileMapPosY = res.tileMapPosX = 0;

    res.projectName = undefined;
    res.projects = {};
    res.buildOpts = {
        debug: false,
        embedResources: false,
        embedScript: false,
        minify:false
    };
};

res.reset();

module.exports = res;
