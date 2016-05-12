
var fs = require('../base/fs');

var createFolderWithFiles = function(foldersArr) {
    foldersArr.split(',').forEach(function(folder){
        fs.createFolderSync('project/resources/'+folder);
        fs.createFileSync('project/resources/'+folder+'/map.json','[]');
    });
};

module.exports.initFolderStructure = function(){

    fs.createFolderSync('project');
    fs.createFolderSync('project/resources');
    createFolderWithFiles('audio,script,spriteSheet,gameObject,frameAnimation,scene');
    fs.createFileSync('project/gameProps.json',JSON.stringify({
        width:800,
        height:600
    }));

};