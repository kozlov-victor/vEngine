const RESOURCE_NAMES = 'sound,spriteSheet,frameAnimation,font,commonBehaviour,gameObject,layer,scene,particleSystem'
    .split(',');
module.exports.RESOURCE_NAMES = RESOURCE_NAMES;

const fs = require.main.require('./application/base/fs');

module.exports.getAll = function(type,projectName){
    if (!projectName) throw 'project name not specified';
    return JSON.parse(fs.readFileSync(`workspace/${projectName}/resources/${type}/map.json`));
};

module.exports.getGameProps = function(projectName){
    if (!projectName) throw 'project name not specified';
    return JSON.parse(fs.readFileSync(`workspace/${projectName}/gameProps.json`));
};