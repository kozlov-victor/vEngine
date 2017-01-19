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
},{"./alertDialog.html":1,"components/modal/modal":16,"providers/abstractDialog":67,"providers/i18n":71}],3:[function(require,module,exports){
module.exports = "<div\n        class=\"inlineBlock\"\n        v-on:click=\"click($event)\"\n        v-on:mousemove=\"mouseMove($event)\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div data-container class=\"inlineBlock\">\n        <svg viewBox=\"0 0 200 200\" width=\"30\" height=\"30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"100\" cy=\"100\" r=\"100\" stroke=\"black\" stroke-width=\"1\" fill=\"white\"></circle>\n            <line id=\"line\" x1=\"100\" y1=\"100\"\n                  x2=\"200\" y2=\"100\"\n                  stroke=\"black\"\n                  stroke-width=\"2\"\n                  :transform=\"'rotate('+angleInDeg+',100,100)'\"\n                    >\n            </line>\n        </svg>\n    </div>\n    <div class=\"smallXX\" :title=\"object[value]+' rad'\">\n        {{angleInDeg}}&deg;\n    </div>\n</div>";

},{}],4:[function(require,module,exports){

module.exports = Vue.component('app-angle-picker', {
    props: ['object','value'],
    template: require('./anglePicker.html'),
    data: function(){
        return {

        }
    },
    created: function(){

    },
    computed: {
        angleInDeg: function(){
            var res =  (this.object[this.value] * 180 / Math.PI) % 360;
            return +(res.toFixed(2)) || 0
        }
    },
    methods: {
        calcAngleFromEvent: function(e){
            var el = this.$el.querySelector('[data-container]');
            var rect = el.getBoundingClientRect();
            var x = e.clientX - rect.left, y = e.clientY - rect.top;
            var angle = Math.atan2((y -15),(x - 15));
            if (angle<0) angle = 2*Math.PI + angle;
            angle = +(angle.toFixed(2)) || 0;
            this.object[this.value] = angle;
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
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div\n        class=\"collapsible_header bold noSelect\"\n    >\n        <div class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell width1\">\n                    <span\n                            class=\"collapsible_point noBrake\"\n                            @click=\"toggle()\"\n                            :class=\"{rotated:opened}\">▷</span>\n                </div>\n                <div class=\"cell\">\n                    <span\n                            @click=\"toggle()\"\n                            >&nbsp;{{title}}</span>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.create\" class=\"add\" v-on:click.stop=\"crud.create(meta)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.editScript\" class=\"script\" v-on:click.stop=\"crud.editScript(object)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.edit\" class=\"edit\" v-on:click.stop=\"crud.edit(object,meta)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.delete\" class=\"delete\" v-on:click.stop=\"crud.delete(object,meta)\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div\n            class=\"collapsible_content\"\n            :class=\"{opened:opened}\">\n        <slot></slot>\n    </div>\n</div>";

},{}],6:[function(require,module,exports){
var id = 0;

module.exports = Vue.component('app-collapsible', {
    props: ['title','crud','object','meta'],
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
module.exports = "<div class=\"inlineBlock\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <div\r\n            :style=\"{\r\n                cursor: 'pointer',\r\n                width: 24 + 'px',\r\n                height:24 + 'px',\r\n                backgroundColor: 'rgb('+currentColorRGB.r+','+currentColorRGB.g+','+currentColorRGB.b+')'\r\n            }\"\r\n            v-on:click=\"click()\"\r\n            >\r\n    </div>\r\n\r\n    <app-color-picker-dialog/>\r\n\r\n</div>\r\n\r\n";

},{}],8:[function(require,module,exports){

var colorPickerDialog = require('./colorPickerDialog');

module.exports = Vue.component('app-color-picker', {
    props: ['object','value','onchange'],
    template: require('./colorPicker.html'),
    data: function(){
        return {

        }
    },
    computed: {
        currentColorRGB: function(){
            return this.object[this.value];
        }
    },
    created: function(){

    },
    methods: {
        click: function(e){
            colorPickerDialog.instance.open(this,this.currentColorRGB);
        },
        applyColor: function(color){
            this.object[this.value] = color;
        }
    },
    components: {
        appColorPickerDialog: require('components/colorPicker/colorPickerDialog').component
    }
});
},{"./colorPicker.html":7,"./colorPickerDialog":10,"components/colorPicker/colorPickerDialog":10}],9:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table>\n        <tr>\n            <td>\n                <input type=\"color\" v-model=\"currentColorHex\" v-on:change=\"hexChanged()\"/>\n            </td>\n            <td>\n                <input type=\"text\"  v-model=\"currentColorHex\" v-on:change=\"hexChanged()\"/>\n            </td>\n            <td></td>\n        </tr>\n\n        <table class=\"width100\">\n            <tr\n                    v-for=\"item in colorEnums\">\n                <td\n                        :style=\"{\n                            color: item.left\n                        }\"\n                        >\n                    {{item.left}}\n                </td>\n                <td class=\"centerText\">\n                    <input class=\"vAlign\" type=\"range\" min=\"0\" max=\"255\" v-model=\"currentColorRGB[item.key]\" v-on:change=\"rgbChanged()\"/>\n                    <br/>\n                    <input class=\"small vAlign\" v-model=\"currentColorRGB[item.key]\" v-on:change=\"rgbChanged()\"/>\n                    <hr/>\n                </td>\n                <td\n                        :style=\"{\n                            color: item.right\n                        }\"\n                        >{{item.right}}</td>\n            </tr>\n\n\n        </table>\n    </table>\n\n    <button\n            v-on:click=\"applyColor()\">\n        {{i18n.edit}}\n    </button>\n\n</app-modal>";

},{}],10:[function(require,module,exports){

var abstractDialog = require('providers/abstractDialog');
var utils = require('providers/utils');
var colorPicker = null;

var colorEnums = [
    {left:'red',right:'cyan',key:'r'},
    {left:'green',right:'magenta',key:'g'},
    {left:'blue',right:'yellow',key:'b'}
];

module.exports.component = Vue.component('app-color-picker-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./colorPickerDialog.html'),
    data: function () {
        return {
            i18n: require('providers/i18n').getAll(),
            currentColorRGB: {r:0,g:0,b:0},
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
            this.currentColorRGB.r = color.r;
            this.currentColorRGB.g = color.g;
            this.currentColorRGB.b = color.b;
            this.currentColorHex = utils.rgbToHex(this.currentColorRGB);
        },
        hexChanged: function(){
            var color = utils.hexToRgb(this.currentColorHex);
            Vue.set(this.currentColorRGB,'r',color.r);
            Vue.set(this.currentColorRGB,'g',color.g);
            Vue.set(this.currentColorRGB,'b',color.b);
        },
        rgbChanged: function(){
            this.currentColorHex = utils.rgbToHex(this.currentColorRGB);
        },
        applyColor: function(){
            colorPicker.applyColor(this.currentColorRGB);
            colorPicker.onchange && colorPicker.onchange();
            this.close();
        }
    }
});

},{"./colorPickerDialog.html":9,"components/modal/modal":16,"providers/abstractDialog":67,"providers/i18n":71,"providers/utils":74}],11:[function(require,module,exports){
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
},{"./confirmDialog.html":11,"components/modal/modal":16,"providers/abstractDialog":67,"providers/i18n":71}],13:[function(require,module,exports){
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
module.exports = "<div>\r\n    <div v-for=\"item in editData.currLayerInEdit._gameObjects && editData.currLayerInEdit._gameObjects.rs\">\r\n\r\n        <div\r\n                ng-if=\"!item.subType\"\r\n                app-draggable=\"gameObjectFromSelf\"\r\n                app-context-menu=\"ctxGameObject\"\r\n                ng-model=\"item\"\r\n\r\n                ng-click=\"editData.currSceneGameObjectInEdit=item\"\r\n                ng-style=\"utils.merge(\r\n                            utils.getGameObjectCss(item),\r\n                            {\r\n                                position:'absolute',\r\n                                left:\r\n                                     item.fixedToCamera?(item.pos.x+'px'):\r\n                                     item.pos.x -\r\n                                     (editData.currSceneInEdit.tileMap._spriteSheet._frameWidth||0) *\r\n                                     editData.tileMapPosX +\r\n                                     'px',\r\n                                top:\r\n                                     item.fixedToCamera?(item.pos.y+'px'):\r\n                                     item.pos.y -\r\n                                     (editData.currSceneInEdit.tileMap._spriteSheet._frameHeight||0) *\r\n                                     editData.tileMapPosY +\r\n                                     'px',\r\n                            }\r\n                    )\"\r\n                ng-class=\"{active:item==editData.currSceneGameObjectInEdit}\"\r\n                >1\r\n        </div>\r\n\r\n        <div\r\n                ng-if=\"item.subType=='textField'\"\r\n                app-draggable=\"gameObjectFromSelf\"\r\n                app-context-menu=\"ctxGameObject\"\r\n                ng-model=\"item\"\r\n                ng-click=\"editData.currSceneGameObjectInEdit=item\"\r\n                ng-style=\"utils.merge(\r\n                            utils.getGameObjectCss(item),\r\n                            {\r\n                                position:'absolute',\r\n                                left:\r\n                                     item.pos.x -\r\n                                     (editData.currSceneInEdit.tileMap._spriteSheet._frameWidth||0) *\r\n                                     editData.tileMapPosX +\r\n                                     'px',\r\n                                top:\r\n                                     item.pos.y -\r\n                                     (editData.currSceneInEdit.tileMap._spriteSheet._frameHeight||0) *\r\n                                     editData.tileMapPosY +\r\n                                     'px',\r\n                                backgroundColor:'rgb(0,222,0.1)',\r\n                                height:item.height+'px',\r\n                                width:item.width?item.width+'px':'10px',\r\n                                backgroundColor:item.width?'':'#ddd',\r\n                                backgroundImage:'none'\r\n                            }\r\n                    )\"\r\n                ng-class=\"{active:item==editData.currSceneGameObjectInEdit}\"\r\n                >\r\n\r\n            <div style=\"position: relative;left:0;top:0;z-index:10\">\r\n                            <span\r\n                                    ng-style=\"{\r\n                                    left:item.pos.x+'px',\r\n                                    top: item.pos.y+'px',\r\n                                    display:ch=='\\n'?'block':'inline-block',\r\n                                    width:item._font.fontContext.symbols[ch].width+'px',\r\n                                    height:item._font.fontContext.symbols[ch].height+'px',\r\n                                    backgroundImage:'url('+editData.projectName+'/'+item._font.resourcePath+')',\r\n                                    backgroundRepeat:     'no-repeat',\r\n                                    backgroundPositionX: -item._font.fontContext.symbols[ch].x+'px',\r\n                                    backgroundPositionY: -item._font.fontContext.symbols[ch].y+'px'\r\n                                }\"\r\n                                    ng-repeat=\"ch in item._chars track by $index\">\r\n                                </span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>";

},{}],18:[function(require,module,exports){

module.exports = Vue.component('app-curr-scene', {
    props: [],
    template: require('./scene.html'),
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
},{"./scene.html":17,"providers/editData":69,"providers/i18n":71}],19:[function(require,module,exports){
module.exports = "<div\n        class=\"height100\"\n        v-if=\"editData.scriptEditorUrl\"\n        >\n    <div style=\"height:10px;font-size: 10px;\">\n        {{editData.scriptEditorUrl}}\n    </div>\n    <div\n            id=\"scriptEditor\"\n            style=\"height:calc(100% - 10px)\"\n            >\n        <iframe\n                id=\"scriptEditorFrame\"\n                frameborder=\"0\"\n                class=\"block width100 height100 noOverFlow\"\n                src=\"/editorNew\"\n                ></iframe>\n    </div>\n</div>";

},{}],20:[function(require,module,exports){

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

},{"./scriptEditor.html":19,"providers/editData":69,"providers/i18n":71,"providers/resource":72}],21:[function(require,module,exports){
module.exports = "\r\n<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <table class=\"width100\">\r\n        <tr>\r\n            <td class=\"borderBottom\">\r\n                {{i18n.name}}\r\n            </td>\r\n            <td class=\"borderBottom\">\r\n                {{editData.currCommonBehaviourInEdit.name}}\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"borderBottom\">\r\n                {{i18n.description}}\r\n            </td>\r\n            <td class=\"borderBottom\">\r\n                {{editData.currCommonBehaviourInEdit.description}}\r\n            </td>\r\n        </tr>\r\n        <tr v-for=\"(value, key) in editData.currCommonBehaviourInEdit.parameters\">\r\n            <td class=\"borderBottom\">\r\n                {{key}}\r\n            </td>\r\n            <td class=\"borderBottom\">\r\n                <input\r\n                        type=\"text\"\r\n                        v-model=\"editData.currCommonBehaviourInEdit.parameters[key]\"/>\r\n            </td>\r\n        </tr>\r\n        <tr v-if=\"utils.size(editData.currCommonBehaviourInEdit.parameters)==0\">\r\n            <td colspan=\"2\" class=\"borderBottom\">\r\n                {{i18n.noDataToEdit}}\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <button\r\n            v-on:click=\"createOrEditCommonBehaviour(editData.currCommonBehaviourInEdit)\"\r\n            :disabled=\"!form.valid()\">\r\n        {{editData.currCommonBehaviourInEdit.id?i18n.edit:i18n.create}}\r\n    </button>\r\n\r\n</app-modal>";

},{}],22:[function(require,module,exports){

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var CommonBehaviour = _require('commonBehaviour');
var GameObject = _require('gameObject');

module.exports.component = Vue.component('app-common-behaviour-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./commonBehaviourDialog.html'),
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

    },
    methods: {
        open: function(){
            this.opened = true;
        },
        createOrEditCommonBehaviour: function(){
            var self = this;

            if (!self.editData.currCommonBehaviourInEdit._edited) {
                self.editData.currGameObjectInEdit.commonBehaviour.push(self.editData.currCommonBehaviourInEdit);
                self.editData.currGameObjectInEdit._commonBehaviour.add(self.editData.currCommonBehaviourInEdit);
            } else {
                var currentCbInGoIndex = -1;
                self.editData.currGameObjectInEdit.commonBehaviour.map(function(item,i){
                    if (item.name==self.editData.currCommonBehaviourInEdit.name) currentCbInGoIndex = i;
                });
                console.log('edited',currentCbInGoIndex);
                self.editData.currGameObjectInEdit.commonBehaviour[currentCbInGoIndex] =
                    self.editData.currCommonBehaviourInEdit.toJSON();
            }
            resource.createOrEditResource(
                self.editData.currGameObjectInEdit.toJSON(),
                GameObject,
                self.editData.gameObjectList,
                function(){
                    self.editData.currGameObjectInEdit =
                        self.editData.gameObjectList.find({id:self.editData.currGameObjectInEdit.id}).clone();
                    self.close();
                }
            );
        }
    }
});
},{"./commonBehaviourDialog.html":21,"providers/abstractDialog":67,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/utils":74,"providers/validator":75}],23:[function(require,module,exports){
module.exports = "<div>\n    <app-sound-dialog/>\n    <app-particle-system-dialog/>\n    <app-particle-system-preview-dialog/>\n    <app-font-dialog/>\n    <app-sprite-sheet-dialog/>\n    <app-game-object-dialog/>\n    <app-frame-animation-dialog/>\n    <app-common-behaviour-dialog/>\n    <app-scene-dialog/>\n    <app-layer-dialog/>\n</div>";

},{}],24:[function(require,module,exports){

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
        appSpriteSheetDialog: require('./spriteSheetDialog/spriteSheetDialog').component,
        appGameObjectDialog: require('./gameObjectDialog/gameObjectDialog').component,
        appFrameAnimationDialog: require('./frameAnimationDialog/frameAnimationDialog').component,
        appCommonBehaviourDialog: require('./commonBehaviourDialog/commonBehaviourDialog').component,
        appSceneDialog: require('./sceneDialog/sceneDialog').component,
        appLayerDialog: require('./layerDialog/layerDialog').component
    },
    methods: {

    }
});
},{"./commonBehaviourDialog/commonBehaviourDialog":22,"./dialogs.html":23,"./fontDialog/fontDialog":26,"./frameAnimationDialog/frameAnimationDialog":28,"./gameObjectDialog/gameObjectDialog":30,"./layerDialog/layerDialog":32,"./particleSystemDialog/particleSystemDialog":34,"./particleSystemPreviewDialog/particleSystemPreviewDialog":36,"./sceneDialog/sceneDialog":38,"./soundDialog/soundDialog":40,"./spriteSheetDialog/spriteSheetDialog":42,"providers/editData":69,"providers/i18n":71}],25:[function(require,module,exports){
module.exports = "\n<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.selectFont}}\n            </td>\n            <td>\n                <select\n                        required\n                        v-control=\"{form:form,model:editData.currFontInEdit,prop:'fontFamily'}\"\n                        v-model=\"editData.currFontInEdit.fontFamily\" class=\"width100\">\n                    <option\n                            :value=\"fnt.displayName\"\n                            v-for=\"fnt in systemFontList\">\n                        {{fnt.displayName}}\n                    </option>\n                </select>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n            <td>\n                <input required\n                       v-control=\"{form:form,model:editData.currFontInEdit,prop:'name'}\"\n                       v-model=\"editData.currFontInEdit.name\" class=\"width100\">\n            </td>\n        </tr>\n        <tr>\n            <td>\n                {{i18n.fontSize}}\n            </td>\n            <td>\n                <input required type=\"number\"\n                       min=\"1\"\n                       max=\"1000\"\n                       v-control=\"{form:form,model:editData.currFontInEdit,prop:'fontSize'}\"\n                       v-model=\"editData.currFontInEdit.fontSize\" class=\"width100\">\n            </td>\n        </tr>\n        <tr>\n            <td>\n                {{i18n.fontColor}}\n            </td>\n            <td>\n                <app-color-picker\n                        :object=\"editData.currFontInEdit\"\n                        :value=\"'fontColor'\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td colspan=\"2\">\n                <input v-model=\"fontSample\" class=\"width100\"/>\n            </td>\n        </tr>\n        <tr>\n            <td colspan=\"2\">\n                <div :style='{\n                    fontFamily:editData.currFontInEdit.fontFamily,\n                    fontSize:editData.currFontInEdit.fontSize+\"px\",\n                    color:utils.rgbToHex(editData.currFontInEdit.fontColor)\n                }'>{{fontSample}}</div>\n            </td>\n        </tr>\n    </table>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"createOrEditFont(editData.currFontInEdit)\">\n        {{editData.currFontInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n</app-modal>";

},{}],26:[function(require,module,exports){

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
},{"./fontDialog.html":25,"components/colorPicker/colorPicker":8,"providers/abstractDialog":67,"providers/chrome":68,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/utils":74,"providers/validator":75}],27:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <table class=\"width100\">\r\n        <tr>\r\n            <td>\r\n                {{i18n.name}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                    required\r\n                    v-control=\"{form:form,model:editData.currFrameAnimationInEdit,prop:'name'}\"\r\n                    v-model=\"editData.currFrameAnimationInEdit.name\"/>\r\n            </td>\r\n            <td rowspan=\"3\">\r\n                <div style=\"max-height: 80vh;max-width:80vw;overflow: scroll;\"\r\n                        >\r\n                    {{editData.currFrameAnimationInEdit._gameObject.currFrameIndex||0}}\r\n\r\n                    <div :style=\"utils.merge(\r\n                                    utils.getGameObjectCss(editData.currFrameAnimationInEdit._gameObject),\r\n                                    {border:'1px solid blue'}\r\n                                )\">\r\n                    </div>\r\n\r\n                    <div>\r\n                        <button\r\n                                v-on:click=\"playAnimation()\"\r\n                                :disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.playAnim}}</button>\r\n                        <button\r\n                                v-on:click=\"stopAnimation()\"\r\n                                :disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.stopAnim}}</button>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"relative\"\r\n                         :style=\"{\r\n                                        'background-image':     'url('+editData.projectName+'/'+editData.currFrameAnimationInEdit._gameObject._spriteSheet.resourcePath+')',\r\n                                        'width':                editData.currFrameAnimationInEdit._gameObject._spriteSheet.width+'px',\r\n                                        'height':               editData.currFrameAnimationInEdit._gameObject._spriteSheet.height+'px'\r\n                                      }\">\r\n                        <div\r\n                                v-for=\"(v,i)  in editData.currFrameAnimationInEdit._gameObject._spriteSheet.numOfFramesH*editData.currFrameAnimationInEdit._gameObject._spriteSheet.numOfFramesV\"\r\n                                :style=\"{\r\n                                            'display':        'inline-block',\r\n                                            'left':           editData.currFrameAnimationInEdit._gameObject._spriteSheet.getFramePosX(i)+'px',\r\n                                            'top':            editData.currFrameAnimationInEdit._gameObject._spriteSheet.getFramePosY(i)+'px',\r\n                                            'position':       'absolute',\r\n                                            'text-align':     'left',\r\n                                            'border':         '1px solid red',\r\n                                            'width':          editData.currFrameAnimationInEdit._gameObject._spriteSheet._frameWidth+'px',\r\n                                            'height':         editData.currFrameAnimationInEdit._gameObject._spriteSheet._frameHeight+'px'\r\n                                      }\">{{i}}</div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.duration}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"number\"\r\n                        min=\"1\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currFrameAnimationInEdit,prop:'duration'}\"\r\n                        v-model=\"editData.currFrameAnimationInEdit.duration\"/>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            {{i18n.frames}}\r\n                        </td>\r\n                        <td>\r\n                            <button v-on:click=\"frames=allIndexes()\">{{i18n.all}}</button>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            {{i18n.from}}\r\n                        </td>\r\n                        <td>\r\n                            <input\r\n                                    type=\"number\"\r\n                                    v-model=\"from\"\r\n                                    min=\"0\"\r\n                                    v-on:change=\"frames=utils.range(from,to).join(',')\">\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            {{i18n.to}}\r\n                        </td>\r\n                        <td>\r\n                            <input\r\n                                    type=\"number\"\r\n                                    min=\"0\"\r\n                                    v-model=\"to\"\r\n                                    v-on:change=\"frames=utils.range(from,to).join(',')\">\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n\r\n            </td>\r\n            <td>\r\n           <textarea\r\n                   required\r\n                   v-model=\"frames\"></textarea>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <button\r\n            v-on:click=\"createOrEditFrameAnimation()\"\r\n            :disabled=\"!form.valid()\">\r\n        {{editData.currFrameAnimationInEdit.id?i18n.edit:i18n.create}}\r\n    </button>\r\n\r\n</app-modal>";

},{}],28:[function(require,module,exports){

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var FrameAnimation = _require('frameAnimation');
var GameObject = _require('gameObject');

module.exports.component = Vue.component('app-frame-animation-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./frameAnimationDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),

            isStopped: true,
            from:null,
            to:null,
            frames:''
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
            this.isStopped = true;
            this.frames = this.editData.currFrameAnimationInEdit.frames.join(',');
            Vue.set(this.editData.currFrameAnimationInEdit,'_gameObject',this.editData.currGameObjectInEdit.clone());
        },
        allIndexes: function(){
            var res = this.utils.getArray(this.editData.currGameObjectInEdit._spriteSheet._numOfFrames);
            return res.join(',')
        },
        playAnimation: function(){
            var self = this;
            self.isStopped = false;
            try {
                self.editData.currFrameAnimationInEdit.frames = JSON.parse('['+self.frames+']');
            } catch(e){}
            self.editData.currFrameAnimationInEdit.play();
            setTimeout(function _anim(){
                self.editData.currFrameAnimationInEdit.update(new Date().getTime());

                var i = self.editData.currFrameAnimationInEdit._gameObject.currFrameIndex;
                self.editData.currFrameAnimationInEdit._gameObject.setFrameIndex(i);

                if (self.isStopped) {
                    self.isStopped = false;
                    return;
                }
                if (self.opened) setTimeout(_anim,50);
            },0);
        },
        stopAnimation: function(){
            this.isStopped = true;
        },
        createOrEditFrameAnimation: function(){
            var self = this;
            self.editData.currFrameAnimationInEdit.frames = JSON.parse('['+self.frames+']');

            resource.createOrEditResource(
                self.editData.currFrameAnimationInEdit.toJSON(),
                FrameAnimation,
                self.editData.frameAnimationList,
                function(res){

                    if (res.type=='create') {

                        self.editData.currFrameAnimationInEdit.id = res.r.id;
                        self.editData.currGameObjectInEdit.frameAnimationIds.push(self.editData.currFrameAnimationInEdit.id);
                        self.editData.currGameObjectInEdit._frameAnimations.add(self.editData.currFrameAnimationInEdit);

                        resource.createOrEditResource(
                            self.editData.currGameObjectInEdit.toJSON(),
                            GameObject,
                            self.editData.gameObjectList,
                            function(){
                                self.close();
                            }
                        );
                    } else {
                        self.editData.currGameObjectInEdit =
                            self.editData.gameObjectList.find({id:self.editData.currGameObjectInEdit.id}).clone();
                        self.close();
                    }
                }
            );
        }
    }
});
},{"./frameAnimationDialog.html":27,"providers/abstractDialog":67,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/utils":74,"providers/validator":75}],29:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n\r\n    <table class=\"width100\">\r\n        <tr>\r\n            <td>\r\n                {{i18n.name}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                    required\r\n                    v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'name'}\"\r\n                    v-model=\"editData.currGameObjectInEdit.name\"/>\r\n            </td>\r\n            <td></td>\r\n            <td rowspan=\"5\">\r\n                <div class=\"relative\"\r\n                     style=\"\r\n                                        display: inline-block;\r\n                                        overflow: scroll;\r\n                                        max-width:60vw;\r\n                                        max-height:60vh;\r\n                                    \"\r\n                        >\r\n                    <div :style=\"utils.merge(\r\n                        utils.getGameObjectCss(editData.currGameObjectInEdit)\r\n                        ,\r\n                        {\r\n                            'border':'1px solid blue',\r\n                            'opacity':editData.currGameObjectInEdit.alpha\r\n                        }\r\n                    )\"></div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.spriteSheet}}\r\n            </td>\r\n            <td>\r\n                <select\r\n                        v-on:change=\"utils.recalcGameObjectSize(editData.currGameObjectInEdit)\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'spriteSheetId'}\"\r\n                        v-model=\"editData.currGameObjectInEdit.spriteSheetId\">\r\n                    <option :value=\"item.id\" v-for=\"item in editData.spriteSheetList.rs\">{{item.name}}</option>\r\n                </select>\r\n            </td>\r\n            <td>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.groupName}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        v-model=\"editData.currGameObjectInEdit.groupName\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.rigid}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"checkbox\"\r\n                        v-model=\"editData.currGameObjectInEdit.rigid\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.width}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"number\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'width'}\"\r\n                        v-model=\"editData.currGameObjectInEdit.width\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.height}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"number\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'height'}\"\r\n                        v-model=\"editData.currGameObjectInEdit.height\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.angle}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        step=\"0.1\"\r\n                        type=\"number\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'angle'}\"\r\n                        v-model=\"editData.currGameObjectInEdit.angle\"/>\r\n            </td>\r\n            <td align=\"left\">\r\n                <div class=\"inlineBlock\">\r\n                    <app-angle-picker\r\n                            :object=\"editData.currGameObjectInEdit\"\r\n                            :value=\"'angle'\"\r\n                            />\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                alpha\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"number\"\r\n                        min=\"0\"\r\n                        max=\"1\"\r\n                        step=\"0.1\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'alpha'}\"\r\n                        v-model=\"editData.currGameObjectInEdit.alpha\"/>\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"range\"\r\n                        min=\"0\"\r\n                        max=\"1\"\r\n                        step=\"0.1\"\r\n                        v-model=\"editData.currGameObjectInEdit.alpha\"/>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.currFrameIndex}}\r\n            </td>\r\n            <td>\r\n                <input type=\"number\"\r\n                       min=\"0\"\r\n                       v-on:change=\"refreshGameObjectFramePreview(editData.currGameObjectInEdit,editData.currGameObjectInEdit.currFrameIndex)\"\r\n                       required\r\n                       v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'currFrameIndex'}\"\r\n                       v-model=\"editData.currGameObjectInEdit.currFrameIndex\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.frAnimations}}\r\n            </td>\r\n            <td>\r\n                <div class=\"table width100\">\r\n                    <div class=\"row\" v-for=\"animItm in editData.currGameObjectInEdit._frameAnimations.rs\">\r\n                        <div class=\"cell vAlign\">\r\n                            <span>{{animItm.name}}</span>\r\n                        </div>\r\n                        <div class=\"cell vAlign rightAlign pointer\" v-on:click=\"editFrameAnimation(animItm)\">\r\n                            edit\r\n                        </div>\r\n                        <div class=\"cell pointer vAlign rightAlign\" v-on:click=\"deleteFrameAnimation(animItm)\">\r\n                            X\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n            <td align=\"right\">\r\n                <button\r\n                        class=\"inlineBlock\"\r\n                        :disabled=\"!editData.currGameObjectInEdit.id\"\r\n                        v-on:click=\"createFrameAnimation()\">+</button>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.commonBehaviour}}\r\n            </td>\r\n            <td>\r\n                <div class=\"table width100\">\r\n                    <div class=\"row\" v-for=\"itm in editData.currGameObjectInEdit._commonBehaviour && editData.currGameObjectInEdit._commonBehaviour.rs\">\r\n                        <div class=\"cell vAlign\">\r\n                            <span>{{itm.name}}</span>\r\n                        </div>\r\n                        <div class=\"cell vAlign rightAlign pointer\" v-on:click=\"editCommonBehaviour(itm)\">\r\n                            {{i18n.edit}}\r\n                        </div>\r\n                        <div class=\"cell pointer vAlign rightAlign\" v-on:click=\"deleteCommonBehaviour(itm)\">\r\n                            X\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n            <td>\r\n                <table class=\"width100\">\r\n                    <tr>\r\n                        <td>\r\n                            <select v-model=\"selectedBehaviourName\">\r\n                                <option\r\n                                        :disabled=\"editData.currGameObjectInEdit._commonBehaviour.has({name:cb.name})\"\r\n                                        :value=\"cb.name\"\r\n                                        v-for=\"cb in editData.commonBehaviourList && editData.commonBehaviourList.rs\">\r\n                                    {{cb.name}}\r\n                                </option>\r\n                            </select>\r\n                        </td>\r\n                        <td align=\"right\">\r\n                            <button\r\n                                    class=\"inlineBlock\"\r\n                                    :disabled=\"!editData.currGameObjectInEdit.id || !selectedBehaviourName\"\r\n                                    v-on:click=\"createCommonBehaviour(selectedBehaviourName)\">\r\n                                +\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <button\r\n            :disabled=\"!form.valid()\"\r\n            v-on:click=\"createOrEditGameObject(editData.currGameObjectInEdit)\">\r\n        {{editData.currGameObjectInEdit.id?i18n.edit:i18n.create}}\r\n    </button>\r\n\r\n\r\n\r\n</app-modal>";

},{}],30:[function(require,module,exports){

var abstractDialog = require('providers/abstractDialog');
var frameAnimationDialog = require('../../dialogs/frameAnimationDialog/frameAnimationDialog');
var commonBehaviourDialog = require('../../dialogs/commonBehaviourDialog/commonBehaviourDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var GameObject = _require('gameObject');
var FrameAnimation = _require('frameAnimation');
var CommonBehaviour = _require('commonBehaviour');

module.exports.component = Vue.component('app-game-object-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./gameObjectDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),
            selectedBehaviourName: ''
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
        },
        createOrEditGameObject: function(g){
            var self = this;
            var model = g.toJSON();
            resource.createOrEditResource(
                model,
                GameObject,
                editData.gameObjectList,
                function(op){
                    if (op.type=='create') {
                        resource.createFile(
                            'script/gameObject/' + self.editData.currGameObjectInEdit.name+'.js',
                            document.getElementById('defaultCodeScript').textContent,
                            function(){
                                self.close();
                            }
                        )
                    } else self.close();
                }
            );
        },
        refreshGameObjectFramePreview: function(gameObject,ind) {
            var spriteSheet = gameObject._spriteSheet;
            if (!spriteSheet) return;
            var maxNumOfFrame = spriteSheet.numOfFramesH*spriteSheet.numOfFramesV-1;
            if (this.editData.currGameObjectInEdit.currFrameIndex>=maxNumOfFrame) {
                this.editData.currGameObjectInEdit.currFrameIndex = 0;
                ind = 0;
            }
            gameObject.setFrameIndex(ind);
        },
        createFrameAnimation: function(){
            this.editData.currFrameAnimationInEdit = new FrameAnimation(new FrameAnimation().toJSON());
            frameAnimationDialog.instance.open();
        },
        editFrameAnimation: function(fa){
            this.editData.currFrameAnimationInEdit = fa.clone();
            frameAnimationDialog.instance.open();
        },
        deleteFrameAnimation: function(fa){
            var self = this;
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    self.editData.currGameObjectInEdit._frameAnimations.remove(fa);
                    self.editData.currGameObjectInEdit.frameAnimationIds.remove(fa);
                    var origGameObj = self.editData.gameObjectList.find({id:self.editData.currGameObjectInEdit.id});
                    origGameObj._frameAnimations.remove(fa);
                    origGameObj.frameAnimationIds.remove(fa);

                    resource.deleteResource(fa);
                    resource.createOrEditResource(
                        origGameObj.toJSON(),
                        GameObject,
                        self.editData.gameObjectList
                    );
                }
            )
        },

        createCommonBehaviour: function(name){
            this.editData.currCommonBehaviourInEdit =
                this.editData.commonBehaviourList.find({name:name}).clone();
            commonBehaviourDialog.instance.open();
        },
        editCommonBehaviour: function(cb){
            this.editData.currCommonBehaviourInEdit = cb.clone();
            this.editData.currCommonBehaviourInEdit._edited = true;
            commonBehaviourDialog.instance.open();
        },
        deleteCommonBehaviour: function (cb) {
            var self = this;
            window.confirmEx(
                this.i18n.confirmQuestion,
                function () {

                    var currentCbInGoIndex = -1;
                    self.editData.currGameObjectInEdit.commonBehaviour.map(function(item,i){
                        if (item.id==self.editData.currCommonBehaviourInEdit.id) currentCbInGoIndex = i;
                    });

                    self.editData.currGameObjectInEdit.commonBehaviour.remove(
                        self.editData.currGameObjectInEdit.commonBehaviour[currentCbInGoIndex]
                    );
                    resource.createOrEditResource(
                        self.editData.currGameObjectInEdit.toJSON(),
                        GameObject,
                        self.editData.gameObjectList,
                        function () {
                            self.editData.currGameObjectInEdit =
                                self.editData.gameObjectList.find({id: self.editData.currGameObjectInEdit.id}).clone();
                        }
                    );
                }
            )
        }

    }
});
},{"../../dialogs/commonBehaviourDialog/commonBehaviourDialog":22,"../../dialogs/frameAnimationDialog/frameAnimationDialog":28,"./gameObjectDialog.html":29,"providers/abstractDialog":67,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/utils":74,"providers/validator":75}],31:[function(require,module,exports){
module.exports = "\r\n<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <div class=\"withPadding\">\r\n        <div>\r\n            {{i18n.scene}}: {{editData.currLayerInEdit._scene.name}}\r\n        </div>\r\n        <b class=\"block centerText\">{{i18n.layer}}</b>\r\n        <div class=\"table width100\">\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.name}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                        v-control=\"{form:form,model:editData.currLayerInEdit,prop:'name'}\"\r\n                        v-model=\"editData.currLayerInEdit.name\"\r\n                        required/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <button\r\n                    :disabled=\"!form.valid()\"\r\n                    v-on:click=\"createOrEditLayer(editData.currLayerInEdit,editData.currLayerInEdit._scene)\">\r\n                {{editData.currLayerInEdit.id?i18n.edit:i18n.create}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n</app-modal>";

},{}],32:[function(require,module,exports){

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Layer = _require('layer');

module.exports.component = Vue.component('app-layer-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./layerDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {
        // todo refactor!!
        createOrEditLayer: function(l,s){
            var self = this;
            if (l.id) { // edit resource
                var dataToEdit = l.clone();
                dataToEdit.id = dataToEdit.protoId;
                resource.createOrEditResource(dataToEdit.toJSON());
                self.close();
            } else { // create object in resource
                resource.createOrEditLayer(l,s,self);
            }
        },
        deleteLayer: function(l){
            // todo
        }
    }
});
},{"./layerDialog.html":31,"providers/abstractDialog":67,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/validator":75}],33:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n            <td>\n\n            </td>\n            <td>\n                <input\n                    required\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'name'}\"\n                    v-model=\"editData.currParticleSystemInEdit.name\"/>\n            </td>\n        </tr>\n        <tr>\n            <td rowspan=\"2\">\n                numOfParticlesToEmit\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.numOfParticlesToEmit,prop:'from'}\"\n                    v-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.numOfParticlesToEmit,prop:'to'}\"\n                    v-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.to\"/>\n            </td>\n        </tr>\n        <tr>\n            <td rowspan=\"2\">\n                particleVelocity\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleVelocity,prop:'from'}\"\n                        v-model=\"editData.currParticleSystemInEdit.particleVelocity.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleVelocity,prop:'to'}\"\n                        v-model=\"editData.currParticleSystemInEdit.particleVelocity.to\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td rowspan=\"2\">\n                particleLiveTime\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleLiveTime,prop:'from'}\"\n                    v-model=\"editData.currParticleSystemInEdit.particleLiveTime.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleLiveTime,prop:'to'}\"\n                    v-model=\"editData.currParticleSystemInEdit.particleLiveTime.to\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                emissionRadius\n            </td>\n            <td></td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'emissionRadius'}\"\n                        v-model=\"editData.currParticleSystemInEdit.emissionRadius\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                particleAngle\n            </td>\n            <td>\n                from / to\n            </td>\n            <td>\n                <app-angle-picker\n                        :object=\"editData.currParticleSystemInEdit.particleAngle\"\n                        :value=\"'from'\"\n                        />\n                <app-angle-picker\n                        :object=\"editData.currParticleSystemInEdit.particleAngle\"\n                        :value=\"'to'\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td></td>\n            <td>\n                {{i18n.gameObject}}\n            </td>\n            <td>\n\n                <table>\n                    <tr>\n                        <td>\n                            <select\n                                    required\n                                    v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'gameObjectId'}\"\n                                    v-on:change=\"onGameObjectIdChanged(editData.currParticleSystemInEdit.gameObjectId)\"\n                                    v-model=\"editData.currParticleSystemInEdit.gameObjectId\"\n                                    >\n                                <option\n                                        :value=\"item.id\"\n                                        v-for=\"item in editData.gameObjectList.rs\">{{item.name}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <div :style=\"\n                                utils.merge(\n                                    utils.getGameObjectCss(editData.currParticleSystemInEdit._gameObject),\n                                    {\n                                        zoom:editData.currParticleSystemInEdit._gameObject.height>30?\n                                        30/editData.currParticleSystemInEdit._gameObject.height:\n                                        1\n                                    }\n                               )\">\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n\n\n            </td>\n        </tr>\n\n    </table>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"createOrEditPs(editData.currParticleSystemInEdit)\">\n        {{editData.currParticleSystemInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"showPreview()\">\n        {{i18n.preview}}\n    </button>\n\n</app-modal>";

},{}],34:[function(require,module,exports){

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
},{"../particleSystemPreviewDialog/particleSystemPreviewDialog":36,"./particleSystemDialog.html":33,"components/anglePicker/anglePicker":4,"providers/abstractDialog":67,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/utils":74,"providers/validator":75}],35:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n\n    <div>\n        {{i18n.preview}} {{i18n.particleSystem}}\n        <span class=\"underLine\">{{editData.currParticleSystemInEdit.name}}</span>\n    </div>\n    <div\n            v-on:click=\"emit($event)\"\n            v-on:mousemove=\"$event.buttons==1 && emit($event)\"\n            class=\"subFullScreen relative noOverFlow\">\n        <div\n                v-for=\"item in editData.currParticleSystemInEdit._particles\"\n                :style=\"utils.merge(\n                            utils.getGameObjectCss(item),\n                            {\n                                position:'absolute',\n                                left:item.pos.x+'px',\n                                top: item.pos.y+'px',\n                                pointerEvents:'none'\n                            }\n                    )\"\n                >\n        </div>\n    </div>\n    <div>\n        <button v-on:click=\"close()\">{{i18n.close}}</button>\n    </div>\n\n\n</app-modal>";

},{}],36:[function(require,module,exports){

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
},{"./particleSystemPreviewDialog.html":35,"providers/abstractDialog":67,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/utils":74}],37:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <div class=\"withPadding\">\r\n        <div class=\"table\">\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.name}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneInEdit,prop:'name'}\"\r\n                            v-model=\"editData.currSceneInEdit.name\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button\r\n                :disabled=\"!form.valid()\"\r\n                v-on:click=\"createOrEditScene(editData.currSceneInEdit)\">\r\n            {{editData.currSceneInEdit.id?i18n.edit:i18n.create}}\r\n        </button>\r\n    </div>\r\n\r\n</app-modal>";

},{}],38:[function(require,module,exports){


var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Scene = _require('scene');

module.exports.component = Vue.component('app-scene-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./sceneDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {
        createOrEditScene: function(s){
            var model = s.toJSON();
            var self = this;
            resource.createOrEditResource(
                model,
                Scene,
                editData.sceneList,
                function(op){
                    if (op.type=='create') {
                        resource.createFile(
                            'script/scene/' + self.editData.currSceneInEdit.name+'.js',
                            document.getElementById('defaultCodeScript').textContent,
                            function(){
                                self.close();
                            }
                        )
                    } else self.close();
                }
            );
        }
    }
});
},{"./sceneDialog.html":37,"providers/abstractDialog":67,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/validator":75}],39:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <input\n                        required\n                        v-control=\"{form:form,model:editData.currSoundInEdit,prop:'name'}\"\n                        v-model=\"editData.currSoundInEdit.name\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <app-input-file\n                        v-on:picked=\"onFilePicked\"\n                        :title=\"i18n.loadSound\"\n                        :accept=\"'audio/*'\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <audio controls=\"controls\" :src=\"soundUrl\"></audio>\n            </td>\n        </tr>\n    </table>\n\n    <button\n            :disabled=\"!(form.valid() && soundUrl)\"\n            v-on:click=\"createOrEditSound(editData.currSoundInEdit)\">\n        {{editData.currSoundInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n</app-modal>";

},{}],40:[function(require,module,exports){


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
},{"./soundDialog.html":39,"providers/abstractDialog":67,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/validator":75}],41:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <table class=\"width100\">\r\n        <tr>\r\n            <td>\r\n                {{i18n.name}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currSpriteSheetInEdit,prop:'name'}\"\r\n                        v-model=\"editData.currSpriteSheetInEdit.name\"/>\r\n            </td>\r\n            <td rowspan=\"6\">\r\n                <div style=\"max-height: 40vh;max-width:60vw;overflow: scroll;\"\r\n                        >\r\n                    <div class=\"relative\"\r\n                         :style=\"{\r\n                                    'background-image':   'url('+spriteSheetUrl+')',\r\n                                    'width':              editData.currSpriteSheetInEdit.width+'px',\r\n                                    'height':             editData.currSpriteSheetInEdit.height+'px',\r\n                               }\">\r\n                        <div\r\n                                :title=\"i\"\r\n                                v-for=\"(val,i) in numOfSpriteSheetCells\"\r\n                                :style=\"{\r\n                                    'display':        'inline-block',\r\n                                    'left':           editData.currSpriteSheetInEdit.getFramePosX(i)+'px',\r\n                                    'top':            editData.currSpriteSheetInEdit.getFramePosY(i)+'px',\r\n                                    'position':       'absolute',\r\n                                    'text-align':     'left',\r\n                                    'border':         '1px solid red',\r\n                                    'width':          editData.currSpriteSheetInEdit._frameWidth+'px',\r\n                                    'height':         editData.currSpriteSheetInEdit._frameHeight+'px'\r\n                                }\">{{i}}</div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.image}}\r\n            </td>\r\n            <td>\r\n                <app-input-file\r\n                        v-on:picked=\"onFilePicked\"\r\n                        :title=\"i18n.loadImage\"\r\n                        :accept=\"'image/*'\"\r\n                        />\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.width}}\r\n            </td>\r\n            <td>\r\n                {{editData.currSpriteSheetInEdit.width}}\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.height}}\r\n            </td>\r\n            <td>\r\n                {{editData.currSpriteSheetInEdit.height}}\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.numOfFramesH}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        required\r\n                        min=\"1\"\r\n                        max=\"100\"\r\n                        type=\"number\"\r\n                        v-on:change=\"refreshNumOfCells()\"\r\n                        v-control=\"{form:form,model:editData.currSpriteSheetInEdit,prop:'numOfFramesH'}\"\r\n                        v-model=\"editData.currSpriteSheetInEdit.numOfFramesH\"/>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.numOfFramesV}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        required\r\n                        min=\"1\"\r\n                        max=\"100\"\r\n                        type=\"number\"\r\n                        v-on:change=\"refreshNumOfCells()\"\r\n                        v-control=\"{form:form,model:editData.currSpriteSheetInEdit,prop:'numOfFramesV'}\"\r\n                        v-model=\"editData.currSpriteSheetInEdit.numOfFramesV\"/>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <button\r\n            v-on:click=\"createOrEditSpriteSheet(editData.currSpriteSheetInEdit)\"\r\n            :disabled=\"!(form.valid() && editData.currSpriteSheetInEdit.resourcePath)\">\r\n        {{editData.currSpriteSheetInEdit.id?i18n.edit:i18n.create}}\r\n    </button>\r\n\r\n</app-modal>";

},{}],42:[function(require,module,exports){

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
},{"./spriteSheetDialog.html":41,"providers/abstractDialog":67,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/utils":74,"providers/validator":75}],43:[function(require,module,exports){
module.exports = "<div class=\"template\">\n    <div id=\"c\" class=\"split\">\n        <div id=\"a\" class=\"split split-horizontal content\">\n            <app-game-props/>\n            <app-scenes/>\n            <app-game-objects/>\n            <app-sprite-sheets/>\n            <app-user-interface/>\n            <app-fonts/>\n            <app-sounds/>\n            <app-particle-systems/>\n        </div>\n        <div id=\"b\" class=\"split split-horizontal content\">\n            <app-script-editor/>\n            <app-curr-scene/>\n        </div>\n        <div id=\"e\" class=\"split split-horizontal content\">\n            <app-right-panel-scene-game-object/>\n            <app-right-panel-scene/>\n        </div>\n    </div>\n    <div id=\"d\" class=\"split content\">d</div>\n\n    <app-dialogs/>\n\n</div>";

},{}],44:[function(require,module,exports){

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

        appScriptEditor: require('./centralPanel/scriptEditor/scriptEditor'),

        appRightPanelSceneGameObject: require('./rightPanel/sceneGameObject/sceneGameObject'),
        appRightPanelScene: require('./rightPanel/scene/scene'),
        appCurrScene: require('./centralPanel/scene/scene')

    }
};
},{"./centralPanel/scene/scene":18,"./centralPanel/scriptEditor/scriptEditor":20,"./dialogs/dialogs":24,"./editor.html":43,"./leftPanel/fonts/fonts":48,"./leftPanel/gameObjects/gameObjects":50,"./leftPanel/gameProps/gameProps":52,"./leftPanel/particleSystems/particleSystems":54,"./leftPanel/scenes/scenes":56,"./leftPanel/sounds/sounds":58,"./leftPanel/spriteSheets/spriteSheets":60,"./leftPanel/userInterface/userInterface":62,"./rightPanel/scene/scene":66,"./rightPanel/sceneGameObject/sceneGameObject":64,"components/collapsible/collapsible":6,"components/inputFile/inputFile":14,"components/modal/modal":16}],45:[function(require,module,exports){
module.exports = "<div class=\"row\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"cell\">\n        <span class=\"inlineBlock withPaddingRight\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.name}}\n            </span>\n        </span>\n    </div>\n    <div    class=\"cell width100\"\n            v-if=\"!gameObject.subType\">\n        <div :style=\"\n                utils.merge(\n                        utils.getGameObjectCss(gameObject),\n                        {zoom:gameObject.height>30?30/gameObject.height:1}\n                )\"></div>\n    </div>\n    <div\n            class=\"cell width100\"\n            v-if=\"gameObject.subType\"\n            :title=\"gameObject.name\"\n            >\n        <span class=\"textOverflow\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.subType}}\n            </span>\n        </span>\n    </div>\n    <div class=\"cell width1\">\n        <div v-if=\"crud && crud.editScript\" class=\"script\" v-on:click=\"crud.editScript(gameObject)\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div v-if=\"crud && crud.edit\" class=\"edit\" v-on:click=\"crud.edit(gameObject)\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div v-if=\"crud && crud.delete\" v-on:click=\"crud.delete(gameObject)\" class=\"delete\"></div>\n    </div>\n</div>";

},{}],46:[function(require,module,exports){

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
},{"./gameObjectRow.html":45,"providers/utils":74}],47:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createFont\n        }\"\n        :title=\"i18n.fonts\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"font in (editData.fontList && editData.fontList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{font.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editFont(font)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteFont(font)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],48:[function(require,module,exports){

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
},{"../../dialogs/fontDialog/fontDialog":26,"./fonts.html":47,"providers/editData":69,"providers/i18n":71,"providers/resource":72}],49:[function(require,module,exports){
module.exports = "<div>\n    <app-collapsible\n            :title=\"i18n.gameObjects\"\n            :crud=\"{\n                create:createGameObject\n            }\"\n            >\n        <div class=\"withPaddingLeft\">\n            <div class=\"table rightText\">\n                <div\n                        :crud=\"{\n                            edit: editGameObject,\n                            editScript: editGameObjectScript,\n                            delete: deleteGameObject\n                        }\"\n                        is=\"appGameObjectRow\"\n                        :game-object=\"gameObject\"\n                        v-for=\"gameObject in (editData.gameObjectList && editData.gameObjectList.rs)\"\n                        >\n                </div>\n            </div>\n        </div>\n    </app-collapsible>\n</div>";

},{}],50:[function(require,module,exports){

var utils = require('providers/utils');

var gameObjectDialog = require('../../dialogs/gameObjectDialog/gameObjectDialog');
var GameObject = _require('gameObject');
var resource = require('providers/resource');

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
            this.editData.currGameObjectInEdit = new GameObject(new GameObject().clone());
            gameObjectDialog.instance.open();
        },
        editGameObjectScript: function(gameObject){
            utils.openEditor(gameObject.type + '/' +gameObject.name + '.js');
        },
        editGameObject: function(go){
            this.editData.currGameObjectInEdit = go.clone();
            gameObjectDialog.instance.open();
        },
        deleteGameObject: function(g){
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    resource.deleteResource(g);
                }
            )
        }
    }
});

},{"../../dialogs/gameObjectDialog/gameObjectDialog":30,"../_gameObjectRow/gameObjectRow":46,"./gameObjects.html":49,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/utils":74}],51:[function(require,module,exports){
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <app-collapsible :title=\"i18n.game\" :id=\"'game'\">\n        <form class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.width}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            v-model=\"editData.gameProps.width\"\n                            v-control=\"{form:form,model:editData.gameProps,prop:'width'}\"\n                            type=\"number\"\n                            min=\"1\"\n                            max=\"20000\"\n                            v-on:change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.height}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            v-model=\"editData.gameProps.height\"\n                            type=\"number\"\n                            v-control=\"{form:form,model:editData.gameProps,prop:'height'}\"\n                            min=\"1\"\n                            max=\"20000\"\n                            v-on:change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.scaleStrategy}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            v-model=\"editData.gameProps.scaleStrategy\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option\n                                :title=\"value\"\n                                :value=\"value\"\n                                v-for=\"(value,key) in scales\">{{key}}</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.preloadingScene}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            v-model=\"editData.gameProps.preloadingSceneId\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option value=\"\">--</option>\n                        <option\n                                :disabled=\"item.id==editData.gameProps.startSceneId\"\n                                :value=\"item.id\"\n                                v-for=\"item in (editData.sceneList && editData.sceneList.rs)\">{{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.startScene}}\n                </div>\n                <div class=\"cell\">\n                    <select v-model=\"editData.gameProps.startSceneId\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option\n                                :disabled=\"item.id==editData.gameProps.preloadingSceneId\"\n                                :value=\"item.id\"\n                                v-for=\"item in (editData.sceneList && editData.sceneList.rs)\">{{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n        </form>\n\n    </app-collapsible>\n</div>";

},{}],52:[function(require,module,exports){
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
},{"./gameProps.html":51,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/validator":75}],53:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createParticleSystem\n        }\"\n        :title=\"i18n.particleSystems\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"ps in (editData.particleSystemList && editData.particleSystemList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{ps.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editParticleSystem(ps)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteParticleSystem(ps)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],54:[function(require,module,exports){

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
},{"../../dialogs/particleSystemDialog/particleSystemDialog":34,"./particleSystems.html":53,"providers/editData":69,"providers/i18n":71,"providers/resource":72}],55:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createScene\n        }\"\n        :title=\"i18n.scenes\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\" v-for=\"scene in (editData.sceneList && editData.sceneList.rs)\">\n        <app-collapsible\n                :class=\"{\n                    currScene:editData.currSceneInEdit==scene\n                }\"\n                v-on:click.native=\"editData.currSceneInEdit=scene\"\n                :object=\"scene\"\n                :crud=\"{\n                    edit:editScene,\n                    delete:deleteScene,\n                    editScript: editScript\n                }\"\n                :title=\"scene.name\"\n                >\n            <div class=\"withPaddingLeft\">\n                <app-collapsible\n                        :title=\"i18n.layers\"\n                        :meta=\"scene\"\n                        :crud=\"{\n                            create:createLayer\n                        }\"\n                        >\n                    <div v-for=\"layer in scene._layers.rs\" class=\"withPaddingLeft\">\n                        <app-collapsible\n                                :object=\"layer\"\n                                :meta=\"scene\"\n                                :crud=\"{\n                                    edit:editLayer,\n                                    delete:deleteLayer\n                                }\"\n                                :title=\"layer.name\" :id=\"layer.id\">\n                            <div class=\"withPaddingLeft\">\n                                <div class=\"table width100\">\n                                    <div\n                                            :class=\"{\n                                                currSceneGameObject: editData.currSceneGameObjectInEdit==gameObject\n                                            }\"\n                                            v-on:click.native=\"editData.currSceneGameObjectInEdit=gameObject\"\n                                            is=\"appGameObjectRow\"\n                                            :game-object=\"gameObject\"\n                                            v-for=\"gameObject in layer._gameObjects.rs\"></div>\n                                </div>\n                            </div>\n                        </app-collapsible>\n                    </div>\n                </app-collapsible>\n            </div>\n        </app-collapsible>\n    </div>\n</app-collapsible>";

},{}],56:[function(require,module,exports){
var resource = require('providers/resource');
var utils = require('providers/utils');
var sceneDialog = require('../../dialogs/sceneDialog/sceneDialog');
var layerDialog = require('../../dialogs/layerDialog/layerDialog');
var Layer = _require('layer');
var Scene = _require('scene');

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
            this.editData.currSceneInEdit = new Scene(new Scene().toJSON());
            sceneDialog.instance.open();
        },
        editScene: function(scene){
            this.editData.currSceneInEdit = scene.clone();
            sceneDialog.instance.open();
        },
        deleteScene: function(scene){
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    resource.deleteResource(scene);
                }
            );
        },
        createLayer: function(scene){
            this.editData.currLayerInEdit = new Layer(new Layer().clone());
            this.editData.currLayerInEdit._scene = scene;
            layerDialog.instance.open();
        },
        editLayer: function(layer,scene){
            this.editData.currLayerInEdit = layer.clone();
            this.editData.currLayerInEdit._scene = scene;
            layerDialog.instance.open();
        },
        editScript: function(scene){
            utils.openEditor(scene.type + '/' +scene.name + '.js');
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
        },
        onGameObjectClick: function(go){
            console.log(go);
        }
    }
});

},{"../../dialogs/layerDialog/layerDialog":32,"../../dialogs/sceneDialog/sceneDialog":38,"../_gameObjectRow/gameObjectRow":46,"./scenes.html":55,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/utils":74}],57:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createSound\n        }\"\n        :title=\"i18n.sounds\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"sound in (editData.soundList && editData.soundList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{sound.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editSound(sound)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteSound(sound)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],58:[function(require,module,exports){

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
},{"../../dialogs/soundDialog/soundDialog":40,"./sounds.html":57,"providers/editData":69,"providers/i18n":71,"providers/resource":72}],59:[function(require,module,exports){
module.exports = "<app-collapsible\n        :title=\"i18n.spriteSheets\"\n        :crud=\"{\n            create:createSpriteSheet\n        }\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"spriteSheet in (editData.spriteSheetList && editData.spriteSheetList.rs)\">\n\n                <div class=\"cell\">\n                    <img\n                        height=\"20\"\n                        class=\"spriteSheetThumb\"\n                        :src=\"editData.projectName+'/'+spriteSheet.resourcePath\"/>\n                </div>\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{spriteSheet.name}}\n                    </span>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editSpriteSheet(spriteSheet)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteSpriteSheet(spriteSheet)\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],60:[function(require,module,exports){

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

},{"../../dialogs/spriteSheetDialog/spriteSheetDialog":42,"./spriteSheets.html":59,"providers/editData":69,"providers/i18n":71,"providers/resource":72}],61:[function(require,module,exports){
module.exports = "<app-collapsible\n        :title=\"i18n.userInterface\"\n        >\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"ui in (editData.userInterfaceList && editData.userInterfaceList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{ui.subType}}</span>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],62:[function(require,module,exports){

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
},{"./userInterface.html":61,"providers/editData":69,"providers/i18n":71}],63:[function(require,module,exports){
module.exports = "<app-collapsible\r\n        :title=\"i18n.currGameObject\"\r\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <div\r\n            v-if=\"!editData.currSceneGameObjectInEdit.id\">\r\n        {{i18n.notSelected}}\r\n    </div>\r\n\r\n    <div\r\n            class=\"withPadding\"\r\n            v-if=\"editData.currSceneGameObjectInEdit.id\">\r\n        <h3 class=\"centerText\">\r\n            {{editData.currSceneGameObjectInEdit.type}}\r\n        </h3>\r\n\r\n        <div class=\"table width100\">\r\n\r\n            <div class=\"row\" v-if=\"editData.currSceneGameObjectInEdit.subType\">\r\n                <div class=\"cell\">\r\n                    subType\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <i>{{editData.currSceneGameObjectInEdit.subType}}</i>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    name\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit,prop:'name'}\"\r\n                            v-on:change=\"editGameObject()\"\r\n                            class=\"width100\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.name\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    pos.x\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit.pos,prop:'x'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.pos.x\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    pos.y\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit.pos,prop:'y'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.pos.y\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    scale.x\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            step=\"0.1\"\r\n                            class=\"width100\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit.scale,prop:'x'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.scale.x\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    scale.y\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            step=\"0.1\"\r\n                            class=\"width100\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit.scale,prop:'y'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.scale.y\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.width}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            step=\"1\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit,prop:'width'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.width\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.height}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            step=\"1\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit,prop:'height'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.height\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.angle}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            step=\"0.1\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit,prop:'angle'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.angle\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    alpha\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            step=\"0.1\"\r\n                            required\r\n                            min=\"0\"\r\n                            max=\"1\"\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit,prop:'alpha'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.alpha\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.fixedToCamera}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"checkbox\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.fixedToCamera\"\r\n                            />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.rigid}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"checkbox\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.rigid\"\r\n                            />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\"\r\n                 v-if=\"editData.currSceneGameObjectInEdit.subType=='textField'\"\r\n                    >\r\n                <div class=\"cell\">\r\n                    {{i18n.text}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                <textarea\r\n                        class=\"width100\"\r\n                        v-on:change=\"editGameObject()\"\r\n                        v-model=\"editData.currSceneGameObjectInEdit.text\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\"\r\n                 v-if=\"editData.currSceneGameObjectInEdit.subType=='textField'\"\r\n                    >\r\n                <div class=\"cell\">\r\n                    {{i18n.font}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <select\r\n                            class=\"width100\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.fontId\"\r\n                            ng-change=\"editGameObjectFromRightMenu(editData.currSceneGameObjectInEdit)\"\r\n                            required\r\n                            >\r\n                        <option :value=\"item.id\" v-for=\"item in editData.fontList.rs\">{{item.name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</app-collapsible>\r\n\r\n";

},{}],64:[function(require,module,exports){

var resource = require('providers/resource');

module.exports = Vue.component('app-scene-game-object', {
    props: [],
    template: require('./sceneGameObject.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll(),
            form:require('providers/validator').new()
        }
    },
    components: {

    },
    methods: {
        editGameObject: function(){
            var obj = this.editData.currSceneGameObjectInEdit;
            var s = this;
            if (obj.fontId) {
                var fnt = s.editData.fontList.find({id:obj.fontId});
                s.editData.currSceneGameObjectInEdit._font = fnt;
                s.editData.currSceneGameObjectInEdit.fontId = fnt.id;
                obj.setText(obj.text);
            }
            resource.createOrEditObjectInResource(
                'layer',
                s.editData.currLayerInEdit.protoId,
                'gameObjectProps',
                obj.toJSON()
            );
        }
    }
});
},{"./sceneGameObject.html":63,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/validator":75}],65:[function(require,module,exports){
module.exports = "<app-collapsible\r\n        :title=\"i18n.currScene\"\r\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n        <div\r\n                v-if=\"!editData.currSceneInEdit.id\">\r\n            {{i18n.notSelected}}\r\n        </div>\r\n\r\n        <div class=\"withPadding\" v-if=\"editData.currSceneInEdit.id\">\r\n\r\n            <b class=\"centerText\">\r\n                {{i18n.scene}} : {{editData.currSceneInEdit.name}}\r\n            </b>\r\n\r\n            <div class=\"table width100\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        <label for=\"editData.currSceneInEdit.useBG\">{{i18n.useBG}}</label>\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input type=\"checkbox\"\r\n                               id=\"editData.currSceneInEdit.useBG\"\r\n                               v-model=\"editData.currSceneInEdit.useBG\"\r\n                               v-on:change=\"editScene()\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" v-if=\"editData.currSceneInEdit.useBG\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.colorBG}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <app-color-picker\r\n                                :object=\"editData.currSceneInEdit\"\r\n                                :value=\"'colorBG'\"\r\n                                :onchange=\"editScene()\"\r\n                                />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        <hr/>\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <hr/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell valign bold\">\r\n                        {{i18n.tileMap}}\r\n                    </div>\r\n                    <div class=\"cell eye\"></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"cell valign\">\r\n                        tileMap.width\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input type=\"number\"\r\n                               min=\"0\"\r\n                               maxlength=\"3\"\r\n                               v-control=\"{form:form,model:editData.currSceneInEdit.tileMap,prop:'width'}\"\r\n                               v-on:change=\"editScene()\"\r\n                               v-model=\"editData.currSceneInEdit.tileMap.width\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell valign\">\r\n                        tileMap.height\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input type=\"number\"\r\n                               min=\"0\"\r\n                               maxlength=\"3\"\r\n                               v-control=\"{form:form,model:editData.currSceneInEdit.tileMap,prop:'height'}\"\r\n                               v-on:change=\"editScene()\"\r\n                               v-model=\"editData.currSceneInEdit.tileMap.height\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.selected}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <div\r\n                            :class=\"{\r\n                                inlineBlock:1,\r\n                                hoverOutline:1\r\n                            }\"\r\n                            :style=\"{\r\n                                width:editData.currSceneInEdit.tileMap._spriteSheet._frameWidth+'px',\r\n                                verticalAlign:'middle',\r\n                                height:editData.currSceneInEdit.tileMap._spriteSheet._frameHeight+'px',\r\n                                backgroundImage:      'url('+editData.projectName+'/'+editData.currSceneInEdit.tileMap._spriteSheet.resourcePath+')',\r\n                                backgroundPositionX:  -editData.currSceneInEdit.tileMap._spriteSheet.getFramePosX(editData.currTileIndexInEdit)+'px',\r\n                                backgroundPositionY:  -editData.currSceneInEdit.tileMap._spriteSheet.getFramePosY(editData.currTileIndexInEdit)+'px',\r\n                                backgroundRepeat:     'no-repeat',\r\n                            }\"\r\n                        ></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.spriteSheets}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <select\r\n                                v-model=\"editData.currSceneInEdit.tileMap.spriteSheetId\"\r\n                                v-on:change=\"setTileMapSpriteSheet()\"\r\n                                >\r\n                            <option value=\"\">--</option>\r\n                            <option\r\n                                    v-for=\"item in editData.spriteSheetList.rs\"\r\n                                    :value=\"item.id\"\r\n                                    >{{item.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div\r\n                :style=\"{\r\n                    width: editData.currSceneInEdit.tileMap._spriteSheet._frameWidth*editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesH+'px',\r\n                    overflowX: 'auto'\r\n                }\"\r\n                >\r\n                <div :class=\"{\r\n                        inlineBlock:true,\r\n                        selected:i==editData.currTileIndexInEdit,\r\n                        hoverOutline:1\r\n                     }\"\r\n                     :style=\"{\r\n                        width:editData.currSceneInEdit.tileMap._spriteSheet._frameWidth+'px',\r\n                        verticalAlign:'middle',\r\n                        height:editData.currSceneInEdit.tileMap._spriteSheet._frameHeight+'px',\r\n                        backgroundImage:'url('+editData.projectName+'/'+editData.currSceneInEdit.tileMap._spriteSheet.resourcePath+')',\r\n                        backgroundPositionX:   -editData.currSceneInEdit.tileMap._spriteSheet.getFramePosX(i)+'px',\r\n                        backgroundPositionY:   -editData.currSceneInEdit.tileMap._spriteSheet.getFramePosY(i)+'px',\r\n                        backgroundRepeat:     'no-repeat',\r\n                     }\"\r\n                     :title=\"i\"\r\n                     v-on:click.capture=\"setCurrSelectedTile(i)\"\r\n                     v-for=\"(v,i) in numOfFramesForSceneSpriteSheet\"\r\n                     ></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n</app-collapsible>";

},{}],66:[function(require,module,exports){

var editData = require('providers/editData');
var resource = require('providers/resource');
var Scene = _require('scene');

module.exports = Vue.component('app-right-scene', {
    props: [],
    template: require('./scene.html'),
    data: function () {
        return {
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),
            form:require('providers/validator').new()
        }
    },
    computed: {
        numOfFramesForSceneSpriteSheet: function(){
            if (!editData.currSceneInEdit) return 0;
            if (!editData.currSceneInEdit.tileMap) return 0;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
            return (
                editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesV *
                editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesH
            )
        }
    },
    components: {

    },
    methods: {
        setCurrSelectedTile: function(i){
            editData.currTileIndexInEdit = i;
        },
        setTileMapSpriteSheet: function(){
            editData.currSceneInEdit = new Scene(editData.currSceneInEdit.toJSON())
        },
        editScene: function(){
            var self = this;
            resource.
                createOrEditResource(self.editData.currSceneInEdit);
        }
    }
});
},{"./scene.html":65,"providers/editData":69,"providers/i18n":71,"providers/resource":72,"providers/utils":74,"providers/validator":75}],67:[function(require,module,exports){

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
},{}],68:[function(require,module,exports){

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
},{}],69:[function(require,module,exports){

var collections = _require('collections');

var res = {};

res.reset = function(){

    res.testEditData = 'edit data ok';
    res.commonBehaviourList = {};
    res.currGameObjectInEdit = {};
    res.currSpriteSheetInEdit = {};
    res.currFrameAnimationInEdit = {};
    res.currSceneInEdit = {};
    res.currSceneGameObjectInEdit = {
        pos: {},
        scale:{}
    };
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

},{}],70:[function(require,module,exports){


var execMethod = function(url,method,data,callBack) {
    Vue.http
        [method](url, data).
        then(function(resp){
            try {
                callBack && callBack(resp.body);
            } catch(e){
                setTimeout(function() {
                    throw e;
                },0);
            }
        }).
        catch(function(err){
            setTimeout(function() {
                if (err.status || err.status!=200) throw err.body || '';
            },0);
        });
};

module.exports.get = function(url,data,callBack){
    execMethod(url,'get',data,callBack);
};

module.exports.post = function(url,data,callBack){
    execMethod(url,'post',data,callBack);
};
},{}],71:[function(require,module,exports){

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
        currGameObject: 'current gameObject',
        currScene: 'current scene',
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
        notSelected: 'not selected',
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
},{}],72:[function(require,module,exports){

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
                if (!(resourceList && resourceList)) return;
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

    // todo refactor
    this.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,callback) {
        var op = object.id ? 'edit' : 'create';
        http.post(
            '/createOrEditObjectInResource',
            {
                model: JSON.stringify(object),
                resourceId: resourceId,
                resourceType: resourceType,
                objectType: objectType,
                projectName: editData.projectName
            },
            function (resp) {
                callback && callback({type: op, r: resp});
            }
        );
    };
    // todo refactor
    this.createOrEditLayer = function(l,s,dialog){
        self.createOrEditResource(l,Layer,bundle.layerList,
            function(item){
                if (item.type=='create') {
                    self.createOrEditObjectInResource(
                        s.type,
                        s.id,
                        'layerProps',
                        {
                            type:'layer',
                            protoId:item.r.id
                        },
                        function(resp){
                            l.id = resp.r.id;
                            l.protoId = item.r.id;
                            l._scene = editData.currSceneInEdit;
                            s._layers.add(l);
                            dialog.close();
                        }
                    );
                }
            });
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
    this.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,callback){
        var op = object.id?'edit':'create';
        http.post('/createOrEditObjectInResource',{
            model:JSON.stringify(object),
            resourceId:resourceId,
            resourceType:resourceType,
            objectType:objectType,
            projectName:editData.projectName
        },function(resp){
            callback && callback({type:op,r:resp});
        });
    };
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
        sessionStorage.projectName = 'tileMap';
        if (sessionStorage.projectName) {
            self.loadProject(sessionStorage.projectName);
        } else {
            location.href = '#/explorer';
        }
    })();
};

module.exports = new Resource();
},{"providers/editData":69,"providers/http":70}],73:[function(require,module,exports){

//Vue.filter('nbsp', function (value) {
//    return value.split(' ').join('&nbsp;')
//});

window.alertEx = function(msg){
    require('components/alertDialog/alertDialog').instance.open(msg);
};

window.confirmEx = function(msg,callback){
    require('components/confirmDialog/confirmDialog').instance.open(msg,callback);
};
},{"components/alertDialog/alertDialog":2,"components/confirmDialog/confirmDialog":12}],74:[function(require,module,exports){

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
        return result ? {
            r: parseInt(result[1], 16) || 0,
            g: parseInt(result[2], 16) || 0,
            b: parseInt(result[3], 16) || 0
        } : {r:0,g:0,b:0};
    };

    this.rgbToHex = function(col) {
        var r = +col.r,g=+col.g,b=+col.b;
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

    this.getArray = function(num) {
        if (!num) return [];
        var res = [];
        for (var i=0;i<num;i++) {
            res.push(i);
        }
        return res;
    };

    this.size = function(obj) {
        return Object.keys(obj).length;
    };

    this.recalcGameObjectSize = function(gameObject){
        var spriteSheet = editData.spriteSheetList.find({id: gameObject.spriteSheetId});
        if (!spriteSheet) return;
        spriteSheet.calcFrameSize();
        gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
        gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
        gameObject._spriteSheet = spriteSheet;
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
},{"providers/editData":69,"providers/resource":72}],75:[function(require,module,exports){

module.exports.new = function(){
    return {
        valid: function(){
            return true;
        }
    }
};
},{}],76:[function(require,module,exports){

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

},{"components/alertDialog/alertDialog":2,"components/confirmDialog/confirmDialog":12,"pages/editor/editor":44,"providers/resource":72,"providers/userDefinedFns":73}]},{},[76]);
