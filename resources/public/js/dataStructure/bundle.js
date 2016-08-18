
var collections = require('collections');
var consts = require('consts/consts');
var models = require('models');
var kernel = require('kernel/kernel');
var objectScripts = require('kernel/objectScripts').objectScripts;

var data;
//<code>data = {
//<code><%var l = Object.keys(commonResources).length;%>
//<code><%Object.keys(commonResources).forEach(function(key,i){%>
//<code>    <%-key%>:<%-commonResources[key]%><%if (i<l){%><%=','%><%}%>
//<code><%})%>
//<code>};

var self = module.exports;
self.spriteSheetList = new collections.List();
self.gameObjectList = new collections.List();
self.frameAnimationList = new collections.List();
self.layerList = new collections.List();
self.sceneList = new collections.List();
self.layerList = new collections.List();
self.fontList = new collections.List();
self.soundList = new collections.List();
self.particleSystemList = new collections.List();
self.gameProps = {};


var toDataSource = function(ResourceClass,dataList,resourceList){
    resourceList.clear();
    dataList.forEach(function(item){
        resourceList.add(new ResourceClass(item));
    });
};

this.prepare = function(){
    consts.RESOURCE_NAMES.forEach(function(itm){
        toDataSource(models[ve.utils.capitalize(itm)],data[itm],self[itm+'List']);
    });
    self.gameProps = data.gameProps;
    data = null;
};

var applyIndividualBehaviour = function(model){
    var behaviourFn = objectScripts.scripts[model.type] && kernel.scripts[model.type][model.name+'.js'];
    if (behaviourFn) {
        var exports = {};
        behaviourFn(exports,model);
        exports.onCreate();
        model.__updateIndividualBehaviour__ = function(deltaTime){
            exports.onUpdate(deltaTime);
        }
    } else {
        model.__updateIndividualBehaviour__ = noop;
    }

};

var applyCommonBehaviour = function(model){
    var cbList = [];
    if (!model._commonBehaviour) {
        model.__updateCommonBehaviour__ = noop;
        return;
    }
    model._commonBehaviour.forEach(function(cb){
        var instance = new ve.commonBehaviour[cb.name](); //todo
        instance.initialize(model,cb.parameters);
        instance.onCreate();
        cbList.push(instance);
    });
    model.__updateCommonBehaviour__ = function(){
        cbList.forEach(function(cb){
            cb.onUpdate();
        });
    }
};

var prepareGameObjectScripts = function(){
    self.sceneList.forEach(function(scene){
        scene.__onResourcesReady();
        applyBehaviour(scene);
        scene._layers.forEach(function(layer){
            layer._gameObjects.forEach(function(gameObject){
                applyBehaviour(gameObject);
            });
        });
    });
};

var applyBehaviour = function(model){
    applyCommonBehaviour(model);
    applyIndividualBehaviour(model);
};

self.prepare();
prepareGameObjectScripts();