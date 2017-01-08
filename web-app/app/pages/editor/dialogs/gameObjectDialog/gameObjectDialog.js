
var abstractDialog = require('providers/abstractDialog');
var frameAnimationDialog = require('../../dialogs/frameAnimationDialog/frameAnimationDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var GameObject = _require('gameObject');
var FrameAnimation = _require('frameAnimation');

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
            this.editData.currFrameAnimationInEdit = new FrameAnimation(new FrameAnimation().clone());
            frameAnimationDialog.instance.open();
        },
        editFrameAnimation: function(f){
            this.editData.currFrameAnimationInEdit = f.clone();
            frameAnimationDialog.instance.open();
        },
        deleteFrameAnimation: function(){

        }
    }
});