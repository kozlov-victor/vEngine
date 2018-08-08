declare const RF;
@RF.decorateComponent({
    name: 'app-color-picker',
    template: require('./colorPicker.html')
})
export class ColorPicker {

    model = {field:''};
    field = 'field';
    onChange = null;

    constructor(){

    }

    click(){
        RF.getComponentById('colorPickerDialog').open(this.model,this.field,this.onChange);
    }
}