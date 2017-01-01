
var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Font = _require('font');

var fontSample = 'test font';
var systemFontList = [{displayName:'monospace'}];
var chrome = require('providers/chrome');
var utils = require('providers/utils');

var SYMBOL_PADDING = 4;

var getFontContext = function(arrFromTo, strFont, w) {
    function getFontHeight(strFont) {
        var parent = document.createElement("span");
        parent.appendChild(document.createTextNode("height!ДдЙЇ"));
        document.body.appendChild(parent);
        parent.style.cssText = "font: " + strFont + "; white-space: nowrap; display: inline;";
        var height = parent.offsetHeight;
        document.body.removeChild(parent);
        return height;
    }
    var cnv = document.createElement('canvas');
    var ctx = cnv.getContext('2d');
    ctx.font = strFont;
    var textHeight = getFontHeight(strFont) + 2 * SYMBOL_PADDING;
    var symbols = {};
    var currX = 0, currY = 0, cnvHeight = textHeight;
    for (var k = 0; k < arrFromTo.length; k++) {
        var arrFromToCurr = arrFromTo[k];
        for (var i = arrFromToCurr.from; i < arrFromToCurr.to; i++) {
            var currentChar = String.fromCharCode(i);

            ctx = cnv.getContext('2d');
            var textWidth = ctx.measureText(currentChar).width;
            textWidth += 2 * SYMBOL_PADDING;
            if (textWidth == 0) continue;
            if (currX + textWidth > w) {
                currX = 0;
                currY += textHeight;
                cnvHeight = currY + textHeight;
            }
            var symbol = {};
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


var getFontImage = function(symbolsContext,strFont,color){
    var cnv = document.createElement('canvas');
    cnv.width = symbolsContext.width;
    cnv.height = symbolsContext.height;
    var ctx = cnv.getContext('2d');
    ctx.font = strFont;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";
    var symbols = symbolsContext.symbols;
    for (var symbol in symbols) {
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
            systemFontList: systemFontList || []
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
            if (systemFontList.length==1) {
                var self = this;
                chrome.requestToApi({method:'getFontList'},function(list){
                    list.forEach(function(item,i){
                        Vue.set(self.systemFontList,i,item);
                    });
                });
            }
        },
        createOrEditFont: function(fnt){
            var self = this;
            var strFont = fnt.fontSize +'px'+' '+fnt.fontFamily;
            fnt.fontContext = getFontContext([{from: 32, to: 150}, {from: 1040, to: 1116}], strFont, 320);
            fnt._file = utils.dataURItoBlob(getFontImage(fnt.fontContext,strFont,utils.rgbToHex(fnt.fontColor)));
            resource.createOrEditResource(
                fnt,
                Font,
                editData.fontList,
                function(result){
                    self.close();
                }
            );
        }
    }
});