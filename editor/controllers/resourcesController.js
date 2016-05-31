
var fs = require('../base/fs');
var utils = require('../utils/utils');

module.exports.RESOURCE_NAMES =
    'audio,script,spriteSheet,gameObject,frameAnimation,scene,layer'
    .split(',');

var readResource = function(path) {
    return JSON.parse(fs.readFileSync(path));
};

var writeResource = function(res,path) {
    fs.writeFileSync(path,JSON.stringify(res));
};

var getIndexById = function(arr,id){
    var indexToDel = null;
    var i = 0;
    arr.some(function(item){
        if (item.id==id) {
            indexToDel = i;
            return true;
        }
        i++;
    });
    return indexToDel;
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
    if (!editItem) throw 'can not find item with id ' + item.id + ' in ' + item.type + ' resource';
    Object.keys(item).forEach(function(key){
        editItem[key]=item[key];
    });
    writeResource(arr,'project/resources/'+item.type+'/map.json');
    return editItem;
};

module.exports.getAll = function(type){
    return JSON.parse(fs.readFileSync('project/resources/'+type+'/map.json'));
};

module.exports.delete = function(id,type){
    var arr = readResource('project/resources/'+type+'/map.json');
    var indexToDel = getIndexById(arr,id);
    if (indexToDel!==null) {
        var resourcePath = arr[indexToDel].resourcePath;
        fs.deleteFileSync('project/'+resourcePath);
        arr.splice(indexToDel,1);
        writeResource(arr,'project/resources/'+type+'/map.json');
    }
};

// todo remove dependencies
module.exports.deleteObjectFromResource = function(resourceType,resourceId,objectType,objectId){
    console.log('deleteObjectFromResource invoked');
    var resources = readResource('project/resources/'+resourceType+'/map.json');
    var resource = resources.filter(function(r){return r.id==resourceId})[0];
    if (!resource) throw 'can not find resource with id ' + resourceId + ' in ' + resourceType + ' resource';
    var objectsInResource = resource[objectType];
    var index = getIndexById(objectsInResource,objectId);
    console.log('curr index',index);
    if (index!=null) {
        objectsInResource.splice(index,1);
    }
    else {
        throw 'can not find object with id '+ objectId + ' in resource ' + resourceType + ':' + objectType;
    }
    writeResource(resources,'project/resources/'+resourceType+'/map.json');
};

module.exports.saveGameProps = function(model){
    writeResource(model,'project/gameProps.json');
};

module.exports.getGameProps = function(){
    return readResource('project/gameProps.json');
};

module.exports.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object) {
    var path = 'project/resources/'+resourceType+'/map.json';
    var resources = readResource(path);
    console.log('loaded resources',resources);
    console.log('search by id');
    var resource = resources.filter(function(itm){
        return itm.id==resourceId;
    })[0];
    console.log('found',resource);
    var objectsInResource = resource[objectType];
    if (object.id) {
        var objectInResource = objectsInResource.filter(function(itm){return itm.id==object.id})[0];
        Object.keys(object).forEach(function(key){
            objectInResource[key]=object[key];
            writeResource(resources,path);
            return {};
        });
    } else {
        object.id = uuid();
        objectsInResource.push(object);
        writeResource(resources,path);
        return {id:object.id};
    }
};

module.exports.readResource = readResource;