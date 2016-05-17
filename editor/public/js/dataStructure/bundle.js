
(function(){

    ve_local.Bundle = function(data){

        this.spriteSheetList = new ve.collections.List();
        this.gameObjectList = new ve.collections.List();
        this.frameAnimationList = new ve.collections.List();
        this.sceneList = new ve.collections.List();
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
            ['audio','spriteSheet','frameAnimation','gameObject','scene'].forEach(function(itm){
                toDataSource(ve.models[capitalize(itm)],data[itm],self[itm+'List']);
            });
            self.gameProps = data.gameProps;
            data = null;
        }

    };

})();