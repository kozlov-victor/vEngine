const fs = require.main.require('./node-app/base/fs');
const resourcesService = require.main.require('./node-app/mvc/services/resourceService');
const nodeHint = require('node-hint');
const UglifyJS = require("uglify-js");
const ejs = require('ejs');
const hbs = require('handlebars');
const babel  = require("babel-core");


class Source {

    constructor(){
        this.res = [];
    }

    add(s){
        this.res.push(s);
    };
    processTemplate(path,params){
        let code = fs.readFileSync(path).split('//<code>').join('');
        try {
            return hbs.compile(code)(params);
        } catch (e) {
            console.error(`can not process code ${code}`);
            throw e
        }
    }
    extractModuleName(path){
        return path.replace('.js','').split('/').pop();
    }
    wrapAsCommonJS(path,code,params){
        let mdlName = this.extractModuleName(path);
        return this.processTemplate('resources/generatorResources/misc/moduleTemplate.js',{
            name: mdlName,
            code: this.addLeadSpace(code),
            opts:params||{}
        });
    }
    addLeadSpace(code){
        return (
            code.split('\n').map(function(item){
                return ' '+item;
            }).join('\n')
        );
    }
    addTemplate(path,params) {
        this.add(this.processTemplate(path,params));
    }
    addTemplates(path,params) {
        let self = this;
        fs.readDirSync(path).forEach(function(file){
            self.addTemplate(file.fullName,params);
        });
    }
    addCommonJsModule(path,params){
        let code = this.processTemplate(path,params);
        code = this.wrapAsCommonJS(path,code,params);
        this.add(code);
    }
    addCommonJsModules(path,params){
        let self = this;
        fs.readDirSync(path).forEach(function(file){
            self.addCommonJsModule(file.fullName,params);
        });
    }
    addFiles(path){
        let self = this;
        fs.readDirSync(path).forEach(function(file){
            self.addTemplate(file.fullName,{});
        });
    }
    get(){
        let code =  this.res.join('\n');
        let gen = babel.transform(code, {
            presets: ['es2015'],
            plugins: ["transform-es2015-function-name"]
        });
        return gen.code;
    }
}



const createResourcesParams = opts=>{
    let templateObj = {};
    templateObj.commonResources = {};
    templateObj.specialResources = {};
    resourcesService.RESOURCE_NAMES.forEach(function(r){
        templateObj.commonResources[r] = JSON.parse(fs.readFileSync('workspace/'+opts.projectName+'/resources/'+r+'/map.json'));
    });
    templateObj.commonResources.gameProps = JSON.parse(fs.readFileSync('workspace/'+opts.projectName+'/gameProps.json'));

    templateObj.specialResources.gameObjectScripts = fs.readDirSync('workspace/'+opts.projectName+'/resources/script/gameObjectProto','utf8');
    templateObj.specialResources.sceneScripts = fs.readDirSync('workspace/'+opts.projectName+'/resources/script/scene','utf8');
    templateObj.embeddedResources = {};

    opts.embedResources && ['spriteSheet', 'font', 'sound'].forEach(function (r) {
        let files = fs.readDirSync('workspace/' + opts.projectName + '/resources/' + r, 'base64');
        files.forEach(function (file) {
            if (file.name != 'map.json') {
                templateObj.embeddedResources['resources/' + r + '/' + file.name] =
                    file.content
            }
        });
    });
    return templateObj;
};

const createCommonBehaviourParams = opts=>{
    return {}; // todo
    let gameObjects = JSON.parse(fs.readFileSync('workspace/'+opts.projectName+'/resources/gameObject/map.json'));
    let fileNames = {};
    gameObjects.forEach(function(go){
        go.commonBehaviour.forEach(function(cb){
            fileNames[cb.name] = 1;
        });
    });
    let res = [];
    Object.keys(fileNames).forEach(function(name){
        res.push({
            name:name,
            content: fs.readFileSync('resources/generatorResources/commonBehaviour/'+name+'.js')
        });
    });
    return res;
};

const minify = code=> {
    return  (
        UglifyJS.minify(code, {
            fromString: true,
            mangle:{toplevel:true,eval:true},
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
    }).code);
};

const processScriptPlace = (indexHtml,scriptPlaceName,code,outCodeFileName,opts)=> {

    if (opts.embedScript) {
        indexHtml = indexHtml.replace('{{'+scriptPlaceName+'}}','<script>\n'+code+'\n</script>');
    } else {
        fs.writeFileSync('workspace/'+opts.projectName+'/out/'+outCodeFileName,code);
        indexHtml = indexHtml.replace('{{'+scriptPlaceName+'}}','<script src="'+outCodeFileName+'"></script>');
    }
    return indexHtml;
};

const processGameResourcesFiles = (generatedCode,opts)=>{
    fs.deleteFolderSync('workspace/'+opts.projectName+'/out');
    fs.createFolderSync('workspace/'+opts.projectName+'/out/');

    if (!opts.embedResources) {
        let resMap = {};
        ['spriteSheet','font','sound'].forEach(function(r){
            JSON.parse(fs.readFileSync('workspace/'+opts.projectName+'/resources/'+r+'/map.json')).
                forEach(function(mapJsonItem){
                    let resourcePath = mapJsonItem.resourcePath;
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

    let indexHtml = fs.readFileSync('resources/generatorResources/misc/index.html');
    let debugCode = fs.readFileSync('resources/generatorResources/shared/debug.js');

    indexHtml = processScriptPlace(indexHtml,'script_main',generatedCode,'main.js',opts);
    indexHtml = processScriptPlace(indexHtml,'script_debug',debugCode,'debug.js',opts);

    fs.writeFileSync('workspace/'+opts.projectName+'/out/index.html',indexHtml);

    return {};

};


const hint = (sourceMain)=>{
    //nodeHint.hint(
    //    {
    //        source:sourceMain.get()
    //    },
    //    function(result,lintData){
    //        callback(lintData);
    //    }
    //);
};

const prepareGeneratorParams = opts =>{
    let resourcesOpts = opts.projectName?createResourcesParams(opts):{};
    let commonBehaviourParams = opts.projectName?createCommonBehaviourParams(opts):{};
    let shaders = {};
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

module.exports.generateEngine = opts =>{
    let generatorParams = prepareGeneratorParams(opts);

    let sourceMain = new Source();
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
    let code = sourceMain.get();
    if (opts.minify) {
        code = minify(code);
    }
    return code;
};

module.exports.generate = (opts,callback)=>{

    let generatedCode = module.exports.generateEngine(opts);
    processGameResourcesFiles(generatedCode,opts);

    callback({});
};

module.exports.Source = Source;