
var collections = _require('collections');

var res = {};

res.reset = function(){

    res.commonBehaviourList = {};
    res.currGameObjectInEdit = {};
    res.currSpriteSheetInEdit = {};
    res.currFrameAnimationInEdit = {};
    res.currSceneInEdit = {};
    res.currSceneGameObjectInEdit = {
        pos: {},
        scale:{}
    };
    res.currLayerInEdit = {};
    res.currFontInEdit = {};
    res.currCommonBehaviourInEdit = {};
    res.currSoundInEdit = {};
    res.currParticleSystemInEdit = {};
    res.currProjectInEdit = {};
    res.currTileIndexInEdit = {};
    res.gameProps = {};
    res.commonBehaviourProto =  new collections.List();


    res.userInterfaceList = new collections.List();

    res.debugFrameUrl = '';
    res.scriptEditorUrl = '';

    res.tileMapPosY = res.tileMapPosX = 0;

    res.projectName = '';
    res.projects = {};

    //res.buildOpts = {
    //    minify: false,
    //    embedResources: false,
    //    embedScript: false,
    //    minify:false
    //};
};

res.reset();

module.exports = res;
