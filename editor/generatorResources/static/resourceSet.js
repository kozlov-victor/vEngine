
var ResourceSet = function(data){

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
            toDataSource(Models[capitalize(itm)],resourceSet[itm],DataSource[itm+'List']);
        });
    })();

};