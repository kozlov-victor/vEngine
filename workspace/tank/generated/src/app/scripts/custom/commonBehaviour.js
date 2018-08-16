

export class CommonBehaviour {

    onCreate(){
        let r = new this.game.__global__.Rectangle(this.game);
        r.color.setRGBA(0,0,0,255);
        r.fillColor.setRGBA(0,0,0,0);
        r.width = 100;
        r.height = 20;
        r.lineWidth = 5;

        let r1 = new this.game.__global__.Rectangle(this.game);
        r1.color.setRGBA(0,0,0,10);
        r1.fillColor.setRGBA(0,255,0,255);
        r1.width = 100;
        r1.height = 20;
        r1.lineWidth = 5;
        r1.appendChild(r);
        this.gameObject.appendChild(r1);
        r1.pos.setXY(0,-100);
        this.live = 100;
        this.liveRect = r1;
        this.isExploding = false;
    }
    
    damage(){
        this.live -= 10;
        if (this.live<50) this.liveRect.fillColor.setR(155);
        if (this.live<25) this.liveRect.fillColor.setRGB(255,0,0);
        if (this.live<0) {
            this.live = 0;
            this.explode();
        }
        this.liveRect.width = this.live;
    }
    
    
    _setUpOneExplosion(explosion){
        explosion.pos.setXY(Math.random()*200,Math.random()*200);
        if (Math.random()>0.5) explosion.pos.x = -1*explosion.pos.x;
        if (Math.random()>0.5) explosion.pos.y = -1*explosion.pos.y;
        explosion.setFrameIndex(~~(Math.random()*100));
    }
    
    
    explode(){
        if (this.isExploding) return;
        this.isExploding = true;
        let r = this.game.repository;
        for (let i=0;i<50;i++) {
            let explosion = r.getArray('GameObjectProto').find(it=>it.name==='fire').createGameObject();
            this._setUpOneExplosion(explosion);
            ((explosion)=>{
                explosion.frameAnimations[0].on('loop',()=>{
                this._setUpOneExplosion(explosion);
            });
            })(explosion);
            explosion.setAnchorToCenter();
            this.gameObject.appendChild(explosion);
        }
        this.gameObject.setTimer(()=>{
            this.gameObject.kill();
        },5000);
    }
    

}