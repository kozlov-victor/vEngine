
var fs = require.main.require('./application/base/fs');
var utils = require.main.require('./application/utils/utils');

module.exports.RESOURCE_NAMES =
    'sound,spriteSheet,frameAnimation,font,gameObject,layer,scene'
    .split(',');

module.exports.DEFAULT_CODE_SCRIPT = fs.readFileSync('resources/generatorResources/static/defaultCodeScript.js');

var readResource = function(path) {
    return JSON.parse(fs.readFileSync(path));
};

var writeResource = function(res,path) {
    fs.writeFileSync(path,JSON.stringify(res,null,4));
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


var uuid = function() {
    var uidCnt = 0;

    var uid = function(){
        return ''+(~~(Math.random()*10));
    };
    return function(){
        var timeStr = new Date().getTime().toString();
        return  uid()+uid()+uid()+uid() + '_' + timeStr.substring(timeStr.length-4) +'_'+(uidCnt++);
    };
}();

var getFileExtension = function(path) {
    var arr = path.split('.');
    if (!arr.length || arr.length==1) return '';
    return arr.pop()||'';
};

var processUploadedFile = function(item,pathToUploadedFile){
    if (!pathToUploadedFile) return;
    console.log('processing file',pathToUploadedFile);
    var fileExtension = getFileExtension(pathToUploadedFile);
    console.log('fileExtension',fileExtension);
    var resourcePath = 'resources/'+item.type+'/'+item.name+(fileExtension?'.'+fileExtension:'');
    if (!fileExtension) resourcePath+='.'+'png';
    console.log('resourcePath',resourcePath);
    fs.copyFileSync(pathToUploadedFile,'workspace/project/'+resourcePath);
    fs.deleteFileSync(pathToUploadedFile);
    item.resourcePath = resourcePath;
};


module.exports.create = function(item,pathToUploadedFile){
    processUploadedFile(item,pathToUploadedFile);
    var arr = readResource('workspace/project/resources/'+item.type+'/map.json');
    item.id = uuid();
    arr.push(item);
    writeResource(arr,'workspace/project/resources/'+item.type+'/map.json');
    return item;
};


module.exports.edit = function(item,pathToUploadedFile){
    processUploadedFile(item,pathToUploadedFile);
    var arr = readResource('workspace/project/resources/'+item.type+'/map.json');
    var editItem = arr.filter(function(_itm){
        return _itm.id==item.id;
    })[0];
    if (!editItem) throw 'can not find item with id ' + item.id + ' in ' + item.type + ' resource';
    Object.keys(item).forEach(function(key){
        editItem[key]=item[key];
    });
    writeResource(arr,'workspace/project/resources/'+item.type+'/map.json');
    return editItem;
};

module.exports.getAll = function(type){
    return JSON.parse(fs.readFileSync('workspace/project/resources/'+type+'/map.json'));
};

module.exports.delete = function(id,type){
    var arr = readResource('workspace/project/resources/'+type+'/map.json');
    var indexToDel = getIndexById(arr,id);
    if (indexToDel!==null) {
        var resourcePath = arr[indexToDel].resourcePath;
        fs.deleteFileSync('workspace/project/'+resourcePath);
        arr.splice(indexToDel,1);
        writeResource(arr,'workspace/project/resources/'+type+'/map.json');
    }
};

// todo remove dependencies
module.exports.deleteObjectFromResource = function(resourceType,resourceId,objectType,objectId){
    console.log('deleteObjectFromResource invoked');
    var resources = readResource('workspace/project/resources/'+resourceType+'/map.json');
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
    writeResource(resources,'workspace/project/resources/'+resourceType+'/map.json');
};

module.exports.saveGameProps = function(model){
    writeResource(model,'workspace/project/gameProps.json');
};

module.exports.getGameProps = function(){
    return readResource('workspace/project/gameProps.json');
};

module.exports.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object) {
    var path = 'workspace/project/resources/'+resourceType+'/map.json';
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
        });
    } else {
        object.id = uuid();
        objectsInResource.push(object);
        writeResource(resources,path);
    }
    return object;
};

module.exports.getCommonBehaviourAttrs = function(){
    // todo project name
    var code = '';
    var fileNames = [];
    code+='var require = function(){};';
    code+='var Class = {};var bundle = [];var fileNames = [];';
    code+='Class.extend = function(a,b){bundle.push(b)};';
    code+='var ve={};ve.commonBehaviour={};';
    fs.readDirSync('workspace/project/resources/script/commonBehaviour').forEach(function(itm){
        code+=itm.content+';';
        fileNames.push(itm.name);
    });
    code+=';return bundle;';
    var bundle = [];
    try {
        bundle = new Function(code)();
    } catch(e){
        console.error(e);
    }
    bundle.forEach(function(itm,i){
        itm.id = uuid();
        itm.name = fileNames[i].split('.')[0];
    });
    return bundle;
};

module.exports.createFile = function(name,path,content) {
    fs.writeFileSync('workspace/project/resources/'+path+'/'+name,content);
    return {};
};

module.exports.readFile = function(name,path) {
    return fs.readFileSync('workspace/project/resources/'+path+'/'+name);
};


module.exports.editFont = function(model,pathToUploadedFile) {
    processUploadedFile(model.font,pathToUploadedFile,'png');
    writeResource(model.font,"workspace/project/resources/font/"+ model.font.name+'.json');
    return {};
};

module.exports.readResource = readResource;