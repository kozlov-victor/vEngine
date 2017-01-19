
var resource = require('providers/resource');

module.exports = Vue.component('app-scene-game-object', {
    props: [],
    template: require('./sceneGameObject.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll(),
            form:require('providers/validator').new()
        }
    },
    components: {

    },
    methods: {
        editGameObject: function(){
            var obj = this.editData.currSceneGameObjectInEdit;
            var s = this;
            if (obj.fontId) {
                var fnt = s.editData.fontList.find({id:obj.fontId});
                s.editData.currSceneGameObjectInEdit._font = fnt;
                s.editData.currSceneGameObjectInEdit.fontId = fnt.id;
                obj.setText(obj.text);
            }
            resource.createOrEditObjectInResource(
                'layer',
                s.editData.currLayerInEdit.protoId,
                'gameObjectProps',
                obj.toJSON()
            );
        }
    }
});