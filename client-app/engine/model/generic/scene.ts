
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


export default class Scene extends BaseModel {

    type:string = 'Scene';
    layers:Array<Layer> = [];
    useBG:boolean = false;
    colorBG = {r: 255, g: 255, b: 255};
    tileMap:TileMap;
    pointLight: PointLight;
    ambientLight:AmbientLight;

    private filters:Array<AbstractFilter> = [];
    _tweenMovies = [];
    _individualBehaviour = null;

    constructor(game:Game) {
        super(game);
        this.tileMap = new TileMap(game);
        this.pointLight = new PointLight(game);
        this.pointLight.pos.setXY(50,50);
        this.pointLight.radius = 30;

        this.ambientLight = new AmbientLight(game);

    }

    revalidate(){
        super.revalidate();
        if (!IN_EDITOR && this.tileMap && this.tileMap.spriteSheet) {
            this.tileMap._tilesInScreenX = ~~(this.game.width / this.tileMap.spriteSheet._frameWidth);
            this.tileMap._tilesInScreenY = ~~(this.game.height / this.tileMap.spriteSheet._frameHeight);
        }
        //this.filters.push(new SimpleBlurFilter(this.game.renderer['gl']));
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

    update(currTime:number,deltaTime:number){

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
        this.game.repository.getArray('ParticleSystem').forEach(ps=>{ // todo also while? or foreach
            ps.update(currTime,deltaTime);
        });
        this._tweens.forEach((t:Tween,index:number)=>{
            t.update(currTime);
            if (t.isCompleted()) this._tweens.splice(index,1);
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
