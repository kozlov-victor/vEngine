
var capitalize = function(s){
    return s.substr(0,1).toUpperCase() +
        s.substr(1);
};

var toDataSource = function(ResourceClass,dataList,resourceList){
    dataList.forEach(function(item){
        resourceList.add(new ResourceClass(item));
    });
};

Models.DataSource = DataSource;

['audio','spriteSheet','gameObject','frameAnimation','scene'].forEach(function(itm){
    toDataSource(Models[capitalize(itm)],resourceSet[itm],DataSource[itm+'List']);
});

resourceSet = null;

