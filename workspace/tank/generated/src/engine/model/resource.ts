
import {BaseModel} from './baseModel'

declare const DEBUG:boolean;

export abstract class Resource extends BaseModel {

    protected resourceMap:{[key:string]:string} = {};

    getResourceMap(): {[p: string]: string} {
        return this.resourceMap;
    }

    getDefaultResourcePath():string{
        return this.resourceMap['main'];
    }

    setDefaultResourcePath(path){
        this.resourceMap['main'] = path;
    }

    setResourcePath(path,name){
        this.resourceMap[name] = path;
    }

    getResourcePathByName(name:string):string {
        return this.resourceMap[name];
    }

    hasResourceWithName(name:string):boolean {
        return !!this.resourceMap[name];
    }

    getAllResourcePathes():string[]{
        return Object.keys(this.resourceMap).map(k=>this.resourceMap[k]);
    }


}