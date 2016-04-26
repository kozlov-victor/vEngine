
var fs = require('../base/fs');

module.exports.addResourceImageFile = function(name,path){
    fs.copyFileSync(path,'project/resources/images/'+name);
    var map = JSON.parse(fs.readFileSync('project/resources/images/map.json'));
    map[name] = {type:'image'};
    fs.writeFileSync('project/resources/images/map.json',JSON.stringify(map));
    fs.deleteFileSync(path);
    return map[name];
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