var modules = {}, require = function(name){
    var moduleObj = modules[name];
    if (!moduleObj._require) {
        var module = {
            exports:{}
        };
        moduleObj.require(module);
        moduleObj._require = module;
    }
    return moduleObj._require.exports;
};