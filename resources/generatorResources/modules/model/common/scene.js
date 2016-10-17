
var BaseModel = require('baseModel').BaseModel;
var collections = require('collections');
var bundle = require('bundle').instance();

exports.Scene = BaseModel.extend({
    type:'scene',
    layerProps:[],
    _layers:null,
    _allGameObjects:null,
    useBG:false,
    colorBG:[255,255,255],
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
    },
    getAllSpriteSheets:function() {
        var dataSet = new collections.Set();
        this._layers.forEach(function(l){
            dataSet.combine(l.getAllSpriteSheets());
        });
        return dataSet;
    },
    find: function(name){
        return this._allGameObjects.find({name:name});
    },
    getAllGameObjects:function(){
        return this._allGameObjects;
    },
    update: function(currTime,deltaTime){
        var self = this;
        self._layers.forEach(function(layer){
            layer.update(currTime,deltaTime);
        });
        self._tweenMovies.forEach(function(tweenMovie){
            if (tweenMovie.completed) {
                self._tweenMovies.splice(self._tweenMovies.indexOf(tweenMovie),1);
            }
            tweenMovie.update(currTime);
        });
        self.__updateIndividualBehaviour__(deltaTime);
    }
});