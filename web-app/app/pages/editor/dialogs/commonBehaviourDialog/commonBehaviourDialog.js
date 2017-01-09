
var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var CommonBehaviour = _require('commonBehaviour');
var GameObject = _require('gameObject');

module.exports.component = Vue.component('app-common-behaviour-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./commonBehaviourDialog.html'),
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

    },
    methods: {
        open: function(){
            this.opened = true;
        },
        createOrEditCommonBehaviour: function(){
            var self = this;

            if (!self.editData.currCommonBehaviourInEdit._edited) {
                self.editData.currGameObjectInEdit.commonBehaviour.push(self.editData.currCommonBehaviourInEdit);
                self.editData.currGameObjectInEdit._commonBehaviour.add(self.editData.currCommonBehaviourInEdit);
            } else {
                var currentCbInGoIndex = -1;
                self.editData.currGameObjectInEdit.commonBehaviour.map(function(item,i){
                    if (item.name==self.editData.currCommonBehaviourInEdit.name) currentCbInGoIndex = i;
                });
                console.log('edited',currentCbInGoIndex);
                self.editData.currGameObjectInEdit.commonBehaviour[currentCbInGoIndex] =
                    self.editData.currCommonBehaviourInEdit.toJSON();
            }
            resource.createOrEditResource(
                self.editData.currGameObjectInEdit.toJSON(),
                GameObject,
                self.editData.gameObjectList,
                function(){
                    self.editData.currGameObjectInEdit =
                        self.editData.gameObjectList.find({id:self.editData.currGameObjectInEdit.id}).clone();
                    self.close();
                }
            );
        }
    }
});