
import PointLight from "../../core/light/pointLight";

declare const IN_EDITOR:boolean,DEBUG:boolean;

import BaseModel from '../baseModel'
import LoadingQueue from '../../core/misc/loadingQueue'
import TileMap from './tileMap'
import BlackWhiteFilter from "../../core/renderer/webGl/filters/textureFilters/blackWhite";
import Layer from "./layer";
import AbstractFilter from "../../core/renderer/webGl/filters/abstract/abstractFilter";
import Game from "../../core/game";
import Tween from "../../core/tween";
import PosterizeFilter from "../../core/renderer/webGl/filters/textureFilters/posterizeFilter";
import SimpleBlurFilter from "../../core/renderer/webGl/filters/textureFilters/simpleBlurFilter";
import AmbientLight from "../../core/light/ambientLight";
import Color from "../../core/color";
import SpriteSheet from "./spriteSheet";
import {CAMERA_MATRIX_MODE} from "../../core/camera";
import Resource from "../resource";
import {Renderable} from "../../renderable/interface/renderable";


export default class Scene extends BaseModel implements Renderable {

    type:string = 'Scene';
    layers:Array<Layer> = [];
    uiLayer:Layer;
    useBG:boolean = false;
    colorBG = Color.WHITE;
    tileMap:TileMap;
    ambientLight:AmbientLight;

    filters:Array<AbstractFilter> = [];
    blendMode:string = ''; // todo
    _tweenMovies = [];
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
            for (let j = 0; j < layer.gameObjects.length; j++) {
                let go = layer.gameObjects[layer.gameObjects.length - ONE - j];
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

    preload(cb){
        let resources =
            this.getAllSpriteSheets().
            concat(this.game.repository.getArray('Font'));
        let q = new LoadingQueue();
        q.onResolved = ()=>{
            cb && cb();
        };
        resources.forEach((res:Resource)=>{
            let id = 0;
            res.getAllResourcePathes().forEach((path:string)=>{
                ((id)=>{ // auto genera
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
        q.start();

    }

    onShow(){
        if (this._individualBehaviour) this._individualBehaviour.onCreate();
        this.layers.forEach(l=>{
            l.onShow();
        });
    }

    setIndividualBehaviour(Clazz){
        let instance = new Clazz(this.game);
        instance.game = this.game;
        instance.scene = this;
        this._individualBehaviour = instance;
    }

    update(currTime:number,deltaTime:number){

        let layers = this.layers;
        let i = this.layers.length;
        let l = i - 1;

        if (this._individualBehaviour) this._individualBehaviour.onUpdate();

        while(i--) {
            layers[i-l].update(currTime,deltaTime);
        }

        this.game.repository.getArray('ParticleSystem').forEach(ps=>{ // todo also while? or foreach
            ps.update(currTime,deltaTime);
        });
        this._tweens.forEach((t:Tween,index:number)=>{
            t.update(currTime);
            if (t.isCompleted()) this._tweens.splice(index,1);
        });

    }

    render(){

        if (DEBUG) {
            if (this.game.renderer.debugTextField) this.game.renderer.debugTextField.setText('');
        }

        let renderer = this.game.renderer;
        renderer.beginFrameBuffer();
        if (this.useBG) renderer.clearColor(this.colorBG);
        else renderer.clear();

        let layers = this.layers;
        let i = this.layers.length;
        let l = i - 1;

        this.game.camera.matrixMode = CAMERA_MATRIX_MODE.MODE_TRANSFORM;
        this.game.camera.update(this.game.getTime(),this.game.getDeltaTime());

        while(i--) {
            layers[i-l].render();
        }

        this.tileMap.render();

        renderer.save();
        renderer.resetTransform();
        this.game.camera.matrixMode = CAMERA_MATRIX_MODE.MODE_IDENTITY;
        this.uiLayer.render();
        renderer.restore();

        this.game.camera.matrixMode = CAMERA_MATRIX_MODE.MODE_TRANSFORM;
        this.game.repository.getArray('ParticleSystem').forEach(ps=>{ // todo also while? or foreach
            ps.render();
        });

        if (DEBUG) {
            this.game.renderer.restore();
            if (this.game.renderer.debugTextField)
                this.game.renderer.debugTextField.update(this.game.getTime(),this.game.getDeltaTime());
            this.game.renderer.restore();
        }
        renderer.flipFrameBuffer(this.filters);
    }
}
