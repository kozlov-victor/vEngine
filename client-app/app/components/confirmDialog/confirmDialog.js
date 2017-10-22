/*global RF:true*/
import './confirmDialog.less'

import i18n from 'app/providers/i18n';

@RF.decorateComponent({
    name: 'app-confirm-dialog',
    template: require('./confirmDialog.html')
})
export default class ConfirmDialog {

    constructor(){
        this.message = 'default message';
        this.confirm =  function(){};
        this.i18n =  i18n;
    }


    close(){
        RF.getComponentById('confirmModal').close();
    }
    confirmAndClose() {
        this.confirm();
        this.close();
    }
    open(message,callback){
        RF.getComponentById('confirmModal').open();
        this.message = message;
        this.confirm = callback;
    }
}