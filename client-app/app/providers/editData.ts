
import {GameObjectProto} from '../../engine/model/impl/gameObjectProto'
import {SpriteSheet} from '../../engine/model/impl/spriteSheet'
import {FrameAnimation} from '../../engine/model/impl/frameAnimation'
import {Scene} from '../../engine/model/impl/scene'
import {Layer} from '../../engine/model/impl/layer'
import {Font} from '../../engine/model/impl/font'
import {Sound} from '../../engine/model/impl/sound'
import {ParticleSystem} from '../../engine/model/impl/particleSystem'
import {Game} from '../../engine/core/game';
import {GameObject} from "../../engine/model/impl/gameObject";

class EditData {

    game:Game;
    editTileMapModeOn:boolean = false;
    commonBehaviourList:Array<any>;
    currGameObjectInEdit:GameObjectProto;
    currSpriteSheetInEdit:SpriteSheet;
    currFrameAnimationInEdit:FrameAnimation;
    currSceneInEdit:Scene;
    currSceneGameObjectInEdit = {
        pos: {},
        scale:{}
    };
    commonBehaviourProtos = [];
    ui = [];
    currLayerInEdit:Layer;
    currFontInEdit:Font;
    currSoundInEdit:Sound;
    currParticleSystemInEdit:ParticleSystem;
    currProjectInEdit;
    currScriptInEdit;
    currTileIndexInEdit;
    commonBehaviourProto;
    tileMapPosX:number;
    tileMapPosY:number;
    debugFrameUrl;
    scriptEditorUrl;
    projectName = '';
    projects;
    buildOpts;
    customScripts;

    constructor(){
        this.reset(null);
    }

    reset(gameProps?){

        this.projectName = '';
        this.projects = [];

        if (!gameProps) return;
        let g = new Game();
        g.fromJSON(gameProps||{width:0,height:0});
        this.game = g;
        this.editTileMapModeOn = false;

        this.commonBehaviourList = [];
        this.currGameObjectInEdit = new GameObjectProto(g);
        this.currSpriteSheetInEdit = new SpriteSheet(g);
        this.currFrameAnimationInEdit = new FrameAnimation(g);
        this.currFrameAnimationInEdit._gameObject = new GameObject(g);
        this.currSceneInEdit = new Scene(g);
        this.currSceneGameObjectInEdit = {
            pos: {},
            scale:{}
        };
        this.currLayerInEdit = new Layer(g);
        this.currFontInEdit = new Font(g);
        this.currSoundInEdit = new Sound(g);
        this.currParticleSystemInEdit = new ParticleSystem(g);
        this.currProjectInEdit = {};
        this.currTileIndexInEdit = null;
        this.commonBehaviourProto =  [];


        this.debugFrameUrl = '';
        this.scriptEditorUrl = '';

        this.tileMapPosY = this.tileMapPosX = 0;


        try {
            this.buildOpts = JSON.parse(localStorage['buildOpts'])
        } catch (e){
            this.buildOpts = {
                debug: false,
                minify:false,
                windowed: false,
                embedResources: false
            };
        }
    }
}

export let editData:EditData = new EditData();

(window as any).editData = editData;
