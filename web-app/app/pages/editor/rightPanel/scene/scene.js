
var editData = require('providers/editData');
var resource = require('providers/resource');
var Scene = _require('scene');

module.exports = Vue.component('app-scene', {
    props: [],
    template: require('./scene.html'),
    data: function () {
        return {
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils')
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