let modules = {}, require = function(name){
    let moduleObj = modules[name];

    //<code>{{#if opts.minify }}
    if (!moduleObj) {
        console.trace('can not found module with name ' + (name || '(name not specified)'));
        throw 'can not found module with name ' + (name || '(name not specified)');
    }
    //<code>{{/if}}
    if (!moduleObj.inited) initModuleObj(moduleObj);
    return moduleObj.inited.exports;
    function initModuleObj(moduleObj) {
        let module = {
            exports:{}
        };
        moduleObj.inited = module;
        moduleObj.code(module);
    }
};


//<code>{{#if opts.minify }}
//<code>{{var "requireName" opts.require}}
//<code>{{#unless requireName}}
//<code>{{var "requireName"  "require"}}
//<code>{{/unless}}
//<code>window.{{requireName}} = require;
//<code>{{/if}}
