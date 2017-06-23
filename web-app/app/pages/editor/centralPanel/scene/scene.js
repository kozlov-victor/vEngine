
var editData = require('providers/editData')

module.exports = Vue.component('app-curr-scene', {
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
        frameWidth: function(){
            if (!editData.currSceneInEdit.tileMap) return 0;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
            return  editData.currSceneInEdit.tileMap._spriteSheet._frameWidth || 0;
        },
        frameHeight: function(){
            if (!editData.currSceneInEdit.tileMap) return 0;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
            return  editData.currSceneInEdit.tileMap._spriteSheet._frameHeight || 0;
        }
    },
    components: {

    },
    methods: {

    }
});