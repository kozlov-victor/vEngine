
var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var restFileSystem = require('providers/rest/fileSystem');
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
            var self = this;
            restFileSystem.
                uploadFile(
                self._file,
                {}
            ).
            then(function(params){
                console.log('file uploaded');
            });
            //var model = sprSh.toJSON();
            //model._file = this._file;
            //this._file = '';
            //var self = this;
            //resource.createOrEditResource(
            //    model,
            //    SpriteSheet,
            //    editData.spriteSheetList,
            //    function(result){
            //        self.close();
            //    }
            //);
        }
    }
});