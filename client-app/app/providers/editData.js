/*global localStorage:true*/

import GameObjectProto from 'engine/model/generic/gameObjectProto'
import SpriteSheet from 'engine/model/generic/spriteSheet'
import FrameAnimation from 'engine/model/generic/frameAnimation'
import Scene from 'engine/model/generic/scene'
import Layer from 'engine/model/generic/layer'
import Font from 'engine/model/generic/font'
import Sound from 'engine/model/generic/sound'
import ParticleSystem from 'engine/model/generic/particleSystem'
import Game from 'engine/core/game';
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
