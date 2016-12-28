
var editData = require('providers/editData');
var resource = require('providers/resource');

var abstractDialog = require('providers/abstractDialog');

var tid;

module.exports.component = Vue.component('app-particle-system-preview-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./particleSystemPreviewDialog.html'),
    data: function () {
        return {
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
            this.run();
        },
        close: function(){
            this.opened = false;
            clearInterval(tid);
        },
        run: function(){
            var prevTime = null;

            if (!editData.currParticleSystemInEdit._particles)
                Vue.set(editData.currParticleSystemInEdit,'_particles',[]);

            var update = function(){

                var currTime = Date.now();
                if (!prevTime) prevTime = currTime;
                var delta = currTime - prevTime;
                prevTime = currTime;
                editData.currParticleSystemInEdit._particles.forEach(function(p){

                    p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                    var deltaX = p.vel.x * delta / 1000;
                    var deltaY = p.vel.y * delta / 1000;
                    p.pos.x = p.pos.x+deltaX;
                    p.pos.y = p.pos.y+deltaY;

                    if (!p._timeCreated) p._timeCreated = currTime;
                    if (currTime - p._timeCreated > p.liveTime) {
                        editData.currParticleSystemInEdit._particles.splice(editData.currParticleSystemInEdit._particles.indexOf(p),1);
                    }
                });
            };
            tid = setInterval(function(){
                update();
            },5);
        },
        emit: function(e){
            var rect = e.target.getBoundingClientRect();
            editData.currParticleSystemInEdit.emit(e.clientX - rect.left,e.clientY - rect.top);
        }
    }
});