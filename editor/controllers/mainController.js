
var fs = require('../base/fs');
var resourcesController = require('./resourcesController');

var createFolderWithFiles = function(foldersArr) {
    foldersArr.forEach(function(folder){
        fs.createFolderSync('project/resources/'+folder);
        fs.createFileSync('project/resources/'+folder+'/map.json','[]');
    });
};

module.exports.initFolderStructure = function(){

    fs.createFolderSync('project');
    fs.createFolderSync('project/resources');
    createFolderWithFiles(resourcesController.RESOURCE_NAMES);
    fs.createFileSync('project/gameProps.json',JSON.stringify({
        width:800,
        height:600
    }));

};