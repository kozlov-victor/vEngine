/*global RF:true*/

import BaseComponent from 'app/baseComponent'
import chrome from 'app/providers/chrome';

const SYMBOL_PADDING = 4;
const fontSample = 'Test me! Text here';
const SAFE_FONTS = [{displayName:'serif'},{displayName:'sans-serif'},{displayName:'monospace'}];

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

@RF.decorateComponent({
    name: 'app-font-dialog',
    template: require('./fontDialog.html')
})
export default class FontDialog extends BaseComponent {

    constructor(){
        super();
        this.fontSample = fontSample;
        this.systemFontList = [];
    }

    open(){
        if (!this.systemFontList.length) {
            chrome.requestToApi({method:'getFontList'},list=>{
                this.systemFontList = list;
                RF.digest();
            });
            setTimeout(()=>{
                if (!this.systemFontList.length) {
                    this.systemFontList = SAFE_FONTS;
                }
            },5000);
        }
        RF.getComponentById('fontModal').open();
    }

    async createOrEditFont(model){

        let strFont = model.fontSize +'px'+' '+model.fontFamily;
        model.fontContext = getFontContext([{from: 32, to: 150}, {from: 1040, to: 1116}], strFont, 320);
        let file = this.utils.dataURItoBlob(getFontImage(model.fontContext,strFont,this.utils.rgbToHex(model.fontColor)));
        model.resourcePath =  `resources/${model.name}.png`;

        await this.restFileSystem.uploadFile(
            file,
            {
                path:model.resourcePath
            }
        );
        let resp = await this.restResource.save(model);
        if (resp.created) {
            model.id = resp.id;
            this.editData.game.repository.addObject(model);
        } else if (resp.updated) {
            model.updateCloner();
        }
        RF.getComponentById('fontModal').close();
    }
}