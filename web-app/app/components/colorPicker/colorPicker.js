
var colorPickerDialog = require('./colorPickerDialog');

module.exports = Vue.component('app-color-picker', {
    props: ['object','value'],
    template: require('./colorPicker.html'),
    data: function(){
        return {

        }
    },
    computed: {
        currentColorRGB: function(){
            return this.object[this.value];
        }
    },
    created: function(){

    },
    methods: {
        click: function(e){
            colorPickerDialog.instance.open(this,this.currentColorRGB);
        },
        applyColor: function(color){
            this.object[this.value] = color;
        }
    },
    components: {
        appColorPickerDialog: require('components/colorPicker/colorPickerDialog').component
    }
});