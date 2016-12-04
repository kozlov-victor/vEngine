
window.app.
    controller('fontCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        chrome,
        i18n,
        utils) {

        var SYMBOL_PADDING = utils.FONT_SYMBOL_PADDING;

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        s.fontSample = 'test this font!';
        var bundle = require('bundle').instance();
        var Font = require('font').Font;

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

        var updateObjectFonts = function(){
            utils.eachObjectOnScene(function(go){
                if (go.subType && go.subType=='textField') {
                    var font =
                        editData.fontList.find({id:go.fontId}) ||
                        editData.fontList.find({name:'default'});
                    font.resourcePath+='?'+Math.random();
                    go.setFont(font);
                }
            });
        };

        s.openColorPickerForFont = function(){
            s.showDialog(
                'colorPicker','fontColor',
                editData.currFontInEdit
            );
        };

        s.createOrEditFont = function(){
            var font = s.editData.currFontInEdit;
            var strFont = font.fontSize +'px'+' '+font.fontFamily;
            font.fontContext = getFontContext([{from: 32, to: 150}, {from: 1040, to: 1116}], strFont, 320);
            font._file = utils.dataURItoBlob(getFontImage(font.fontContext,strFont,utils.rgbToHex(font.fontColor)));
            resourceDao.createOrEditResource(
                font,
                Font,
                bundle.fontList,
                function(res){
                    if (res.type=='edit') {
                        updateObjectFonts();
                    }
                }
            );
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currFontInEdit = new Font({fontColor:[0,0,0]});
                s.convertedCol = utils.rgbToHex(editData.currFontInEdit.fontColor);
            } else if (dialogState.opName=='edit'){
                editData.currFontInEdit = dialogState.opObject.clone();
                s.convertedCol = utils.rgbToHex(editData.currFontInEdit.fontColor);
            }
            dialogState.opName=null;


            if (s.editData.systemFontList) return;
            chrome.requestToApi({method:'getFontList'},function(list){
                s.editData.systemFontList = list;
                s.$apply();
            })
        })();

    });