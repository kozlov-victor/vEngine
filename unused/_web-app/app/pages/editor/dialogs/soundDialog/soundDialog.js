

const abstractDialog = require('providers/abstractDialog');

const editData = require('providers/editData');
const restResource = require('providers/rest/resource');
const restFileSystem = require('providers/rest/fileSystem');
const Sound = _require('sound');

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

            let self = this;
            self._file = file;
            self.soundUrl = src;
            self.editData.currSoundInEdit.resourcePath = 'resources/sound/'+file.name;
            if (!self.editData.currSoundInEdit.name) {
                self.editData.currSoundInEdit.name = name;
            }
        },
        createOrEditSound: function(model){
            let self = this;
            Promise.resolve().
            then(()=>{
                if (self._file) {
                    return restFileSystem.
                    uploadFile(
                        self._file,
                        {type:model.type}
                    );
                } else return Promise.resolve();
            }).
            then(()=>{
                return restResource.save(model);
            }).
            then((resp)=>{
                if (resp.created) {
                    model.id = resp.id;
                    editData.soundList.add(model);
                } else if (resp.updated) {
                    model.updateCloner();
                }
                self.close();
            });
        }
    }
});