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
    this.addTemplateFromRaw = function(raw,params) {
        var content = parametrize(raw,params);
        self.add(content);
    };
    this.get = function(){
        return res.join('\n');
    };
};

module.exports.generate = function(opts,callback){
    var sourceMain = new Source();
    sourceMain.addTemplate(
        'resources/generatorResources/templates/envVariables.ejs',
        {
            resourceNames:resourcesController.RESOURCE_NAMES
        }
    );

    sourceMain.addFiles([
        'resources/public/js/lib/oop.js',
        'resources/public/js/dataStructure/collections.js',
        'resources/public/js/dataStructure/models.js',
        'resources/public/js/dataStructure/bundle.js',
        'resources/generatorResources/static/utils.js',
        'resources/generatorResources/static/renderer.js',
        'resources/generatorResources/static/sceneManager.js',
        'resources/generatorResources/static/modules/keyboard.js',
        'resources/generatorResources/static/modules/mouse.js',
        'resources/generatorResources/static/modules/math.js',
        'resources/generatorResources/static/modules/physics.js'
    ]);
    if (opts.debug) {
        sourceMain.addFile('resources/generatorResources/static/debug.js')
    }
    var templateObj = {};
    resourcesController.RESOURCE_NAMES.forEach(function(r){
        templateObj[r] = fs.readFileSync('workspace/project/resources/'+r+'/map.json')
    });
    templateObj.gameProps = fs.readFileSync('workspace/project/gameProps.json');
    templateObj.gameObjectScripts = fs.readDirSync('workspace/project/resources/script/gameObject');
    templateObj.sceneScripts = fs.readDirSync('workspace/project/resources/script/scene');
    sourceMain.addTemplate('resources/generatorResources/templates/main.ejs',templateObj);

    fs.deleteFolderSync('workspace/project/out');
    fs.createFolderSync('workspace/project/out/resources/spriteSheet');
    fs.copyFolderSync('workspace/project/resources/spriteSheet','workspace/project/out/resources/spriteSheet');
    fs.deleteFileSync('workspace/project/out/resources/spriteSheet/map.json');

    fs.writeFileSync('workspace/project/out/main.js',sourceMain.get());
    fs.writeFileSync('workspace/project/out/index.html',fs.readFileSync('resources/generatorResources/static/index.html'));


    //nodeHint.hint(
    //    {
    //        source:sourceMain.get()
    //    },
    //    function(result,lintData){
    //        callback(lintData);
    //    }
    //);

    callback({});


    //minifier.minify('project/out/main.js');

};