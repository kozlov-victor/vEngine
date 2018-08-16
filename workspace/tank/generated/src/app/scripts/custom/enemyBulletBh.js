

export class EnemyBulletBh {

    constructor(params){
        this.cnt=0;
        this.params = params;
        this.distanceDelta = ~~(Math.random()*50);
    }
    
    onCreate(){

    }
    
    onUpdate(){
        this.cnt++;
        if (this.cnt>(this.params.fireDistance + this.distanceDelta)) {
            this.explode();
        }    
    }

    explode(){
        let go = this.gameObject;
        let r = this.game.repository;
        let explosion = r.getArray('GameObjectProto').find(it=>it.name==='explosion').createGameObject();
        explosion.pos.setXY(go.pos.x-go.width/2,go.pos.y-go.height/2);
        this.game.getCurrScene().addGameObject(explosion);
        let anim = explosion.playFrameAnimation('explode',{repeat:false});
        anim.on('loop',()=>{
            explosion.kill();
        });
        go.kill();
    }
    
    damage(){
        
    }

}