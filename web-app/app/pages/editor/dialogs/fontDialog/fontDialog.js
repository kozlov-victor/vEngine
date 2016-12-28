
var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Font = _require('font');

module.exports.component = Vue.component('app-font-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./fontDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
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