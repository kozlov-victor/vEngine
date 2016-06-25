
var fs = require.main.require('./application/base/fs');
var resourcesController = require.main.require('./application/mvc/controllers/resourcesController');

var createFolderWithFiles = function(foldersArr) {
    foldersArr.forEach(function(folder){
        fs.createFolderSync('workspace/project/resources/'+folder);
        fs.createFileSync('workspace/project/resources/'+folder+'/map.json','[]');
    });
};

module.exports.initFolderStructure = function(){

    fs.createFolderSync('workspace/project/resources');
    createFolderWithFiles(resourcesController.RESOURCE_NAMES);
    fs.createFolderSync('workspace/project/resources/script/gameObject');
    fs.createFolderSync('workspace/project/resources/script/scene');

    fs.createFolderSync('workspace/project/resources/script/commonBehaviour');
    fs.readDirSync('resources/generatorResources/static/commonBehaviour').forEach(function(itm){
        fs.createFileSync('workspace/project/resources/script/commonBehaviour/'+itm.name,itm.content);
    });

    fs.createFileSync('workspace/project/gameProps.json',JSON.stringify({
        width:800,
        height:600
    }));

};