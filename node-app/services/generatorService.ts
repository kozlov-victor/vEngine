
import {nodeRequire} from "../base/fns";

const webpack = nodeRequire('webpack');


const ProgressPlugin = nodeRequire('webpack/lib/ProgressPlugin');

import fs from '../base/fs';
import {configFn} from '../generator/webpack.config';
import {termToHtml} from './termToHtml';

class GeneratorService {

    cnt:number = 0;
    compilerCache:any  = {};
    processCache:any = {};


    static async _createError(params,error){
        if (!error) error = '';
        console.log('compiling error',error);
        let content:string = (await fs.readFile('./node-app/generator/error.html')) as string;
        content = content.replace('${error}',termToHtml(error));
        await fs.createFile(`workspace/${params.projectName}/out/index.html`,content);
    }


    static createCompiler(params){
        let config = configFn(params);
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
        // let key = JSON.stringify(params);
        // if (!this.compilerCache[key]) this.compilerCache[key] = GeneratorService.createCompiler(params);
        // return this.compilerCache[key];
        return GeneratorService.createCompiler(params);
    }


    private async clearFolders(params){
       console.log('clear folders');
       await fs.deleteFolder(`workspace/${params.projectName}/generated/`);
    }

    private async createFolders(params){
        console.log('creating folders');
        await fs.createFolder(`workspace/${params.projectName}/out/`);
        await fs.createFolder(`workspace/${params.projectName}/generated/src/engine`);
        await fs.createFolder(`workspace/${params.projectName}/generated/src/app`);
    }

    private async generateData(params) {
        console.log('generating data',params);
        await fs.copyFolder(`client-app/engine`,`workspace/${params.projectName}/generated/src/`);
        await fs.copyFolder(`workspace/${params.projectName}/scripts`,`workspace/${params.projectName}/generated/src/app/`);
        let allScripts = (await fs.readDir(`workspace/${params.projectName}/scripts`,undefined,false)).map(it=>it.name.split('.')[0]);
        let allScriptCode = '';
        allScripts.forEach(scriptName=>{
            allScriptCode+=`export {${scriptName[0].toUpperCase()}${scriptName.substr(1)}Behaviour} from './${scriptName}'\n`
        });
        allScriptCode = allScriptCode.split('  ').join('');
        await fs.createFile(`workspace/${params.projectName}/generated/src/app/scripts/allScripts.js`,allScriptCode);

        let repository =  JSON.parse(await fs.readFile(`./workspace/${params.projectName}/repository.json`) as string);
        let gameProps =  JSON.parse(await fs.readFile(`./workspace/${params.projectName}/gameProps.json`) as string);
        await fs.createFile(
            `./workspace/${params.projectName}/generated/src/app/repository.ts`,
            `export let repository:any = \n\t${JSON.stringify(repository,null,4)};`)
        ;
        await fs.createFile(
            `./workspace/${params.projectName}/generated/src/app/gameProps.ts`,
            `export let gameProps:any = \n\t${JSON.stringify(gameProps,null,4)};`)
        ;

        await fs.copyFile('node-app/generator/index.tpl',`workspace/${params.projectName}/generated/src/index.ts`);

        let embeddedResources = {};
        if (!params.embedResources) {
            await fs.copyFolder(`workspace/${params.projectName}/resources/`,`workspace/${params.projectName}/out/`);
        }
        else  {
            (await fs.readDir(`workspace/${params.projectName}/resources`,'binary')).forEach(file=>{
                embeddedResources[`resources/${file.name}`] = `data:image/${file.ext};base64,`+new Buffer(file.content).toString('base64');
            });
        }
        await fs.createFile(
            `./workspace/${params.projectName}/generated/src/app/embeddedResources.ts`,
            `export let embeddedResources:any = \n\t${JSON.stringify(embeddedResources,null,4)};`)
        ;

    }

    private async compile(params,response) {
        return new Promise((resolve,reject)=>{
            console.log('compiling');
            let compiler = this.getCompiler(params);
            response.setHeader('Content-Type', 'text/html');
            compiler.onProgress((msg)=>{
                global.process.stdout.write(`\r                                                             `);
                global.process.stdout.write(`\r${msg}`);
                response.write(msg + '<br>');
            });
            compiler.nativeCompiler.run(async (err, data) => {

                if (err) {
                    console.error('compiler run error: ',err);
                    await GeneratorService._createError(params,err);
                    response.write("error<br>");
                    response.end();
                    reject(err);
                }
                else {
                    if (data.compilation && data.compilation.errors && data.compilation.errors[0]) {
                        console.error(`compiled with ${data.compilation.errors.length} error(s)`);
                        let errorMsg = data.compilation.errors.map(err=>{
                            let msg = (err.details || err.message || err.toString());
                            if (err.file) msg+=`\n\t at file ${err.file}`;
                            else if (err.module && err.module && err.module.resource)
                                msg+=`\n\t at file ${err.module.resource}`;
                            return msg;
                        }).join('\n\t---------\t\n');
                        //await GeneratorService._createError(params,errorMsg); // todo need??????
                        response.write("error<br>");
                        response.end();
                        reject(errorMsg);
                    } else {

                        console.log('creating index.html');
                        let indexHtml:string = await fs.readFile('./node-app/generator/index.html') as string;
                        let debugJs:string = '';
                        if (params.debug) debugJs = await fs.readFile(`./workspace/${params.projectName}/generated/tmp/debug.js`) as string;
                        indexHtml = indexHtml.replace('${debug}',params.debug?`<script>${debugJs}</script>`:'');
                        indexHtml = indexHtml.replace('${hash}',(this.cnt++).toString());
                        indexHtml = indexHtml.replace('${projectName}',params.projectName);
                        await fs.createFile(`workspace/${params.projectName}/out/index.html`,indexHtml);

                        console.log('creating bundle');
                        let appBundleJs = await fs.readFile(`./workspace/${params.projectName}/generated/tmp/bundle.js`);
                        await fs.createFile(`workspace/${params.projectName}/out/bundle.js`,appBundleJs);
                        //fs.deleteFolderSync(`./workspace/${params.projectName}/generated/tmp`);
                        console.log('compiled with no errors');
                        response.end();
                        resolve();
                    }
                }
            });
        });
    }

    async generate(params,response){

        console.log('cache',this.processCache);
        if (this.processCache[params.projectName]) {
            let message = `generation of ${params.projectName} already started`;
            console.error('generator error',message);
            return;
        }
        try {
            this.processCache[params.projectName] = true;
            await this.clearFolders(params);
            await this.createFolders(params);
            await this.generateData(params);
            await this.compile(params,response);
            delete this.processCache[params.projectName];

        } catch (e){
            delete this.processCache[params.projectName];
            console.error('generator error',e);
            await GeneratorService._createError(params,e.toString());
            response.write("error<br>");
            response.end();
        }
    }

}

export const generatorService = new GeneratorService();