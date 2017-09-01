
import BaseModel from '../baseModel'
import * as mathEx from '../../engine/mathEx'

let r = obj=>{
    return mathEx.random(obj.from,obj.to);
};

export default class ParticleSystem extends BaseModel {

    constructor(game){
        super(game);
        this.type = 'ParticleSystem';
        this.gameObjectProto = null;
        this._particles = [];
        this.numOfParticlesToEmit = {from:1,to:10};
        this.particleAngle = {from:0,to:0};
        this.particleVelocity = {from:1,to:100};
        this.particleLiveTime = {from:100,to:1000};
        this.emissionRadius = 0;
    }

    revalidate(){
        if (this.particleAngle.to<this.particleAngle.from) this.particleAngle.to += 2*Math.PI;
    }

    static find(name){
        //return bundle.particleSystemList.find({name:name});
    }
    static findAll(name){
        //return bundle.particleSystemList.findAll({name:name});
    }

    emit(x,y){
        for (let i = 0;i<r(this.numOfParticlesToEmit);i++) {
            let particle = this.gameObjectProto.clone();
            let angle = r(this.particleAngle);
            let vel = r(this.particleVelocity);
            particle.vel.x = vel*Math.cos(angle);
            particle.vel.y = vel*Math.sin(angle);
            particle.pos.x = r({from:x-this.emissionRadius,to:x+this.emissionRadius});
            particle.pos.y = r({from:y-this.emissionRadius,to:y+this.emissionRadius});
            particle.liveTime = r(this.particleLiveTime);
            // bundle.applyBehaviour(particle); todo
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