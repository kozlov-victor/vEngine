const fs = require.main.require('./node-app/base/fs');
const hbs = require('handlebars');
const Compressor = require.main.require('./client-app/coreEngine/src/utils/compressor');
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const configFn = require.main.require('./node-app/generator/webpack.config');
const minify = require('html-minifier').minify;

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

    _createError(params,e){
        if (!e) e = '';
        let error = e.toString().split('"').join("'");
        fs.createFileSync  (`workspace/${params.projectName}/out/bundle.js`,
            fs.readFileSync('./node-app/generator/generatorError.js').replace('${error}',error)
        );
    }

    generate(params,callback){

        try {

            let config = configFn(params);

            fs.createFolderSync(`workspace/${params.projectName}/out/`);

            let allScripts = fs.readDirSync(`workspace/${params.projectName}/scripts`).
            map((s)=>{return s.content}).join('\n');
            fs.createFileSync (`./node-app/generator/build/allScripts.js`,allScripts);

            fs.copyFolderSync(`workspace/${params.projectName}/resources/`,`workspace/${params.projectName}/out/`);
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
            let debugJs = params.debug?fs.readFileSync('./assets/js/debug.js'):'';
            indexHtml = indexHtml.replace('${debug}',params.debug?`<script>${debugJs}</script>`:'');
            indexHtml = indexHtml.replace('${hash}',this.cnt++);
            // if (params.minify) {
            //     indexHtml = minify(indexHtml,{ // https://www.npmjs.com/package/html-minifier
            //         removeAttributeQuotes: true,
            //         removeTagWhitespace: true,
            //         minifyCSS: true
            //     });
            //     indexHtml = indexHtml.split('\n').map(it=>it.trim()).join('');
            // }
            let repositoryData = JSON.parse(fs.readFileSync(`./workspace/${params.projectName}/repository.json`));
            //repositoryData = Compressor.compressJSON(repositoryData);
            let gamePropsData = JSON.parse(fs.readFileSync(`./workspace/${params.projectName}/gameProps.json`));

            fs.createFileSync  (`workspace/${params.projectName}/out/index.html`,indexHtml);

            config.plugins.push(
                new webpack.DefinePlugin({
                    REPOSITORY_DATA: stringify(repositoryData),
                    GAME_PROPS_DATA: stringify(gamePropsData),
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
                    this._createError(params,e);
                    callback({success:false,error:error})
                }
                else {

                    console.log('webpack compiled');
                    if (data.compilation && data.compilation.errors && data.compilation.errors[0]) {
                        console.log(data.compilation.errors);
                        let errorMsg = data.compilation.errors[0].details || data.compilation.errors[0].toString();
                        console.error(errorMsg);
                        this._createError(params,JSON.stringify(errorMsg));
                        callback({success:false});
                    } else {

                        let appBundleJs = fs.readFileSync('./node-app/generator/build/bundle.js');
                        fs.createFileSync  (`workspace/${params.projectName}/out/bundle.js`,appBundleJs);

                        callback({success:true});
                    }
                }
            });
        } catch (e){
            this._createError(params,e);
            callback({success:false});
        }

    }

}

module.exports = new GeneratorService();