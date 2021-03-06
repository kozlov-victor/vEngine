
import {nodeRequire} from "../base/fns";
import fs from '../base/fs';
import {configFn} from '../generator/webpack.config';
import {termToHtml} from './termToHtml';
import {wsService} from "./ws/wsService";
import {DebugError} from "@engine/debugError";

const webpack = nodeRequire('webpack');
const path = nodeRequire('path');

const ProgressPlugin = nodeRequire('webpack/lib/ProgressPlugin');
const ENGINE_ROOT = path.dirname(nodeRequire.main.filename).split('\\').join('/') + '/client-app/engine';

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
            onProgress: (fn)=>{
                cb = fn;
            },
            run: ()=>{
                return new Promise((resolve,reject)=>{
                    compiler.run((err, data) => {
                       if (err) reject(err);
                       else resolve(data);
                    })
                })
            }
        };
    }

    getCompiler(params){
        return GeneratorService.createCompiler(params);
    }


    private async clearFolders(params){
       console.log('clear folders');
       await fs.deleteFolder(`workspace/${params.projectName}/virtual/`);
    }

    private _replaceRoot(src){
        return src.split('@engine').join(ENGINE_ROOT);
    }

    private async createFolders(params){
        console.log('creating folders');
        await fs.createFolder(`workspace/${params.projectName}/out/`);
        await fs.createFolder(`workspace/${params.projectName}/virtual/`);
    }

    private getMediaTypeByExtension(extension:string){
        if (['png','jpg','jpeg','bmp'].indexOf(extension)>-1) return 'image';
        if (['mp3','ogg'].indexOf(extension)>-1) return 'audio';
        throw new DebugError(`unsupported format ${extension}`);
    }

    private async generateData(params) {
        console.log('generating data',params);
        let allBehaviours = (await fs.readDir(`workspace/${params.projectName}/scripts`,undefined,false)).map(it=>it.name.split('.')[0]);
        let allBehavioursCode = '';
        allBehaviours.forEach(scriptName=>{
            allBehavioursCode+=`export {${scriptName[0].toUpperCase()}${scriptName.substr(1)}Behaviour} from './scripts/${scriptName}'\n`
        });
        allBehavioursCode = allBehavioursCode.split('  ').join('');
        await fs.createFile(`workspace/${params.projectName}/virtual/allBehaviours.ts`,allBehavioursCode);
        await fs.copyFolder(
            `workspace/${params.projectName}/scripts`,
            `workspace/${params.projectName}/virtual/`,
            (source)=>{
                return this._replaceRoot(source);
            }
        );

        let repository =  JSON.parse(await fs.readFile(`./workspace/${params.projectName}/repository.json`) as string);
        let gameProps =  JSON.parse(await fs.readFile(`./workspace/${params.projectName}/gameProps.json`) as string);
        await fs.createFile(
            `./workspace/${params.projectName}/virtual/repository.ts`,
            `export let repository:any = \n\t${JSON.stringify(repository,null,4)};`)
        ;
        await fs.createFile(
            `./workspace/${params.projectName}/virtual/gameProps.ts`,
            `export let gameProps:any = \n\t${JSON.stringify(gameProps,null,4)};`)
        ;

        await fs.copyFile(
            'node-app/generator/index.tpl',
            `workspace/${params.projectName}/virtual/index.ts`,
            (source)=>{
                return this._replaceRoot(source);
            }
        );

        let embeddedResources = {};
        if (!params.embedResources) {
            await fs.copyFolder(`workspace/${params.projectName}/resources/`,`workspace/${params.projectName}/out/`);
        }
        else  {
            (await fs.readDir(`workspace/${params.projectName}/resources`,'binary')).forEach(file=>{
                embeddedResources[`resources/${file.name}`] =
                    `data:${this.getMediaTypeByExtension(file.ext)}/${file.ext};base64,`+new Buffer(file.content).toString('base64');
            });
        }
        await fs.createFile(
            `./workspace/${params.projectName}/virtual/embeddedResources.ts`,
            `export let embeddedResources:any = \n\t${JSON.stringify(embeddedResources,null,4)};`)
        ;

    }

    private async compile(params,response) {
        console.log('compiling');
        wsService.send(params.clientId,{message:'compiling',success:true});
        let compiler = this.getCompiler(params);
        response.setHeader('Content-Type', 'text/html');
        compiler.onProgress((msg)=>{
            global.process.stdout.write(`\r                                                             `);
            global.process.stdout.write(`\r${msg}`);
            wsService.send(params.clientId,{message:msg,success:true});
        });
        let data:any = await compiler.run();

        // if (err) {
        //     console.error('compiler run error: ',err);
        //     await GeneratorService._createError(params,err);
        //     reject(err);
        // }
        // else {
        //
        // }

        if (data.compilation && data.compilation.errors && data.compilation.errors[0]) {
            console.error(`compiled with ${data.compilation.errors.length} error(s)`);
            let errorMsg = data.compilation.errors.map(err=>{
                let msg = (err.details || err.message || err.toString());
                if (err.file) msg+=`\n\t at file ${err.file}`;
                else if (err.module && err.module && err.module.resource)
                    msg+=`\n\t at file ${err.module.resource}`;
                return msg;
            }).join('\n\t---------\t\n');
            throw new DebugError(errorMsg);
        } else {

            console.log('creating index.html');
            let indexHtml:string = await fs.readFile('./node-app/generator/index.html') as string;
            let debugJs:string = '';
            if (params.debug) debugJs = await fs.readFile(`./workspace/${params.projectName}/virtual/debug.js`) as string;
            indexHtml = indexHtml.replace('${debug}',params.debug?`<script>${debugJs}</script>`:'');
            indexHtml = indexHtml.replace('${projectName}',params.projectName);

            console.log('creating bundle');
            let appBundleJs = await fs.readFile(`./workspace/${params.projectName}/virtual/bundle.js`);
            if (params.embedScript) {
                indexHtml = indexHtml.replace('${bundle}',`<script>${appBundleJs}</script>`);
            } else {
                await fs.createFile(`workspace/${params.projectName}/out/bundle.js`,appBundleJs);
                indexHtml = indexHtml.replace('${bundle}',`<script src="bundle.js?${this.cnt++}"></script>`);
            }
            await fs.deleteFolder(`./workspace/${params.projectName}/virtual/`);
            await fs.createFile(`workspace/${params.projectName}/out/index.html`,indexHtml);
            console.log('completed');
        }

    }

    async generate(params,response){

        try {
            if (this.processCache[params.projectName]) {
                let message = `generation of ${params.projectName} already started`;
                await GeneratorService._createError(params,message);
                return;
            }
            this.processCache[params.projectName] = true;
            await this.clearFolders(params);
            await this.createFolders(params);
            await this.generateData(params);
            await this.compile(params,response);
            delete this.processCache[params.projectName];

        } catch (e){
            delete this.processCache[params.projectName];
            console.error('generator error:',e.errorMessage);
            await GeneratorService._createError(params,e.errorMessage || e.toString());
        }
    }

}

export const generatorService = new GeneratorService();