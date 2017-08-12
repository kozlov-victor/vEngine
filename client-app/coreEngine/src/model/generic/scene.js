
import BaseModel from '../baseModel'

export default class Scene extends BaseModel {

    // __onResourcesReady(){
    //     let this = this;
    //     this._allGameObjects = new collections.List();
    //     this.layers.forEach(function(l){
    //         this._allGameObjects.addAll(l.gameObjects);
    //     });
    // }
    constructor() {
        super();

        this.alpha = 1;
        this.layers = [];
        this._allGameObjects = [];
        this.useBG = false;
        this.colorBG = {r: 255, g: 255, b: 255};
        this.onShow = function () {
        };
        this._tweenMovies = [];
        this.tileMap = {
            _spriteSheet: null,
            spriteSheetId: null,
            width: 0,
            height: 0,
            data: []
        };

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
    getAllGameObjects(){
        return this._allGameObjects;
    }
    update(currTime,deltaTime){
        this._render();
        let layers = this.layers.rs;
        let i = this.layers.size();
        let l = i -1;
        while(i--){
            layers[i-l].update(currTime,deltaTime);
        }
        this._tweenMovies.forEach(function(tweenMovie){
            if (tweenMovie.completed) {
                this._tweenMovies.remove(tweenMovie);
            }
            tweenMovie._update(currTime);
        });
        this.__updateIndividualBehaviour__(currTime);
    }
    fadeIn(time,easeFnName){
        return this.tween(this,{to:{alpha:1}},time,easeFnName);
    }
    fadeOut(time,easeFnName){
        return this.tween(this,{to:{alpha:0}},time,easeFnName);
    }
    tween(obj,fromToVal,tweenTime,easeFnName){
        let movie = new tweenMovieModule.TweenMovie();
        let tween = new tweenModule.Tween(obj,fromToVal,tweenTime,easeFnName);
        movie.tween(0,tween);
        movie.play();
    }
    _render(){
        let spriteSheet = this.tileMap._spriteSheet;
        if (!spriteSheet) return;
        let ctx = renderer.getContext();
        let tilePosX = ~~(camera.pos.x / this.tileMap._spriteSheet._frameWidth);
        let tilePosY = ~~(camera.pos.y / this.tileMap._spriteSheet._frameHeight);
        let w = tilePosX + this.tileMap._tilesInScreenX + 2;
        let h = tilePosY + this.tileMap._tilesInScreenY + 2;
        for (let y=tilePosY;y<h;y++) {
            for (let x=tilePosX;x<w;x++) {
                let index = this.tileMap.data[y] && this.tileMap.data[y][x];
                if (index==undefined) continue;
                ctx.drawImage(
                    resourceCache.get(spriteSheet.resourcePath),
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
    getTileAt(x,y){
        if (!this.tileMap._spriteSheet) return null;
        let tilePosX = ~~(x / this.tileMap._spriteSheet._frameWidth);
        let tilePosY = ~~(y / this.tileMap._spriteSheet._frameHeight);
        return this.tileMap.data[tilePosY] && this.tileMap.data[tilePosY][tilePosX];
    }
    printText(x,y,text,font){
        if (!text) return;
        if (!text.substring) text = JSON.stringify(text,null,4);
        renderer.printText(x,y,text,font);
    }
    log(text) {
        this.printText(0,0,text);
    }
}
