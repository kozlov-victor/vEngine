
var abstractDialog = require('providers/abstractDialog');
var utils = require('providers/utils');
var colorPicker = null;

var colorEnums = [
    {left:'red',right:'cyan',key:'r'},
    {left:'green',right:'magenta',key:'g'},
    {left:'blue',right:'yellow',key:'b'}
];

module.exports.component = Vue.component('app-color-picker-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./colorPickerDialog.html'),
    data: function () {
        return {
            i18n: require('providers/i18n').getAll(),
            currentColorRGB: {r:0,g:0,b:0},
            currentColorHex: '#000000',
            colorEnums: colorEnums
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {
        appModal: require('components/modal/modal')
    },
    methods: {
        open: function(_colorPicker,color){
            this.opened = true;
            colorPicker = _colorPicker;
            this.currentColorRGB.r = color.r;
            this.currentColorRGB.g = color.g;
            this.currentColorRGB.b = color.b;
            this.currentColorHex = utils.rgbToHex(this.currentColorRGB);
        },
        hexChanged: function(){
            var color = utils.hexToRgb(this.currentColorHex);
            Vue.set(this.currentColorRGB,'r',color.r);
            Vue.set(this.currentColorRGB,'g',color.g);
            Vue.set(this.currentColorRGB,'b',color.b);
        },
        rgbChanged: function(){
            this.currentColorHex = utils.rgbToHex(this.currentColorRGB);
        },
        applyColor: function(){
            colorPicker.applyColor(this.currentColorRGB);
            this.close();
        }
    }
});
