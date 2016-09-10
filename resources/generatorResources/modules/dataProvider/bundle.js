
var collections = require('collections');
var consts = require('consts');
var utils = require('utils');
var behaviour = require('behaviour',{ignoreFail:true});

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


    this.prepare = function(_data){
        var models = require('models');
        data = data || _data;
        consts.RESOURCE_NAMES.forEach(function(itm){
            toDataSource(models[utils.capitalize(itm)],data[itm],self[itm+'List']);
        });
        self.gameProps = data.gameProps;
        data = null;
    };

    var applyIndividualBehaviour = function(model){
        var behaviourFn = behaviour && behaviour.scripts && behaviour.scripts[model.type] && behaviour.scripts[model.type][model.name+'.js'];
        if (behaviourFn) {
            var exports = {};
            behaviourFn(exports,model);
            exports.onCreate();
            model.__updateIndividualBehaviour__ = function(deltaTime){
                exports.onUpdate(deltaTime);
            }
        } else {
            model.__updateIndividualBehaviour__ = consts.noop;
        }

    };

    var applyCommonBehaviour = function(model){

        if (behaviour.fake) return; // this is editor mode
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
            exports.onCreate();
        });
        model.__updateCommonBehaviour__ = function(){
            exportsList.forEach(function(item){
                item.onUpdate();
            });
        }
    };

    this.applyBehaviourAll = function(){
        self.sceneList.forEach(function(scene){
            scene.__onResourcesReady();
            self.applyBehaviour(scene);
            scene._layers.forEach(function(layer){
                layer._gameObjects.forEach(function(gameObject){
                    self.applyBehaviour(gameObject);
                });
            });
        });
    };

    this.applyBehaviour = function(model){
        applyCommonBehaviour(model);
        applyIndividualBehaviour(model);
    };

    //<code>this.embeddedResources = {};
    //<code>this.embeddedResources.data = <%- JSON.stringify(embeddedResources)%>;
    //<code>this.embeddedResources.isEmbedded = <%- Object.keys(embeddedResources).length>0 %>;

};

var data;

//<code>data = {
//<code><%var l = Object.keys(commonResources).length;%>
//<code><%Object.keys(commonResources).forEach(function(key,i){%>
//<code>    <%-key%>:<%-commonResources[key]%><%if (i<l-1){%><%=','%><%}%>
//<code><%})%>
//<code>};


var instance = null;

module.exports.instance = function(){
    if (instance==null) {
        instance = new Bundle(data);
        data = null;
    }
    return instance;
};