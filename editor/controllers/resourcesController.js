
var fs = require('../base/fs');

module.exports.create = function(name,type,path){
    fs.copyFileSync(path,'project/resources/'+type+'/'+name);
    var arr = JSON.parse(fs.readFileSync('project/resources/'+type+'/map.json'));
    var item = {};
    item.name = name;
    item.type = 'image';
    arr.push(item);
    fs.writeFileSync('project/resources/'+type+'/map.json',JSON.stringify(arr));
    fs.deleteFileSync(path);
    return item;
};

module.exports.getAll = function(type){
    return JSON.parse(fs.readFileSync('project/resources/'+type+'/map.json'));
};

module.exports.delete = function(name,type){
    fs.deleteFileSync('project/resources/'+type+'/'+name);
    var arr = JSON.parse(fs.readFileSync('project/resources/'+type+'/map.json'));
    var indexToDel = null;
    var i = 0;
    arr.some(function(item){
        if (item.name==name) {
            indexToDel = i;
            return true;
        }
        i++;
    });
    if (indexToDel!==null) {
        arr.splice(indexToDel,1);
        fs.writeFileSync('project/resources/'+type+'/map.json',JSON.stringify(arr));
    }
};