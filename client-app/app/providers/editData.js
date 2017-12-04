/*global localStorage:true*/

import CommonBehaviour from 'coreEngine/src/model/generic/commonBehaviour'
import GameObjectProto from 'coreEngine/src/model/generic/gameObjectProto'
import SpriteSheet from 'coreEngine/src/model/generic/spriteSheet'
import FrameAnimation from 'coreEngine/src/model/generic/frameAnimation'
import Scene from 'coreEngine/src/model/generic/scene'
import Layer from 'coreEngine/src/model/generic/layer'
import Font from 'coreEngine/src/model/generic/font'
import Sound from 'coreEngine/src/model/generic/sound'
import ParticleSystem from 'coreEngine/src/model/generic/particleSystem'
import Game from 'coreEngine/src/engine/game';
const res = {};

res.reset = function(gameProps){

    let g = new Game(gameProps||{});
    res.game = g;
    res.editTileMapModeOn = false;

    res.commonBehaviourList = [];
    res.currGameObjectInEdit = new GameObjectProto(g);
    res.currSpriteSheetInEdit = new SpriteSheet(g);
    res.currFrameAnimationInEdit = new FrameAnimation(g);
    res.currFrameAnimationInEdit._gameObject = new GameObjectProto(g);
    res.currSceneInEdit = new Scene(g);
    res.currSceneGameObjectInEdit = {
        pos: {},
        scale:{}
    };
    res.currLayerInEdit = new Layer(g);
    res.currFontInEdit = new Font(g);
    res.currSoundInEdit = new Sound(g);
    res.currParticleSystemInEdit = new ParticleSystem(g);
    res.currProjectInEdit = {};
    res.currTileIndexInEdit = null;
    res.commonBehaviourProto =  [];


    res.debugFrameUrl = '';
    res.scriptEditorUrl = '';

    res.tileMapPosY = res.tileMapPosX = 0;

    res.projectName = '';
    res.projects = [];

    try {
        res.buildOpts = JSON.parse(localStorage.buildOpts)
    } catch (e){
        res.buildOpts = {
            debug: false,
            minify:false,
            windowed: false
        };
    }
};

res.reset();

export default res;
