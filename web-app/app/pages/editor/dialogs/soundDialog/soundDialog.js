

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