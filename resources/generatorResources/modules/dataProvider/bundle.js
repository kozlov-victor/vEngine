
var collections = require('collections');
var consts = require('consts');
var utils = require('utils');
var behaviour = require('behaviour');

exports.spriteSheetList = new collections.List();
exports.gameObjectList = new collections.List();
exports.frameAnimationList = new collections.List();
exports.layerList = new collections.List();
exports.sceneList = new collections.List();
exports.layerList = new collections.List();
exports.fontList = new collections.List();
exports.soundList = new collections.List();
exports.particleSystemList = new collections.List();

exports.gameProps = {};


var toDataSource = function(ResourceClass,dataList,resourceList){
    resourceList.clear();
    dataList.forEach(function(item){
        resourceList.add(new ResourceClass(item));
    });
};


exports.prepare = function(data){
    if (!data) throw 'can not prepare bundle, no data provided';
    exports.gameProps = data.gameProps;
    consts.RESOURCE_NAMES.forEach(function(itm){
        toDataSource(
            require(itm),
            data[itm],
            exports[itm+'List']);
    });
};

var applyIndividualBehaviour = function(model){
    var behaviourFn = behaviour && behaviour.scripts && behaviour.scripts[model.type] && behaviour.scripts[model.type][model.name+'.js'];
    if (behaviourFn) {
        var exports = model;
        behaviourFn(exports);
        model.__updateIndividualBehaviour__ = function(time){
            exports.onUpdate(time);
        }
    } else {
        model.__updateIndividualBehaviour__ = consts.noop;
    }

};

var applyCommonBehaviour = function(model){

    var exportsList = [];
    if (!model._commonBehaviour || !model._commonBehaviour.size()) {
        model.__updateCommonBehaviour__ = consts.noop;
        return;
    }
    model._commonBehaviour.forEach(function(cb){
        var exports = model;
        behaviour.commonBehaviour[cb.name](exports,cb.parameters);
        exportsList.push(exports);
    });
    model.__updateCommonBehaviour__ = function(){
        exportsList.forEach(function(item){
            item.onUpdate();
        });
    }
};

exports.applyBehaviourForScene = function(scene){
    if (scene.__applied) return;
    scene.__onResourcesReady();
    exports.applyBehaviour(scene);
    scene._layers.forEach(function(layer){
        layer._gameObjects.forEach(function(gameObject){
            exports.applyBehaviour(gameObject);
        });
    });
    scene.__applied = true;
};

exports.applyBehaviour = function(model){
    applyCommonBehaviour(model);
    applyIndividualBehaviour(model);
};

//<code>exports.embeddedResources = {};
//<code>exports.embeddedResources.data = <%- JSON.stringify(embeddedResources)%>;
//<code>exports.embeddedResources.isEmbedded = <%- Object.keys(embeddedResources).length>0 %>;


//<code>exports.shaders = <%- JSON.stringify(shaders)%>;

//<code>exports.embeddedResources.isEmbedded = <%- Object.keys(embeddedResources).length>0 %>;