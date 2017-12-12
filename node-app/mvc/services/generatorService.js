const fs = require.main.require('./node-app/base/fs');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const configFn = require.main.require('./node-app/generator/webpack.config');
const termToHtml = require('./termToHtml');

function stringify(obj_from_json){
    if(typeof obj_from_json !== "object" || Array.isArray(obj_from_json)){
        // not an object, stringify using native function
        return JSON.stringify(obj_from_json);
    }
    // Implements recursive object serialization according to JSON spec
    // but without quotes around the keys.
    let props = Object
        .keys(obj_from_json)
        .map(key => `${key}:${stringify(obj_from_json[key])}`)
        .join(",");
    return `{${props}}`;
}

class GeneratorService {

    constructor(){
        this.cnt=0;
    }

    static _createError(params,error){
        if (!error) error = '';
        fs.createFileSync(`workspace/${params.projectName}/out/index.html`,
            fs.readFileSync('./node-app/generator/error.html').replace('${error}',termToHtml(error))
        );

    }

    generate(params,callback){

        console.log('generation started',params);
        try {

            let config = configFn(params);

            fs.createFolderSync(`workspace/${params.projectName}/out/`);
            fs.createFolderSync(`workspace/${params.projectName}/generated/src/engine`);
            fs.createFolderSync(`workspace/${params.projectName}/generated/src/app`);

            fs.copyFolderSync(`client-app/engine`,`workspace/${params.projectName}/generated/src/`);
            fs.copyFolderSync(`workspace/${params.projectName}/scripts`,`workspace/${params.projectName}/generated/src/app/`);
            let allScripts = fs.readDirSync(`workspace/${params.projectName}/scripts`).map(it=>it.name.split('.')[0]);
            let allScriptCode = '';
            allScripts.forEach(scriptName=>{
                allScriptCode+=`import {${scriptName[0].toUpperCase()}${scriptName.substr(1)}Behaviour} from './${scriptName}'\n`
            });
            allScriptCode+=`
                export {
                    \t${allScripts.map(scriptName=>`${scriptName[0].toUpperCase()}${scriptName.substr(1)}Behaviour`).join(',')}
                }            
            `;
            allScriptCode = allScriptCode.split('  ').join('');
            fs.createFileSync(`workspace/${params.projectName}/generated/src/app/scripts/allScripts.js`,allScriptCode);

            fs.copyFolderSync(`workspace/${params.projectName}/resources/`,`workspace/${params.projectName}/out/`);

            fs.copyFileSync(`./workspace/${params.projectName}/repository.json`,`./workspace/${params.projectName}/generated/src/app/repository.json`);
            fs.copyFileSync(`./workspace/${params.projectName}/gameProps.json`,`./workspace/${params.projectName}/generated/src/app/gameProps.json`);
            fs.copyFileSync('node-app/generator/index.js',`workspace/${params.projectName}/generated/src/index.js`);

            config.plugins.push(
                new webpack.DefinePlugin({
                    DEBUG: !!params.debug
                })
            );
            if (params.minify && false) {
                config.plugins.push(
                    new UglifyJSPlugin({
                        output: { // http://lisperator.net/uglifyjs/codegen
                            beautify: false,
                            comments: false
                        },
                        compress: { // http://lisperator.net/uglifyjs/compress, http://davidwalsh.name/compress-uglify
                            sequences: true,
                            booleans: true,
                            conditionals: true,
                            hoist_funs: false,
                            hoist_vars: false,
                            warnings: false
                        },
                    })
                )
            }

            let compiler = webpack(config);

            compiler.run((err, data) => {
                if (err) {
                    console.error('compiler run error: ',err);
                    GeneratorService._createError(params,err);
                    callback({success:false,error:error})
                }
                else {

                    if (data.compilation && data.compilation.errors && data.compilation.errors[0]) {
                        console.error('compilation.errors:',data.compilation.errors);
                        let errorMsg = data.compilation.errors.map(err=>{
                            let msg = (err.details || err.toString())+'\n'
                            return msg;
                        });
                        console.error('compilation error:',data.compilation.errors);
                        GeneratorService._createError(params,errorMsg.toString());
                        callback({success:false});
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
                        fs.deleteFolderSync(`./workspace/${params.projectName}/generated/tmp`);

                        callback({success:true});
                    }
                }
            });
        } catch (e){
            console.error(e);
            GeneratorService._createError(params,e.toString());
            callback({success:false});
        }

    }

}

module.exports = new GeneratorService();