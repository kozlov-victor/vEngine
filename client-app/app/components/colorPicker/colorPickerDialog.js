/*global RF:true*/
import utils from 'app/providers/utils';
import i18n from 'app/providers/i18n';

let defaultColor = {r:0,g:0,b:0};


@RF.decorateComponent({
    name: 'app-color-picker-dialog',
    template: require('./colorPickerDialog.html')
})
export default class ColorPickerDialog {

    constructor(){
        this.colorEnums = [
            {left:'red',right:'cyan',key:'r'},
            {left:'green',right:'magenta',key:'g'},
            {left:'blue',right:'yellow',key:'b'}
        ];
        this.i18n = i18n;
        this.currentColor = {
            RGB: {},
            hex: ''
        };
        this.model = {field:{}};
        this.field = 'field';
    }

    open(model,field,onChange){
        let color = (model && model[field]) || Object.create(defaultColor);
        this.model = model;
        this.field = field;
        this.onChange = onChange;
        this.currentColor.RGB.r = color.r;
        this.currentColor.RGB.g = color.g;
        this.currentColor.RGB.b = color.b;
        this.currentColor.hex = utils.rgbToHex(this.currentColor.RGB);
        RF.getComponentById('colorPickerModal').open();
    }
    hexChanged(){
        this.currentColor.RGB = utils.hexToRgb(this.currentColor.hex);
    }
    rgbChanged(){
        this.currentColor.hex = utils.rgbToHex(this.currentColor.RGB);
    }
    getRawColor(rgb,key){
        let col = {
            r: key=='r'?rgb.r:0,
            g: key=='g'?rgb.g:0,
            b: key=='b'?rgb.b:0
        };
        return utils.rgbToHex(col);
    }
    applyColor(){
        this.model[this.field] = this.currentColor.RGB;
        this.onChange && this.onChange();
        RF.getComponentById('colorPickerModal').close();
    }
}
