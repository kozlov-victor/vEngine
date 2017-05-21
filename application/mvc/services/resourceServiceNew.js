
const fs = require.main.require('./application/base/fs');

const RESOURCE_NAMES = 'sound,spriteSheet,frameAnimation,font,commonBehaviour,gameObject,layer,scene,particleSystem'
    .split(',');
module.exports.RESOURCE_NAMES = RESOURCE_NAMES;

module.exports.DEFAULT_CODE_SCRIPT = fs.readFileSync('resources/generatorResources/misc/defaultCodeScript.js');


let dataSourceHelper = require.main.require('./application/mvc/services/dataSourceHelper');

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
        attrs.push(attr);
    });
    return attrs;
};

module.exports.readFile = function(path,projectName) {
    if (!projectName) throw 'project name not specified';
    return fs.readFileSync('workspace/'+projectName+'/resources/'+path);
};

module.exports.renameFolder = function(oldName,newName){
    fs.renameSync(oldName,newName);
    return {success:true};
};

module.exports.deleteFolder = function(name){
    fs.deleteFolderSync(name);
    return {success:true};
};

module.exports.createFile = function(path,content,projectName) {
    if (!projectName) throw 'project name not specified';
    fs.writeFileSync('workspace/'+projectName+'/resources/'+path,content);
    return {};
};

module.exports.removeFile = function(path,projectName) {
    if (!projectName) throw 'project name not specified';
    fs.deleteFileSync('workspace/'+projectName+'/resources/'+path);
    return {success:true};
};