var fs = require('../base/fs');

var generateResources = function(){

};


module.exports.generate = function(){
    var res = fs.readFileSync('editor/public/js/lib/oop.js');
    res+= '\n' + fs.readFileSync('editor/public/js/dataStructure/collections.js');
    fs.deleteFolderSync('out');
    fs.createFolderSync('out');
    fs.writeFileSync('out/generated.js',res);
};