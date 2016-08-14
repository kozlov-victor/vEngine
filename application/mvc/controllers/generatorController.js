var fs = require.main.require('./application/base/fs');
var minifier = require('minifier');
var resourcesController = require.main.require('./application/mvc/controllers/resourcesController');
var nodeHint = require('node-hint');
var ejs = require('ejs');

var Source = function(){
    var res = [];
    var self = this;
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
        var rendered = ejs.render(content.split('//<code>').join(''),params);
        self.add(rendered);
    };
    this.get = function(){
        return res.join('\n');
    };
};

var addEnvVariables = function(sourceMain) {
    sourceMain.addTemplate(
        'resources/generatorResources/envVariables.js',
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
        'resources/generatorResources/renderer.js',
        'resources/generatorResources/canvasContext.js',
        'resources/generatorResources/glContext.js',
        'resources/generatorResources/sceneManager.js',
        'resources/generatorResources/modules/keyboard.js',
        'resources/generatorResources/modules/mouse.js',
        'resources/generatorResources/modules/physics.js',
        'resources/generatorResources/modules/sound.js',
        'resources/generatorResources/modules/collider.js'
        //'resources/generatorResources/modules/gameLoop.js'
    ]);
};

var addDebug = function(sourceMain){
    sourceMain.addFile('resources/generatorResources/debug.js');
};

var addGameResourcesDesc = function(sourceMain,opts){
    var templateObj = {};
    templateObj.commonResources = {};
    templateObj.specialResources = {};
    resourcesController.RESOURCE_NAMES.forEach(function(r){
        templateObj.commonResources[r] = fs.readFileSync('workspace/project/resources/'+r+'/map.json')
    });
    templateObj.commonResources.gameProps = fs.readFileSync('workspace/project/gameProps.json');

    templateObj.specialResources.gameObjectScripts = fs.readDirSync('workspace/project/resources/script/gameObject','utf8');
    templateObj.specialResources.sceneScripts = fs.readDirSync('workspace/project/resources/script/scene','utf8');
    sourceMain.addTemplate('resources/generatorResources/main.js',templateObj);
};

var addGameResourcesFiles = function(sourceMain,opts){
    fs.deleteFolderSync('workspace/project/out');
    fs.createFolderSync('workspace/project/out/');

    var embedResourceCode = '(function(){\n';
    if (opts.embedResources) embedResourceCode += 've_local.resources = {};\n';

    ['spriteSheet','font','sound'].forEach(function(r){
        if (opts.embedResources) {
            var files = fs.readDirSync('workspace/project/resources/'+r,'base64');
            files.forEach(function(file){
                if (file.name!='map.json') {
                    embedResourceCode+=
                        've_local.resources["resources/'+r+'/'+file.name+'"]=' +
                        '"'+file.content+'";\n';
                }
            });
        } else {
            fs.createFolderSync('workspace/project/out/resources/'+r);
            fs.copyFolderSync('workspace/project/resources/'+r,'workspace/project/out/resources/'+r);
            fs.deleteFileSync('workspace/project/out/resources/'+r+'/map.json');
        }
    });

    if (opts.embedResources) {
        embedResourceCode+='})();';
        sourceMain.add(embedResourceCode);
    }

    var indexHtml = fs.readFileSync('resources/generatorResources/index.html');

    if (opts.embedScript) {
        indexHtml = indexHtml.replace('{{script}}','<script>\n'+sourceMain.get()+'\n</script>');
        fs.writeFileSync('workspace/project/out/index.html',indexHtml);
    } else {
        fs.writeFileSync('workspace/project/out/main.js',sourceMain.get());
        indexHtml = indexHtml.replace('{{script}}','<script src="main.js"></script>');
        fs.writeFileSync('workspace/project/out/index.html',indexHtml);
    }

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

var unused = function(){
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

    console.log('generate options:',opts);

    var sourceMain = new Source();
    addEnvVariables(sourceMain,opts);
    addStaticFiles(sourceMain,opts);
    addCommonBehaviour(sourceMain,opts);
    if (opts.debug) addDebug(sourceMain,opts);
    addGameResourcesDesc(sourceMain,opts);
    addGameResourcesFiles(sourceMain,opts);

    callback({});
};

module.exports.Source = Source;
module.exports.addEnvVariables = addEnvVariables;