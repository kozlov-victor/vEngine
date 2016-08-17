var modules = {};
var initModuleObj = function(moduleObj) {
    var module = {
        exports:{}
    };
    moduleObj.code(module);
    moduleObj.inited = module;
};
require = function(name){
    var moduleObj = modules[name];
    if (!moduleObj.inited) initModuleObj(moduleObj);
    return moduleObj.inited.exports;
};


