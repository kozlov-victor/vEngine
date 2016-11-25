
var collections = require('collections');
var consts = require('consts');
var utils = require('utils');
var behaviour = require('behaviour');

var Bundle = function(data){

    this.spriteSheetList = new collections.List();
    this.gameObjectList = new collections.List();
    this.frameAnimationList = new collections.List();
    this.layerList = new collections.List();
    this.sceneList = new collections.List();
    this.layerList = new collections.List();
    this.fontList = new collections.List();
    this.soundList = new collections.List();
    this.particleSystemList = new collections.List();
    this.gameProps = {};

    var self = this;

    var toDataSource = function(ResourceClass,dataList,resourceList){
        resourceList.clear();
        dataList.forEach(function(item){
            resourceList.add(new ResourceClass(item));
        });
    };


    this.prepare = function(data){
        if (!data) throw 'can not prepare bundle, no data provided';
        self.gameProps = data.gameProps;
        consts.RESOURCE_NAMES.forEach(function(itm){
            toDataSource(
                require(itm)[utils.capitalize(itm)],
                data[itm],
                self[itm+'List']);
        });
    };

    var applyIndividualBehaviour = function(model){
        var behaviourFn = behaviour && behaviour.scripts && behaviour.scripts[model.type] && behaviour.scripts[model.type][model.name+'.js'];
        if (behaviourFn) {
            var exports = {};
            behaviourFn(exports,model);
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
            var module = {};
            module.exports = {};
            var exports = module.exports;
            behaviour.commonBehaviour[cb.name](module,exports,model,cb.parameters);
            exportsList.push(exports);
        });
        model.__updateCommonBehaviour__ = function(){
            exportsList.forEach(function(item){
                item.onUpdate();
            });
        }
    };

    this.applyBehaviourForScene = function(scene){
        if (scene.__applied) return;
        scene.__onResourcesReady();
        self.applyBehaviour(scene);
        scene._layers.forEach(function(layer){
            layer._gameObjects.forEach(function(gameObject){
                self.applyBehaviour(gameObject);
            });
        });
        scene.__applied = true;
    };

    this.applyBehaviour = function(model){
        applyCommonBehaviour(model);
        applyIndividualBehaviour(model);
    };

    //<code>this.embeddedResources = {};
    //<code>this.embeddedResources.data = <%- JSON.stringify(embeddedResources)%>;
    //<code>this.embeddedResources.isEmbedded = <%- Object.keys(embeddedResources).length>0 %>;


    //<code>this.shaders = <%- JSON.stringify(shaders)%>;

    //<code>this.embeddedResources.isEmbedded = <%- Object.keys(embeddedResources).length>0 %>;

};


var instance = null;

module.exports.instance = function(){
    if (instance==null) {
        instance = new Bundle();
    }
    return instance;
};