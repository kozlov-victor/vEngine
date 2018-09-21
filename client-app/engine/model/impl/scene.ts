import {noop} from "../../core/misc/noop";
import {GameObjectProto} from "./gameObjectProto";
import {BaseModel} from '../baseModel'
import {Queue} from '../../core/misc/loadingQueue'
import {TileMap} from './tileMap'
import {Layer} from "./layer";
import {AbstractFilter} from "../../core/renderer/webGl/filters/abstract/abstractFilter";
import {Game} from "../../core/game";
import {AmbientLight} from "../../core/light/ambientLight";
import {Color} from "../../core/color";
import {SpriteSheet} from "./spriteSheet";
import {CAMERA_MATRIX_MODE} from "../../core/camera";
import {Resource} from "../resource";
import {TextField} from "./ui/components/textField";
import {ParticleSystem} from "./particleSystem";
import {Sound} from "./sound";
import {DebugError} from "../../debugError";
import {RenderableModel} from "../../model/renderableModel";

declare const IN_EDITOR:boolean,DEBUG:boolean;


export class Scene extends BaseModel  {

    type:string = 'Scene';
    layers:Layer[] = [];
    uiLayer:Layer;
    useBG:boolean = false;
    colorBG = Color.WHITE;
    tileMap:TileMap;
    ambientLight:AmbientLight;
    prepared:boolean = false;

    filters:AbstractFilter[] = [];
    blendMode:string = ''; // todo
    _individualBehaviour = null;

    constructor(game:Game) {
        super(game);
        this.tileMap = new TileMap(game);
        this.ambientLight = new AmbientLight(game);
        this.uiLayer = new Layer(this.game);

    }

    revalidate(){
        super.revalidate();
        if (!IN_EDITOR && this.tileMap && this.tileMap.spriteSheet) {
            this.tileMap.revalidate();
        }
    }

    addTweenMovie(tm){
        this._tweenMovies.push(tm);
    }
    getAllGameObjects(){
        let res = [];
        const ONE = 1;
        for (let i=0;i<this.layers.length;i++) {
            let layer = this.layers[this.layers.length - ONE - i];
            for (let j = 0; j < layer.children.length; j++) {
                let go = layer.children[layer.children.length - ONE - j];
                res.push(go);
            }
        }
        return res;
    }
    getAllSpriteSheets() {
        let dataSet = {};
        this.layers.forEach((l:Layer)=>{
            l.getAllSpriteSheets().forEach((s:SpriteSheet)=>{
                dataSet[s.id] = s;
            })
        });
        if (this.tileMap && this.tileMap.spriteSheet) {
            dataSet[this.tileMap.spriteSheet.id] = this.tileMap.spriteSheet;
        }
        return Object.keys(dataSet).map(key=>dataSet[key]);
    }

    getDefaultLayer(){
        return this.layers[0];
    }

    findObjectById(id:any):RenderableModel {
        for (let l of this.layers) {
            let possibleResult = l.findObjectById(id);
            if (possibleResult!==null) return possibleResult;
        }
        return null;
    }

    addGameObject(go){
        console.trace('scene:addGameObject is deprecated'); // todo remove after completeon
        this.getDefaultLayer().appendChild(go);
    }

    appendChild(go){
        this.getDefaultLayer().appendChild(go);
    }

    prependChild(go){
        this.getDefaultLayer().prependChild(go);
    }

    getLayerByName(name:string):Layer {
        let l:Layer = this.layers.find((l:Layer)=>l.name===name);
        if (DEBUG && !l) throw new DebugError(`can not find layer by name ${name}`);
        return l;
    }

    preload(cb){
        let resources =
            this.getAllSpriteSheets().
            concat(this.game.repository.getArray('Font'));

        // todo more smart preload
        resources = resources.concat(this.game.repository.getArray('GameObjectProto').map(it=>it.spriteSheet));
        resources = resources.concat(this.game.repository.getArray('SpriteSheet'));

        let q = new Queue();
        q.onResolved = ()=>{
            cb && cb();
        };
        resources.forEach((res:Resource)=>{
            let id = 0;
            res.getAllResourcePathes().forEach((path:string)=>{
                ((id)=>{
                    q.addTask(()=>{
                        this.game.renderer.loadTextureInfo(
                            path,
                            ()=>q.resolveTask(id)
                        );
                    },id);
                })(id);
                id++;
            });
        });

        this.game.repository.getArray('Sound').map((it:Sound)=>it.resourcePath).forEach((url:string)=>{
            let id = 1000;
            ((id)=>{
                q.addTask(()=>{
                    this.game.audioPlayer.loadSound(
                        url,
                        null,
                        ()=>q.resolveTask(id)
                    );
                },id);
            })(id);
            id++;
        });


        q.start();

    }

    onShow(){
        if (this._individualBehaviour) this._individualBehaviour.onCreate();
        this.layers.forEach((l:Layer)=>{
            l.onShow();
        });
    }

    setIndividualBehaviour(instance){
        instance.game = this.game;
        instance.scene = this;
        if (!instance.onCreate) instance.onCreate = noop;
        if (!instance.onUpdate) instance.onUpdate = noop;
        if (!instance.onDestroy) instance.onDestroy = noop;
        this._individualBehaviour = instance;
    }

    update(currTime:number,deltaTime:number){
        super.update(currTime,deltaTime);

        if (this._individualBehaviour) this._individualBehaviour.onUpdate();

        let layers = this.layers;
        for (let l of layers) {
            l.update(currTime,deltaTime);
        }
        this.uiLayer.update(currTime,deltaTime);

        // this.game.repository.getArray('ParticleSystem').forEach((ps:ParticleSystem)=>{ // todo also while? or foreach
        //     ps.update(currTime,deltaTime);
        // });

    }

    render(){
        if (!this.prepared) return;

        let renderer = this.game.renderer;
        if (this.useBG) renderer.clearColor(this.colorBG);
        else renderer.clear();
        renderer.beginFrameBuffer();


        this.game.camera.matrixMode = CAMERA_MATRIX_MODE.MODE_TRANSFORM;
        this.game.camera.update(this.game.getTime(),this.game.getDeltaTime());

        let layers = this.layers;
        for (let l of layers) {
            l.render();
        }

        this.tileMap.render();

        renderer.save();
        renderer.resetTransform();
        this.game.camera.matrixMode = CAMERA_MATRIX_MODE.MODE_IDENTITY;
        this.uiLayer.render();
        renderer.restore();

        this.game.camera.matrixMode = CAMERA_MATRIX_MODE.MODE_TRANSFORM;
        this.game.repository.getArray('ParticleSystem').forEach((ps:ParticleSystem)=>{ // todo also while? or foreach
            ps.render();
        });

        if (DEBUG) {
            this.game.renderer.restore();
            if (this.game.renderer.debugTextField) {
                (this.game.renderer.debugTextField as TextField).update(this.game.getTime(),this.game.getDeltaTime());
                this.game.renderer.debugTextField.render();
            }
            this.game.renderer.restore();
        }
        renderer.flipFrameBuffer(this.filters);
    }
}
