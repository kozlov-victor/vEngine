import {BaseComponent} from "../../../../baseComponent";
import {GameObjectProto} from "../../../../../engine/model/impl/gameObjectProto";
import {GameObject} from "../../../../../engine/model/impl/gameObject";

declare const RF;

let tid;

@RF.decorateComponent({
    name: 'app-particle-system-preview-dialog',
    template: require('./particleSystemPreviewDialog.html')
})
export class ParticleSystemPreviewDialog extends BaseComponent {
    constructor(){
        super();
    }

    open(){
        RF.getComponentById('particleSystemPreviewModal').open();
        this.run();
    }
    close(){
        RF.getComponentById('particleSystemPreviewModal').close();
        clearInterval(tid);
    }
    run(){
        let editData = this.editData;
        let prevTime = null;

        if (!editData.currParticleSystemInEdit._particles)
            editData.currParticleSystemInEdit._particles = [];

        const update = function(){

            let currTime = Date.now();
            if (!prevTime) prevTime = currTime;
            let delta = currTime - prevTime;
            prevTime = currTime;
            editData.currParticleSystemInEdit._particles.forEach((p:GameObject)=>{

                p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                let deltaX = p.velocity.x * delta / 1000;
                let deltaY = p.velocity.y * delta / 1000;
                p.pos.x = p.pos.x+deltaX;
                p.pos.y = p.pos.y+deltaY;

                if (!p._timeCreated) p._timeCreated = currTime;
                if (currTime - p._timeCreated > p['liveTime']) { // todo
                    editData.currParticleSystemInEdit._particles.
                        splice(editData.currParticleSystemInEdit._particles.indexOf(p),1);
                }
            });
        };
        tid = setInterval(function(){
            update();
        },5);
    }
    emit(e){
        let editData = this.editData;
        if (!editData.currParticleSystemInEdit) return;
        if (!editData.currParticleSystemInEdit.gameObjectProto) return;
        let rect = e.target.getBoundingClientRect();
        editData.currParticleSystemInEdit.emit(e.clientX - rect.left,e.clientY - rect.top);
    }
}