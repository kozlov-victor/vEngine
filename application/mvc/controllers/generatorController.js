var fs = require.main.require('./application/base/fs');
var minifier = require('minifier');
var resourcesController = require.main.require('./application/mvc/controllers/resourcesController');
var nodeHint = require('node-hint');
var ejs = require('ejs');

var Source = function(){
    var res = [];
    var self = this;
    var parametrize = function (str,params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var val = params[key];
                key = '\'%'+key+'%\'';
                str =str.split(key).join(val);
            }
        }
        return str;
    };
    this.add = function(s){
        res.push(s);
    };
    this.addFile = function(path){
        var content = fs.readFileSync(path);
        res.push(content);
    };
    this.addFiles = function(arr){
        arr.forEach(function(f){
            self.addFile(f);
        })
    };
    this.addTemplate = function(path,params) {
        var content = fs.readFileSync(path);
        self.add(ejs.render(content,params));
    };
    this.get = function(){
        return res.join('\n');
    };
};

var addEnvVariables = function(sourceMain) {
    sourceMain.addTemplate(
        'resources/generatorResources/templates/envVariables.ejs',
        {
            resourceNames:resourcesController.RESOURCE_NAMES
        }
    );
};

var addStaticFiles = function(sourceMain){
    sourceMain.addFiles([
        'resources/public/js/lib/oop.js',
        'resources/public/js/dataStructure/collections.js',
        'resources/public/js/dataStructure/models.js',
        'resources/public/js/dataStructure/bundle.js',
        'resources/public/js/dataStructure/utils.js',
        'resources/generatorResources/static/renderer.js',
        'resources/generatorResources/static/sceneManager.js',
        'resources/generatorResources/static/modules/keyboard.js',
        'resources/generatorResources/static/modules/mouse.js',
        'resources/generatorResources/static/modules/math.js',
        'resources/generatorResources/static/modules/physics.js',
        'resources/generatorResources/static/modules/collider.js'
    ]);
};

var addDebug = function(sourceMain){
    sourceMain.addFile('resources/generatorResources/static/debug.js');
};

var addGameResources = function(sourceMain){
    var templateObj = {};
    templateObj.commonResources = {};
    templateObj.specialResources = {};
    resourcesController.RESOURCE_NAMES.forEach(function(r){
        templateObj.commonResources[r] = fs.readFileSync('workspace/project/resources/'+r+'/map.json')
    });
    templateObj.commonResources.gameProps = fs.readFileSync('workspace/project/gameProps.json');

    templateObj.specialResources.gameObjectScripts = fs.readDirSync('workspace/project/resources/script/gameObject');
    templateObj.specialResources.sceneScripts = fs.readDirSync('workspace/project/resources/script/scene');
    sourceMain.addTemplate('resources/generatorResources/templates/main.ejs',templateObj);
};

var initFolderStructure = function(sourceMain){
    fs.deleteFolderSync('workspace/project/out');
    fs.createFolderSync('workspace/project/out/resources/spriteSheet');
    fs.copyFolderSync('workspace/project/resources/spriteSheet','workspace/project/out/resources/spriteSheet');
    fs.deleteFileSync('workspace/project/out/resources/spriteSheet/map.json');

    fs.writeFileSync('workspace/project/out/main.js',sourceMain.get());
    fs.writeFileSync('workspace/project/out/index.html',fs.readFileSync('resources/generatorResources/static/index.html'));

};

var addCommonBehaviour = function(sourceMain){
    var gameObjects = JSON.parse(fs.readFileSync('workspace/project/resources/gameObject/map.json'));
    var fileNames = {};
    gameObjects.forEach(function(go){
        go.commonBehaviour.forEach(function(cb){
            fileNames[cb.name] = 1;
        });
    });
    Object.keys(fileNames).forEach(function(name){
        var res = 've.commonBehaviour.'+name+' = '+fs.readFileSync('workspace/project/resources/script/commonBehaviour/'+name+'.js');
        sourceMain.add(res);
    });
};

var unUsed = function(){
    //nodeHint.hint(
    //    {
    //        source:sourceMain.get()
    //    },
    //    function(result,lintData){
    //        callback(lintData);
    //    }
    //);
    //minifier.minify('project/out/main.js');
};

module.exports.generate = function(opts,callback){

    var sourceMain = new Source();
    addEnvVariables(sourceMain);
    addStaticFiles(sourceMain);
    addCommonBehaviour(sourceMain);
    if (opts.debug) addDebug(sourceMain);
    addGameResources(sourceMain);
    initFolderStructure(sourceMain);

    callback({});
};