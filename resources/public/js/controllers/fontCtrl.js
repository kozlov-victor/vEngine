
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

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        s.fontSample = 'test this font!';

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
            var textHeight = getFontHeight(strFont);
            var symbols = {};
            var currX = 0, currY = 0, cnvHeight = textHeight;
            for (var k = 0; k < arrFromTo.length; k++) {
                var arrFromToCurr = arrFromTo[k];
                for (var i = arrFromToCurr.from; i < arrFromToCurr.to; i++) {
                    var currentChar = String.fromCharCode(i);
                    //if (currentChar == '\\' || currentChar == '\'') {
                    //    currentChar = '\\' + currentChar
                    //}
                    ctx = cnv.getContext('2d');
                    var textWidth = ctx.measureText(currentChar).width;
                    if (textWidth == 0) continue;
                    if (currX + textWidth > w) {
                        currX = 0;
                        currY += textHeight;
                        cnvHeight = currY + textHeight;
                    }
                    var symbol = {};
                    symbol.x = ~~currX;
                    symbol.y = ~~currY;
                    symbol.width = ~~textWidth;
                    symbol.height = textHeight;
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

        s.createOrEditFont = function(font){
            var font = s.editData.currFontInEdit;
            var strFont = font.fontSize +'px'+' '+font.fontFamily;
            font.fontContext = getFontContext([{from: 32, to: 150}, {from: 1040, to: 1116}], strFont, 320);
            font._file = utils.dataURItoBlob(getFontImage(font.fontContext,strFont,font.fontColor));
            resourceDao.createOrEditResource(
                font,
                ve.models.Font,
                ve_local.bundle.fontList);
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currFontInEdit = new ve.models.Font();
            } else if (dialogState.opName=='edit'){
                editData.currFontInEdit = dialogState.opObject.clone();
            }


            if (s.editData.systemFontList) return;
            chrome.requestToApi({method:'getFontList'},function(list){
                s.editData.systemFontList = list;
                s.$apply();
            })
        })();

    });