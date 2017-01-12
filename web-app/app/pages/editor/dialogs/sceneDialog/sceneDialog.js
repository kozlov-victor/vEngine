

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Scene = _require('scene');

module.exports.component = Vue.component('app-scene-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./sceneDialog.html'),
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
        createOrEditScene: function(s){
            var model = s.toJSON();
            var self = this;
            resource.createOrEditResource(
                model,
                Scene,
                editData.sceneList,
                function(result){
                    self.close();
                }
            );
        }
    }
});