
var fs = require('../base/fs');

module.exports.addResourceImageFile = function(name,path){
    fs.copyFileSync(path,'project/resources/images/'+name);
    var arr = JSON.parse(fs.readFileSync('project/resources/images/map.json'));
    var item = {};
    item.name = name;
    item.type = 'image';
    arr.push(item);
    fs.writeFileSync('project/resources/images/map.json',JSON.stringify(arr));
    fs.deleteFileSync(path);
    return item;
};

module.exports.getAll = function(type){
    switch (type) {
        case 'images':
            return JSON.parse(fs.readFileSync('project/resources/images/map.json'));
            break;
        default:
            return null;
            break;
    }
};