
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
