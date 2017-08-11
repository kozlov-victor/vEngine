
const Renderable = require('renderable');
const collections = require('collections');
const bundle = require('bundle');
const renderer = require('renderer');
const resourceCache = require('resourceCache');
const camera = require('camera');

const tweenModule = require('tween');
const tweenMovieModule = require('tweenMovie');

const Scene = Renderable.extend({
    type:'scene',
    alpha:1,
    layers:[{type:'layer'}],
    tileMap:null,
    _allGameObjects:null,
    useBG:false,
    colorBG:{r:255,g:255,b:255},
    onShow: function(){},
    _tweenMovies:null,
    __onResourcesReady: function(){
        let self = this;
        self._allGameObjects = new collections.List();
        self.layers.forEach(function(l){
            self._allGameObjects.addAll(l.gameObjects);
        });
    },
    construct: function(){
        let self = this;
        self._super();
        if (self.layers.splice) self.layers = new collections.List(); // todo

        self._tweenMovies = [];
        if (!self.tileMap) self.tileMap = {
            _spriteSheet:null,
            spriteSheetId:null,
            width:0,
            height:0,
            data:[]
        };
        if (self.tileMap.spriteSheetId) {
            self.tileMap._spriteSheet = bundle.spriteSheetList.find({id:self.tileMap.spriteSheetId});
            if (!self.tileMap._spriteSheet) return;
            self.tileMap._tilesInScreenX = ~~(bundle.gameProps.width/self.tileMap._spriteSheet._frameWidth);
            self.tileMap._tilesInScreenY = ~~(bundle.gameProps.height/self.tileMap._spriteSheet._frameHeight);
        }
    },
    addTweenMovie: function(tm){
        this._tweenMovies.push(tm);
    },
    getAllSpriteSheets:function() {
        let dataSet = new collections.Set();
        this.layers.forEach(function(l){
            dataSet.combine(l.getAllSpriteSheets());
        });
        if (this.tileMap && this.tileMap.spriteSheet) {
            dataSet.add(this.tileMap._spriteSheet);
        }
        return dataSet;
    },
    getAllGameObjects:function(){
        return this._allGameObjects;
    },
    update: function(currTime,deltaTime){
        let self = this;
        self._render();
        let layers = self.layers.rs;
        let i = self.layers.size();
        let l = i -1;
        while(i--){
            layers[i-l].update(currTime,deltaTime);
        }
        self._tweenMovies.forEach(function(tweenMovie){
            if (tweenMovie.completed) {
                self._tweenMovies.remove(tweenMovie);
            }
            tweenMovie._update(currTime);
        });
        self.__updateIndividualBehaviour__(currTime);
    },
    fadeIn:function(time,easeFnName){
        return this.tween(this,{to:{alpha:1}},time,easeFnName);
    },
    fadeOut:function(time,easeFnName){
        return this.tween(this,{to:{alpha:0}},time,easeFnName);
    },
    tween: function(obj,fromToVal,tweenTime,easeFnName){
        let movie = new tweenMovieModule.TweenMovie();
        let tween = new tweenModule.Tween(obj,fromToVal,tweenTime,easeFnName);
        movie.tween(0,tween);
        movie.play();
    },
    _render: function(){
        let self = this;
        let spriteSheet = self.tileMap._spriteSheet;
        if (!spriteSheet) return;
        let ctx = renderer.getContext();
        let tilePosX = ~~(camera.pos.x / self.tileMap._spriteSheet._frameWidth);
        let tilePosY = ~~(camera.pos.y / self.tileMap._spriteSheet._frameHeight);
        let w = tilePosX + self.tileMap._tilesInScreenX + 2;
        let h = tilePosY + self.tileMap._tilesInScreenY + 2;
        for (let y=tilePosY;y<h;y++) {
            for (let x=tilePosX;x<w;x++) {
                let index = self.tileMap.data[y] && self.tileMap.data[y][x];
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
    },
    getTileAt: function(x,y){
        let self = this;
        if (!self.tileMap._spriteSheet) return null;
        let tilePosX = ~~(x / self.tileMap._spriteSheet._frameWidth);
        let tilePosY = ~~(y / self.tileMap._spriteSheet._frameHeight);
        return self.tileMap.data[tilePosY] && self.tileMap.data[tilePosY][tilePosX];
    },
    printText: function(x,y,text,font){
        if (!text) return;
        if (!text.substring) text = JSON.stringify(text,null,4);
        renderer.printText(x,y,text,font);
    },
    log: function(text) {
        this.printText(0,0,text);
    }
});

module.exports = Scene;