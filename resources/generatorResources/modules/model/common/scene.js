
var Renderable = require('renderable');
var collections = require('collections');
var bundle = require('bundle');
var renderer = require('renderer');
var resourceCache = require('resourceCache');
var camera = require('camera');

var tweenModule = require('tween');
var tweenMovieModule = require('tweenMovie');

var Scene = Renderable.extend({
    type:'scene',
    layerProps:[],
    alpha:1,
    _layers:null,
    tileMap:null,
    _allGameObjects:null,
    useBG:false,
    colorBG:[255,255,255],
    onShow: function(){},
    _tweenMovies:null,
    __onResourcesReady: function(){
        var self = this;
        self._allGameObjects = new collections.List();
        self._layers.forEach(function(l){
            self._allGameObjects.addAll(l._gameObjects);
        });
    },
    construct: function(){
        var self = this;
        self._layers = new collections.List();
        this.layerProps.forEach(function(prop){
            var l = bundle.layerList.find({id: prop.protoId});
            var lCloned = l.clone(exports.Layer);
            lCloned.fromJSON(prop);
            lCloned._scene = self;
            self._layers.add(lCloned);
        });
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
            self.tileMap._tilesInScreenX = ~~(bundle.gameProps.width/self.tileMap._spriteSheet._frameWidth);
            self.tileMap._tilesInScreenY = ~~(bundle.gameProps.height/self.tileMap._spriteSheet._frameHeight);
        }
    },
    addTweenMovie: function(tm){
        this._tweenMovies.push(tm);
    },
    getAllSpriteSheets:function() {
        var dataSet = new collections.Set();
        this._layers.forEach(function(l){
            dataSet.combine(l.getAllSpriteSheets());
        });
        if (this.tileMap.spriteSheetId) {
            dataSet.add(this.tileMap._spriteSheet);
        }
        return dataSet;
    },
    getAllGameObjects:function(){
        return this._allGameObjects;
    },
    update: function(currTime,deltaTime){
        var self = this;
        self._render();
        var layers = self._layers.rs;
        var i = self._layers.size();
        var l = i -1;
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
        var movie = new tweenMovieModule.TweenMovie();
        var tween = new tweenModule.Tween(obj,fromToVal,tweenTime,easeFnName);
        movie.tween(0,tween);
        movie.play();
    },
    _render: function(){
        var self = this;
        var spriteSheet = self.tileMap._spriteSheet;
        if (!spriteSheet) return;
        var ctx = renderer.getContext();
        var tilePosX = ~~(camera.pos.x / self.tileMap._spriteSheet._frameWidth);
        var tilePosY = ~~(camera.pos.y / self.tileMap._spriteSheet._frameHeight);
        var w = tilePosX + self.tileMap._tilesInScreenX + 2;
        var h = tilePosY + self.tileMap._tilesInScreenY + 2;
        for (var y=tilePosY;y<h;y++) {
            for (var x=tilePosX;x<w;x++) {
                var index = self.tileMap.data[y] && self.tileMap.data[y][x];
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
        var self = this;
        if (!self.tileMap._spriteSheet) return null;
        var tilePosX = ~~(x / self.tileMap._spriteSheet._frameWidth);
        var tilePosY = ~~(y / self.tileMap._spriteSheet._frameHeight);
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