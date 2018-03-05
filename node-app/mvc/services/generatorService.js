const fs = require.main.require('./node-app/base/fs');
const webpack = require('webpack');
const configFn = require.main.require('./node-app/generator/webpack.config');
const termToHtml = require('./termToHtml');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

class GeneratorService {

    constructor(){
        this.cnt=0;
        this.compilerCache = {};
    }

    static _createError(params,error){
        if (!error) error = '';
        fs.createFileSync(`workspace/${params.projectName}/out/index.html`,
            fs.readFileSync('./node-app/generator/error.html').replace('${error}',termToHtml(error))
        );

    }


    static createCompiler(params){
        let config = configFn(params);
        config.plugins.push(
            new webpack.DefinePlugin({
                DEBUG: !!params.debug
            })
        );
        let compiler = webpack(config);
        let lastMsg = '';
        let cb = null;
        compiler.apply(new ProgressPlugin((percentage, msg)=> {
            let m = (~~(percentage * 100)) + '% ' + msg;
            if (lastMsg!==m) {
                lastMsg = m;
                if (cb) cb(m);
            }
        }));
        return {
            nativeCompiler:compiler,
            onProgress: (fn)=>{
                cb = fn;
            }
        };
    }

    getCompiler(params){
        let key = JSON.stringify(params);
        if (!this.compilerCache[key]) this.compilerCache[key] = GeneratorService.createCompiler(params);
        return this.compilerCache[key];
    }

    generate(params,resp,callback){

        console.log('generation started',params);
        try {

            fs.createFolderSync(`workspace/${params.projectName}/out/`);
            fs.createFolderSync(`workspace/${params.projectName}/generated/src/engine`);
            fs.createFolderSync(`workspace/${params.projectName}/generated/src/app`);

            fs.copyFolderSync(`client-app/engine`,`workspace/${params.projectName}/generated/src/`);
            fs.copyFolderSync(`workspace/${params.projectName}/scripts`,`workspace/${params.projectName}/generated/src/app/`);
            let allScripts = fs.readDirSync(`workspace/${params.projectName}/scripts`).map(it=>it.name.split('.')[0]);
            let allScriptCode = '';
            allScripts.forEach(scriptName=>{
                allScriptCode+=`export {${scriptName[0].toUpperCase()}${scriptName.substr(1)}Behaviour} from './${scriptName}'\n`
            });
            allScriptCode = allScriptCode.split('  ').join('');
            fs.createFileSync(`workspace/${params.projectName}/generated/src/app/scripts/allScripts.js`,allScriptCode);

            fs.copyFolderSync(`workspace/${params.projectName}/resources/`,`workspace/${params.projectName}/out/`);

            let repository =  JSON.parse(fs.readFileSync(`./workspace/${params.projectName}/repository.json`));
            let gameProps =  JSON.parse(fs.readFileSync(`./workspace/${params.projectName}/gameProps.json`));
            fs.createFileSync(
                `./workspace/${params.projectName}/generated/src/app/repository.ts`,
                `export let repository:any = \n\t${JSON.stringify(repository,null,4)};`)
            ;
            fs.createFileSync(
                `./workspace/${params.projectName}/generated/src/app/gameProps.ts`,
                `export let gameProps:any = \n\t${JSON.stringify(gameProps,null,4)};`)
            ;

            fs.copyFileSync('node-app/generator/index.tpl',`workspace/${params.projectName}/generated/src/index.ts`);


            let compiler = this.getCompiler(params);
            resp.setHeader('Content-Type', 'text/html');
            compiler.onProgress((msg)=>{
                resp.write(msg + '<br>');
            });
            compiler.nativeCompiler.run((err, data) => {
                if (err) {
                    console.error('compiler run error: ',err);
                    GeneratorService._createError(params,err);
                    resp.write("error<br>");
                    resp.end();
                }
                else {

                    if (data.compilation && data.compilation.errors && data.compilation.errors[0]) {
                        console.error('compiled with errors');
                        //console.error(data.compilation.errors);
                        let errorMsg = data.compilation.errors.map(err=>{
                            let msg = (err.details || err.message || err.toString());
                            if (err.file) msg+=`\n\t at file ${err.file}`;
                            else if (err.module && err.module && err.module.resource)
                                msg+=`\n\t at file ${err.module.resource}`;
                            return msg;
                        }).join('\n\t---------\t\n');
                        GeneratorService._createError(params,errorMsg);
                        resp.write("error<br>");
                        resp.end();
                    } else {
                        let embeddedResources = [];
                        // fs.readDirSync(`workspace/${params.projectName}/out/`).forEach(res=>{
                        //    let ext = res.fullName.split('.').pop();
                        //    if (['svg'].indexOf(ext)>-1) {
                        //        fs.deleteFileSync(res.fullName);
                        //        let resId = `resources/${res.name}`.split(/[/.]/).join('_');
                        //        embeddedResources.push(`<div style="display:none" id="${resId}">${res.content}</div>`);
                        //    }
                        // });

                        let indexHtml = fs.readFileSync('./node-app/generator/index.html');
                        indexHtml = indexHtml.replace('${embeddedResources}',embeddedResources.join(''));
                        let debugJs = params.debug?fs.readFileSync(`./workspace/${params.projectName}/generated/tmp/debug.js`):'';
                        indexHtml = indexHtml.replace('${debug}',params.debug?`<script>${debugJs}</script>`:'');
                        indexHtml = indexHtml.replace('${hash}',this.cnt++);
                        indexHtml = indexHtml.replace('${projectName}',params.projectName);
                        fs.createFileSync(`workspace/${params.projectName}/out/index.html`,indexHtml);

                        let appBundleJs = fs.readFileSync(`./workspace/${params.projectName}/generated/tmp/bundle.js`);
                        fs.createFileSync(`workspace/${params.projectName}/out/bundle.js`,appBundleJs);
                        //fs.deleteFolderSync(`./workspace/${params.projectName}/generated/tmp`);
                        console.log('compiled with no errors');
                        //callback({success:true});
                        resp.end();
                    }
                }
            });
        } catch (e){
            console.error(e);
            GeneratorService._createError(params,e.toString());
            //callback({success:false});
            resp.write("error<br>");
            resp.end();
        }

    }

}

module.exports = new GeneratorService();