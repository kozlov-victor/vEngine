
var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');

module.exports.component = Vue.component('app-particle-system-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./particleSystemDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils')
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {
        appAnglePicker: require('components/anglePicker/anglePicker')
    },
    methods: {
        open: function(){
            this.opened = true;
        },
        onGameObjectIdChanged: function(id){
            editData.currParticleSystemInEdit._gameObject =
                editData.gameObjectList.find({id:id});
        },
        showPreview: function(){
            require('../particleSystemPreviewDialog/particleSystemPreviewDialog')
                .instance.open();
        }
    }
});