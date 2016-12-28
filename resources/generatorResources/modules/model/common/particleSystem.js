
var mathEx = require('mathEx');
var bundle = require('bundle');
var BaseModel = require('baseModel');

var ParticleSystem = BaseModel.extend({
    type:'particleSystem',
    gameObjectId:null,
    _gameObject:null,
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
        this._gameObject = bundle.gameObjectList.find({id:this.gameObjectId});
    },
    emit: function(x,y){
        var r = function(obj){
            return mathEx.random(obj.from,obj.to);
        };
        for (var i = 0;i<r(this.numOfParticlesToEmit);i++) {
            var particle = this._gameObject.clone();
            var angle = r(this.particleAngle);
            console.log(angle);
            var vel = r(this.particleVelocity);
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
        var self = this;
        var all = this._particles;
        var i = all.length;
        var l = i - 1;
        while(i--){
            var p = all[l-i];
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