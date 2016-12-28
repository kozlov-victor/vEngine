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
},{"./alertDialog.html":1,"components/modal/modal":12,"providers/abstractDialog":41,"providers/i18n":44}],3:[function(require,module,exports){
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
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withMargin\">\n        <div class=\"alert_body\">\n            {{message}}\n        </div>\n        <div>\n            <button v-on:click=\"confirmChoose()\">{{i18n.confirm}}</button>\n            <button v-on:click=\"close()\">{{i18n.cancel}}</button>\n        </div>\n    </div>\n</app-modal>";

},{}],8:[function(require,module,exports){


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
},{"./confirmDialog.html":7,"components/modal/modal":12,"providers/abstractDialog":41,"providers/i18n":44}],9:[function(require,module,exports){
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <button>{{title}}</button>\n    <input  required accept=\"audio/*\" type=\"file\"/>\n</div>";

},{}],10:[function(require,module,exports){

module.exports = Vue.component('app-input-file', {
    props: ['title'],
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

},{"./inputFile.html":9}],11:[function(require,module,exports){
module.exports = "<div class=\"dialogWrapper\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"fullscreen shadow\"></div>\n    <div class=\"dialog\">\n        <div class=\"dialogContent\">\n            <div class=\"dialogClose\">\n                <span v-on:click=\"close()\" class=\"pointer\">X</span>\n            </div>\n            <div class=\"withPadding\">\n                <slot></slot>\n            </div>\n        </div>\n    </div>\n</div>\n";

},{}],12:[function(require,module,exports){


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
},{"./modal.html":11}],13:[function(require,module,exports){
module.exports = "<div>\n    <app-sound-dialog/>\n    <app-particle-system-dialog/>\n    <app-particle-system-preview-dialog/>\n</div>";

},{}],14:[function(require,module,exports){

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
        appParticleSystemPreviewDialog: require('./particleSystemPreviewDialog/particleSystemPreviewDialog').component
    },
    methods: {

    }
});
},{"./dialogs.html":13,"./particleSystemDialog/particleSystemDialog":16,"./particleSystemPreviewDialog/particleSystemPreviewDialog":18,"./soundDialog/soundDialog":20,"providers/editData":42,"providers/i18n":44}],15:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n            <td>\n\n            </td>\n            <td>\n                <input\n                    required\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'name'}\"\n                    v-model=\"editData.currParticleSystemInEdit.name\"/>\n            </td>\n        </tr>\n        <tr>\n            <td rowspan=\"2\">\n                numOfParticlesToEmit\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.numOfParticlesToEmit,prop:'from'}\"\n                    v-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.numOfParticlesToEmit,prop:'to'}\"\n                    v-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.to\"/>\n            </td>\n        </tr>\n        <tr>\n            <td rowspan=\"2\">\n                particleVelocity\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleVelocity,prop:'from'}\"\n                        v-model=\"editData.currParticleSystemInEdit.particleVelocity.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleVelocity,prop:'to'}\"\n                        v-model=\"editData.currParticleSystemInEdit.particleVelocity.to\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td rowspan=\"2\">\n                particleLiveTime\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleLiveTime,prop:'from'}\"\n                    v-model=\"editData.currParticleSystemInEdit.particleLiveTime.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleLiveTime,prop:'to'}\"\n                    v-model=\"editData.currParticleSystemInEdit.particleLiveTime.to\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                emissionRadius\n            </td>\n            <td></td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'emissionRadius'}\"\n                        v-model=\"editData.currParticleSystemInEdit.emissionRadius\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                particleAngle\n            </td>\n            <td>\n                from / to\n            </td>\n            <td>\n                <app-angle-picker\n                        :object=\"editData.currParticleSystemInEdit.particleAngle\"\n                        :value=\"'from'\"\n                        />\n                <app-angle-picker\n                        :object=\"editData.currParticleSystemInEdit.particleAngle\"\n                        :value=\"'to'\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td></td>\n            <td>\n                {{i18n.gameObject}}\n            </td>\n            <td>\n\n                <table>\n                    <tr>\n                        <td>\n                            <select\n                                    required\n                                    v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'gameObjectId'}\"\n                                    v-on:change=\"onGameObjectIdChanged(editData.currParticleSystemInEdit.gameObjectId)\"\n                                    v-model=\"editData.currParticleSystemInEdit.gameObjectId\"\n                                    >\n                                <option\n                                        :value=\"item.id\"\n                                        v-for=\"item in editData.gameObjectList.rs\">{{item.name}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <div :style=\"\n                                utils.merge(\n                                    utils.getGameObjectCss(editData.currParticleSystemInEdit._gameObject),\n                                    {\n                                        zoom:editData.currParticleSystemInEdit._gameObject.height>30?\n                                        30/editData.currParticleSystemInEdit._gameObject.height:\n                                        1\n                                    }\n                               )\">\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n\n\n            </td>\n        </tr>\n\n    </table>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"createOrEditPs(editData.currParticleSystemInEdit)\">\n        {{editData.currParticleSystemInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"showPreview()\">\n        {{i18n.preview}}\n    </button>\n\n</app-modal>";

},{}],16:[function(require,module,exports){

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
},{"../particleSystemPreviewDialog/particleSystemPreviewDialog":18,"./particleSystemDialog.html":15,"components/anglePicker/anglePicker":4,"providers/abstractDialog":41,"providers/editData":42,"providers/i18n":44,"providers/resource":45,"providers/utils":47,"providers/validator":48}],17:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n\n    <div>\n        {{i18n.preview}} {{i18n.particleSystem}}\n        <span class=\"underLine\">{{editData.currParticleSystemInEdit.name}}</span>\n    </div>\n    <div\n            v-on:click=\"emit($event)\"\n            class=\"subFullScreen relative noOverFlow\">\n        <div\n                v-for=\"item in editData.currParticleSystemInEdit._particles\"\n                :style=\"utils.merge(\n                            utils.getGameObjectCss(item),\n                            {\n                                position:'absolute',\n                                left:item.pos.x+'px',\n                                top: item.pos.y+'px'\n                            }\n                    )\"\n                >\n        </div>\n    </div>\n    <div>\n        <button v-on:click=\"close()\">{{i18n.close}}</button>\n    </div>\n\n\n</app-modal>";

},{}],18:[function(require,module,exports){

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
            },10);
        },
        emit: function(e){
            var rect = e.target.getBoundingClientRect();
            editData.currParticleSystemInEdit.emit(e.clientX - rect.left,e.clientY - rect.top);
        }
    }
});
},{"./particleSystemPreviewDialog.html":17,"providers/abstractDialog":41,"providers/editData":42,"providers/i18n":44,"providers/resource":45,"providers/utils":47}],19:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <input\n                        required\n                        v-control=\"{form:form,model:editData.currSoundInEdit,prop:'name'}\"\n                        v-model=\"editData.currSoundInEdit.name\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <app-input-file\n                        v-on:picked=\"onFilePicked\"\n                        :title=\"i18n.loadSound\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <audio controls=\"controls\" :src=\"soundUrl\"></audio>\n            </td>\n        </tr>\n    </table>\n\n    <button\n            :disabled=\"!(form.valid() && soundUrl)\"\n            v-on:click=\"createOrEditSound(editData.currSoundInEdit)\">\n        {{editData.currSoundInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n</app-modal>";

},{}],20:[function(require,module,exports){


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
},{"./soundDialog.html":19,"providers/abstractDialog":41,"providers/editData":42,"providers/i18n":44,"providers/resource":45,"providers/validator":48}],21:[function(require,module,exports){
module.exports = "<div class=\"template\">\n    <div id=\"c\" class=\"split\">\n        <div id=\"a\" class=\"split split-horizontal content\">\n            <app-game-props/>\n            <app-scenes/>\n            <app-game-objects/>\n            <app-sprite-sheets/>\n            <app-user-interface/>\n            <app-fonts/>\n            <app-sounds/>\n            <app-particle-systems/>\n        </div>\n        <div id=\"b\" class=\"split split-horizontal content\">\n            b\n        </div>\n        <div id=\"e\" class=\"split split-horizontal content\">e</div>\n    </div>\n    <div id=\"d\" class=\"split content\">d</div>\n\n    <app-dialogs/>\n\n</div>";

},{}],22:[function(require,module,exports){

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
        appDialogs: require('./dialogs/dialogs')
    }
};
},{"./dialogs/dialogs":14,"./editor.html":21,"./leftPanel/fonts/fonts":26,"./leftPanel/gameObjects/gameObjects":28,"./leftPanel/gameProps/gameProps":30,"./leftPanel/particleSystems/particleSystems":32,"./leftPanel/scenes/scenes":34,"./leftPanel/sounds/sounds":36,"./leftPanel/spriteSheets/spriteSheets":38,"./leftPanel/userInterface/userInterface":40,"components/collapsible/collapsible":6,"components/inputFile/inputFile":10,"components/modal/modal":12}],23:[function(require,module,exports){
module.exports = "<div class=\"row\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"cell\">\n        <span class=\"inlineBlock withPaddingRight\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.name}}\n            </span>\n        </span>\n    </div>\n    <div    class=\"cell width100\"\n            v-if=\"!gameObject.subType\">\n        <div :style=\"\n                utils.merge(\n                        utils.getGameObjectCss(gameObject),\n                        {zoom:gameObject.height>30?30/gameObject.height:1}\n                )\"></div>\n    </div>\n    <div\n            class=\"cell width100\"\n            v-if=\"gameObject.subType\"\n            :title=\"gameObject.name\"\n            >\n        <span class=\"textOverflow\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.subType}}\n            </span>\n        </span>\n    </div>\n    <div class=\"cell width1\">\n        <div v-if=\"crud && crud.editScript\" class=\"script\" v-on:click=\"crud.editScript()\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div v-if=\"crud && crud.edit\" class=\"edit\" v-on:click=\"crud.edit()\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div class=\"delete\"></div>\n    </div>\n</div>";

},{}],24:[function(require,module,exports){

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
},{"./gameObjectRow.html":23,"providers/utils":47}],25:[function(require,module,exports){
module.exports = "\n<app-collapsible\n        :crud=\"{\n            create:createFont\n        }\"\n        :title=\"i18n.fonts\"\n        >\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"font in (editData.fontList && editData.fontList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{font.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],26:[function(require,module,exports){

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

        }
    }
});
},{"./fonts.html":25,"providers/editData":42,"providers/i18n":44}],27:[function(require,module,exports){
module.exports = "<div>\n    <app-collapsible\n            :title=\"i18n.gameObjects\"\n            :crud=\"{\n                create:createGameObject\n            }\"\n            >\n        <div class=\"withPaddingLeft\">\n            <div class=\"table rightText\">\n                <div\n                        :crud=\"{\n                            edit: editGameObject,\n                            editScript: editGameObjectScript\n                        }\"\n                        is=\"appGameObjectRow\"\n                        :game-object=\"gameObject\"\n                        v-for=\"gameObject in (editData.gameObjectList && editData.gameObjectList.rs)\"\n                        >\n                </div>\n            </div>\n        </div>\n    </app-collapsible>\n</div>";

},{}],28:[function(require,module,exports){

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
        editGameObjectScript: function(){
            console.log('edit scr');
        },
        editGameObject: function(){
            console.log('create go');
        }
    }
});

},{"../_gameObjectRow/gameObjectRow":24,"./gameObjects.html":27,"providers/editData":42,"providers/i18n":44}],29:[function(require,module,exports){
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <app-collapsible :title=\"i18n.game\" :id=\"'game'\">\n        <form class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.width}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            v-model=\"editData.gameProps.width\"\n                            v-control=\"{form:form,model:editData.gameProps,prop:'width'}\"\n                            type=\"number\"\n                            min=\"1\"\n                            max=\"20000\"\n                            v-on:change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.height}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            v-model=\"editData.gameProps.height\"\n                            type=\"number\"\n                            v-control=\"{form:form,model:editData.gameProps,prop:'height'}\"\n                            min=\"1\"\n                            max=\"20000\"\n                            v-on:change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.scaleStrategy}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            v-model=\"editData.gameProps.scaleStrategy\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option\n                                :title=\"value\"\n                                :value=\"value\"\n                                v-for=\"(value,key) in scales\">{{key}}</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.preloadingScene}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            v-model=\"editData.gameProps.preloadingSceneId\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option value=\"\">--</option>\n                        <option\n                                :disabled=\"item.id==editData.gameProps.startSceneId\"\n                                :value=\"item.id\"\n                                v-for=\"item in (editData.sceneList && editData.sceneList.rs)\">{{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.startScene}}\n                </div>\n                <div class=\"cell\">\n                    <select v-model=\"editData.gameProps.startSceneId\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option\n                                :disabled=\"item.id==editData.gameProps.preloadingSceneId\"\n                                :value=\"item.id\"\n                                v-for=\"item in (editData.sceneList && editData.sceneList.rs)\">{{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n        </form>\n\n    </app-collapsible>\n</div>";

},{}],30:[function(require,module,exports){
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
},{"./gameProps.html":29,"providers/editData":42,"providers/i18n":44,"providers/resource":45,"providers/validator":48}],31:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createParticleSystem\n        }\"\n        :title=\"i18n.particleSystems\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"ps in (editData.particleSystemList && editData.particleSystemList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{ps.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editParticleSystem(ps)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteParticleSystem(ps)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],32:[function(require,module,exports){

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
},{"../../dialogs/particleSystemDialog/particleSystemDialog":16,"./particleSystems.html":31,"providers/editData":42,"providers/i18n":44,"providers/resource":45}],33:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createScene\n        }\"\n        :title=\"i18n.scenes\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\" v-for=\"scene in (editData.sceneList && editData.sceneList.rs)\">\n        <app-collapsible\n                :object=\"scene\"\n                :crud=\"{\n                    edit:editScene,\n                    delete:deleteScene\n                }\"\n                :title=\"scene.name\"\n                >\n            <div class=\"withPaddingLeft\">\n                <app-collapsible\n                        :title=\"i18n.layers\"\n                        :crud=\"{\n                            create:createLayer\n                        }\"\n                        >\n                    <div v-for=\"layer in scene._layers.rs\" class=\"withPaddingLeft\">\n                        <app-collapsible\n                                :object=\"layer\"\n                                :crud=\"{\n                            edit:editLayer,\n                            delete:deleteLayer\n                        }\"\n                                :title=\"layer.name\" :id=\"layer.id\">\n                            <div class=\"withPaddingLeft\">\n                                <div class=\"table width100\">\n                                    <div\n                                            is=\"appGameObjectRow\"\n                                            :game-object=\"gameObject\"\n                                            v-for=\"gameObject in layer._gameObjects.rs\"></div>\n                                </div>\n                            </div>\n                        </app-collapsible>\n                    </div>\n                </app-collapsible>\n            </div>\n        </app-collapsible>\n    </div>\n</app-collapsible>";

},{}],34:[function(require,module,exports){
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

},{"../_gameObjectRow/gameObjectRow":24,"./scenes.html":33,"providers/editData":42,"providers/i18n":44,"providers/resource":45}],35:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createSound\n        }\"\n        :title=\"i18n.sounds\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"sound in (editData.soundList && editData.soundList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{sound.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editSound(sound)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteSound(sound)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],36:[function(require,module,exports){

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
},{"../../dialogs/soundDialog/soundDialog":20,"./sounds.html":35,"providers/editData":42,"providers/i18n":44,"providers/resource":45}],37:[function(require,module,exports){
module.exports = "<app-collapsible\n        :title=\"i18n.spriteSheets\"\n        :crud=\"{\n            create:createSpriteSheet\n        }\"\n        >\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"spriteSheet in (editData.spriteSheetList && editData.spriteSheetList.rs)\">\n\n                <div class=\"cell\">\n                    <img\n                        height=\"20\"\n                        class=\"spriteSheetThumb\"\n                        :src=\"editData.projectName+'/'+spriteSheet.resourcePath\"/>\n                </div>\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{spriteSheet.name}}\n                    </span>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"edit\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],38:[function(require,module,exports){

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
            console.log('create sprss');
        }
    }
});

},{"./spriteSheets.html":37,"providers/editData":42,"providers/i18n":44}],39:[function(require,module,exports){
module.exports = "<app-collapsible\n        :title=\"i18n.userInterface\"\n        >\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"ui in (editData.userInterfaceList && editData.userInterfaceList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{ui.subType}}</span>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],40:[function(require,module,exports){

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
},{"./userInterface.html":39,"providers/editData":42,"providers/i18n":44}],41:[function(require,module,exports){

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
},{}],42:[function(require,module,exports){

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

    res.debugFrameUrl = '/about:blank';
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

},{}],43:[function(require,module,exports){

module.exports.get = function(url,data,callBack){
    Vue.http.
        get(url, data).
        then(callBack, function(err){
            setTimeout(function() { throw err.body; },0);
        }
    );
};

module.exports.post = function(url,data,callBack){
    Vue.http.
        post(url, data).
        then(function(resp){
            callBack(resp.body);
        }).
        catch(function(err){
            setTimeout(function() { throw err.body || ''; },0);
        });
};
},{}],44:[function(require,module,exports){

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
},{}],45:[function(require,module,exports){

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
    //this.createFile = function(name,path,content,callback){
    //    $http({
    //        url: '/createFile',
    //        method: "POST",
    //        data: {
    //            name:name,
    //            path:path,
    //            content:content,
    //            projectName: editData.projectName
    //        },
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //this.readFile = function(name,path,callback){
    //    $http({
    //        url: '/readFile',
    //        method: "POST",
    //        data: {
    //            name:name,
    //            path:path,
    //            projectName: editData.projectName
    //        },
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
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
},{"providers/editData":42,"providers/http":43}],46:[function(require,module,exports){

//Vue.filter('nbsp', function (value) {
//    return value.split(' ').join('&nbsp;')
//});

window.alertEx = function(msg){
    require('components/alertDialog/alertDialog').instance.open(msg);
};

window.confirmEx = function(msg,callback){
    require('components/confirmDialog/confirmDialog').instance.open(msg,callback);
};
},{"components/alertDialog/alertDialog":2,"components/confirmDialog/confirmDialog":8}],47:[function(require,module,exports){

var mathEx = _require('mathEx');
var editData = require('providers/editData');


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
};

module.exports = new Utils();
},{"providers/editData":42}],48:[function(require,module,exports){

module.exports.new = function(){
    return {
        valid: function(){
            return true;
        }
    }
};
},{}],49:[function(require,module,exports){

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

},{"components/alertDialog/alertDialog":2,"components/confirmDialog/confirmDialog":8,"pages/editor/editor":22,"providers/resource":45,"providers/userDefinedFns":46}]},{},[49]);
