
var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var FrameAnimation = _require('frameAnimation');
var GameObject = _require('gameObject');

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
        },
        createOrEditFrameAnimation: function(){
            var self = this;
            self.editData.currFrameAnimationInEdit.frames = JSON.parse('['+self.frames+']');

            resource.createOrEditResource(
                self.editData.currFrameAnimationInEdit.toJSON(),
                FrameAnimation,
                self.editData.frameAnimationList,
                function(res){

                    if (res.type=='create') {

                        self.editData.currFrameAnimationInEdit.id = res.r.id;
                        self.editData.currGameObjectInEdit.frameAnimationIds.push(self.editData.currFrameAnimationInEdit.id);
                        self.editData.currGameObjectInEdit._frameAnimations.add(self.editData.currFrameAnimationInEdit);

                        resource.createOrEditResource(
                            self.editData.currGameObjectInEdit.toJSON(),
                            GameObject,
                            self.editData.gameObjectList,
                            function(){
                                self.close();
                            }
                        );
                    } else {
                        self.editData.currGameObjectInEdit =
                            self.editData.gameObjectList.find({id:self.editData.currGameObjectInEdit.id}).clone();
                        self.close();
                    }
                }
            );
        }
    }
});