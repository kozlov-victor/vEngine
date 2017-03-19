
const abstractDialog = require('providers/abstractDialog');
const editData = require('providers/editData');
const restResource = require('providers/rest/resource');

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
            console.log(this.editData.currFrameAnimationInEdit);
            this.frames = this.editData.currFrameAnimationInEdit.frames.rs.join(',');
            Vue.set(this.editData.currFrameAnimationInEdit,'_gameObject',this.editData.currGameObjectInEdit.clone());
        },
        allIndexes: function(){
            let res = this.utils.getArray(this.editData.currGameObjectInEdit.spriteSheet._numOfFrames);
            return res.join(',')
        },
        playAnimation: function(){
            let self = this;
            self.isStopped = false;
            try {
                self.editData.currFrameAnimationInEdit.frames = JSON.parse('['+self.frames+']');
            } catch(e){}
            self.editData.currFrameAnimationInEdit.play();
            setTimeout(function _anim(){
                self.editData.currFrameAnimationInEdit.update(new Date().getTime());

                let i = self.editData.currFrameAnimationInEdit._gameObject.currFrameIndex;
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
            let self = this;
            let fa = editData.currFrameAnimationInEdit;
            self.editData.currFrameAnimationInEdit.frames = JSON.parse('['+self.frames+']');

            restResource.
            save(fa).
            then((resp)=>{
                if (resp.created) {
                    fa.id = resp.id;
                    editData.frameAnimationList.add(fa);
                    editData.currGameObjectInEdit.frameAnimations.add(fa);
                    return restResource.save(editData.currGameObjectInEdit)
                } else {
                    fa.updateCloner();
                }
            }).
            then(function(){
                editData.currGameObjectInEdit.updateCloner();
                self.close();
            }).
            catch(window.catchPromise)

        }
    }
});