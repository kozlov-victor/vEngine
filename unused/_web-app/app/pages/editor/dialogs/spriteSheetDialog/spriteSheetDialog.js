
const abstractDialog = require('providers/abstractDialog');

const editData = require('providers/editData');
const restFileSystem = require('providers/rest/fileSystem');
const restResource = require('providers/rest/resource');

module.exports.component = Vue.component('app-sprite-sheet-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./spriteSheetDialog.html'),
    data() {
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
    created(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {
        open(){
            this.opened = true;
            if (editData.currSpriteSheetInEdit.id)
                this.spriteSheetUrl =
                    editData.projectName + '/' +
                    editData.currSpriteSheetInEdit.resourcePath + '?' + Math.random();
            else this.spriteSheetUrl = '';
            this.refreshNumOfCells();
        },
        onFilePicked(src,file,name){
            let self = this;
            self._file = file;
            self.spriteSheetUrl = src;
            self.editData.currSpriteSheetInEdit.resourcePath = 'resources/spriteSheet/'+file.name;
            if (!self.editData.currSpriteSheetInEdit.name) {
                self.editData.currSpriteSheetInEdit.name = name;
            }
            let img = new Image();
            img.onload = function() {
                self.editData.currSpriteSheetInEdit.width = img.width;
                self.editData.currSpriteSheetInEdit.height = img.height;
                self.editData.currSpriteSheetInEdit.calcFrameSize();
            };
            img.src = src;
        },
        refreshNumOfCells() {
            this.numOfSpriteSheetCells =
                this.editData && this.editData.currSpriteSheetInEdit &&
                this.editData.currSpriteSheetInEdit.numOfFramesH*
                this.editData.currSpriteSheetInEdit.numOfFramesV;
            this.editData.currSpriteSheetInEdit.calcFrameSize();
        },
        createOrEditSpriteSheet(model){
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
                    editData[`${model.type}List`].add(model);
                } else if (resp.updated) {
                    model.updateCloner();
                }
                self.close();
            });
        }
    }
});