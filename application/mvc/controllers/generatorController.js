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
    var processTemplate = function(path,params){
       return ejs.render(fs.readFileSync(path).split('//<code>').join(''),params);
    };
    var extractModuleName = function(path){
        return path.replace('.js','').split('/').pop();
    };
    var wrapAsCommonJS = function(path,code){
        return 'modules[\''+extractModuleName(path)+'\'] = {code: function(module,exports){\n' + addLeadTab(code) + '\n}};\n';
    };
    var addLeadTab = function(code){
        return (
            code.split('\n').map(function(item){
                return '\t'+item;
            }).join('\n')
        );
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
        self.add(processTemplate(path,params));
    };
    this.addTemplates = function(pathList,params) {
        var self = this;
        pathList.forEach(function(path){
            self.addTemplate(path,params);
        });
    };
    this.addCommonJsModule = function(path,params){
        var code = processTemplate(path,params);
        code = wrapAsCommonJS(path,code);
        self.add(code);
    };
    this.addCommonJsModules = function(path,params){
        var self = this;
        fs.readDirSync(path).forEach(function(file){
            self.addCommonJsModule(file.fullName,params);
        });
    };
    this.addCommonTemplate = function(path,params){
        self.addFile(path,params);
    };
    this.addCommonTemplates = function(path){
        var self = this;
        fs.readDirSync(path).forEach(function(file){
            self.addCommonTemplate(file.fullName,{});
        });
    };
    this.addResource = function(path,opts){
        var src;
        var params = {};
        if (!opts.ignoreEJS) {
            src = processTemplate(path,{
                resourceNames:resourcesController.RESOURCE_NAMES,
                opts: {}
            });
        } else {
            src = fs.readFileSync(path)
        }
        if (!opts.ignoreCommonJS) {
             src = wrapAsCommonJS(path,src);
        }
        this.add(src);
    };
    this.get = function(){
        return res.join('\n');
    };
};



var createResourcesParams = function(opts){
    var templateObj = {};
    templateObj.commonResources = {};
    templateObj.specialResources = {};
    resourcesController.RESOURCE_NAMES.forEach(function(r){
        templateObj.commonResources[r] = fs.readFileSync('workspace/'+opts.projectName+'/resources/'+r+'/map.json')
    });
    templateObj.commonResources.gameProps = fs.readFileSync('workspace/'+opts.projectName+'/gameProps.json');

    templateObj.specialResources.gameObjectScripts = fs.readDirSync('workspace/'+opts.projectName+'/resources/script/gameObject','utf8');
    templateObj.specialResources.sceneScripts = fs.readDirSync('workspace/'+opts.projectName+'/resources/script/scene','utf8');
    return templateObj;
};

var createCommonBehaviourParams = function(opts){
    var gameObjects = JSON.parse(fs.readFileSync('workspace/'+opts.projectName+'/resources/gameObject/map.json'));
    var fileNames = {};
    gameObjects.forEach(function(go){
        go.commonBehaviour.forEach(function(cb){
            fileNames[cb.name] = 1;
        });
    });
    var res = [];
    Object.keys(fileNames).forEach(function(name){
        res.push({
            name:name,
            content: fs.readFileSync('workspace/'+opts.projectName+'/resources/script/commonBehaviour/'+name+'.js')
        });
    });
    return res;
};


var processGameResourcesFiles = function(sourceMain,opts){
    fs.deleteFolderSync('workspace/'+opts.projectName+'/out');
    fs.createFolderSync('workspace/'+opts.projectName+'/out/');

    var embedResourceCode = '(function(){\n';
    if (opts.embedResources) embedResourceCode += 've_local.resources = {};\n';

    ['spriteSheet','font','sound'].forEach(function(r){
        if (opts.embedResources) {
            var files = fs.readDirSync('workspace/'+opts.projectName+'/resources/'+r,'base64');
            files.forEach(function(file){
                if (file.name!='map.json') {
                    embedResourceCode+=
                        've_local.resources["resources/'+r+'/'+file.name+'"]=' +
                        '"'+file.content+'";\n';
                }
            });
        } else {
            fs.createFolderSync('workspace/'+opts.projectName+'/out/resources/'+r);
            fs.copyFolderSync('workspace/'+opts.projectName+'/resources/'+r,'workspace/'+opts.projectName+'/out/resources/'+r);
            fs.deleteFileSync('workspace/'+opts.projectName+'/out/resources/'+r+'/map.json');
        }
    });

    if (opts.embedResources) {
        embedResourceCode+='})();';
        sourceMain.add(embedResourceCode);
    }

    var indexHtml = fs.readFileSync('resources/generatorResources/index.html');

    if (opts.embedScript) {
        indexHtml = indexHtml.replace('{{script}}','<script>\n'+sourceMain.get()+'\n</script>');
        fs.writeFileSync('workspace/'+opts.projectName+'/out/index.html',indexHtml);
    } else {
        fs.writeFileSync('workspace/'+opts.projectName+'/out/main.js',sourceMain.get());
        indexHtml = indexHtml.replace('{{script}}','<script src="main.js"></script>');
        fs.writeFileSync('workspace/'+opts.projectName+'/out/index.html',indexHtml);
    }

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

var prepareGeneratorParams = function(opts){
    var resourcesOpts = createResourcesParams(opts);
    return  {
        resourceNames:resourcesController.RESOURCE_NAMES,
        opts: opts,
        commonResources: resourcesOpts.commonResources,
        specialResources: resourcesOpts.specialResources,
        commonBehaviour:createCommonBehaviourParams(opts)
    };
};

module.exports.generate = function(opts,callback){

    console.log('generate options:',opts);


    var sourceMain = new Source();
    sourceMain.addCommonTemplates('resources/generatorResources/lib');
    sourceMain.addCommonJsModules(
        'resources/generatorResources/modules',
        prepareGeneratorParams(opts)
    );
    sourceMain.add("require('index');"); // add entry point

    processGameResourcesFiles(sourceMain,opts);

    callback({});
};

module.exports.Source = Source;