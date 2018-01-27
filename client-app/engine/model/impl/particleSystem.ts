
import BaseModel from '../baseModel'
import * as mathEx from '../../core/mathEx'
import Game from "../../core/game";
import GameObjectProto from './gameObjectProto';

let r = obj=>{
    return mathEx.random(obj.from,obj.to);
};

interface ParticlePropertyDesc {
    from:number,
    to:number
}

export default class ParticleSystem extends BaseModel {

    type:string = 'ParticleSystem';
    gameObjectProto:GameObjectProto = null;
    _particles = [];
    numOfParticlesToEmit:ParticlePropertyDesc = {from:1,to:10};
    particleAngle:ParticlePropertyDesc = {from:0,to:0};
    particleVelocity:ParticlePropertyDesc = {from:1,to:100};
    particleLiveTime:ParticlePropertyDesc = {from:100,to:1000};
    emissionRadius:number = 0;

    constructor(game:Game){
        super(game);
    }

    revalidate(){
        if (this.particleAngle.to<this.particleAngle.from) this.particleAngle.to += 2*Math.PI;
    }

    static find(name:string){
        //return bundle.particleSystemList.find({name:name});
    }
    static findAll(name:string){
        //return bundle.particleSystemList.findAll({name:name});
    }

    emit(x:number,y:number){
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