
var fs = require('../base/fs');

module.exports.initFolderStructure = function(){
    fs.createFolderSync('project/resources');
    fs.createFolderSync('project/resources/images');
    fs.createFolderSync('project/resources/audios');
    fs.createFolderSync('project/resources/scripts');
};

module.exports.addResourceImageFile = function(name,path){
    fs.copyFileSync(path,'project/resources/images/'+name);
    fs.deleteFileSync(path);
};