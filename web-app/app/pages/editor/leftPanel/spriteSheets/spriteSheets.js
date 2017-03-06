
const SpriteSheet = _require('spriteSheet');
const spriteSheetDialog = require('../../dialogs/spriteSheetDialog/spriteSheetDialog');
const restResource = require('providers/rest/resource');

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
            let hasDepends = this.editData.gameObjectList.filter((it)=>{return it.spriteSheet.id==sprSh.id}).size()>0;
            if (hasDepends) {
                window.alertEx(this.i18n.canNotDelete(sprSh));
                return;
            }
            window.confirmEx(
                this.i18n.confirmQuestion(sprSh),
                ()=>{
                    this.editData.spriteSheetList.remove({id:sprSh.id});
                    restResource.remove(sprSh);
                }
            )
        }
    }
});
