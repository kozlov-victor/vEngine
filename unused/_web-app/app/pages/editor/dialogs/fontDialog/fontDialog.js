
const abstractDialog = require('providers/abstractDialog');

const editData = require('providers/editData');
const restFileSystem = require('providers/rest/fileSystem');
const restResource = require('providers/rest/resource');

const fontSample = 'Test me! Text here';
const chrome = require('providers/chrome');
const utils = require('providers/utils');

const SYMBOL_PADDING = 4;

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

module.exports.component = Vue.component('app-font-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./fontDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: utils,
            fontSample:fontSample,
            systemFontList: []
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {
        appColorPicker: require('components/colorPicker/colorPicker')
    },
    methods: {
        open: function(){
            this.opened = true;
            if (!this.systemFontList.length) {
                let self = this;
                chrome.requestToApi({method:'getFontList'},function(list){
                    self.systemFontList = list;
                });
            }
        },
        createOrEditFont: function(model){
            let self = this;
            let strFont = model.fontSize +'px'+' '+model.fontFamily;
            model.fontContext = getFontContext([{from: 32, to: 150}, {from: 1040, to: 1116}], strFont, 320);
            let file = utils.dataURItoBlob(getFontImage(model.fontContext,strFont,utils.rgbToHex(model.fontColor)));

            Promise.resolve().
            then(()=>{
                return restFileSystem.
                    uploadFile(
                        file,
                        {
                            type:model.type,
                            fileName:`${model.name}.png`
                        }
                    );
            }).
            then(()=>{
                return restResource.save(model);
            }).
            then((resp)=>{
                if (resp.created) {
                    model.id = resp.id;
                    editData[`${model.type}List`].add(model);
                } else if (resp.updated) {
                    model.updateCloner();
                }
                self.close();
            });
        }
    }
});