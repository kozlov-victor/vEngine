
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
    if (!fs.existsSync('workspace/project/common/behaviour')) {
        fs.createFolderSync('workspace/project/common/behaviour');
        fs.readDirSync('editor/generatorResources/static/commonBehaviour').forEach(function(itm){
            fs.createFileSync('workspace/project/common/behaviour/'+itm.name,itm.content);
        });
    }
    fs.createFolderSync('workspace/project/resources/script/gameObject');
    fs.createFolderSync('workspace/project/resources/script/scene');
    fs.createFileSync('workspace/project/gameProps.json',JSON.stringify({
        width:800,
        height:600
    }));

};