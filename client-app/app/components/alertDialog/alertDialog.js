
import i18n from 'providers/i18n';

export default RF.registerComponent('app-alert-dialog', {
    template: {
        type:'string',
        value: require('./alertDialog.html')
    },
    message:'',
    i18n: i18n.getAll(),
    open(message){
        RF.getComponentById('alertModal').open();
        this.message = message;
    },
    close(){
        RF.getComponentById('alertModal').close();
        this.message = null;
    }
});