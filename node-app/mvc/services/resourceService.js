
const fs = require.main.require('./node-app/base/fs');


let dataSourceHelper = require.main.require('./node-app/mvc/services/dataSourceHelper');


module.exports.getCommonBehaviourAttrs = function(projectName){
    if (!projectName) throw 'project name not specified';
    let attrs = [];
    fs.readDirSync('client-app/coreEngine/src/commonBehaviour','utf-8').forEach(function(itm,index){
        let attr = {};
        attr.name = itm.name.replace('.js','');
        let module = {};
        module.exports = {};
        let exports = module.exports;
        let jsdoc = itm.content.split('\n').join('').match(/\/\*\*(.*)\*\//gi)[0].split('*').join('').split('/').join('');
        let fn = new Function(
            'module,exports',
            'var parameters = {};var require = function(){return {instance:function(){}}};'+jsdoc
        );
        fn(module,exports);
        attr.description = exports.description;
        attr.parameters = exports.parameters;
        attr.type = 'CommonBehaviour';
        attr.id = attr.name;
        attrs.push(attr);
    });
    return attrs;
};