
(function(){

    ve_local.Bundle = function(data){

        this.spriteSheetList = new ve.collections.List();
        this.gameObjectList = new ve.collections.List();
        this.frameAnimationList = new ve.collections.List();
        this.layerList = new ve.collections.List();
        this.sceneList = new ve.collections.List();
        this.layerList = new ve.collections.List();
        this.gameProps = {};

        var self = this;

        var toDataSource = function(ResourceClass,dataList,resourceList){
            dataList.forEach(function(item){
                resourceList.add(new ResourceClass(item));
            });
        };

        var capitalize = function(s){
            return s.substr(0,1).toUpperCase() +
                s.substr(1);
        };

        this.prepare = function(){
            ve_local.RESOURCE_NAMES.forEach(function(itm){
                toDataSource(ve.models[capitalize(itm)],data[itm],self[itm+'List']);
            });
            self.gameProps = data.gameProps;
            data = null;
        };

        var applyBehaviour = function(model){
            var script = ve_local.scripts[model.type][model.name+'.js'];
            if (!script) throw 'can not found script for '+ model.name + ' ' + model.type;
            var BehaviourClass = script();
            model._behaviour = new BehaviourClass();
            model._behaviour.toJsonArr().forEach(function(itm){
                model[itm.key]=itm.value;
            });
            model._behaviour.onCreate.apply(model);
        };

        this.prepareGameObjectScripts = function(){
            self.sceneList.forEach(function(scene){
                applyBehaviour(scene);
                scene._layers.forEach(function(layer){
                    layer._gameObjects.forEach(function(gameObject){
                       applyBehaviour(gameObject);
                    });
                });
            });
        };

    };

})();