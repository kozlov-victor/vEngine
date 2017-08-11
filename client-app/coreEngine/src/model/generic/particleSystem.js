
import BaseModel from '../baseModel'
import * as mathEx from '../../engine/mathEx'

export default class ParticleSystem extends BaseModel {

    constructor(){
        super();
        this._particles = [];
        this.numOfParticlesToEmit = {from:1,to:10};
        this.particleAngle = {from:0,to:0};
        if (this.particleAngle.to<this.particleAngle.from) this.particleAngle.to += 2*Math.PI;
        this.particleVelocity = {from:1,to:100};
        this.particleLiveTime = {from:100,to:1000};
        this.emissionRadius = 0;
    }

    static find(name){
        //return bundle.particleSystemList.find({name:name});
    }
    static findAll(name){
        //return bundle.particleSystemList.findAll({name:name});
    }

    emit(x,y){
        let r = function(obj){
            return mathEx.random(obj.from,obj.to);
        };
        for (let i = 0;i<r(this.numOfParticlesToEmit);i++) {
            let particle = this.gameObjectProto.clone();
            let angle = r(this.particleAngle);
            let vel = r(this.particleVelocity);
            particle.vel.x = vel*Math.cos(angle);
            particle.vel.y = vel*Math.sin(angle);
            particle.pos.x = r({from:x-this.emissionRadius,to:x+this.emissionRadius});
            particle.pos.y = r({from:y-this.emissionRadius,to:y+this.emissionRadius});
            particle.liveTime = r(this.particleLiveTime);
            bundle.applyBehaviour(particle);
            this._particles.push(particle);
        }
    }
    update(time,delta){
        let all = this._particles;
        let i = all.length;
        let l = i - 1;
        while(i--){
            let p = all[l-i];
            if (!p) continue;
            if (!p._timeCreated) p._timeCreated = time;
            if (time - p._timeCreated > p.liveTime) {
                this._particles.splice(this._particles.indexOf(p),1);
            }
            p.update(time,delta);
        }
    }
}