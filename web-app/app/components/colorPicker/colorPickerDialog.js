
var abstractDialog = require('providers/abstractDialog');
var utils = require('providers/utils');
var colorPicker = null;

var colorEnums = [
    {left:'red',right:'cyan',index:0},
    {left:'green',right:'magenta',index:1},
    {left:'blue',right:'yellow',index:2}
];

module.exports.component = Vue.component('app-color-picker-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./colorPickerDialog.html'),
    data: function () {
        return {
            i18n: require('providers/i18n').getAll(),
            currentColorRGB: [0,0,0],
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
            this.currentColorRGB[0] = color[0];
            this.currentColorRGB[1] = color[1];
            this.currentColorRGB[2] = color[2];
            this.currentColorHex = utils.rgbToHex(this.currentColorRGB);
        },
        hexChanged: function(){
            var color = utils.hexToRgb(this.currentColorHex);
            Vue.set(this.currentColorRGB,'0',color[0]);
            Vue.set(this.currentColorRGB,'1',color[1]);
            Vue.set(this.currentColorRGB,'2',color[2]);
        },
        rgbChanged: function(){
            this.currentColorHex = utils.rgbToHex(this.currentColorRGB);
        },
        applyColor: function(){

            colorPicker.applyColor([
                +this.currentColorRGB[0],
                +this.currentColorRGB[1],
                +this.currentColorRGB[2]
            ]);
            this.close();
        }
    }
});
