
import utils from 'app/providers/utils';
import i18n from 'app/providers/i18n';

let defaultColor = {r:0,g:0,b:0};
let colorEnums = [
    {left:'red',right:'cyan',key:'r'},
    {left:'green',right:'magenta',key:'g'},
    {left:'blue',right:'yellow',key:'b'}
];

export default RF.registerComponent('app-color-picker-dialog', {
    template: {
        type: 'string',
        value: require('./colorPickerDialog.html')
    },
    colorEnums,
    i18n: i18n.getAll(),
    getInitialState: function(){
        return {
            currentColor: {
                RGB: {},
                hex: ''
            },
            model: {field:{}},
            field: 'field'
        }
    },
    open: function(model,field){
        let color = (model && model[field]) || Object.create(defaultColor);
        this.model = model;
        this.field = field;
        this.currentColor.RGB.r = color.r;
        this.currentColor.RGB.g = color.g;
        this.currentColor.RGB.b = color.b;
        this.currentColor.hex = utils.rgbToHex(this.currentColor.RGB);
        RF.getComponentById('colorPickerModal').open();
    },
    hexChanged: function(){
        this.currentColor.RGB = utils.hexToRgb(this.currentColor.hex);
    },
    rgbChanged: function(){
        this.currentColor.hex = utils.rgbToHex(this.currentColor.RGB);
    },
    getRawColor: function(rgb,key){
        let col = {
            r: key=='r'?rgb.r:0,
            g: key=='g'?rgb.g:0,
            b: key=='b'?rgb.b:0,
        };
        return utils.rgbToHex(col);
    },
    applyColor: function(){
        this.model[this.field] = this.currentColor.RGB;
        RF.getComponentById('colorPickerModal').close();
    }
});

// let el = document.createElement('app-color-picker-dialog');
// el.id = 'colorPickerDialog';
// document.body.appendChild(el);
