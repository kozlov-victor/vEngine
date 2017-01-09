
var abstractDialog = require('providers/abstractDialog');
var frameAnimationDialog = require('../../dialogs/frameAnimationDialog/frameAnimationDialog');
var commonBehaviourDialog = require('../../dialogs/commonBehaviourDialog/commonBehaviourDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var GameObject = _require('gameObject');
var FrameAnimation = _require('frameAnimation');
var CommonBehaviour = _require('commonBehaviour');

module.exports.component = Vue.component('app-game-object-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./gameObjectDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),
            selectedBehaviourName: ''
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
        createOrEditGameObject: function(g){
            var self = this;
            var model = g.toJSON();
            resource.createOrEditResource(
                model,
                GameObject,
                editData.gameObjectList,
                function(op){
                    if (op.type=='create') {
                        resource.createFile(
                            'script/gameObject/' + self.editData.currGameObjectInEdit.name+'.js',
                            document.getElementById('defaultCodeScript').textContent,
                            function(){
                                self.close();
                            }
                        )
                    } else self.close();
                }
            );
        },
        refreshGameObjectFramePreview: function(gameObject,ind) {
            var spriteSheet = gameObject._spriteSheet;
            if (!spriteSheet) return;
            var maxNumOfFrame = spriteSheet.numOfFramesH*spriteSheet.numOfFramesV-1;
            if (this.editData.currGameObjectInEdit.currFrameIndex>=maxNumOfFrame) {
                this.editData.currGameObjectInEdit.currFrameIndex = 0;
                ind = 0;
            }
            gameObject.setFrameIndex(ind);
        },
        createFrameAnimation: function(){
            this.editData.currFrameAnimationInEdit = new FrameAnimation(new FrameAnimation().toJSON());
            frameAnimationDialog.instance.open();
        },
        editFrameAnimation: function(fa){
            this.editData.currFrameAnimationInEdit = fa.clone();
            frameAnimationDialog.instance.open();
        },
        deleteFrameAnimation: function(fa){
            var self = this;
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    self.editData.currGameObjectInEdit._frameAnimations.remove(fa);
                    self.editData.currGameObjectInEdit.frameAnimationIds.remove(fa);
                    var origGameObj = self.editData.gameObjectList.find({id:self.editData.currGameObjectInEdit.id});
                    origGameObj._frameAnimations.remove(fa);
                    origGameObj.frameAnimationIds.remove(fa);

                    resource.deleteResource(fa);
                    resource.createOrEditResource(
                        origGameObj.toJSON(),
                        GameObject,
                        self.editData.gameObjectList
                    );
                }
            )
        },

        createCommonBehaviour: function(name){
            this.editData.currCommonBehaviourInEdit =
                this.editData.commonBehaviourList.find({name:name}).clone();
            commonBehaviourDialog.instance.open();
        },
        editCommonBehaviour: function(cb){
            this.editData.currCommonBehaviourInEdit = cb.clone();
            this.editData.currCommonBehaviourInEdit._edited = true;
            commonBehaviourDialog.instance.open();
        },
        deleteCommonBehaviour: function (cb) {
            var self = this;
            window.confirmEx(
                this.i18n.confirmQuestion,
                function () {

                    var currentCbInGoIndex = -1;
                    self.editData.currGameObjectInEdit.commonBehaviour.map(function(item,i){
                        if (item.id==self.editData.currCommonBehaviourInEdit.id) currentCbInGoIndex = i;
                    });

                    self.editData.currGameObjectInEdit.commonBehaviour.remove(
                        self.editData.currGameObjectInEdit.commonBehaviour[currentCbInGoIndex]
                    );
                    resource.createOrEditResource(
                        self.editData.currGameObjectInEdit.toJSON(),
                        GameObject,
                        self.editData.gameObjectList,
                        function () {
                            self.editData.currGameObjectInEdit =
                                self.editData.gameObjectList.find({id: self.editData.currGameObjectInEdit.id}).clone();
                        }
                    );
                }
            )
        }

    }
});