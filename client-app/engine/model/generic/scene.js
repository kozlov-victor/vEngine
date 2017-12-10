/*global IN_EDITOR:true*/
import BaseModel from '../baseModel'
import LoadingQueue from '../../core/loadingQueue'
import TileMap from './tileMap'

export default class Scene extends BaseModel {

    type = 'Scene';
    layers = [];
    useBG = false;
    colorBG = {r: 255, g: 255, b: 255};
    _tweenMovies = [];
    _individualBehaviour = null;

    constructor(game) {
        super(game);
        this.tileMap = null;
        if (IN_EDITOR) this.tileMap = new TileMap(game);

    }

    revalidate(){
        super.revalidate();
        if (!IN_EDITOR && this.tileMap) {
            this.tileMap._tilesInScreenX = ~~(this.game.width / this.tileMap.spriteSheet._frameWidth);
            this.tileMap._tilesInScreenY = ~~(this.game.height / this.tileMap.spriteSheet._frameHeight);
        }
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
                this.game._renderer.loadTextureInfo(
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
        this.game._renderer.beginFrameBuffer();
        if (this.useBG) this.game._renderer.clearColor(this.colorBG);
        else this.game._renderer.clear();

        let layers = this.layers;
        let i = this.layers.length;
        let l = i -1;
        this.game.camera.update(currTime); // todo move to game update fn
        this.game._renderer.translate(-this.game.camera.pos.x,-this.game.camera.pos.y);
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
        this._updateTileMap();
        this.game._renderer.flipFrameBuffer();
    }
    fadeIn(time,easeFnName){
        return this.tween(this,{to:{alpha:1}},time,easeFnName);
    }
    fadeOut(time,easeFnName){
        return this.tween(this,{to:{alpha:0}},time,easeFnName);
    }
    tween(obj,fromToVal,tweenTime,easeFnName){
        // let movie = new tweenMovieModule.TweenMovie();
        // let tween = new tweenModule.Tween(obj,fromToVal,tweenTime,easeFnName);
        // movie.tween(0,tween);
        // movie.play();
    }
    _updateTileMap(){
        let spriteSheet = this.tileMap.spriteSheet;
        if (!spriteSheet) return;
        let ctx = this.game._renderer;
        let tilePosX = ~~(this.game.camera.pos.x / this.tileMap.spriteSheet._frameWidth);
        let tilePosY = ~~(this.game.camera.pos.y / this.tileMap.spriteSheet._frameHeight);
        let w = tilePosX + this.tileMap._tilesInScreenX + 2;
        let h = tilePosY + this.tileMap._tilesInScreenY + 2;
        for (let y=tilePosY;y<h;y++) {
            for (let x=tilePosX;x<w;x++) {
                let index = this.tileMap.data[y] && this.tileMap.data[y][x];
                if (index==null) continue; // todo
                ctx.drawImage(
                    spriteSheet.resourcePath,
                    spriteSheet.getFramePosX(index),
                    spriteSheet.getFramePosY(index),
                    spriteSheet._frameWidth,
                    spriteSheet._frameHeight,
                    x*spriteSheet._frameWidth,
                    y*spriteSheet._frameHeight
                );
            }
        }
    }

    printText(x,y,text,font){ // todo
        if (!text) return;
        if (!text.substring) text = JSON.stringify(text,null,4);
        this.game.renderer.printText(x,y,text,font);
    }
    log(text) {
        this.printText(0,0,text);
    }
}
