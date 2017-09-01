
const fs = require.main.require('./node-app/base/fs');

module.exports.createProject = function(projectName){

    fs.createFolderSync(`workspace/${projectName}/resources`);
    fs.createFolderSync(`workspace/${projectName}/scripts`);
    fs.createFileSync(`workspace/${projectName}/repository.json`,'{}');

    fs.createFileSync(`workspace/${projectName}/gameProps.json`,JSON.stringify({
        width:800,
        height:600,
        scaleStrategy:0
    }));
    return {};

};