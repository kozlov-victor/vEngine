
var resource = require('providers/resource');

module.exports = Vue.component('app-script-editor', {
    props: [],
    template: require('./scriptEditor.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){

    },
    components: {

    },
    methods: {

    }
});
