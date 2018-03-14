
import BaseModel from './baseModel'
import Game from "../core/game";

declare const DEBUG:boolean;

export default abstract class Resource extends BaseModel {

    private resourceMap:{[key:string]:string} = {};


    getDefaultResourcePath(){
        if (DEBUG) {
            if (!this.resourceMap['main']) {
                console.error(this);
                throw `can not get resource path: resource with name "${'main'}" not provided`;
            }
        }
        return this.resourceMap['main'];
    }

    setResourcePath(path){
        this.resourceMap['main'] = path;
    }

    getResourcePathByName(name:string) {
        if (DEBUG) {
            if (!this.resourceMap[name]) {
                console.error(this);
                throw `can not get resource path: resource with name "${name}" not provided`;
            }
        }
        return this.resourceMap[name];
    }

    hasResourceWithName(name:string):boolean {
        return !!this.resourceMap[name];
    }

    getAllResourcePathes():string[]{
        return Object.keys(this.resourceMap).map(k=>this.resourceMap[k]);
    }


}