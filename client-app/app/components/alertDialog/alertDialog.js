/*global RF:true*/
import i18n from 'app/providers/i18n';

@RF.decorateComponent({
    name: 'app-alert-dialog',
    template: require('./alertDialog.html')
})
export default class AlertDialog {

    constructor(){
        this.message = '';
        this.i18n = i18n;
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