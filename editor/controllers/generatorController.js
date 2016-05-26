var fs = require('../base/fs');
var minifier = require('minifier');

var generateResources = function(){

};

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
    this.get = function(){
        return res.join('\n');
    };
};

module.exports.generate = function(){
    var sourceMain = new Source();
    sourceMain.addFiles([
        'editor/public/js/lib/oop.js',
        'editor/generatorResources/static/envVariables.js',
        'editor/public/js/dataStructure/collections.js',
        'editor/public/js/dataStructure/models.js',
        'editor/public/js/dataStructure/bundle.js',
        'editor/generatorResources/static/utils.js',
        'editor/generatorResources/static/renderer.js',
        'editor/generatorResources/static/sceneManager.js'
    ]);
    sourceMain.addTemplate('editor/generatorResources/templates/main.js',{
        audio: fs.readFileSync('project/resources/audio/map.json'),
        frameAnimation: fs.readFileSync('project/resources/frameAnimation/map.json'),
        gameObject: fs.readFileSync('project/resources/gameObject/map.json'),
        scene: fs.readFileSync('project/resources/scene/map.json'),
        spriteSheet: fs.readFileSync('project/resources/spriteSheet/map.json'),
        gameProps: fs.readFileSync('project/gameProps.json')
    });


    fs.deleteFolderSync('project/out');
    fs.createFolderSync('project/out');
    fs.createFolderSync('project/out/resources');
    fs.createFolderSync('project/out/resources/spriteSheet');
    fs.copyFolderSync('project/resources/spriteSheet','project/out/resources/spriteSheet');
    fs.deleteFileSync('project/out/resources/spriteSheet/map.json');

    fs.writeFileSync('project/out/main.js',sourceMain.get());
    fs.writeFileSync('project/out/index.html',fs.readFileSync('editor/generatorResources/static/index.html'));

    //minifier.minify('project/out/main.js');

    return {generated:1};
};