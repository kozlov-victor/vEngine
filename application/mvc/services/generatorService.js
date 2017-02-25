var fs = require.main.require('./application/base/fs');
var resourcesService = require.main.require('./application/mvc/services/resourcesService');
var nodeHint = require('node-hint');
var UglifyJS = require("uglify-js");
var ejs = require('ejs');
var hbs = require('handlebars');


var Source = function(){
    var res = [];
    var self = this;
    this.add = function(s){
        res.push(s);
    };
    var processTemplate = function(path,params){
        //return ejs.render(fs.readFileSync(path).split('//<code>').join(''),params);
        var code = fs.readFileSync(path).split('//<code>').join('');
        return hbs.compile(code)(params);
    };
    var extractModuleName = function(path){
        return path.replace('.js','').split('/').pop();
    };
    var wrapAsCommonJS = function(path,code,params){
        var mdlName = extractModuleName(path);
        return processTemplate('resources/generatorResources/misc/moduleTemplate.js',{
            name: mdlName,
            code: addLeadTab(code),
            opts:params||{}
        });
    };
    var addLeadTab = function(code){
        return (
            code.split('\n').map(function(item){
                return '\t'+item;
            }).join('\n')
        );
    };
    this.addTemplate = function(path,params) {
        self.add(processTemplate(path,params));
    };
    this.addTemplates = function(path,params) {
        var self = this;
        fs.readDirSync(path).forEach(function(file){
            self.addTemplate(file.fullName,params);
        });
    };
    this.addCommonJsModule = function(path,params){
        var code = processTemplate(path,params);
        code = wrapAsCommonJS(path,code,params);
        self.add(code);
    };
    this.addCommonJsModules = function(path,params){
        var self = this;
        fs.readDirSync(path).forEach(function(file){
            self.addCommonJsModule(file.fullName,params);
        });
    };
    this.addFile = function(path,params){
        self.addFile(path,params);
    };
    this.addFiles = function(path){
        var self = this;
        fs.readDirSync(path).forEach(function(file){
            self.addTemplate(file.fullName,{});
        });
    };
    this.get = function(){
        return res.join('\n');
    };
};



var createResourcesParams = function(opts){
    var templateObj = {};
    templateObj.commonResources = {};
    templateObj.specialResources = {};
    resourcesService.RESOURCE_NAMES.forEach(function(r){
        templateObj.commonResources[r] = JSON.parse(fs.readFileSync('workspace/'+opts.projectName+'/resources/'+r+'/map.json'));
    });
    templateObj.commonResources.gameProps = JSON.parse(fs.readFileSync('workspace/'+opts.projectName+'/gameProps.json'));

    templateObj.specialResources.gameObjectScripts = fs.readDirSync('workspace/'+opts.projectName+'/resources/script/gameObject','utf8');
    templateObj.specialResources.sceneScripts = fs.readDirSync('workspace/'+opts.projectName+'/resources/script/scene','utf8');
    templateObj.embeddedResources = {};

    opts.embedResources && ['spriteSheet', 'font', 'sound'].forEach(function (r) {
        var files = fs.readDirSync('workspace/' + opts.projectName + '/resources/' + r, 'base64');
        files.forEach(function (file) {
            if (file.name != 'map.json') {
                templateObj.embeddedResources['resources/' + r + '/' + file.name] =
                    file.content
            }
        });
    });
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
            content: fs.readFileSync('resources/generatorResources/commonBehaviour/'+name+'.js')
        });
    });
    return res;
};

var minify = function(code) {
    var code =  UglifyJS.minify(code, {
        fromString: true,
        mangle:{toplevel:true,eval:true},
        //mangleProperties: { regex: /GameObject/ },
        compress: {
            screw_ie8: true,
            sequences: true,
            properties: true,
            dead_code: true,
            drop_debugger: true,
            comparisons: true,
            conditionals: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            hoist_funs: true,
            if_return: true,
            join_vars: true,
            cascade: true,
            drop_console: true
        }
    }).code;
    return code;
};

var processScriptPlace = function(indexHtml,scriptPlaceName,code,outCodeFileName,opts) {
    if (opts.minify) {
        code = minify(code);
    }
    if (opts.embedScript) {
        indexHtml = indexHtml.replace('{{'+scriptPlaceName+'}}','<script>\n'+code+'\n</script>');
    } else {
        fs.writeFileSync('workspace/'+opts.projectName+'/out/'+outCodeFileName,code);
        indexHtml = indexHtml.replace('{{'+scriptPlaceName+'}}','<script src="'+outCodeFileName+'"></script>');
    }
    return indexHtml;
};

var processGameResourcesFiles = function(generatedCode,opts){
    fs.deleteFolderSync('workspace/'+opts.projectName+'/out');
    fs.createFolderSync('workspace/'+opts.projectName+'/out/');

    if (!opts.embedResources) {
        var resMap = {};
        ['spriteSheet','font','sound'].forEach(function(r){
            JSON.parse(fs.readFileSync('workspace/'+opts.projectName+'/resources/'+r+'/map.json')).
                forEach(function(mapJsonItem){
                    var resourcePath = mapJsonItem.resourcePath;
                    if (!resourcePath) return;
                    resMap[resourcePath] = 1;
                });
        });
        Object.keys(resMap).forEach(function(key){
            fs.copyFileSync(
                'workspace/'+opts.projectName+'/'+key,
                'workspace/'+opts.projectName+'/out/'+key
            );
        });
    }

    var indexHtml = fs.readFileSync('resources/generatorResources/misc/index.html');
    var debugCode = fs.readFileSync('resources/generatorResources/shared/debug.js');

    indexHtml = processScriptPlace(indexHtml,'script_main',generatedCode,'main.js',opts);
    indexHtml = processScriptPlace(indexHtml,'script_debug',debugCode,'debug.js',opts);

    fs.writeFileSync('workspace/'+opts.projectName+'/out/index.html',indexHtml);

    return {};

};


var hint = function(sourceMain){
    //nodeHint.hint(
    //    {
    //        source:sourceMain.get()
    //    },
    //    function(result,lintData){
    //        callback(lintData);
    //    }
    //);
};

var prepareGeneratorParams = function(opts){
    var resourcesOpts = opts.projectName?createResourcesParams(opts):{};
    var commonBehaviourParams = opts.projectName?createCommonBehaviourParams(opts):{};
    var shaders = {};
    fs.
        getDirListSync('resources/generatorResources/shaders')
        .forEach(function (dir) {
            shaders[dir] = {};
            fs.readDirSync('resources/generatorResources/shaders/'+dir,'utf-8').
                forEach(function(file){
                    shaders[dir][file.name] = file.content;
                });
        });
    return  {
        resourceNames:resourcesService.RESOURCE_NAMES,
        opts: opts,
        commonResources: resourcesOpts.commonResources||{},
        specialResources: resourcesOpts.specialResources||{},
        embeddedResources: resourcesOpts.embeddedResources||{},
        commonBehaviour:commonBehaviourParams,
        shaders:shaders
    };
};

module.exports.generateEngine = function(opts){
    var generatorParams = prepareGeneratorParams(opts);

    var sourceMain = new Source();
    sourceMain.addTemplates('resources/generatorResources/lib/common',generatorParams);
    sourceMain.addCommonJsModules('resources/generatorResources/lib/class',generatorParams);
    sourceMain.addCommonJsModules(
        'resources/generatorResources/modules',
        generatorParams
    );
    if (!opts.engineOnly) {
        sourceMain.addCommonJsModule(
            'resources/generatorResources/index.js',
            generatorParams
        );
        sourceMain.add("require('index');");
    }
    return sourceMain.get();
};

module.exports.generate = function(opts,callback){

    var generatedCode = module.exports.generateEngine(opts);
    processGameResourcesFiles(generatedCode,opts);

    callback({});
};

module.exports.Source = Source;