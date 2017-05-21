
var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
const restResource = require('providers/rest/resource');
var ParticleSystem = _require('particleSystem');

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
            editData.currParticleSystemInEdit.gameObject =
                editData.gameObjectList.find({id:id}).clone();
        },
        showPreview: function(){
            require('../particleSystemPreviewDialog/particleSystemPreviewDialog')
                .instance.open();
        },
        createOrEditPs: function(model){
            let self = this;
            Promise.resolve().
            then(()=>{
                return restResource.save(model);
            }).
            then((resp)=>{
                if (resp.created) {
                    model.id = resp.id;
                    editData[`${model.type}List`].add(model);
                } else if (resp.updated) {
                    model.updateCloner();
                }
                self.close();
            });
        }
    }
});