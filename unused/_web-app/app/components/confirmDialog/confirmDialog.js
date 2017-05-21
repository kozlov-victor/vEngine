

var abstractDialog = require('providers/abstractDialog');


module.exports.component = Vue.component('app-confirm-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./confirmDialog.html'),
    data: function () {
        return {
            message:'default message',
            confirm: function(){},
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
        open: function(message,confirmCallback){
            this.opened = true;
            this.message = message;
            this.confirm = confirmCallback;
        },
        confirmChoose: function(){
            this.confirm();
            this.close();
        }
    }
});