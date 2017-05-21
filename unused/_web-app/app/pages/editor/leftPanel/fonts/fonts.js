
const fontDialog = require('../../dialogs/fontDialog/fontDialog');
const Font = _require('font');
const restFileSystem = require('providers/rest/fileSystem');
const utils = require('providers/utils');

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
        deleteFont: function(model){
            utils.deleteModel(model,()=>{
                restFileSystem.removeFile(`font/${model.name}.png`);
            });
        }
    }
});