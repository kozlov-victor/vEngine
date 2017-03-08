
const mathEx = require('mathEx');
const bundle = require('bundle');
const BaseModel = require('baseModel');

const ParticleSystem = BaseModel.extend({
    type:'particleSystem',
    gameObject:{type:'gameObject'},
    _particles:null,
    numOfParticlesToEmit:null,
    particleAngle:null,
    particleVelocity:null,
    particleLiveTime:null,
    emissionRadius:null,
    construct: function(){
        this._particles = [];
        if (!this.numOfParticlesToEmit) this.numOfParticlesToEmit = {from:1,to:10};
        if (!this.particleAngle) this.particleAngle = {from:0,to:0};
        if (this.particleAngle.to<this.particleAngle.from) this.particleAngle.to += 2*Math.PI;
        if (!this.particleVelocity) this.particleVelocity = {from:1,to:100};
        if (!this.particleLiveTime) this.particleLiveTime = {from:100,to:1000};
        if (!this.emissionRadius) this.emissionRadius = 0;
    },
    emit: function(x,y){
        let r = function(obj){
            return mathEx.random(obj.from,obj.to);
        };
        for (let i = 0;i<r(this.numOfParticlesToEmit);i++) {
            let particle = this.gameObject.clone();
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
    },
    update:function(time,delta){
        let self = this;
        let all = this._particles;
        let i = all.length;
        let l = i - 1;
        while(i--){
            let p = all[l-i];
            if (!p) continue;
            if (!p._timeCreated) p._timeCreated = time;
            if (time - p._timeCreated > p.liveTime) {
                self._particles.splice(self._particles.indexOf(p),1);
            }
            p.update(time,delta);
        }
    }
},{
    find: function(name){
        return bundle.particleSystemList.find({name:name});
    },
    findAll: function(name){
        return bundle.particleSystemList.findAll({name:name});
    }
});

module.exports = ParticleSystem;