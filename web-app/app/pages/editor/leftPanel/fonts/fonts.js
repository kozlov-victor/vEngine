
var fontDialog = require('../../dialogs/fontDialog/fontDialog');
var Font = _require('font');

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
        }
    }
});