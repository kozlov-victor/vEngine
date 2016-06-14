var fs = require('../base/fs');
var minifier = require('minifier');
var resourcesController = require('./resourcesController');
var nodeHint = require('node-hint');


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
        var content = parametrize(fs.readFileSync(path),params);
        self.add(content);
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
        'editor/generatorResources/templates/envVariables.js',
        {
            RESOURCE_NAMES:JSON.stringify(resourcesController.RESOURCE_NAMES)
        }
    );

    sourceMain.addFiles([
        'editor/public/js/lib/oop.js',
        'editor/public/js/dataStructure/collections.js',
        'editor/public/js/dataStructure/models.js',
        'editor/public/js/dataStructure/bundle.js',
        'editor/generatorResources/static/utils.js',
        'editor/generatorResources/static/renderer.js',
        'editor/generatorResources/static/sceneManager.js',
        'editor/generatorResources/static/modules/keyboard.js',
        'editor/generatorResources/static/modules/mouse.js',
        'editor/generatorResources/static/modules/math.js'
    ]);
    if (opts.debug) {
        sourceMain.addFile('editor/generatorResources/static/debug.js')
    }
    var templateObj = {};
    resourcesController.RESOURCE_NAMES.forEach(function(r){
        templateObj[r] = fs.readFileSync('project/resources/'+r+'/map.json')
    });
    templateObj.gameProps = fs.readFileSync('project/gameProps.json');
    sourceMain.addTemplate('editor/generatorResources/templates/main.js',templateObj);

    fs.deleteFolderSync('project/out');
    fs.createFolderSync('project/out');
    fs.createFolderSync('project/out/resources');
    fs.createFolderSync('project/out/resources/spriteSheet');
    fs.copyFolderSync('project/resources/spriteSheet','project/out/resources/spriteSheet');
    fs.deleteFileSync('project/out/resources/spriteSheet/map.json');

    fs.writeFileSync('project/out/main.js',sourceMain.get());
    fs.writeFileSync('project/out/index.html',fs.readFileSync('editor/generatorResources/static/index.html'));


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