
import CommonBehaviour from 'coreEngine/src/model/generic/commonBehaviour'
import GameObjectProto from 'coreEngine/src/model/generic/gameObjectProto'
import SpriteSheet from 'coreEngine/src/model/generic/spriteSheet'
import FrameAnimation from 'coreEngine/src/model/generic/frameAnimation'
import Scene from 'coreEngine/src/model/generic/scene'
import Layer from 'coreEngine/src/model/generic/layer'
import Font from 'coreEngine/src/model/generic/font'
import Sound from 'coreEngine/src/model/generic/sound'
import ParticleSystem from 'coreEngine/src/model/generic/particleSystem'

const res = {};

res.reset = function(){

    res.commonBehaviourList = [];
    res.currGameObjectInEdit = new GameObjectProto();
    res.currSpriteSheetInEdit = new SpriteSheet();
    res.currFrameAnimationInEdit = new FrameAnimation();
    res.currSceneInEdit = new Scene();
    res.currSceneGameObjectInEdit = {
        pos: {},
        scale:{}
    };
    res.currLayerInEdit = new Layer();
    res.currFontInEdit = new Font();
    res.currSoundInEdit = new Sound();
    res.currParticleSystemInEdit = new ParticleSystem();
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
