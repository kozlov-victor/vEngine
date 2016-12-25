
var fs = require.main.require('./application/base/fs');
var utils = require.main.require('./application/utils/utils');
var generatorController = require.main.require('./application/mvc/controllers/generatorController');

var RESOURCE_NAMES = 'sound,spriteSheet,frameAnimation,font,gameObject,layer,scene,particleSystem'
    .split(',');
module.exports.RESOURCE_NAMES = RESOURCE_NAMES;


module.exports.DEFAULT_CODE_SCRIPT = fs.readFileSync('resources/generatorResources/misc/defaultCodeScript.js');

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

var processUploadedFile = function(item,pathToUploadedFile,projectName){
    if (!pathToUploadedFile) return;
    var fileExtension = getFileExtension(pathToUploadedFile);
    var resourcePath = 'resources/'+item.type+'/'+item.name+(fileExtension?'.'+fileExtension:'');
    if (!fileExtension) resourcePath+='.'+'png';
    fs.copyFileSync(pathToUploadedFile,'workspace/'+projectName+'/'+resourcePath);
    fs.deleteFileSync(pathToUploadedFile);
    item.resourcePath = resourcePath;
};


var createFolderWithFiles = function(foldersArr,projectName) {
    foldersArr.forEach(function(folder){
        fs.createFolderSync('workspace/'+projectName+'/resources/'+folder);
        fs.createFileSync('workspace/'+projectName+'/resources/'+folder+'/map.json','[]');
    });
};

module.exports.createProject = function(projectName){

    fs.createFolderSync('workspace/'+projectName+'/resources');
    createFolderWithFiles(RESOURCE_NAMES,projectName);
    fs.createFolderSync('workspace/'+projectName+'/resources/script/gameObject');
    fs.createFolderSync('workspace/'+projectName+'/resources/font');
    fs.createFolderSync('workspace/'+projectName+'/resources/script/scene');

    fs.copyFileSync('resources/generatorResources/fonts/default.png',
        'workspace/'+projectName+'/resources/font/default.png');
    fs.copyFileSync('resources/generatorResources/fonts/map.json',
        'workspace/'+projectName+'/resources/font/map.json');

    fs.createFileSync('workspace/'+projectName+'/gameProps.json',JSON.stringify({
        width:800,
        height:600,
        scaleStrategy:0
    }));

};


module.exports.create = function(item,pathToUploadedFile,projectName){
    if (!projectName) throw 'project name not specified';
    processUploadedFile(item,pathToUploadedFile,projectName);
    var arr = readResource('workspace/'+projectName+'/resources/'+item.type+'/map.json');
    item.id = uuid();
    arr.push(item);
    writeResource(arr,'workspace/'+projectName+'/resources/'+item.type+'/map.json');
    return item;
};


module.exports.edit = function(item,pathToUploadedFile,projectName){
    if (!projectName) throw 'project name not specified';
    processUploadedFile(item,pathToUploadedFile,projectName);
    var arr = readResource('workspace/'+projectName+'/resources/'+item.type+'/map.json');
    var editItem = arr.filter(function(_itm){
        return _itm.id==item.id;
    })[0];
    if (!editItem) throw 'can not find item with id ' + item.id + ' in ' + item.type + ' resource';
    Object.keys(item).forEach(function(key){
        editItem[key]=item[key];
    });
    writeResource(arr,'workspace/'+projectName+'/resources/'+item.type+'/map.json');
    return editItem;
};

module.exports.getAll = function(type,projectName){
    if (!projectName) throw 'project name not specified';
    return JSON.parse(fs.readFileSync('workspace/'+projectName+'/resources/'+type+'/map.json'));
};

module.exports.delete = function(id,type,projectName){
    if (!projectName) throw 'project name not specified';
    var arr = readResource('workspace/'+projectName+'/resources/'+type+'/map.json');
    var indexToDel = getIndexById(arr,id);
    if (indexToDel!==null) {
        var resourcePath = arr[indexToDel].resourcePath;
        resourcePath && fs.deleteFileSync('workspace/'+projectName+'/'+resourcePath);
        arr.splice(indexToDel,1);
        writeResource(arr,'workspace/'+projectName+'/resources/'+type+'/map.json');
    }
};

// todo remove dependencies
module.exports.deleteObjectFromResource = function(resourceType,resourceId,objectType,objectId,projectName){
    if (!projectName) throw 'project name not specified';
    var resources = readResource('workspace/'+projectName+'/resources/'+resourceType+'/map.json');
    var resource = resources.filter(function(r){return r.id==resourceId})[0];
    if (!resource) throw 'can not find resource with id ' + resourceId + ' in ' + resourceType + ' resource';
    var objectsInResource = resource[objectType];
    var index = getIndexById(objectsInResource,objectId);
    if (index!=null) {
        objectsInResource.splice(index,1);
    }
    else {
        throw 'can not find object with id '+ objectId + ' in resource ' + resourceType + ':' + objectType;
    }
    writeResource(resources,'workspace/'+projectName+'/resources/'+resourceType+'/map.json');
};

module.exports.saveGameProps = function(model,projectName){
    if (!projectName) throw 'project name not specified';
    writeResource(model,'workspace/'+projectName+'/gameProps.json');
};

module.exports.getGameProps = function(projectName){
    if (!projectName) throw 'project name not specified';
    return readResource('workspace/'+projectName+'/gameProps.json');
};

module.exports.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,projectName) {
    if (!projectName) throw 'project name not specified';
    var path = 'workspace/'+projectName+'/resources/'+resourceType+'/map.json';
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

module.exports.getCommonBehaviourAttrs = function(projectName){
    if (!projectName) throw 'project name not specified';
    var attrs = [];
    fs.readDirSync('resources/generatorResources/commonBehaviour','utf-8').forEach(function(itm){
        var attr = {};
        attr.name = itm.name.replace('.js','');
        var module = {};
        module.exports = {};
        var exports = module.exports;
        var jsdoc = itm.content.split('\n').join('').match(/\/\*\*(.*)\*\//gi)[0].split('*').join('').split('/').join('');
        var fn = new Function(
            'module,exports',
            'var parameters = {};var require = function(){return {instance:function(){}}};'+jsdoc
        );
        fn(module,exports);
        attr.description = exports.description;
        attr.parameters = exports.parameters;
        attr.id = uuid();
        attrs.push(attr);
    });
    return attrs;
};

module.exports.createFile = function(name,path,content,projectName) {
    if (!projectName) throw 'project name not specified';
    fs.writeFileSync('workspace/'+projectName+'/resources/'+path+'/'+name,content);
    return {};
};

module.exports.readFile = function(name,path,projectName) {
    if (!projectName) throw 'project name not specified';
    return fs.readFileSync('workspace/'+projectName+'/resources/'+path+'/'+name);
};

module.exports.editFont = function(model,pathToUploadedFile,projectName) {
    if (!projectName) throw 'project name not specified';
    processUploadedFile(model.font,pathToUploadedFile,projectName);
    writeResource(model.font,'workspace/'+projectName+'/resources/font/'+ model.font.name+'.json');
    return {};
};

module.exports.readResource = readResource;

module.exports.getProjects = function(){
    return fs.getDirListSync('workspace/').map(function(item){
        return {name:item}
    });
};

module.exports.renameFolder = function(oldName,newName){
    fs.renameSync(oldName,newName);
};

module.exports.deleteFolder = function(name){
    fs.deleteFolderSync(name);
};

var resolveResourceName = function(name,isFile){
    var res =  'resources/generatorResources/'+name.split('.').join('/');
    if (isFile) res+='.js';
    return res;
};


module.exports.setTile = function(sceneId,x,y,tileIndex,projectName) {
    if (!projectName) throw 'project name not specified';
    var path = 'workspace/'+projectName+'/resources/'+'scene'+'/map.json';
    var scenes = readResource(path);
    var scene = scenes.filter(function(s){
        return s.id==sceneId;
    })[0];
    var tileData = scene.tileMap.data;
    if (!tileData[y]) tileData[y]=[];
    tileData[y][x]=tileIndex;
    writeResource(scenes,path);
    return [tileData[y][x]]
};



