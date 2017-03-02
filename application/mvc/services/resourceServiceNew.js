const RESOURCE_NAMES = 'sound,spriteSheet,frameAnimation,font,commonBehaviour,gameObject,layer,scene,particleSystem'
    .split(',');
module.exports.RESOURCE_NAMES = RESOURCE_NAMES;

const fs = require.main.require('./application/base/fs');
let collectionHelper = require.main.require('./application/mvc/services/collectionHelper');

module.exports.getAll = function(type,projectName){
    if (!projectName) throw 'project name not specified';
    return JSON.parse(fs.readFileSync(`workspace/${projectName}/resources/${type}/map.json`));
};

module.exports.getGameProps = function(projectName){
    if (!projectName) throw 'project name not specified';
    return JSON.parse(fs.readFileSync(`workspace/${projectName}/gameProps.json`));
};

module.exports.getCommonBehaviourAttrs = function(projectName){
    if (!projectName) throw 'project name not specified';
    let attrs = [];
    fs.readDirSync('resources/generatorResources/commonBehaviour','utf-8').forEach(function(itm){
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
        attr.id = collectionHelper.uuid();
        attrs.push(attr);
    });
    return attrs;
};