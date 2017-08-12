

import editData from 'app/providers/editData';
import restFileSystem from 'app/providers/rest/fileSystem';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import chrome from 'app/providers/chrome';
import utils from 'app/providers/utils';

import repository from 'coreEngine/src/engine/repository';


const SYMBOL_PADDING = 4;
const fontSample = 'Test me! Text here';

const getFontContext = function(arrFromTo, strFont, w) {
    function getFontHeight(strFont) {
        let parent = document.createElement("span");
        parent.appendChild(document.createTextNode("height!ДдЙЇ"));
        document.body.appendChild(parent);
        parent.style.cssText = "font: " + strFont + "; white-space: nowrap; display: inline;";
        let height = parent.offsetHeight;
        document.body.removeChild(parent);
        return height;
    }
    let cnv = document.createElement('canvas');
    let ctx = cnv.getContext('2d');
    ctx.font = strFont;
    let textHeight = getFontHeight(strFont) + 2 * SYMBOL_PADDING;
    let symbols = {};
    let currX = 0, currY = 0, cnvHeight = textHeight;
    for (let k = 0; k < arrFromTo.length; k++) {
        let arrFromToCurr = arrFromTo[k];
        for (let i = arrFromToCurr.from; i < arrFromToCurr.to; i++) {
            let currentChar = String.fromCharCode(i);

            ctx = cnv.getContext('2d');
            let textWidth = ctx.measureText(currentChar).width;
            textWidth += 2 * SYMBOL_PADDING;
            if (textWidth == 0) continue;
            if (currX + textWidth > w) {
                currX = 0;
                currY += textHeight;
                cnvHeight = currY + textHeight;
            }
            let symbol = {};
            symbol.x = ~~currX + SYMBOL_PADDING;
            symbol.y = ~~currY + SYMBOL_PADDING;
            symbol.width = ~~textWidth - 2 * SYMBOL_PADDING;
            symbol.height = textHeight - 2 * SYMBOL_PADDING;
            symbols[currentChar] = symbol;
            currX += textWidth;
        }
    }
    return {symbols: symbols, width: w, height: cnvHeight};
};


const getFontImage = function(symbolsContext,strFont,color){
    let cnv = document.createElement('canvas');
    cnv.width = symbolsContext.width;
    cnv.height = symbolsContext.height;
    let ctx = cnv.getContext('2d');
    ctx.font = strFont;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";
    let symbols = symbolsContext.symbols;
    for (let symbol in symbols) {
        if (!symbols.hasOwnProperty(symbol)) continue;
        ctx.fillText(symbol, symbols[symbol].x, symbols[symbol].y);
    }
    return cnv.toDataURL();
};

export default RF.registerComponent('app-font-dialog', {
    template: {
        type:'string',
        value: require('./fontDialog.html')
    },
    form:{valid: ()=>{return true;}},
    editData,
    i18n: i18n.getAll(),
    utils,
    fontSample,
    systemFontList: [],

    open(){
        if (!this.systemFontList.length) {
            chrome.requestToApi({method:'getFontList'},list=>{
                this.systemFontList = list;
                RF.digest();
            });
        }
        RF.getComponentById('fontModal').open();
    },

    async createOrEditFont(model){

        let strFont = model.fontSize +'px'+' '+model.fontFamily;
        model.fontContext = getFontContext([{from: 32, to: 150}, {from: 1040, to: 1116}], strFont, 320);
        let file = utils.dataURItoBlob(getFontImage(model.fontContext,strFont,utils.rgbToHex(model.fontColor)));

        await restFileSystem.uploadFile(
            file,
            {
                type:model.type,
                fileName:`${model.name}.png`
            }
        );
        let resp = await restResource.save(model);
        if (resp.created) {
            model.id = resp.id;
            repository.addObject(model);
        } else if (resp.updated) {
            model.updateCloner();
        }
        RF.getComponentById('fontModal').close();
    }
});