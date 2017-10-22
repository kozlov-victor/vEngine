/*global RF:true*/
@RF.decorateComponent({
    name: 'app-color-picker',
    template: require('./colorPicker.html')
})
export default class ColorPicker {

    constructor(){
        this.model = {field:''};
        this.field = 'field';
        this.onChange = null;
    }

    click(){
        RF.getComponentById('colorPickerDialog').open(this.model,this.field,this.onChange);
    }
}