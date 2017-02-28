
const abstractDialog = require('providers/abstractDialog');
const frameAnimationDialog = require('../../dialogs/frameAnimationDialog/frameAnimationDialog');
const commonBehaviourDialog = require('../../dialogs/commonBehaviourDialog/commonBehaviourDialog');

const editData = require('providers/editData');
const restResource = require('providers/rest/resource');
const GameObject = _require('gameObject');
const FrameAnimation = _require('frameAnimation');
const CommonBehaviour = _require('commonBehaviour');

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
            console.log(this.editData.currGameObjectInEdit.commonBehaviour);
        },
        createOrEditGameObject: function(g){
            let self = this;
            let model = g.toJSON();
            restResource.
                save(model).
                then((resp)=>{
                    if (resp.created) {
                        g.id = resp.id;
                        editData.gameObjectList.add(g);
                    } else if (resp.updated) {
                        g.updateCloner();
                    }
                    self.close();
                });
        },
        refreshGameObjectFramePreview: function(gameObject,ind) {
            let spriteSheet = gameObject.spriteSheet;
            if (!spriteSheet) return;
            let maxNumOfFrame = spriteSheet.numOfFramesH*spriteSheet.numOfFramesV-1;
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
            let self = this;
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    self.editData.currGameObjectInEdit._frameAnimations.remove(fa);
                    self.editData.currGameObjectInEdit.frameAnimationIds.remove(fa);
                    let origGameObj = self.editData.gameObjectList.find({id:self.editData.currGameObjectInEdit.id});
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
            let self = this;
            window.confirmEx(
                this.i18n.confirmQuestion,
                function () {

                    let currentCbInGoIndex = -1;
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