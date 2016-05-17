
var ResourceSet = function(data){

    this.spriteSheetList = new Collections.Collection();
    this.gameObjectList = new Collections.Collection();
    this.frameAnimationList = new Collections.Collection();
    this.sceneList = new Collections.Collection();
    this.gameProps = {};

    var toDataSource = function(ResourceClass,dataList,resourceList){
        dataList.forEach(function(item){
            resourceList.add(new ResourceClass(item));
        });
    };

    var capitalize = function(s){
        return s.substr(0,1).toUpperCase() +
            s.substr(1);
    };

    (function(){
        ['audio','spriteSheet','frameAnimation','gameObject','scene'].forEach(function(itm){
            toDataSource(ve.Models[capitalize(itm)],data[itm],this[itm+'List']);
        });
    })();

};