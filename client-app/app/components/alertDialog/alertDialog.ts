import I18n from "../../providers/i18n";

declare const RF;

@RF.decorateComponent({
    name: 'app-alert-dialog',
    template: require('./alertDialog.html')
})
export default class AlertDialog {

    message = '';
    i18n = I18n;

    constructor(){

    }

    open(message){
        RF.getComponentById('alertModal').open();
        this.message = message;
    }
    close(){
        RF.getComponentById('alertModal').close();
        this.message = null;
    }
}