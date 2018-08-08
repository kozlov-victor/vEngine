import {I18n} from "../../providers/i18n";

declare const RF;
import './confirmDialog.scss'

@RF.decorateComponent({
    name: 'app-confirm-dialog',
    template: require('./confirmDialog.html')
})
export class ConfirmDialog {

    message = 'default message';
    confirm =  function(){};
    i18n =  I18n;

    constructor(){
    }


    close(){
        RF.getComponentById('confirmModal').close();
    }
    confirmAndClose() {
        this.confirm();
        this.close();
    }
    open(message,resolveFn){
        RF.getComponentById('confirmModal').open();
        this.message = message;
        this.confirm = ()=>{resolveFn(true)};
    }
}