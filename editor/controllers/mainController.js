
var fs = require('../base/fs');

module.exports.initFolderStructure = function(){
    fs.createFolderSync('project');
    fs.createFolderSync('project/resources');

    fs.createFolderSync('project/resources/spriteSheet');
    fs.createFolderSync('project/resources/audio');
    fs.createFolderSync('project/resources/script');

    fs.createFileSync('project/resources/spriteSheet/map.json','[]');
    fs.createFileSync('project/resources/audio/map.json','[]');
    fs.createFileSync('project/resources/script/map.json','[]');

    fs.createFileSync('project/meta.json','{}');
};