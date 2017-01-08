
var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var FrameAnimation = _require('frameAnimation');

module.exports.component = Vue.component('app-frame-animation-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./frameAnimationDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),

            isStopped: true,
            from:null,
            to:null,
            frames:''
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
            this.isStopped = true;
            this.frames = this.editData.currFrameAnimationInEdit.frames.join(',');
            Vue.set(this.editData.currFrameAnimationInEdit,'_gameObject',this.editData.currGameObjectInEdit.clone());
        },
        createOrEditFrameAnimation: function(f){
            var self = this;

        },
        allIndexes: function(){
            var res = this.utils.getArray(this.editData.currGameObjectInEdit._spriteSheet._numOfFrames);
            return res.join(',')
        },
        playAnimation: function(){
            var self = this;
            self.isStopped = false;
            try {
                self.editData.currFrameAnimationInEdit.frames = JSON.parse('['+self.frames+']');
            } catch(e){}
            self.editData.currFrameAnimationInEdit.play();
            setTimeout(function _anim(){
                self.editData.currFrameAnimationInEdit.update(new Date().getTime());

                var i = self.editData.currFrameAnimationInEdit._gameObject.currFrameIndex;
                self.editData.currFrameAnimationInEdit._gameObject.setFrameIndex(i);

                if (self.isStopped) {
                    self.isStopped = false;
                    return;
                }
                if (self.opened) setTimeout(_anim,50);
            },0);
        },
        stopAnimation: function(){
            this.isStopped = true;
        }
    }
});


//
//
//s.toArray = function(expr) {
//    try {
//        return JSON.parse('['+expr+']');
//    } catch(e){
//        return [];
//    }
//};
//
//s.createOrEditFrAnimation = function(){
//    s.editData. currFrameAnimationInEdit.frames = JSON.parse('['+s.editData. currFrameAnimationInEdit.frames+']');
//    resourceDao.createOrEditResource(
//        s.editData. currFrameAnimationInEdit,
//        FrameAnimation,
//        bundle.frameAnimationList,
//        function(res){
//            if (res.type=='create') {
//
//                s.editData. currFrameAnimationInEdit.id = res.r.id;
//                var dialogStateObj = uiHelper.findDialogStateObjectById(s.editData.currGameObjectInEdit.id);
//                dialogStateObj.frameAnimationIds.push(s.editData. currFrameAnimationInEdit.id);
//                s.editData.currGameObjectInEdit.frameAnimationIds.push(s.editData. currFrameAnimationInEdit.id);
//                dialogStateObj._frameAnimations.add(s.editData. currFrameAnimationInEdit);
//
//                resourceDao.createOrEditResource(
//                    s.editData.currGameObjectInEdit,
//                    GameObject,
//                    bundle.gameObjectList,
//                    function(){
//
//                    },
//                    true
//                );
//            }
//        }
//    );
//};

//s.allIndexes = function(){
//    var res = utils.getArray(s.editData.currGameObjectInEdit._spriteSheet._numOfFrames);
//    return res.join(',')
//};
//

//
//s.stopAnimation = function(){
//    s.editData. currFrameAnimationInEdit.stop();
//    isStopped = true;
//};
//
//s.setRange = function(from,to) {
//    if (isNaN(from) || isNaN(to)) return;
//    s.editData. currFrameAnimationInEdit.frames = [];
//    if (from<=to) {
//        for (var i=from;i<=to;i++) {
//            s.editData. currFrameAnimationInEdit.frames.push(i);
//        }
//    } else {
//        for (i=from;i>=to;i--) {
//            s.editData. currFrameAnimationInEdit.frames.push(i);
//        }
//    }
//
//};