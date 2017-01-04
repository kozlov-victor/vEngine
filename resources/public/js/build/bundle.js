(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "\n<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withMargin\">\n        <div class=\"alert_body\">\n            {{message}}\n        </div>\n        <div>\n            <button v-on:click=\"close()\">{{i18n.ok}}</button>\n        </div>\n    </div>\n</app-modal>";

},{}],2:[function(require,module,exports){


var abstractDialog = require('providers/abstractDialog');


module.exports.component = Vue.component('app-alert-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./alertDialog.html'),
    data: function () {
        return {
            message:'default message',
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {
        appModal: require('components/modal/modal')
    },
    methods: {
        open: function(msg) {
            this.opened = true;
            this.message = msg;
        }
    }
});
},{"./alertDialog.html":1,"components/modal/modal":16,"providers/abstractDialog":51,"providers/i18n":55}],3:[function(require,module,exports){
module.exports = "<div\n        class=\"inlineBlock\"\n        v-on:click=\"click($event)\"\n        v-on:mousemove=\"mouseMove($event)\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div data-container class=\"inlineBlock\">\n        <svg viewBox=\"0 0 200 200\" width=\"30\" height=\"30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"100\" cy=\"100\" r=\"100\" stroke=\"black\" stroke-width=\"1\" fill=\"white\"></circle>\n            <line id=\"line\" x1=\"100\" y1=\"100\"\n                  x2=\"200\" y2=\"100\"\n                  stroke=\"black\"\n                  stroke-width=\"2\"\n                  :transform=\"'rotate('+angleInDeg+',100,100)'\"\n                    >\n            </line>\n        </svg>\n    </div>\n    <div class=\"smallXX\" :title=\"angleInRad.toFixed(1)+' rad'\">\n        {{angleInDeg.toFixed(1)}}&deg;\n    </div>\n</div>";

},{}],4:[function(require,module,exports){

module.exports = Vue.component('app-angle-picker', {
    props: ['object','value'],
    template: require('./anglePicker.html'),
    data: function(){
        return {
           angleInDeg: 0,
           angleInRad: 0
        }
    },
    created: function(){
        this.angleInRad = this.object[this.value];
        this.angleInDeg = (this.angleInRad * 180 / Math.PI) % 360;
    },
    methods: {
        calcAngleFromEvent: function(e){
            var el = this.$el.querySelector('[data-container]');
            var rect = el.getBoundingClientRect();
            var x = e.clientX - rect.left, y = e.clientY - rect.top;
            var angle = Math.atan2((y -15),(x - 15));
            if (angle<0) angle = 2*Math.PI + angle;
            this.angleInRad = angle;
            this.angleInDeg = angle * 180 / Math.PI;
            this.object[this.value] = this.angleInRad;
        },
        click: function(e){
            this.calcAngleFromEvent(e);
        },
        mouseMove: function(e){
            if (e.buttons!==1) return;
            this.calcAngleFromEvent(e);
        }
    }
});
},{"./anglePicker.html":3}],5:[function(require,module,exports){
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div\n        class=\"collapsible_header bold noSelect\"\n        @click=\"toggle()\"\n    >\n        <div class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell width1\">\n                    <span\n                            class=\"collapsible_point noBrake\"\n                            :class=\"{rotated:opened}\">▷</span>\n                </div>\n                <div\n                        class=\"cell\">\n                    <span>&nbsp;{{title}}</span>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.create\" class=\"add\" v-on:click.stop=\"crud.create()\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.edit\" class=\"edit\" v-on:click.stop=\"crud.edit(object)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.delete\" class=\"delete\" v-on:click.stop=\"crud.delete(object)\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div\n            class=\"collapsible_content\"\n            :class=\"{opened:opened}\">\n        <slot></slot>\n    </div>\n</div>";

},{}],6:[function(require,module,exports){
var id = 0;

module.exports = Vue.component('app-collapsible', {
    props: ['title','crud','object'],
    template: require('./collapsible.html'),
    data: function(){
        return {
            opened: false,
            id:null
        }
    },
    created: function(){
        this.id = id;
        this.opened = localStorage['clps_'+this.id]=='true';
        id++;
    },
    methods: {
        toggle: function(){
            this.opened = ! this.opened;
            localStorage['clps_'+this.id] = this.opened;
        }
    }
});
},{"./collapsible.html":5}],7:[function(require,module,exports){
module.exports = "<div class=\"inlineBlock\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <div\r\n            :style=\"{\r\n                cursor: 'pointer',\r\n                width: 24 + 'px',\r\n                height:24 + 'px',\r\n                backgroundColor: 'rgb('+currentColorRGB[0]+','+currentColorRGB[1]+','+currentColorRGB[2]+')'\r\n            }\"\r\n            v-on:click=\"click()\"\r\n            >\r\n    </div>\r\n\r\n    <app-color-picker-dialog/>\r\n\r\n</div>\r\n\r\n";

},{}],8:[function(require,module,exports){

var colorPickerDialog = require('./colorPickerDialog');

module.exports = Vue.component('app-color-picker', {
    props: ['object','value'],
    template: require('./colorPicker.html'),
    data: function(){
        return {
            currentColorRGB: []
        }
    },
    created: function(){
        this.currentColorRGB = this.object[this.value];
    },
    methods: {
        click: function(e){
            colorPickerDialog.instance.open(this,this.currentColorRGB);
        },
        applyColor: function(color){
            this.object[this.value] = color;
            this.currentColorRGB = this.object[this.value];
        }
    },
    components: {
        appColorPickerDialog: require('components/colorPicker/colorPickerDialog').component
    }
});
},{"./colorPicker.html":7,"./colorPickerDialog":10,"components/colorPicker/colorPickerDialog":10}],9:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\"\r\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <table>\r\n        <tr>\r\n            <td>\r\n                <input type=\"color\" v-model=\"currentColorHex\" v-on:change=\"hexChanged()\"/>\r\n            </td>\r\n            <td>\r\n                <input type=\"text\"  v-model=\"currentColorHex\" v-on:change=\"hexChanged()\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n\r\n        <table class=\"width100\">\r\n            <tr\r\n                    v-for=\"item in colorEnums\">\r\n                <td\r\n                        :style=\"{\r\n                            color: item.left\r\n                        }\"\r\n                        >\r\n                    {{item.left}}\r\n                </td>\r\n                <td class=\"centerText\">\r\n                    <input class=\"vAlign\" type=\"range\" min=\"0\" max=\"255\" v-model=\"currentColorRGB[item.index]\" v-on:change=\"rgbChanged()\"/>\r\n                    <br/>\r\n                    <input class=\"small vAlign\" v-model=\"currentColorRGB[item.index]\" v-on:change=\"rgbChanged()\"/>\r\n                    <hr/>\r\n                </td>\r\n                <td\r\n                        :style=\"{\r\n                            color: item.right\r\n                        }\"\r\n                        >{{item.right}}</td>\r\n            </tr>\r\n\r\n\r\n        </table>\r\n    </table>\r\n\r\n    <button\r\n            v-on:click=\"applyColor()\">\r\n        {{i18n.edit}}\r\n    </button>\r\n\r\n</app-modal>";

},{}],10:[function(require,module,exports){

var abstractDialog = require('providers/abstractDialog');
var utils = require('providers/utils');
var colorPicker = null;

var colorEnums = [
    {left:'red',right:'cyan',index:0},
    {left:'green',right:'magenta',index:1},
    {left:'blue',right:'yellow',index:2}
];

module.exports.component = Vue.component('app-color-picker-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./colorPickerDialog.html'),
    data: function () {
        return {
            i18n: require('providers/i18n').getAll(),
            currentColorRGB: [0,0,0],
            currentColorHex: '#000000',
            colorEnums: colorEnums
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {
        appModal: require('components/modal/modal')
    },
    methods: {
        open: function(_colorPicker,color){
            this.opened = true;
            colorPicker = _colorPicker;
            this.currentColorRGB[0] = color[0];
            this.currentColorRGB[1] = color[1];
            this.currentColorRGB[2] = color[2];
            this.currentColorHex = utils.rgbToHex(this.currentColorRGB);
        },
        hexChanged: function(){
            var color = utils.hexToRgb(this.currentColorHex);
            Vue.set(this.currentColorRGB,'0',color[0]);
            Vue.set(this.currentColorRGB,'1',color[1]);
            Vue.set(this.currentColorRGB,'2',color[2]);
        },
        rgbChanged: function(){
            this.currentColorHex = utils.rgbToHex(this.currentColorRGB);
        },
        applyColor: function(){

            colorPicker.applyColor([
                +this.currentColorRGB[0],
                +this.currentColorRGB[1],
                +this.currentColorRGB[2]
            ]);
            this.close();
        }
    }
});

},{"./colorPickerDialog.html":9,"components/modal/modal":16,"providers/abstractDialog":51,"providers/i18n":55,"providers/utils":58}],11:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withMargin\">\n        <div class=\"alert_body\">\n            {{message}}\n        </div>\n        <div>\n            <button v-on:click=\"confirmChoose()\">{{i18n.confirm}}</button>\n            <button v-on:click=\"close()\">{{i18n.cancel}}</button>\n        </div>\n    </div>\n</app-modal>";

},{}],12:[function(require,module,exports){


var abstractDialog = require('providers/abstractDialog');


module.exports.component = Vue.component('app-confirm-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./confirmDialog.html'),
    data: function () {
        return {
            message:'default message',
            confirm: function(){},
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {
        appModal: require('components/modal/modal')
    },
    methods: {
        open: function(message,confirmCallback){
            this.opened = true;
            this.message = message;
            this.confirm = confirmCallback;
        },
        confirmChoose: function(){
            this.confirm();
            this.close();
        }
    }
});
},{"./confirmDialog.html":11,"components/modal/modal":16,"providers/abstractDialog":51,"providers/i18n":55}],13:[function(require,module,exports){
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <button>{{title}}</button>\n    <input  required :accept=\"accept\" type=\"file\"/>\n</div>";

},{}],14:[function(require,module,exports){

module.exports = Vue.component('app-input-file', {
    props: ['title','accept'],
    template: require('./inputFile.html'),
    data: function(){
        return {

        }
    },
    created: function(){

    },
    mounted: function(){
        var btn = this.$el.querySelector('button');
        var input = this.$el.querySelector('input');
        btn.onclick = function(){
            input.click();
        };
        var self = this;
        input.onchange = function(){
            var file = input.files[0];
            var name = file.name.split('.')[0];
            var url = window.URL || window.webkitURL;
            var src = url.createObjectURL(file);
            self.$emit('picked',src,file,name);
        }
    },
    methods: {
        toggle: function(){

        }
    }
});

},{"./inputFile.html":13}],15:[function(require,module,exports){
module.exports = "<div class=\"dialogWrapper\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"fullscreen shadow\"></div>\n    <div class=\"dialog\">\n        <div class=\"dialogContent\">\n            <div class=\"dialogClose\">\n                <span v-on:click=\"close()\" class=\"pointer\">X</span>\n            </div>\n            <div class=\"withPadding\">\n                <slot></slot>\n            </div>\n        </div>\n    </div>\n</div>\n";

},{}],16:[function(require,module,exports){


module.exports = Vue.component('app-modal', {
    props: [],
    template: require('./modal.html'),
    data: function(){
        return {

        }
    },
    created: function(){

    },
    methods: {
        close: function(){
            this.$emit('close');
        }
    }
});
},{"./modal.html":15}],17:[function(require,module,exports){
module.exports = "<div\n        class=\"height100\"\n        v-if=\"editData.scriptEditorUrl\"\n        >\n    <div style=\"height:10px;font-size: 10px;\">\n        {{editData.scriptEditorUrl}}\n    </div>\n    <div\n            id=\"scriptEditor\"\n            style=\"height:calc(100% - 10px)\"\n            >\n        <iframe\n                id=\"scriptEditorFrame\"\n                frameborder=\"0\"\n                class=\"block width100 height100 noOverFlow\"\n                src=\"/editorNew\"\n                ></iframe>\n    </div>\n</div>";

},{}],18:[function(require,module,exports){

var resource = require('providers/resource');

module.exports = Vue.component('app-script-editor', {
    props: [],
    template: require('./scriptEditor.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){

    },
    components: {

    },
    methods: {

    }
});

},{"./scriptEditor.html":17,"providers/editData":53,"providers/i18n":55,"providers/resource":56}],19:[function(require,module,exports){
module.exports = "<div>\n    <app-sound-dialog/>\n    <app-particle-system-dialog/>\n    <app-particle-system-preview-dialog/>\n    <app-font-dialog/>\n    <app-sprite-sheet-dialog/>\n</div>";

},{}],20:[function(require,module,exports){

module.exports = Vue.component('app-dialogs', {
    props: [],
    template: require('./dialogs.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {
        appSoundDialog: require('./soundDialog/soundDialog').component,
        appParticleSystemDialog: require('./particleSystemDialog/particleSystemDialog').component,
        appParticleSystemPreviewDialog: require('./particleSystemPreviewDialog/particleSystemPreviewDialog').component,
        appFontDialog: require('./fontDialog/fontDialog').component,
        appSpriteSheetDialog: require('./spriteSheetDialog/spriteSheetDialog').component
    },
    methods: {

    }
});
},{"./dialogs.html":19,"./fontDialog/fontDialog":22,"./particleSystemDialog/particleSystemDialog":24,"./particleSystemPreviewDialog/particleSystemPreviewDialog":26,"./soundDialog/soundDialog":28,"./spriteSheetDialog/spriteSheetDialog":30,"providers/editData":53,"providers/i18n":55}],21:[function(require,module,exports){
module.exports = "\n<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.selectFont}}\n            </td>\n            <td>\n                <select\n                        required\n                        v-control=\"{form:form,model:editData.currFontInEdit,prop:'fontFamily'}\"\n                        v-model=\"editData.currFontInEdit.fontFamily\" class=\"width100\">\n                    <option\n                            :value=\"fnt.displayName\"\n                            v-for=\"fnt in systemFontList\">\n                        {{fnt.displayName}}\n                    </option>\n                </select>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n            <td>\n                <input required\n                       v-control=\"{form:form,model:editData.currFontInEdit,prop:'name'}\"\n                       v-model=\"editData.currFontInEdit.name\" class=\"width100\">\n            </td>\n        </tr>\n        <tr>\n            <td>\n                {{i18n.fontSize}}\n            </td>\n            <td>\n                <input required type=\"number\"\n                       min=\"1\"\n                       max=\"1000\"\n                       v-control=\"{form:form,model:editData.currFontInEdit,prop:'fontSize'}\"\n                       v-model=\"editData.currFontInEdit.fontSize\" class=\"width100\">\n            </td>\n        </tr>\n        <tr>\n            <td>\n                {{i18n.fontColor}}\n            </td>\n            <td>\n                <app-color-picker\n                        :object=\"editData.currFontInEdit\"\n                        :value=\"'fontColor'\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td colspan=\"2\">\n                <input v-model=\"fontSample\" class=\"width100\"/>\n            </td>\n        </tr>\n        <tr>\n            <td colspan=\"2\">\n                <div :style='{\n                    fontFamily:editData.currFontInEdit.fontFamily,\n                    fontSize:editData.currFontInEdit.fontSize+\"px\",\n                    color:utils.rgbToHex(editData.currFontInEdit.fontColor)\n                }'>{{fontSample}}</div>\n            </td>\n        </tr>\n    </table>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"createOrEditFont(editData.currFontInEdit)\">\n        {{editData.currFontInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n</app-modal>";

},{}],22:[function(require,module,exports){

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Font = _require('font');

var fontSample = 'test font';
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
                var self = this;
                chrome.requestToApi({method:'getFontList'},function(list){
                    self.systemFontList = list;
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
},{"./fontDialog.html":21,"components/colorPicker/colorPicker":8,"providers/abstractDialog":51,"providers/chrome":52,"providers/editData":53,"providers/i18n":55,"providers/resource":56,"providers/utils":58,"providers/validator":59}],23:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n            <td>\n\n            </td>\n            <td>\n                <input\n                    required\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'name'}\"\n                    v-model=\"editData.currParticleSystemInEdit.name\"/>\n            </td>\n        </tr>\n        <tr>\n            <td rowspan=\"2\">\n                numOfParticlesToEmit\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.numOfParticlesToEmit,prop:'from'}\"\n                    v-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.numOfParticlesToEmit,prop:'to'}\"\n                    v-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.to\"/>\n            </td>\n        </tr>\n        <tr>\n            <td rowspan=\"2\">\n                particleVelocity\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleVelocity,prop:'from'}\"\n                        v-model=\"editData.currParticleSystemInEdit.particleVelocity.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleVelocity,prop:'to'}\"\n                        v-model=\"editData.currParticleSystemInEdit.particleVelocity.to\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td rowspan=\"2\">\n                particleLiveTime\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleLiveTime,prop:'from'}\"\n                    v-model=\"editData.currParticleSystemInEdit.particleLiveTime.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleLiveTime,prop:'to'}\"\n                    v-model=\"editData.currParticleSystemInEdit.particleLiveTime.to\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                emissionRadius\n            </td>\n            <td></td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'emissionRadius'}\"\n                        v-model=\"editData.currParticleSystemInEdit.emissionRadius\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                particleAngle\n            </td>\n            <td>\n                from / to\n            </td>\n            <td>\n                <app-angle-picker\n                        :object=\"editData.currParticleSystemInEdit.particleAngle\"\n                        :value=\"'from'\"\n                        />\n                <app-angle-picker\n                        :object=\"editData.currParticleSystemInEdit.particleAngle\"\n                        :value=\"'to'\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td></td>\n            <td>\n                {{i18n.gameObject}}\n            </td>\n            <td>\n\n                <table>\n                    <tr>\n                        <td>\n                            <select\n                                    required\n                                    v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'gameObjectId'}\"\n                                    v-on:change=\"onGameObjectIdChanged(editData.currParticleSystemInEdit.gameObjectId)\"\n                                    v-model=\"editData.currParticleSystemInEdit.gameObjectId\"\n                                    >\n                                <option\n                                        :value=\"item.id\"\n                                        v-for=\"item in editData.gameObjectList.rs\">{{item.name}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <div :style=\"\n                                utils.merge(\n                                    utils.getGameObjectCss(editData.currParticleSystemInEdit._gameObject),\n                                    {\n                                        zoom:editData.currParticleSystemInEdit._gameObject.height>30?\n                                        30/editData.currParticleSystemInEdit._gameObject.height:\n                                        1\n                                    }\n                               )\">\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n\n\n            </td>\n        </tr>\n\n    </table>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"createOrEditPs(editData.currParticleSystemInEdit)\">\n        {{editData.currParticleSystemInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"showPreview()\">\n        {{i18n.preview}}\n    </button>\n\n</app-modal>";

},{}],24:[function(require,module,exports){

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var ParticleSystem = _require('particleSystem');

module.exports.component = Vue.component('app-particle-system-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./particleSystemDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils')
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {
        appAnglePicker: require('components/anglePicker/anglePicker')
    },
    methods: {
        open: function(){
            this.opened = true;
        },
        onGameObjectIdChanged: function(id){
            editData.currParticleSystemInEdit._gameObject =
                editData.gameObjectList.find({id:id});
        },
        showPreview: function(){
            require('../particleSystemPreviewDialog/particleSystemPreviewDialog')
                .instance.open();
        },
        createOrEditPs: function(ps){
            var self = this;
            resource.createOrEditResource(
                ps,
                ParticleSystem,
                editData.particleSystemList,
                function(result){
                    self.close();
                }
            );
        }
    }
});
},{"../particleSystemPreviewDialog/particleSystemPreviewDialog":26,"./particleSystemDialog.html":23,"components/anglePicker/anglePicker":4,"providers/abstractDialog":51,"providers/editData":53,"providers/i18n":55,"providers/resource":56,"providers/utils":58,"providers/validator":59}],25:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n\n    <div>\n        {{i18n.preview}} {{i18n.particleSystem}}\n        <span class=\"underLine\">{{editData.currParticleSystemInEdit.name}}</span>\n    </div>\n    <div\n            v-on:click=\"emit($event)\"\n            v-on:mousemove=\"$event.buttons==1 && emit($event)\"\n            class=\"subFullScreen relative noOverFlow\">\n        <div\n                v-for=\"item in editData.currParticleSystemInEdit._particles\"\n                :style=\"utils.merge(\n                            utils.getGameObjectCss(item),\n                            {\n                                position:'absolute',\n                                left:item.pos.x+'px',\n                                top: item.pos.y+'px',\n                                pointerEvents:'none'\n                            }\n                    )\"\n                >\n        </div>\n    </div>\n    <div>\n        <button v-on:click=\"close()\">{{i18n.close}}</button>\n    </div>\n\n\n</app-modal>";

},{}],26:[function(require,module,exports){

var editData = require('providers/editData');
var resource = require('providers/resource');

var abstractDialog = require('providers/abstractDialog');

var tid;

module.exports.component = Vue.component('app-particle-system-preview-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./particleSystemPreviewDialog.html'),
    data: function () {
        return {
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils')
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {
        open: function(){
            this.opened = true;
            this.run();
        },
        close: function(){
            this.opened = false;
            clearInterval(tid);
        },
        run: function(){
            var prevTime = null;

            if (!editData.currParticleSystemInEdit._particles)
                Vue.set(editData.currParticleSystemInEdit,'_particles',[]);

            var update = function(){

                var currTime = Date.now();
                if (!prevTime) prevTime = currTime;
                var delta = currTime - prevTime;
                prevTime = currTime;
                editData.currParticleSystemInEdit._particles.forEach(function(p){

                    p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                    var deltaX = p.vel.x * delta / 1000;
                    var deltaY = p.vel.y * delta / 1000;
                    p.pos.x = p.pos.x+deltaX;
                    p.pos.y = p.pos.y+deltaY;

                    if (!p._timeCreated) p._timeCreated = currTime;
                    if (currTime - p._timeCreated > p.liveTime) {
                        editData.currParticleSystemInEdit._particles.splice(editData.currParticleSystemInEdit._particles.indexOf(p),1);
                    }
                });
            };
            tid = setInterval(function(){
                update();
            },5);
        },
        emit: function(e){
            var rect = e.target.getBoundingClientRect();
            editData.currParticleSystemInEdit.emit(e.clientX - rect.left,e.clientY - rect.top);
        }
    }
});
},{"./particleSystemPreviewDialog.html":25,"providers/abstractDialog":51,"providers/editData":53,"providers/i18n":55,"providers/resource":56,"providers/utils":58}],27:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <input\n                        required\n                        v-control=\"{form:form,model:editData.currSoundInEdit,prop:'name'}\"\n                        v-model=\"editData.currSoundInEdit.name\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <app-input-file\n                        v-on:picked=\"onFilePicked\"\n                        :title=\"i18n.loadSound\"\n                        :accept=\"'audio/*'\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <audio controls=\"controls\" :src=\"soundUrl\"></audio>\n            </td>\n        </tr>\n    </table>\n\n    <button\n            :disabled=\"!(form.valid() && soundUrl)\"\n            v-on:click=\"createOrEditSound(editData.currSoundInEdit)\">\n        {{editData.currSoundInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n</app-modal>";

},{}],28:[function(require,module,exports){


var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Sound = _require('sound');

module.exports.component = Vue.component('app-sound-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./soundDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            soundUrl:'',
            _file: ''
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {
        open: function(){
            this.opened = true;
            if (editData.currSoundInEdit.id)
                this.soundUrl =
                    editData.projectName + '/' +
                    editData.currSoundInEdit.resourcePath + '?' + Math.random();
            else this.soundUrl = '';
        },
        onFilePicked: function(src,file){
            this.soundUrl = src;
            this._file = file;
        },
        createOrEditSound: function(sound){
            var model = sound.toJSON();
            model._file = this._file;
            this._file = '';
            var self = this;
            resource.createOrEditResource(
                model,
                Sound,
                editData.soundList,
                function(result){
                    self.close();
                }
            );
        }
    }
});
},{"./soundDialog.html":27,"providers/abstractDialog":51,"providers/editData":53,"providers/i18n":55,"providers/resource":56,"providers/validator":59}],29:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <table class=\"width100\">\r\n        <tr>\r\n            <td>\r\n                {{i18n.name}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currSpriteSheetInEdit,prop:'name'}\"\r\n                        v-model=\"editData.currSpriteSheetInEdit.name\"/>\r\n            </td>\r\n            <td rowspan=\"6\">\r\n                <div style=\"max-height: 40vh;max-width:60vw;overflow: scroll;\"\r\n                        >\r\n                    <div class=\"relative\"\r\n                         :style=\"{\r\n                                    'background-image':   'url('+spriteSheetUrl+')',\r\n                                    'width':              editData.currSpriteSheetInEdit.width+'px',\r\n                                    'height':             editData.currSpriteSheetInEdit.height+'px',\r\n                               }\">\r\n                        <div\r\n                                :title=\"i\"\r\n                                v-for=\"(val,i) in numOfSpriteSheetCells\"\r\n                                :style=\"{\r\n                                    'display':        'inline-block',\r\n                                    'left':           editData.currSpriteSheetInEdit.getFramePosX(i)+'px',\r\n                                    'top':            editData.currSpriteSheetInEdit.getFramePosY(i)+'px',\r\n                                    'position':       'absolute',\r\n                                    'text-align':     'left',\r\n                                    'border':         '1px solid red',\r\n                                    'width':          editData.currSpriteSheetInEdit._frameWidth+'px',\r\n                                    'height':         editData.currSpriteSheetInEdit._frameHeight+'px'\r\n                                }\">{{i}}</div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.image}}\r\n            </td>\r\n            <td>\r\n                <app-input-file\r\n                        v-on:picked=\"onFilePicked\"\r\n                        :title=\"i18n.loadImage\"\r\n                        :accept=\"'image/*'\"\r\n                        />\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.width}}\r\n            </td>\r\n            <td>\r\n                {{editData.currSpriteSheetInEdit.width}}\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.height}}\r\n            </td>\r\n            <td>\r\n                {{editData.currSpriteSheetInEdit.height}}\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.numOfFramesH}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        required\r\n                        min=\"1\"\r\n                        max=\"100\"\r\n                        type=\"number\"\r\n                        v-on:change=\"refreshNumOfCells()\"\r\n                        v-control=\"{form:form,model:editData.currSpriteSheetInEdit,prop:'numOfFramesH'}\"\r\n                        v-model=\"editData.currSpriteSheetInEdit.numOfFramesH\"/>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.numOfFramesV}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        required\r\n                        min=\"1\"\r\n                        max=\"100\"\r\n                        type=\"number\"\r\n                        v-on:change=\"refreshNumOfCells()\"\r\n                        v-control=\"{form:form,model:editData.currSpriteSheetInEdit,prop:'numOfFramesV'}\"\r\n                        v-model=\"editData.currSpriteSheetInEdit.numOfFramesV\"/>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <button\r\n            v-on:click=\"createOrEditSpriteSheet(editData.currSpriteSheetInEdit)\"\r\n            :disabled=\"!(form.valid() && editData.currSpriteSheetInEdit.resourcePath)\">\r\n        {{editData.currSpriteSheetInEdit.id?i18n.edit:i18n.create}}\r\n    </button>\r\n\r\n</app-modal>";

},{}],30:[function(require,module,exports){

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var SpriteSheet = _require('spriteSheet');

module.exports.component = Vue.component('app-sprite-sheet-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./spriteSheetDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),
            spriteSheetUrl:'',
            _file: '',
            numOfSpriteSheetCells: 0
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {
        open: function(){
            this.opened = true;
            if (editData.currSpriteSheetInEdit.id)
                this.spriteSheetUrl =
                    editData.projectName + '/' +
                    editData.currSpriteSheetInEdit.resourcePath + '?' + Math.random();
            else this.spriteSheetUrl = '';
            this.refreshNumOfCells();
        },
        onFilePicked: function(src,file,name){
            var self = this;
            self._file = file;
            self.spriteSheetUrl = src;
            self.editData.currSpriteSheetInEdit.resourcePath = 'resources/spriteSheet/'+file.name;
            if (!self.editData.currSpriteSheetInEdit.name) {
                self.editData.currSpriteSheetInEdit.name = name;
            }
            var img = new Image();
            img.onload = function() {
                self.editData.currSpriteSheetInEdit.width = img.width;
                self.editData.currSpriteSheetInEdit.height = img.height;
                self.editData.currSpriteSheetInEdit.calcFrameSize();
            };
            img.src = src;
        },
        refreshNumOfCells: function(){
            this.numOfSpriteSheetCells =
                this.editData && this.editData.currSpriteSheetInEdit &&
                this.editData.currSpriteSheetInEdit.numOfFramesH*
                this.editData.currSpriteSheetInEdit.numOfFramesV;
            this.editData.currSpriteSheetInEdit.calcFrameSize();
        },
        createOrEditSpriteSheet: function(sprSh){
            var model = sprSh.toJSON();
            model._file = this._file;
            this._file = '';
            var self = this;
            resource.createOrEditResource(
                model,
                SpriteSheet,
                editData.spriteSheetList,
                function(result){
                    self.close();
                }
            );
        }
    }
});
},{"./spriteSheetDialog.html":29,"providers/abstractDialog":51,"providers/editData":53,"providers/i18n":55,"providers/resource":56,"providers/utils":58,"providers/validator":59}],31:[function(require,module,exports){
module.exports = "<div class=\"template\">\n    <div id=\"c\" class=\"split\">\n        <div id=\"a\" class=\"split split-horizontal content\">\n            <app-game-props/>\n            <app-scenes/>\n            <app-game-objects/>\n            <app-sprite-sheets/>\n            <app-user-interface/>\n            <app-fonts/>\n            <app-sounds/>\n            <app-particle-systems/>\n        </div>\n        <div id=\"b\" class=\"split split-horizontal content\">\n            <app-script-editor/>\n        </div>\n        <div id=\"e\" class=\"split split-horizontal content\">e</div>\n    </div>\n    <div id=\"d\" class=\"split content\">d</div>\n\n    <app-dialogs/>\n\n</div>";

},{}],32:[function(require,module,exports){

var onMounted = function _onMounted(){
    var layoutSizes = {};

    layoutSizes.a =   15;
    layoutSizes.b =   70;
    layoutSizes.e =  (100 - layoutSizes.a - layoutSizes.b);

    layoutSizes.c =   94;
    layoutSizes.d =   (100 - layoutSizes.c);


    Split(['#a', '#b', '#e'], {
        sizes: [layoutSizes.a,layoutSizes.b,layoutSizes.e],
        gutterSize: 5,
        cursor: 'row-resize',
        minSize:10
    });
    var vertical = Split(['#c', '#d'], {
        direction: 'vertical',
        sizes: [layoutSizes.c,layoutSizes.d],
        gutterSize: 5,
        cursor: 'col-resize',
        minSize:10
    });
    window.addEventListener('resize',function(){
        vertical.setSizes([layoutSizes.c,layoutSizes.d]);
    });
};

module.exports = {
    template: require('./editor.html'),
    data: function () {
        return {}
    },
    mounted: function(){
        onMounted();
    },
    methods: {

    },
    components: {
        appCollapsible: require('components/collapsible/collapsible'),
        appModal: require('components/modal/modal'),
        appInputFile: require('components/inputFile/inputFile'),

        appGameProps: require('./leftPanel/gameProps/gameProps'),
        appScenes: require('./leftPanel/scenes/scenes'),
        appGameObjects: require('./leftPanel/gameObjects/gameObjects'),
        appSpriteSheets: require('./leftPanel/spriteSheets/spriteSheets'),
        appUserInterface: require('./leftPanel/userInterface/userInterface'),
        appFonts: require('./leftPanel/fonts/fonts'),
        appSounds: require('./leftPanel/sounds/sounds'),
        appParticleSystems: require('./leftPanel/particleSystems/particleSystems'),
        appDialogs: require('./dialogs/dialogs'),

        appScriptEditor: require('./centralPanel/scriptEditor/scriptEditor')
    }
};
},{"./centralPanel/scriptEditor/scriptEditor":18,"./dialogs/dialogs":20,"./editor.html":31,"./leftPanel/fonts/fonts":36,"./leftPanel/gameObjects/gameObjects":38,"./leftPanel/gameProps/gameProps":40,"./leftPanel/particleSystems/particleSystems":42,"./leftPanel/scenes/scenes":44,"./leftPanel/sounds/sounds":46,"./leftPanel/spriteSheets/spriteSheets":48,"./leftPanel/userInterface/userInterface":50,"components/collapsible/collapsible":6,"components/inputFile/inputFile":14,"components/modal/modal":16}],33:[function(require,module,exports){
module.exports = "<div class=\"row\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"cell\">\n        <span class=\"inlineBlock withPaddingRight\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.name}}\n            </span>\n        </span>\n    </div>\n    <div    class=\"cell width100\"\n            v-if=\"!gameObject.subType\">\n        <div :style=\"\n                utils.merge(\n                        utils.getGameObjectCss(gameObject),\n                        {zoom:gameObject.height>30?30/gameObject.height:1}\n                )\"></div>\n    </div>\n    <div\n            class=\"cell width100\"\n            v-if=\"gameObject.subType\"\n            :title=\"gameObject.name\"\n            >\n        <span class=\"textOverflow\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.subType}}\n            </span>\n        </span>\n    </div>\n    <div class=\"cell width1\">\n        <div v-if=\"crud && crud.editScript\" class=\"script\" v-on:click=\"crud.editScript(gameObject)\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div v-if=\"crud && crud.edit\" class=\"edit\" v-on:click=\"crud.edit()\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div class=\"delete\"></div>\n    </div>\n</div>";

},{}],34:[function(require,module,exports){

module.exports = Vue.component('app-game-object-row', {
    props: ['gameObject','crud'],
    template: require('./gameObjectRow.html'),
    data: function(){
        return {
            utils: require('providers/utils')
        }
    },
    components: {

    },
    methods: {

    }
});
},{"./gameObjectRow.html":33,"providers/utils":58}],35:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createFont\n        }\"\n        :title=\"i18n.fonts\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"font in (editData.fontList && editData.fontList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{font.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editFont(font)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteFont(font)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],36:[function(require,module,exports){

var fontDialog = require('../../dialogs/fontDialog/fontDialog');
var Font = _require('font');
var resource = require('providers/resource');

module.exports = Vue.component('app-fonts', {
    props: [],
    template: require('./fonts.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {

    },
    methods: {
        createFont: function(){
            this.editData.currFontInEdit = new Font(new Font().toJSON());
            fontDialog.instance.open();
        },
        editFont: function(fnt){
            this.editData.currFontInEdit = fnt.clone();
            fontDialog.instance.open();
        },
        deleteFont: function(fnt){
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    resource.deleteResource(fnt);
                }
            )
        }
    }
});
},{"../../dialogs/fontDialog/fontDialog":22,"./fonts.html":35,"providers/editData":53,"providers/i18n":55,"providers/resource":56}],37:[function(require,module,exports){
module.exports = "<div>\n    <app-collapsible\n            :title=\"i18n.gameObjects\"\n            :crud=\"{\n                create:createGameObject\n            }\"\n            >\n        <div class=\"withPaddingLeft\">\n            <div class=\"table rightText\">\n                <div\n                        :crud=\"{\n                            edit: editGameObject,\n                            editScript: editGameObjectScript\n                        }\"\n                        is=\"appGameObjectRow\"\n                        :game-object=\"gameObject\"\n                        v-for=\"gameObject in (editData.gameObjectList && editData.gameObjectList.rs)\"\n                        >\n                </div>\n            </div>\n        </div>\n    </app-collapsible>\n</div>";

},{}],38:[function(require,module,exports){

var utils = require('providers/utils');

module.exports = Vue.component('app-game-objects', {
    props: [],
    template: require('./gameObjects.html'),
    data: function(){
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {
        appGameObjectRow: require('../_gameObjectRow/gameObjectRow')
    },
    methods: {
        createGameObject: function(){
            console.log('create go');
        },
        editGameObjectScript: function(gameObject){
            utils.openEditor(gameObject.type + '/' +gameObject.name + '.js');
        },
        editGameObject: function(){
            console.log('create go');
        }
    }
});

},{"../_gameObjectRow/gameObjectRow":34,"./gameObjects.html":37,"providers/editData":53,"providers/i18n":55,"providers/utils":58}],39:[function(require,module,exports){
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <app-collapsible :title=\"i18n.game\" :id=\"'game'\">\n        <form class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.width}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            v-model=\"editData.gameProps.width\"\n                            v-control=\"{form:form,model:editData.gameProps,prop:'width'}\"\n                            type=\"number\"\n                            min=\"1\"\n                            max=\"20000\"\n                            v-on:change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.height}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            v-model=\"editData.gameProps.height\"\n                            type=\"number\"\n                            v-control=\"{form:form,model:editData.gameProps,prop:'height'}\"\n                            min=\"1\"\n                            max=\"20000\"\n                            v-on:change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.scaleStrategy}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            v-model=\"editData.gameProps.scaleStrategy\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option\n                                :title=\"value\"\n                                :value=\"value\"\n                                v-for=\"(value,key) in scales\">{{key}}</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.preloadingScene}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            v-model=\"editData.gameProps.preloadingSceneId\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option value=\"\">--</option>\n                        <option\n                                :disabled=\"item.id==editData.gameProps.startSceneId\"\n                                :value=\"item.id\"\n                                v-for=\"item in (editData.sceneList && editData.sceneList.rs)\">{{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.startScene}}\n                </div>\n                <div class=\"cell\">\n                    <select v-model=\"editData.gameProps.startSceneId\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option\n                                :disabled=\"item.id==editData.gameProps.preloadingSceneId\"\n                                :value=\"item.id\"\n                                v-for=\"item in (editData.sceneList && editData.sceneList.rs)\">{{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n        </form>\n\n    </app-collapsible>\n</div>";

},{}],40:[function(require,module,exports){
var resource = require('providers/resource');

module.exports = Vue.component('app-game-props', {
    props: [],
    template: require('./gameProps.html'),
    data: function(){
        return {
            form:require('providers/validator').new(),
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll(),
            scales: _require('consts').SCALE_STRATEGY
        }
    },
    methods: {
        saveGameProps: function(){
            resource.saveGameProps(this.editData.gameProps);
        }
    }
});
},{"./gameProps.html":39,"providers/editData":53,"providers/i18n":55,"providers/resource":56,"providers/validator":59}],41:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createParticleSystem\n        }\"\n        :title=\"i18n.particleSystems\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"ps in (editData.particleSystemList && editData.particleSystemList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{ps.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editParticleSystem(ps)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteParticleSystem(ps)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],42:[function(require,module,exports){

var particleSystemDialog = require('../../dialogs/particleSystemDialog/particleSystemDialog');
var ParticleSystem = _require('particleSystem');
var resource = require('providers/resource');

module.exports = Vue.component('app-particle-systems', {
    props: [],
    template: require('./particleSystems.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {

    },
    methods: {
        createParticleSystem: function(){

            this.editData.currParticleSystemInEdit =
                new ParticleSystem(new ParticleSystem().toJSON());
            var ps = this.editData.currParticleSystemInEdit;
            var firstInList = this.editData.gameObjectList.get(0);
            if (!firstInList) return;

            Vue.set(ps,'gameObjectId',firstInList.id);
            Vue.set(ps,'_gameObject',firstInList);

            particleSystemDialog.instance.open();
        },
        editParticleSystem: function(ps){
            this.editData.currParticleSystemInEdit = ps.clone();
            particleSystemDialog.instance.open();
        },
        deleteParticleSystem: function(ps){
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    resource.deleteResource(ps);
                }
            )
        }
    }
});
},{"../../dialogs/particleSystemDialog/particleSystemDialog":24,"./particleSystems.html":41,"providers/editData":53,"providers/i18n":55,"providers/resource":56}],43:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createScene\n        }\"\n        :title=\"i18n.scenes\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\" v-for=\"scene in (editData.sceneList && editData.sceneList.rs)\">\n        <app-collapsible\n                :object=\"scene\"\n                :crud=\"{\n                    edit:editScene,\n                    delete:deleteScene\n                }\"\n                :title=\"scene.name\"\n                >\n            <div class=\"withPaddingLeft\">\n                <app-collapsible\n                        :title=\"i18n.layers\"\n                        :crud=\"{\n                            create:createLayer\n                        }\"\n                        >\n                    <div v-for=\"layer in scene._layers.rs\" class=\"withPaddingLeft\">\n                        <app-collapsible\n                                :object=\"layer\"\n                                :crud=\"{\n                            edit:editLayer,\n                            delete:deleteLayer\n                        }\"\n                                :title=\"layer.name\" :id=\"layer.id\">\n                            <div class=\"withPaddingLeft\">\n                                <div class=\"table width100\">\n                                    <div\n                                            is=\"appGameObjectRow\"\n                                            :game-object=\"gameObject\"\n                                            v-for=\"gameObject in layer._gameObjects.rs\"></div>\n                                </div>\n                            </div>\n                        </app-collapsible>\n                    </div>\n                </app-collapsible>\n            </div>\n        </app-collapsible>\n    </div>\n</app-collapsible>";

},{}],44:[function(require,module,exports){
var resource = require('providers/resource');

module.exports = Vue.component('app-scenes', {
    props: [],
    template: require('./scenes.html'),
    data: function(){
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {
        appGameObjectRow: require('../_gameObjectRow/gameObjectRow')
    },
    methods: {
        createScene: function(){
            console.log('createScene invoked');
        },
        editScene: function(scene){
            console.log('editScene invoked',scene);
        },
        deleteScene: function(scene){
            console.log('deleteScene invoked',scene);
        },
        createLayer: function(){
            console.log('createLayer invoked');
        },
        editLayer: function(scene){
            console.log('editLayer invoked',scene);
        },
        deleteLayer: function(scene){
            console.log('delete l invoked',scene);
        },
        createGameObject: function(){
            console.log('create go invoked');
        },
        editGameObject: function(scene){
            console.log('edit go invoked',scene);
        },
        deleteGameObject: function(scene){
            console.log('delete go invoked',scene);
        }
    }
});

},{"../_gameObjectRow/gameObjectRow":34,"./scenes.html":43,"providers/editData":53,"providers/i18n":55,"providers/resource":56}],45:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createSound\n        }\"\n        :title=\"i18n.sounds\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"sound in (editData.soundList && editData.soundList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{sound.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editSound(sound)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteSound(sound)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],46:[function(require,module,exports){

var Sound = _require('sound');
var soundDialog = require('../../dialogs/soundDialog/soundDialog');
var resource = require('providers/resource');

module.exports = Vue.component('app-sounds', {
    props: [],
    template: require('./sounds.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {

    },
    methods: {
        createSound: function(){
            this.editData.currSoundInEdit = new Sound(new Sound().toJSON());
            soundDialog.instance.open();
        },
        editSound: function(sound){
            this.editData.currSoundInEdit = sound.clone();
            soundDialog.instance.open();
        },
        deleteSound: function(sound){
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    resource.deleteResource(sound);
                }
            )
        }
    }
});
},{"../../dialogs/soundDialog/soundDialog":28,"./sounds.html":45,"providers/editData":53,"providers/i18n":55,"providers/resource":56}],47:[function(require,module,exports){
module.exports = "<app-collapsible\n        :title=\"i18n.spriteSheets\"\n        :crud=\"{\n            create:createSpriteSheet\n        }\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"spriteSheet in (editData.spriteSheetList && editData.spriteSheetList.rs)\">\n\n                <div class=\"cell\">\n                    <img\n                        height=\"20\"\n                        class=\"spriteSheetThumb\"\n                        :src=\"editData.projectName+'/'+spriteSheet.resourcePath\"/>\n                </div>\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{spriteSheet.name}}\n                    </span>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editSpriteSheet(spriteSheet)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteSpriteSheet(spriteSheet)\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],48:[function(require,module,exports){

var SpriteSheet = _require('spriteSheet');
var spriteSheetDialog = require('../../dialogs/spriteSheetDialog/spriteSheetDialog');
var resource = require('providers/resource');

module.exports = Vue.component('app-sprite-sheets', {
    props: [],
    template: require('./spriteSheets.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {

    },
    methods: {
        createSpriteSheet: function(){
            this.editData.currSpriteSheetInEdit = new SpriteSheet(new SpriteSheet().toJSON());
            spriteSheetDialog.instance.open();
        },
        editSpriteSheet: function(sprSh){
            this.editData.currSpriteSheetInEdit = sprSh.clone();
            spriteSheetDialog.instance.open();
        },
        deleteSpriteSheet: function(sprSh){
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    resource.deleteResource(sprSh);
                }
            )
        }
    }
});

},{"../../dialogs/spriteSheetDialog/spriteSheetDialog":30,"./spriteSheets.html":47,"providers/editData":53,"providers/i18n":55,"providers/resource":56}],49:[function(require,module,exports){
module.exports = "<app-collapsible\n        :title=\"i18n.userInterface\"\n        >\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"ui in (editData.userInterfaceList && editData.userInterfaceList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{ui.subType}}</span>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],50:[function(require,module,exports){

module.exports = Vue.component('app-user-interface', {
    props: [],
    template: require('./userInterface.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {

    },
    methods: {

    }
});
},{"./userInterface.html":49,"providers/editData":53,"providers/i18n":55}],51:[function(require,module,exports){

module.exports = {
    data: function () {
        return {
            opened: false
        }
    },
    methods: {
        open: function () {
            this.opened = true;
        },
        close: function(){
            this.opened = false;
        }
    }
};
},{}],52:[function(require,module,exports){

var events = {};
window.addEventListener('message',function(resp){
    var data = resp.data && resp.data.response;
    if (!data) return;
    var id = resp.data.eventUUID;
    if (events[id]) {
        var fn = events[id];
        delete events[id];
        fn && data && fn(data);
    }
});
module.exports.requestToApi = function(params,callBack) {
    var eventUUID = (~~Math.random()*100)+new Date().getTime();
    events[eventUUID] = callBack;
    params.eventUUID = eventUUID;
    window.top.postMessage(params,'*');
};
},{}],53:[function(require,module,exports){

var collections = _require('collections');

var res = {};

res.reset = function(){

    res.testEditData = 'edit data ok';
    res.commonBehaviourList = {};
    res.currGameObjectInEdit = {};
    res.currSpriteSheetInEdit = {};
    res.currFrAnimationInEdit = {};
    res.currSceneInEdit = {};
    res.currSceneGameObjectInEdit = {};
    res.currLayerInEdit = {};
    res.currFontInEdit = {};
    res.currCommonBehaviourInEdit = {};
    res.currSoundInEdit = {};
    res.currParticleSystemInEdit = {};
    res.currProjectInEdit = {};
    res.currTileIndexInEdit = {};
    res.gameProps = {};

    res.userInterfaceList = new collections.List();

    res.debugFrameUrl = '';
    res.scriptEditorUrl = '';

    res.tileMapPosY = res.tileMapPosX = 0;

    res.projectName = undefined;
    res.projects = {};
    res.buildOpts = {
        debug: false,
        embedResources: false,
        embedScript: false,
        minify:false
    };
};

res.reset();

module.exports = res;

},{}],54:[function(require,module,exports){

module.exports.get = function(url,data,callBack){
    Vue.http.
        get(url, data).
        then(function(resp){
            callBack(resp.body);
        }).
        catch(function(err){
            setTimeout(function() { throw err.body || ''; },0);
        });
};

module.exports.post = function(url,data,callBack){
    Vue.http.
        post(url, data).
        then(function(resp){
            callBack(resp.body);
        }).
        catch(function(err){
            //setTimeout(function() { throw err.body || ''; },0);
        });
};
},{}],55:[function(require,module,exports){

var _i18n = {};

_i18n.locale = 'en';

_i18n.bundle = {
    'en': {
        ok: 'ok',
        confirm: 'confirm',
        confirmQuestion:'delete this item?',
        cancel:'cancel',
        assets:'assets',
        addSpriteSheet:'add sprite sheet',
        loadImage:'load image',
        gameObjects:'game objects',
        gameObject:'gameObject',
        create:'create',
        edit:'edit',
        close:'close',
        name:'name',
        scaleStrategy:'scale strategy',
        spriteSheets:'sprite sheets',
        width:'width',
        height:'height',
        currFrameIndex:'current frame index',
        spriteSheet: 'sprite sheet',
        numOfFramesH: 'num of frames horizontally',
        numOfFramesV: 'num of frames vertically',
        image: 'image',
        frAnimations:'frame animations',
        duration:'duration, msec',
        frames:'frames (i.e 1,2,3)',
        playAnim:'play animation',
        stopAnim:'stop animation',
        saveObjectFirst:'save object first',
        all: 'all',
        game:'game',
        editThisGameObject:'edit this game object',
        deleteThisGameObject:'delete this game object',
        scenes:'scenes',
        scene:'scene',
        run:'run',
        layers: 'layers',
        layer:'layer',
        debug: 'debug',
        stop: 'stop',
        addGameObject:'add game object',
        nothingToAdd:'nothing to add',
        from:'from',
        to:'to',
        fonts:'fonts',
        font:'font',
        text:'text',
        commonBehaviour:'common behaviour',
        groupName:'group name',
        selectFont:'select font',
        fontSize:'font size',
        fontColor:'font color',
        userInterface:'user interface',
        textField:'text field',
        noDataToEdit:'no data to edit provided',
        rigid:'rigid',
        sounds:'sounds',
        play:'play',
        loadSound:'load sound',
        build:'build',
        particleSystems:'particle systems',
        particleSystem:'particle system',
        preview:'preview',
        explorer:'explorer',
        description: 'description',
        colorBG:'scene background color',
        useBG:'use background color',
        angle:'angle',
        tileMap: 'tile map',
        noScene: 'create at least one scene',
        sceneNotSelected: 'select scene to drop object',
        noLayer: 'create at least one layer of current scene',
        selected: 'selected',
        fixedToCamera:'fixed to camera',
        preloadingScene: 'preloading scene',
        startScene: 'start scene'
    }
};

_i18n.setLocate = function(_locale){
    _i18n.locale = _locale;
};

_i18n.get = function(key){
    return _i18n.bundle[_i18n.locale][key];
};

_i18n.getAll = function(){
    return _i18n.bundle[_i18n.locale];
};

module.exports = _i18n;
},{}],56:[function(require,module,exports){

var Resource = function(){

    var self = this;
    var editData = require('providers/editData');
    var http = require('providers/http');

    var bundle = _require('bundle');
    var collections = _require('collections');
    var CommonBehaviour = _require('commonBehaviour');
    var TextField = _require('textField');
    var Layer = _require('layer');

    var _loadResources = function(projectName){
        http.post('/resource/getAll',{projectName:projectName},function(response){
            bundle.prepare(response);
            Object.keys(bundle).forEach(function(key){
                if (bundle[key] && bundle[key].call) return;
                Vue.set(editData,key,bundle[key]);
                editData[key] = bundle[key];
            });
            editData.gameProps = bundle.gameProps;
            editData.commonBehaviourList = new collections.List();
            response.commonBehaviour.forEach(function(cb){
                editData.commonBehaviourList.add(new CommonBehaviour(cb));
            });
            editData.userInterfaceList.clear().add(new TextField({protoId:'0_0_1'}));
        });
    };
    this.loadProject = function(projectName){
        editData.reset();
        editData.projectName = projectName;
        document.title = projectName;
        sessionStorage.projectName = projectName;
        Promise.
            resolve().
            then(function(){
                return _loadResources(projectName);
            }).
            then(function(){
                if (!bundle.sceneList.isEmpty()) editData.currSceneInEdit = bundle.sceneList.get(0);
                if (editData.currSceneInEdit._layers) {
                    if (editData.currSceneInEdit._layers.size()) {
                        editData.currLayerInEdit = editData.currSceneInEdit._layers.get(0);
                    }
                }
                location.href = '#/editor';
            });
    };
    this.createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList,callBack){
        var formData = new FormData();
        formData.append('file',currResourceInEdit._file);
        delete currResourceInEdit._file;
        var model = {};
        Object.keys(currResourceInEdit).forEach(function(key){
            model[key] = currResourceInEdit[key];
        });
        formData.append('model',JSON.stringify(model));
        formData.append('projectName',editData.projectName);
        var op = currResourceInEdit.id?'edit':'create';
        http.post('/resource/'+op,formData,function(item){
            if (op=='create') {
                var r = new ResourceClass(item);
                resourceList.add(r);
                callBack && callBack({type:'create',r:r});
            } else {
                var index = resourceList.indexOf({id:item.id});
                resourceList.get(index).fromJSON(item);
                callBack && callBack({type:'edit',r:resourceList.rs[index]});
            }
        });
    };
    //this.createOrEditResourceSimple = function(objResource){
    //    this.createOrEditResource(objResource,objResource.constructor,bundle[objResource.type+'List']);
    //};
    //this.deleteObjectFromResource = function(resourceType,resourceId,objectType,objectId,callback){
    //    $http({
    //        url: '/deleteObjectFromResource',
    //        method: "POST",
    //        headers: {'Content-Type': 'application/json'},
    //        data: {
    //            resourceType:resourceType,
    //            resourceId:resourceId,
    //            objectType:objectType,
    //            objectId:objectId,
    //            projectName:editData.projectName
    //        }
    //    }).
    //        success(function (res) {
    //            callback && callback();
    //        });
    //};

    this.deleteResource = function(idOrObject,type,callBack) {
        var id = (typeof idOrObject == 'object')? idOrObject.id:idOrObject;
        type = type || idOrObject.type;
        http.post(
            '/resource/delete',
            {
                id: id,
                type: type,
                projectName: editData.projectName
            },
            function () {
                editData[type + 'List'].remove({id: id});
                callBack && callBack();
            }
        );
    };

    this.saveGameProps = function(gameProps){
        http.post(
            '/gameProps/save',
            {
                model:gameProps,
                projectName: editData.projectName
            }
        )
    };

    //this.post = function(url,data,callBack){
    //    data.projectName = editData.projectName;
    //    $http({
    //        url: '/gameProps/save',
    //        method: "POST",
    //        data: data,
    //        headers: {'Content-Type': undefined}
    //    }).
    //        success(function (resp) {
    //            callBack && callBack(resp);
    //        });
    //};
    //this.postMultiPart = function(url,formData,callBack){
    //    $http({
    //        url: url,
    //        method: "POST",
    //        data: formData,
    //        headers: {'Content-Type': undefined}
    //    }).
    //        success(function (resp) {
    //            callBack && callBack(resp);
    //        });
    //};
    //this.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,callback){
    //    var op = object.id?'edit':'create';
    //    $http({
    //        url: '/createOrEditObjectInResource',
    //        method: "POST",
    //        data: {
    //            model:JSON.stringify(object),
    //            resourceId:resourceId,
    //            resourceType:resourceType,
    //            objectType:objectType,
    //            projectName:editData.projectName
    //        },
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback({type:op,r:resp});
    //        });
    //};
    //this.createOrEditLayer = function(l){
    //    self.createOrEditResource(l,Layer,bundle.layerList,
    //        function(item){
    //            if (item.type=='create') {
    //                self.createOrEditObjectInResource(
    //                    editData.currSceneInEdit.type,
    //                    editData.currSceneInEdit.id,
    //                    'layerProps',
    //                    {
    //                        type:'layer',
    //                        protoId:item.r.id
    //                    },
    //                    function(resp){
    //                        var l = editData.currLayerInEdit.clone(Layer);
    //                        l.id = resp.r.id;
    //                        l.protoId = item.r.id;
    //                        l._scene = editData.currSceneInEdit;
    //                        editData.currSceneInEdit._layers.add(l);
    //                    }
    //                );
    //            }
    //        });
    //};
    this.createFile = function(path,content,callback){
        http.post('/createFile',{
            path:path,
            content:content,
            projectName: editData.projectName
        },callback);
    };
    this.readFile = function(path,callback){
        http.post('/readFile',{
            path:path,
            projectName: editData.projectName
        },callback);
    };
    //this.getProjects = function(callback){
    //    $http({
    //        url: '/getProjects',
    //        method: "GET",
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //this.createProject = function(projectName,callback){
    //    $http({
    //        url: '/createProject',
    //        method: "POST",
    //        data: {projectName:projectName},
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //this.renameFolder = function(oldName,newName,callback){
    //    $http({
    //        url: '/renameFolder',
    //        method: "POST",
    //        data: {oldName:oldName,newName:newName},
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //this.deleteFolder = function(name,callback){
    //    $http({
    //        url: '/deleteFolder',
    //        method: "POST",
    //        data: {name:name},
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //
    //
    //this.setTile = function(scene,x,y,tileIndex){
    //    $http({
    //        url: '/setTile/',
    //        method: "POST",
    //        data: {
    //            sceneId:scene.id,
    //            x:x,
    //            y:y,
    //            tileIndex:tileIndex,
    //            projectName:editData.projectName
    //        },
    //        headers: {'Content-Type': 'application/json'}
    //    });
    //};
    //
    //
    (function(){
        sessionStorage.projectName = 'slots';
        if (sessionStorage.projectName) {
            self.loadProject(sessionStorage.projectName);
        } else {
            location.href = '#/explorer';
        }
    })();
};

module.exports = new Resource();
},{"providers/editData":53,"providers/http":54}],57:[function(require,module,exports){

//Vue.filter('nbsp', function (value) {
//    return value.split(' ').join('&nbsp;')
//});

window.alertEx = function(msg){
    require('components/alertDialog/alertDialog').instance.open(msg);
};

window.confirmEx = function(msg,callback){
    require('components/confirmDialog/confirmDialog').instance.open(msg,callback);
};
},{"components/alertDialog/alertDialog":2,"components/confirmDialog/confirmDialog":12}],58:[function(require,module,exports){

var mathEx = _require('mathEx');
var editData = require('providers/editData');
var resource = require('providers/resource');

var Utils = function(){
    this.getGameObjectCss = function(gameObj){
        if (!gameObj) return {};
        return  {
            width:                 gameObj.width+'px',
            height:                gameObj.height+'px',
            backgroundImage:      gameObj._spriteSheet && 'url('+editData.projectName+'/'+gameObj._spriteSheet.resourcePath+')',
            backgroundPositionY: -gameObj._sprPosY+'px',
            backgroundPositionX: -gameObj._sprPosX+'px',
            backgroundRepeat:     'no-repeat',
            opacity:              gameObj.alpha,
            transform:            'scale('+gameObj.scale.x+','+gameObj.scale.y+') rotateZ('+mathEx.radToDeg(gameObj.angle)+'deg)'
        };
    };
    this.merge = function(a,b){
        a = a || {};
        b = b || {};
        var res = Object.create(a);
        Object.keys(b).forEach(function(key){
            res[key] = b[key];
        });
        return res;
    };

    this.hexToRgb = function(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16)||0,
            parseInt(result[2], 16)||0,
            parseInt(result[3], 16)||0
        ] : [0,0,0];
    };

    this.rgbToHex = function(col) {
        var r = +col[0],g=+col[1],b=+col[2];
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    this.dataURItoBlob =function (dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {type:mimeString});
    };

    this.range = function(rFr,rTo) {
        var arr = [], i;
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
    };

    var createAceCompleter = function(){
        var result = [];
        var res = {};
        var objs = ['gameObject'];
        objs.forEach(function(go){
            var GObjClass = _require(go);
            var goObj = new GObjClass();
            for (var key in goObj) {
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
    };

    var waitForFrameAndDo = function(file,path){
        var frame = document.getElementById('scriptEditorFrame');
        var contentWindow = frame && frame.contentWindow;
        if (!contentWindow.ready) {
            setTimeout(function(){
                waitForFrameAndDo(file,path);
            },100);
            return;
        }
        contentWindow.setCode(file);
        contentWindow.calcEditorSize();
        contentWindow.setAutocomplete(createAceCompleter());
        window.removeEventListener('resize',contentWindow.calcEditorSize);
        window.addEventListener('resize',contentWindow.calcEditorSize);
        window.saveCode = function(code){
            resource.createFile(path,code);
        };
    };

    this.openEditor = function(resourceUrl) {
        editData.scriptEditorUrl = resourceUrl;
        var path = 'script/'+resourceUrl;
        resource.readFile(path,function(file){
            waitForFrameAndDo(file,path);
        });
    };

};

module.exports = new Utils();
},{"providers/editData":53,"providers/resource":56}],59:[function(require,module,exports){

module.exports.new = function(){
    return {
        valid: function(){
            return true;
        }
    }
};
},{}],60:[function(require,module,exports){

require('providers/resource');

const router = new VueRouter({
    //mode: 'abstract',
    routes: [
        {
            path: '/editor',
            component: require('pages/editor/editor')
        }
    ]
});

require('providers/userDefinedFns');

const app = new Vue(
    {
        router:router,
        components: {
            appConfirmDialog: require('components/confirmDialog/confirmDialog').component,
            appAlertDialog: require('components/alertDialog/alertDialog').component
        }
    }
)
.$mount('#app');


router.init(app);

},{"components/alertDialog/alertDialog":2,"components/confirmDialog/confirmDialog":12,"pages/editor/editor":32,"providers/resource":56,"providers/userDefinedFns":57}]},{},[60]);
