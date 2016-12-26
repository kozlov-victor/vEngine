
var editData = require('providers/editData');
var resource = require('providers/resource');

var abstractDialog = require('providers/abstractDialog');

module.exports.component = Vue.component('app-particle-system-preview-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./particleSystemPreviewDialog.html'),
    data: function () {
        return {
            editData: editData,
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {

    }
});