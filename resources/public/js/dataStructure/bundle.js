
(function(){

    ve_local.Bundle = function(data){

        this.spriteSheetList = new ve.collections.List();
        this.gameObjectList = new ve.collections.List();
        this.frameAnimationList = new ve.collections.List();
        this.layerList = new ve.collections.List();
        this.sceneList = new ve.collections.List();
        this.layerList = new ve.collections.List();
        this.fontList = new ve.collections.List();
        this.soundList = new ve.collections.List();
        this.particleSystemList = new ve.collections.List();
        this.gameProps = {};

        var self = this;

        var toDataSource = function(ResourceClass,dataList,resourceList){
            dataList.forEach(function(item){
                resourceList.add(new ResourceClass(item));
            });
        };


        this.prepare = function(){
            ve_local.RESOURCE_NAMES.forEach(function(itm){
                toDataSource(ve.models[ve.utils.capitalize(itm)],data[itm],self[itm+'List']);
            });
            self.gameProps = data.gameProps;
            data = null;
        };

        var applyIndividualBehaviour = function(model){
            var behaviourFn = ve_local.scripts[model.type] && ve_local.scripts[model.type][model.name+'.js'];
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
                var instance = new ve.commonBehaviour[cb.name]();
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
        
        this.prepareGameObjectScripts = function(){
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
        }

    };

})();