var modules = {}, require = function(name,opts){
    opts = opts || {};
    console.trace('require: ',name);
    var moduleObj = modules[name];
    if (!moduleObj && !opts.ignoreFail) {
        console.trace('can not found module with name ' + (name || '(name not specified)'));
        throw 'can not found module with name ' + (name || '(name not specified)');
    } else if (opts.ignoreFail) {
        return {
            instance: function(){
                return {fake:true}
            }
        }
    }
    if (!moduleObj.inited) initModuleObj(moduleObj);
    return moduleObj.inited.exports;
    function initModuleObj(moduleObj) {
        var module = {
            exports:{}
        };
        moduleObj.code(module,module.exports);
        moduleObj.inited = module;
    }
};

//modules['1'] = {code:function(){
//    var m2 = require('2');
//    console.log(1);
//}};
//
//
//modules['2'] = {code:function(){
//    var m1 = require('1');
//    console.log(2);
//}};
//
//require('1');
