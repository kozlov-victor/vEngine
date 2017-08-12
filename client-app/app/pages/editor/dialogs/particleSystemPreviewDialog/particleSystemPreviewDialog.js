
import editData from 'app/providers/editData';
import i18n from 'app/providers/i18n';
import utils from 'app/providers/utils';

import repository from 'coreEngine/src/engine/repository';

let tid;

export default RF.registerComponent('app-particle-system-preview-dialog', {
    template: {
        type: 'string',
        value: require('./particleSystemPreviewDialog.html')
    },
    editData,utils,
    i18n:i18n.getAll(),

    open: function(){
        RF.getComponentById('particleSystemPreviewModal').open();
        this.run();
    },
    close: function(){
        RF.getComponentById('particleSystemPreviewModal').close();
        clearInterval(tid);
    },
    run: function(){
        let prevTime = null;

        if (!editData.currParticleSystemInEdit._particles)
            editData.currParticleSystemInEdit._particles = [];

        const update = function(){

            let currTime = Date.now();
            if (!prevTime) prevTime = currTime;
            let delta = currTime - prevTime;
            prevTime = currTime;
            editData.currParticleSystemInEdit._particles.forEach(p=>{

                p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                let deltaX = p.vel.x * delta / 1000;
                let deltaY = p.vel.y * delta / 1000;
                p.pos.x = p.pos.x+deltaX;
                p.pos.y = p.pos.y+deltaY;

                if (!p._timeCreated) p._timeCreated = currTime;
                if (currTime - p._timeCreated > p.liveTime) {
                    editData.currParticleSystemInEdit._particles.
                        splice(editData.currParticleSystemInEdit._particles.indexOf(p),1);
                }
            });
        };
        tid = setInterval(function(){
            update();
            RF.digest();
        },5);
    },
    emit: function(e){
        let rect = e.target.getBoundingClientRect();
        editData.currParticleSystemInEdit.emit(e.clientX - rect.left,e.clientY - rect.top);
    }
});