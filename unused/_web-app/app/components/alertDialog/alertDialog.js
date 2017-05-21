

var abstractDialog = require('providers/abstractDialog');


module.exports.component = Vue.component('app-alert-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./alertDialog.html'),
    data: function () {
        return {
            message:'default message',
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {
        appModal: require('components/modal/modal')
    },
    methods: {
        open: function(msg) {
            this.opened = true;
            this.message = msg;
        }
    }
});