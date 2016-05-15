
var fs = require('../base/fs');
var utils = require('../utils/utils');

var readResource = function(path) {
    return JSON.parse(fs.readFileSync(path));
};

var writeResource = function(res,path) {
    fs.writeFileSync(path,JSON.stringify(res));
};

var uidCnt = 0;

var uid = function(){
    return ''+(~~(Math.random()*10));
};

var uuid = function() {
    return  uid()+uid()+uid()+uid() + '_' + new Date().getTime()+'_'+(uidCnt++);
};

var processUploadedFile = function(item,pathToUploadedFile){
    if (!pathToUploadedFile) return;
    var fileExtension = pathToUploadedFile.split('.').pop()||'';
    var resourcePath = 'resources/'+item.type+'/'+item.name+(fileExtension?'.'+fileExtension:'');
    fs.copyFileSync(pathToUploadedFile,'project/'+resourcePath);
    fs.deleteFileSync(pathToUploadedFile);
    item.resourcePath = resourcePath;
};

module.exports.create = function(item,pathToUploadedFile){
    processUploadedFile(item,pathToUploadedFile);
    var arr = readResource('project/resources/'+item.type+'/map.json');
    item.id = uuid();
    arr.push(item);
    writeResource(arr,'project/resources/'+item.type+'/map.json');
    return item;
};


module.exports.edit = function(item,pathToUploadedFile){
    processUploadedFile(item,pathToUploadedFile);
    var arr = readResource('project/resources/'+item.type+'/map.json');
    var editItem = arr.filter(function(_itm){
        return _itm.id==item.id;
    })[0];
    Object.keys(item).forEach(function(key){
        editItem[key]=item[key];
    });
    console.log('arr',arr);
    writeResource(arr,'project/resources/'+item.type+'/map.json');
    return editItem;
};

module.exports.getAll = function(type){
    return JSON.parse(fs.readFileSync('project/resources/'+type+'/map.json'));
};

module.exports.delete = function(id,type){
    var arr = readResource('project/resources/'+type+'/map.json');
    var indexToDel = null;
    var i = 0;
    arr.some(function(item){
        if (item.id==id) {
            indexToDel = i;
            return true;
        }
        i++;
    });
    if (indexToDel!==null) {
        var resourcePath = arr[indexToDel].resourcePath;
        fs.deleteFileSync('project/'+resourcePath);
        arr.splice(indexToDel,1);
        writeResource(arr,'project/resources/'+type+'/map.json');
    }
};

module.exports.saveGameProps = function(model){
    writeResource(model,'project/gameProps.json');
};

module.exports.getGameProps = function(){
    return readResource('project/gameProps.json');
};