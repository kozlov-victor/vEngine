
var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Layer = _require('layer');

module.exports.component = Vue.component('app-layer-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./layerDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {
        // todo refactor!!
        createOrEditLayer: function(l,s){
            var self = this;
            if (l.id) { // edit resource
                var dataToEdit = l.clone();
                dataToEdit.id = dataToEdit.protoId;
                resource.createOrEditResource(dataToEdit.toJSON());
                self.close();
            } else { // create object in resource
                resource.createOrEditLayer(l,s,self);
            }
        },
        deleteLayer: function(l){
            // todo
        }
    }
});