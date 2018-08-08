import {Utils} from "../../providers/utils";
import {I18n} from "../../providers/i18n";

declare const RF;

let defaultColor = {r:0,g:0,b:0};


@RF.decorateComponent({
    name: 'app-color-picker-dialog',
    template: require('./colorPickerDialog.html')
})
export class ColorPickerDialog {

    colorEnums = [
        {left:'red',right:'cyan',key:'r'},
        {left:'green',right:'magenta',key:'g'},
        {left:'blue',right:'yellow',key:'b'}
    ];
    i18n = I18n;
    currentColor:any = {
        RGB: {},
        hex: ''
    };
    model = {field:{}};
    field = 'field';
    onChange;


    constructor(){

    }

    open(model,field,onChange){
        let color = (model && model[field]) || Object.create(defaultColor);
        this.model = model;
        this.field = field;
        this.onChange = onChange;
        this.currentColor.RGB.r = color.r;
        this.currentColor.RGB.g = color.g;
        this.currentColor.RGB.b = color.b;
        this.currentColor.hex = Utils.rgbToHex(this.currentColor.RGB);
        RF.getComponentById('colorPickerModal').open();
    }
    hexChanged(){
        this.currentColor.RGB = Utils.hexToRgb(this.currentColor.hex);
    }
    rgbChanged(){
        this.currentColor.hex = Utils.rgbToHex(this.currentColor.RGB);
    }
    getRawColor(rgb,key){
        let col = {
            r: key=='r'?rgb.r:0,
            g: key=='g'?rgb.g:0,
            b: key=='b'?rgb.b:0
        };
        return Utils.rgbToHex(col);
    }
    applyColor(){
        this.model[this.field] = this.currentColor.RGB;
        this.onChange && this.onChange();
        RF.getComponentById('colorPickerModal').close();
    }
}
