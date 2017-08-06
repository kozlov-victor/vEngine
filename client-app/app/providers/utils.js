
const mathEx = _require('mathEx');

import editData from 'providers/editData';
import restResource from 'providers/rest/resource';
import restFileSystem from 'providers/rest/fileSystem';
import i18n from 'providers/i18n';

class Utils {
    getGameObjectCss(gameObj = {}){
        gameObj.scale = gameObj.scale || {};
        gameObj.spriteSheet = gameObj.spriteSheet || {};
        return  {
            width:                 gameObj.width+'px',
            height:                gameObj.height+'px',
            backgroundImage:       gameObj.spriteSheet &&
                                        gameObj.spriteSheet.resourcePath &&
                                        `url(${editData.projectName}/${gameObj.spriteSheet.resourcePath})`,
            backgroundPositionY:  -gameObj._sprPosY+'px',
            backgroundPositionX:  -gameObj._sprPosX+'px',
            backgroundRepeat:     'no-repeat',
            opacity:               gameObj.alpha,
            transform:            `scale(${gameObj.scale.x},${gameObj.scale.y}) rotateZ(${mathEx.radToDeg(gameObj.angle)}deg)`
        };
    }

    calcZoom(gameObject = {}) {
        if (!gameObject.height) gameObject.height = 30;
        return gameObject.height>30?
            30/gameObject.height:
            1;
    }

    merge(a,b){
        a = a || {};
        b = b || {};
        let res = {};
        Object.keys(a).forEach(key=>{
            res[key] = a[key];
        });
        Object.keys(b).forEach(key=>{
            res[key] = b[key];
        });
        return res;
    }

    hexToRgb(hex) {
        if (!hex) return {r:0,g:0,b:0};
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16) || 0,
            g: parseInt(result[2], 16) || 0,
            b: parseInt(result[3], 16) || 0
        } : {r:0,g:0,b:0};
    }

    rgbToHex(col) {
        if (!col) return '#000000';
        let r = +col.r,g=+col.g,b=+col.b;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        let ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {type:mimeString});
    }

    range(rFr,rTo) {
        let arr = [], i;
        if (rTo==undefined) {
            rTo = rFr;
            rFr = 0;
        }
        if (rFr<rTo) {
            for (i=rFr;i<=rTo;i++) {
                arr.push(i);
            }
        } else {
            for (i=rFr;i>=rTo;i--) {
                arr.push(i);
            }
        }
        return arr;
    }

    _createAceCompleter(){
        let result = [];
        let res = {};
        let objs = ['gameObject'];
        objs.forEach(function(go){
            let GObjClass = _require(go);
            let goObj = new GObjClass();
            for (let key in goObj) {
                if (key.indexOf('_')==0) continue;
                res[key] = {
                    name:key,
                    value:key,
                    score:1,
                    meta:'gameObject property'
                }
            }
        });
        Object.keys(res).forEach(function(key){
            result.push(res[key]);
        });
        return result;
    }

    _waitForFrameAndDo(file,path){
        let frame = document.getElementById('scriptEditorFrame');
        let contentWindow = frame && frame.contentWindow;
        let self = this;
        if (!contentWindow || !contentWindow.ready) {
            setTimeout(function(){
                self._waitForFrameAndDo(file,path);
            },100);
            return;
        }
        contentWindow.setCode(file);
        contentWindow.calcEditorSize();
        contentWindow.setAutocomplete(this._createAceCompleter());
        window.removeEventListener('resize',contentWindow.calcEditorSize);
        window.addEventListener('resize',contentWindow.calcEditorSize);
        window.saveCode = function(code){
            restFileSystem.createFile(path,code);
        };
    };

    getArray(num) {
        if (!num) return [];
        let res = [];
        for (let i=0;i<num;i++) {
            res.push(i);
        }
        return res;
    }

    size(obj) {
        if (!obj) return 0;
        return Object.keys(obj).length;
    }

    deleteModel(model,callback){
        window.confirmEx(
            i18n.getAll().confirmQuestion(model),
            ()=>{
                editData[`${model.type}List`].remove({id:model.id});
                restResource.remove(model,callback);
            }
        )
    }

    openEditor(resourceUrl) {
        let self = this;
        editData.scriptEditorUrl = resourceUrl;
        let path = 'script/'+resourceUrl;
        console.log(path);
        restFileSystem.readFile(path,function(file){
            self._waitForFrameAndDo(file,path);
        });
    }

    assign(model,property,value){
        model && (model[property] = value);
    }

}

export default new Utils();