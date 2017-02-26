
const fs = require.main.require('./application/base/fs');
const resourcesService = require.main.require('./application/mvc/services/resourceServiceNew');

const createFolderWithFiles = function(foldersArr,projectName) {
    foldersArr.forEach(function(folder){
        fs.createFolderSync(`workspace/${projectName}/resources/${folder}`);
        fs.createFileSync(`workspace/${projectName}/resources/${folder}/map.json`,'[]');
    });
};

module.exports.createProject = function(projectName){

    fs.createFolderSync(`workspace/${projectName}/resources`);
    createFolderWithFiles(resourcesService.RESOURCE_NAMES,projectName);
    fs.createFolderSync(`workspace/'${projectName}/resources/script/gameObject`);
    fs.createFolderSync(`workspace/${projectName}/resources/font`);
    fs.createFolderSync(`workspace/${projectName}/resources/script/scene`);

    fs.copyFileSync('resources/generatorResources/fonts/default.png',
        `workspace/${projectName}/resources/font/default.png`);
    fs.copyFileSync('resources/generatorResources/fonts/map.json',
        `workspace/${projectName}/resources/font/map.json`);

    fs.createFileSync(`workspace/${projectName}/gameProps.json`,JSON.stringify({
        width:800,
        height:600,
        scaleStrategy:0
    }));

};