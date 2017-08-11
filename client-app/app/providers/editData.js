
const res = {};

res.reset = function(){

    res.commonBehaviourList = [];
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
    res.commonBehaviourProto =  [];


    res.debugFrameUrl = '';
    res.scriptEditorUrl = '';

    res.tileMapPosY = res.tileMapPosX = 0;

    res.projectName = '';
    res.projects = [];

    res.buildOpts = {
       debug: false,
       embedResources: false,
       embedScript: false,
       minify:false
    };
};

res.reset();

export default res;
