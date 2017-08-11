
const fs = require.main.require('./node-app/base/fs');

module.exports.createProject = function(projectName){

    fs.createFolderSync(`workspace/${projectName}/resources`);
    fs.createFileSync(`workspace/${projectName}/repository.json`,'{}');
    fs.createFolderSync(`workspace/${projectName}/resources/script/scene`);
    fs.createFolderSync(`workspace/${projectName}/resources/script/gameObjectProto`);

    fs.createFileSync(`workspace/${projectName}/gameProps.json`,JSON.stringify({
        width:800,
        height:600,
        scaleStrategy:0
    }));
    return {};

};