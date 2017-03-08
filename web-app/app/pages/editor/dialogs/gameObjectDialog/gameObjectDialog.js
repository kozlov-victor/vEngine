
let abstractDialog = require('providers/abstractDialog');
let frameAnimationDialog = require('../../dialogs/frameAnimationDialog/frameAnimationDialog');
let commonBehaviourDialog = require('../../dialogs/commonBehaviourDialog/commonBehaviourDialog');

const editData = require('providers/editData');
const restResource = require('providers/rest/resource');
const FrameAnimation = _require('frameAnimation');

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
            selectedBehaviourId: ''
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
            let self = this;
            restResource.
                save(g).
                then(function(resp){
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
                self.i18n.confirmQuestion,
                function(){

                }
            )
        },

        onSpriteSheetSelected: function(sprId){
            let gameObject = editData.currGameObjectInEdit;
            let spriteSheet = editData.spriteSheetList.find({id: sprId});
            if (!spriteSheet) return;
            spriteSheet = spriteSheet.clone();
            //if (!gameObject.name) gameObject.name = spriteSheet.name;
            //spriteSheet.calcFrameSize();
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject.spriteSheet = spriteSheet;
        },

        createCommonBehaviour: function(selectedBehaviourName){
            this.editData.currCommonBehaviourInEdit =
                this.editData.commonBehaviourProto.find({name:selectedBehaviourName}).clone();
            commonBehaviourDialog.instance.open();
        },
        editCommonBehaviour: function(cb){
            this.editData.currCommonBehaviourInEdit = cb.clone();
            commonBehaviourDialog.instance.open();
        },
        deleteCommonBehaviour: function (cb) {
            let self = this;
            window.confirmEx(
                this.i18n.confirmQuestion(cb),
                function () {
                    Promise.
                    resolve().
                    then(()=>{
                        self.editData.commonBehaviourList.remove({id:cb.id});
                        return restResource.remove(cb);
                    }).
                    then(()=>{
                        self.editData.currGameObjectInEdit.fixateState();
                        self.editData.currGameObjectInEdit.commonBehaviour.remove({id:cb.id});
                        self.editData.currGameObjectInEdit.updateCloner();
                        return restResource.save(self.editData.currGameObjectInEdit.toJSON_Patched());
                    }).
                    catch(window.catchPromise)
                }
            )
        }

    }
});