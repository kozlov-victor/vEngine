
var colorPickerDialog = require('./colorPickerDialog');

module.exports = Vue.component('app-color-picker', {
    props: ['object','value'],
    template: require('./colorPicker.html'),
    data: function(){
        return {
            currentColorRGB: []
        }
    },
    created: function(){
        this.currentColorRGB = this.object[this.value];
    },
    methods: {
        click: function(e){
            colorPickerDialog.instance.open(this,this.currentColorRGB);
        },
        applyColor: function(color){
            this.object[this.value] = color;
            this.currentColorRGB = this.object[this.value];
        }
    },
    components: {
        appColorPickerDialog: require('components/colorPicker/colorPickerDialog').component
    }
});