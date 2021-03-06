
import {BaseModel} from '../baseModel'
import {MathEx} from '../../core/mathEx'
import {Game} from "../../core/game";
import {GameObjectProto} from './gameObjectProto';
import {AbstractFilter} from "../../core/renderer/webGl/filters/abstract/abstractFilter";

let r = obj=>MathEx.random(obj.from,obj.to);

interface ParticlePropertyDesc {
    from:number,
    to:number
}

export class ParticleSystem extends BaseModel  {

    type:string = 'ParticleSystem';
    gameObjectProto:GameObjectProto = null;
    _particles = [];
    numOfParticlesToEmit:ParticlePropertyDesc = {from:1,to:10};
    particleAngle:ParticlePropertyDesc = {from:0,to:0};
    particleVelocity:ParticlePropertyDesc = {from:1,to:100};
    particleLiveTime:ParticlePropertyDesc = {from:100,to:1000};
    emissionRadius:number = 0;

    filters: AbstractFilter[] = null;
    blendMode:string = '';

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
            let particle:GameObjectProto = this.gameObjectProto.createGameObject();
            let angle = r(this.particleAngle);
            let vel = r(this.particleVelocity);
            particle.velocity.x = vel*Math.cos(angle);
            particle.velocity.y = vel*Math.sin(angle);
            particle.pos.x = r({from:x-this.emissionRadius,to:x+this.emissionRadius});
            particle.pos.y = r({from:y-this.emissionRadius,to:y+this.emissionRadius});
            particle['liveTime'] = r(this.particleLiveTime); // todo
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

    render(){
        let all = this._particles;
        let i = all.length;
        let l = i - 1;
        while(i--){
            let p = all[l-i];
            if (!p) continue;
            p.render();
        }
    }
}