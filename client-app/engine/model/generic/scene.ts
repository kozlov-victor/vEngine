
import BaseModel from '../baseModel'
import LoadingQueue from '../../core/misc/loadingQueue'
import TileMap from './tileMap'
import BlackWhiteFilter from "../../core/renderer/webGl/filters/textureFilters/blackWhite";
import Layer from "./layer";
import AbstractFilter from "../../core/renderer/webGl/filters/abstract/abstractFilter";
import Game from "../../core/game";

declare const DEBUG:boolean, IN_EDITOR:boolean;

export default class Scene extends BaseModel {

    type:string = 'Scene';
    layers:Array<Layer> = [];
    useBG:boolean = false;
    colorBG = {r: 255, g: 255, b: 255};
    _tweenMovies = [];
    filters:Array<AbstractFilter> = [];
    _individualBehaviour = null;
    tileMap:TileMap;

    constructor(game:Game) {
        super(game);
        this.tileMap = new TileMap(game);
    }

    revalidate(){
        super.revalidate();
        if (!IN_EDITOR && this.tileMap && this.tileMap.spriteSheet) {
            this.tileMap._tilesInScreenX = ~~(this.game.width / this.tileMap.spriteSheet._frameWidth);
            this.tileMap._tilesInScreenY = ~~(this.game.height / this.tileMap.spriteSheet._frameHeight);
        }
        //this.filters.push(new BlackWhiteFilter(this.game.renderer.gl));
    }

    addTweenMovie(tm){
        this._tweenMovies.push(tm);
    }
    getAllGameObjects(){
        let res = [];
        this.layers.forEach(l=>{
            res = res.concat(res,l.gameObjects);
        });
        return res;
    }
    getAllSpriteSheets() {
        let dataSet = {};
        this.layers.forEach(function(l){
            l.getAllSpriteSheets().forEach(s=>{
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
        resources.forEach(res=>{
            q.addTask(()=>{
                this.game.renderer.loadTextureInfo(
                    res.resourcePath,
                    ()=>q.resolveTask(res.id)
                );
            },res.id);
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

    update(currTime,deltaTime){

        if (DEBUG) {
            if (this.game.renderer.debugTextField) this.game.renderer.debugTextField.setText('');
        }

        let renderer = this.game.renderer;
        renderer.beginFrameBuffer();
        if (this.useBG) renderer.clearColor(this.colorBG);
        else renderer.clear();

        let layers = this.layers;
        let i = this.layers.length;
        let l = i -1;

        this.game.camera.update(currTime,deltaTime);

        if (this._individualBehaviour) this._individualBehaviour.onUpdate();
        while(i--){
            layers[i-l].update(currTime,deltaTime);
        }
        this.game.repository.getArray('ParticleSystem').forEach(ps=>{
            ps.update(currTime,deltaTime);
        });
        // this._tweenMovies.forEach(function(tweenMovie){
        //     if (tweenMovie.completed) {
        //         this._tweenMovies.remove(tweenMovie);
        //     }
        //     tweenMovie._update(currTime);
        // });
        // this.__updateIndividualBehaviour__(currTime);
        this.tileMap.update();
        if (DEBUG) {
            this.game.renderer.restore();
            if (this.game.renderer.debugTextField) this.game.renderer.debugTextField.update();
            this.game.renderer.restore();
        }
        renderer.flipFrameBuffer(this.filters);
    }
    // fadeIn(time,easeFnName){
    //     return this.tween(this,{to:{alpha:1}},time,easeFnName);
    // }
    // fadeOut(time,easeFnName){
    //     return this.tween(this,{to:{alpha:0}},time,easeFnName);
    // }
    // tween(obj,fromToVal,tweenTime,easeFnName){
    //     // let movie = new tweenMovieModule.TweenMovie();
    //     // let tween = new tweenModule.Tween(obj,fromToVal,tweenTime,easeFnName);
    //     // movie.tween(0,tween);
    //     // movie.play();
    // }
}