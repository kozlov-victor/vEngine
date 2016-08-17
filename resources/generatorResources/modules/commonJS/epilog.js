Object.keys(modules).forEach(function(name){
    var moduleObj = modules[name];
    if (moduleObj.inited) return;
    initModuleObj(moduleObj);
});