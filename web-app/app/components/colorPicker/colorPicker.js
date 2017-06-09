
import './colorPickerDialog';

export default RF.registerComponent('app-color-picker', {
    template: {
        type:'string',
        value: require('./colorPicker.html')
    },
    getInitialState: function(){
        return {
            model:{field:''},
            field:'field'
        }
    },
    click: function(){
        RF.getComponentById('colorPickerDialog').open(this.model,this.field);
    }
});