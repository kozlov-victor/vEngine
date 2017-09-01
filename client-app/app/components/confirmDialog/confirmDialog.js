
import './confirmDialog.less'

import i18n from 'app/providers/i18n';

export default RF.registerComponent('app-confirm-dialog', {
    template: {
        type:'string',
        value: require('./confirmDialog.html')
    },
    message:'default message',
    confirm: function(){},
    i18n: i18n.getAll(),
    close: function(){
        RF.getComponentById('confirmModal').close();
    },
    confirmAndClose: function() {
        this.confirm();
        this.close();
    },
    open: function(message,callback){
        RF.getComponentById('confirmModal').open();
        this.message = message;
        this.confirm = callback;
    }
});