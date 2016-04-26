
var fs = require('../base/fs');

module.exports.initFolderStructure = function(){
    fs.createFolderSync('project');
    fs.createFolderSync('project/resources');

    fs.createFolderSync('project/resources/images');
    fs.createFolderSync('project/resources/audios');
    fs.createFolderSync('project/resources/scripts');

    fs.writeFileSync('project/resources/images/map.json','{}');
    fs.writeFileSync('project/resources/audios/map.json','{}');
    fs.writeFileSync('project/resources/scripts/map.json','{}');
};