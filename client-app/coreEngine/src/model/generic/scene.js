
import BaseModel from '../baseModel'
import LoadingQueue from 'coreEngine/src/engine/loadingQueue'


export default class Scene extends BaseModel {

    type = 'Scene';
    layers = [];
    useBG = false;
    colorBG = {r: 255, g: 255, b: 255};
    _tweenMovies = [];
    _individualBehaviour = null;
    tileMap = {
        spriteSheet: null,
        width: 0,
        height: 0,
        data: []
    };

    constructor(game) {
        super(game);

        // if (!this.tileMap) {
        //     if (this.tileMap.spriteSheetId) {
        //         this.tileMap._spriteSheet = bundle.spriteSheetList.find({id: this.tileMap.spriteSheetId});
        //         if (!this.tileMap._spriteSheet) return;
        //         this.tileMap._tilesInScreenX = ~~(bundle.gameProps.width / this.tileMap._spriteSheet._frameWidth);
        //         this.tileMap._tilesInScreenY = ~~(bundle.gameProps.height / this.tileMap._spriteSheet._frameHeight);
        //     }
        // }
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
        // if (this.tileMap && this.tileMap.spriteSheet) {
        //     dataSet.add(this.tileMap._spriteSheet);
        // }
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
    _render(){
        // let spriteSheet = this.tileMap._spriteSheet;
        // if (!spriteSheet) return;
        // let ctx = renderer.getContext();
        // let tilePosX = ~~(camera.pos.x / this.tileMap._spriteSheet._frameWidth);
        // let tilePosY = ~~(camera.pos.y / this.tileMap._spriteSheet._frameHeight);
        // let w = tilePosX + this.tileMap._tilesInScreenX + 2;
        // let h = tilePosY + this.tileMap._tilesInScreenY + 2;
        // for (let y=tilePosY;y<h;y++) {
        //     for (let x=tilePosX;x<w;x++) {
        //         let index = this.tileMap.data[y] && this.tileMap.data[y][x];
        //         if (index==undefined) continue;
        //         ctx.drawImage(
        //             resourceCache.get(spriteSheet.resourcePath),
        //             spriteSheet.getFramePosX(index),
        //             spriteSheet.getFramePosY(index),
        //             spriteSheet._frameWidth,
        //             spriteSheet._frameHeight,
        //             x*spriteSheet._frameWidth,
        //             y*spriteSheet._frameHeight
        //         );
        //     }
        // }
    }
    getTileAt(x,y){
        if (!this.tileMap._spriteSheet) return null;
        let tilePosX = ~~(x / this.tileMap._spriteSheet._frameWidth);
        let tilePosY = ~~(y / this.tileMap._spriteSheet._frameHeight);
        return this.tileMap.data[tilePosY] && this.tileMap.data[tilePosY][tilePosX];
    }
    printText(x,y,text,font){
        if (!text) return;
        if (!text.substring) text = JSON.stringify(text,null,4);
        this.game.renderer.printText(x,y,text,font);
    }
    log(text) {
        this.printText(0,0,text);
    }
}
