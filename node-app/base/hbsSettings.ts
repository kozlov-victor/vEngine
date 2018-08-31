import {nodeRequire} from "./fns";

const fs = nodeRequire('fs');
const handlebars = nodeRequire('handlebars');
const typescript = nodeRequire('typescript');

export class HbsSettings {

    cache = {};

    constructor(){
        handlebars.registerHelper('json', (obj)=> {
            return JSON.stringify(obj);
        });
        handlebars.registerHelper('isEmptyObject', (obj)=> {
            return Object.keys(obj).length>0;
        });
        handlebars.registerHelper('var',(name, value, context)=>{
            this[name] = value;
        });
        handlebars.registerHelper('include',(name, value, context)=>{
            let fileSource = fs.readFileSync(`./node-app/mvc/views/${name}`,{encoding:'utf-8'});
            if (name.endsWith('.ts')) {
                if (this.cache[fileSource]) return this.cache[fileSource];
                this.cache[fileSource] =
                    '<script>\n' +
                    typescript.transpileModule(fileSource, {
                        compilerOptions: { declaration:true, module: typescript.ModuleKind.CommonJS }
                    }).outputText +
                    '</script>\n';
                return this.cache[fileSource];
            } else return fileSource;
        });
        handlebars.registerHelper('script',(name, value, context)=>{
            let appMeta = JSON.parse(fs.readFileSync('./app-meta.json'));
            return `<script onerror="onLoadingError()" type="text/javascript" src="${name}?hash=${appMeta.hash}"></script>`
        });
        handlebars.registerHelper('style',(name, value, context)=>{
            let appMeta = JSON.parse(fs.readFileSync('./app-meta.json'));
            return `<link rel="stylesheet" type="text/css" href="${name}?hash=${appMeta.hash}">`
        });
    }
}