import GameObject from "../../engine/model/generic/gameObject";

declare const Blob:any,atob:any;
declare let Promise:any;



import {confirmEx} from "./userDefinedFns";
import * as mathEx from '../../engine/core/mathEx';

import {editData} from './editData';
import restResource from '../providers/rest/resource';
import restFileSystem from '../providers/rest/fileSystem';
import i18n from '../providers/i18n';

import GameObjectProto from '../../engine/model/generic/gameObjectProto'
import Scene from "../../engine/model/generic/scene";
import Point2d from "../../engine/core/geometry/point2d";
import SpriteSheet from "../../engine/model/generic/spriteSheet";

export default class Utils {
    static getGameObjectCss(gameObj:GameObject){
        if (!gameObj) gameObj = {} as GameObject;
        gameObj.scale = gameObj.scale || new Point2d(1,1);
        gameObj.spriteSheet = gameObj.spriteSheet || {} as SpriteSheet;
        return {
            width:                 gameObj.width+'px',
            height:                gameObj.height+'px',
            backgroundImage:       gameObj.spriteSheet &&
            gameObj.spriteSheet.resourcePath &&
            `url(${editData.projectName}/${gameObj.spriteSheet.resourcePath})`,
            backgroundPositionY:  -gameObj._sprPosY+'px',
            backgroundPositionX:  -gameObj._sprPosX+'px',
            backgroundRepeat:     'no-repeat',
            opacity:               gameObj.alpha,
            transform:            `scale(${gameObj.scale.x},${gameObj.scale.y}) rotateZ(${mathEx.radToDeg(gameObj.angle)}deg)`,
            backgroundSize:       `${gameObj.spriteSheet.numOfFramesH*gameObj.width}px ${gameObj.spriteSheet.numOfFramesV*gameObj.height}px`
        };

    }

    static getCoords(elSelector:string,event:MouseEvent){
        let el:HTMLElement = document.querySelector(elSelector) as HTMLElement;
        let clientRect = el.getBoundingClientRect();
        let x = event.clientX - clientRect.left;
        let y = event.clientY - clientRect.top;
        return {x,y};
    }

    static tileMapWidth(){
        if (!editData.currSceneInEdit.tileMap) return 0;
        return editData.currSceneInEdit.tileMap.width || 0;
    }
    static tileMapHeight(){
        if (!editData.currSceneInEdit.tileMap) return 0;
        return editData.currSceneInEdit.tileMap.height || 0;
    }
    static tileFrameWidth(){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap.spriteSheet) return null;
        return editData.currSceneInEdit.tileMap.spriteSheet._frameWidth;
    }
    static tileFrameHeight(){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap.spriteSheet) return null;
        return editData.currSceneInEdit.tileMap.spriteSheet._frameHeight;
    }
    static tileFramePosX(i:number){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap.spriteSheet) return null;
        return editData.currSceneInEdit.tileMap.spriteSheet.getFramePosX(i);
    }
    static tileFramePosY(i:number){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap.spriteSheet) return null;
        return editData.currSceneInEdit.tileMap.spriteSheet.getFramePosY(i);
    }
    static tileResourcePath(opts = {strict:false}){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap.spriteSheet) return null;
        if (!editData.currSceneInEdit.tileMap.spriteSheet.resourcePath) return null;
        if (opts.strict && editData.currTileIndexInEdit==null) return;
        return `url(${editData.projectName}/${editData.currSceneInEdit.tileMap.spriteSheet.resourcePath})`;
    }
    static tileNumOfFramesH(){
        if (!editData.currSceneInEdit.tileMap) return null;
        if (!editData.currSceneInEdit.tileMap.spriteSheet) return null;
        return editData.currSceneInEdit.tileMap.spriteSheet.numOfFramesH;
    }

    static calcZoom(gameObject:GameObject) {
        const sampleSize = 30;
        if (!gameObject) gameObject = {width:sampleSize,height:sampleSize} as GameObject;
        let maxSize = gameObject.width>gameObject.height?gameObject.width:gameObject.height;
        return maxSize>sampleSize?
            sampleSize/maxSize:
            1;
    }

    static merge(a:any,b:any){
        a = a || {};
        b = b || {};
        let res:any = {};
        Object.keys(a).forEach(key=>{
            res[key] = a[key];
        });
        Object.keys(b).forEach(key=>{
            res[key] = b[key];
        });
        return res;
    }

    static hexToRgb(hex:string) {
        if (!hex) return {r:0,g:0,b:0};
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16) || 0,
            g: parseInt(result[2], 16) || 0,
            b: parseInt(result[3], 16) || 0
        } : {r:0,g:0,b:0};
    }

    static rgbToHex(col:{r:number,g:number,b:number}) {
        if (!col) return '#000000';
        let r = +col.r,g=+col.g,b=+col.b;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    static rgbToCss(objRGB:{r:number,g:number,b:number}){
        return `rgb(${objRGB.r},${objRGB.g},${objRGB.b})`
    }

    static dataURItoBlob(dataURI:string) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = (window as any)['unescape'](dataURI.split(',')[1]);

        // separate out the mime component
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        let ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {type:mimeString});
    }

    static range(rFr:number,rTo:number,step:number) {
        if (!step) step = 1;
        let arr = [], i;
        if (rTo===undefined) {
            rTo = rFr;
            rFr = 0;
        }
        if (rFr<rTo) {
            for (i=rFr;i<=rTo;i+=step) {
                arr.push(i);
            }
        } else {
            for (i=rFr;i>=rTo;i-=step) {
                arr.push(i);
            }
        }
        return arr;
    }

    static _createAceCompleter(){
        let result:Array<any> = [];
        let res:any = {};
        let objs = ['gameObject'];
        objs.forEach(go=>{
            let GObjClass = GameObjectProto;
            let goObj = new GObjClass(editData.game);
            for (let key in goObj) {
                if (key.indexOf('_')===0) continue;
                res[key] = {
                    name:key,
                    value:key,
                    score:1,
                    meta:'gameObject property'
                }
            }
        });
        Object.keys(res).forEach(key=>{
            result.push(res[key]);
        });
        return result;
    }

    static _waitForFrameAndDo(file:string,path:string){
        let frame:any = document.getElementById('scriptEditorFrame') as any;
        let contentWindow = frame && frame.contentWindow;
        if (!contentWindow || !contentWindow.ready) {
            setTimeout(()=>{
                this._waitForFrameAndDo(file,path);
            },100);
            return;
        }
        contentWindow.setCode(file);
        contentWindow.calcEditorSize();
        contentWindow.setAutocomplete(this._createAceCompleter());
        window.removeEventListener('resize',contentWindow.calcEditorSize);
        window.addEventListener('resize',()=>{
            contentWindow && contentWindow.calcEditorSize();
        });
        (window as any)['saveCode'] = (code:string) =>{
            restFileSystem.createFile(path,code);
        };
    };

    static getArray(num:number) {
        if (!num) return [];
        let res = [];
        for (let i=0;i<num;i++) {
            res.push(i);
        }
        return res;
    }

    static size(obj:any) {
        if (!obj) return 0;
        return Object.keys(obj).length;
    }

    static deleteModel(model:any,callback:Function){
        return new Promise((resolve:Function)=>{
            confirmEx(
                i18n.getAll().confirmQuestion(model),
                ()=>{
                    restResource.remove(model,callback);
                    editData.game.repository.removeObject(model);
                    resolve();
                }
            )
        });
    }

    static eachGameObject(callback:Function){
        editData.game.repository.getArray('GameObjectProto').forEach((go:GameObjectProto)=>{
            callback(go);
        });
        editData.game.repository.getArray('Scene').forEach((scene:Scene)=>{
            scene.layers.forEach(layer=>{
                layer.gameObjects.forEach(go=>{
                    callback(go);
                });
            });
        });
    }

    static openEditor(path:string) {
        editData.scriptEditorUrl = path;
        restFileSystem.readFile(path,(file:string)=>{
            this._waitForFrameAndDo(file,path);
        });
    }

    static assign(model:any,property:string,value:any){
        model && (model[property] = value);
    }

    static capitalise(s:string){
        return s[0].toUpperCase() + s.substr(1);
    }

    static deepEqual(x:any, y:any, _checkCache = []):boolean {
        //if (isNaN(x) && isNaN(y)) return true;
        if (x && y && typeof x === 'object' && typeof y === 'object') {
            if (x===y) return true;
            if (_checkCache.indexOf(x)>-1 || _checkCache.indexOf(y)>-1) return true;
            _checkCache.push(x);
            _checkCache.push(y);
            return (Object.keys(x).length === Object.keys(y).length) &&
                Object.keys(x).reduce((isEqual, key)=> {
                    return isEqual && Utils.deepEqual(x[key], y[key], _checkCache);
                },true);
        } else {
            return x===y;
        }
    }

}