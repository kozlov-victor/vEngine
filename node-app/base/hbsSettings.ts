import {nodeRequire} from "./fns";
const fs = nodeRequire('fs');

const handlebars = nodeRequire('handlebars');

export class HbsSettings {
    constructor(){
        handlebars.registerHelper('json', function(obj) {
            return JSON.stringify(obj);
        });
        handlebars.registerHelper('isEmptyObject', function(obj) {
            return Object.keys(obj).length>0;
        });
        handlebars.registerHelper('var',function(name, value, context){
            this[name] = value;
        });
        handlebars.registerHelper('include',function(name, value, context){
            return fs.readFileSync(`./node-app/mvc/views/${name}`);
        });
        handlebars.registerHelper('script',function(name, value, context){
            return `<script onerror="onLoadingError()" type="text/javascript" src="${name}"></script>`
        });
    }
}