import {EnemyBulletBh} from './EnemyBulletBh'
import {CommonBehaviour} from './commonBehaviour'

export class EnemyHelicopterBh extends CommonBehaviour {
    
    constructor(params){
        super();
        this.angleVel = 1;
        this.currentSlot = 0;
        this.params = params;
    }
    onCreate(){
        this.gameObject.setTimer(()=>{
            this.fire();
        },this.params.fireFreq);
        this.gameObject.velocity.setX(this.params.vel);
        this.me = 'enemy';
        this.opponent = 'friend';
        super.onCreate();
    }
    onUpdate(time,delta){
        let go = this.gameObject;
        if (go.pos.x<-go.width*2) go.pos.x = this.game.width+100;
        go.head.angle += 5 * delta / 1000;
    }
    fire(){
        let r = this.game.repository;
        let go = this.gameObject;
        let fireSmoke = r.getArray('GameObjectProto').find(it=>it.name==='fire2').createGameObject();
        this.currentSlot = this.currentSlot===0?1:0;
        let dy = this.currentSlot?80:0;
        fireSmoke.pos.setXY(go.pos.x-40,go.pos.y-60+dy);
        fireSmoke.velocity.setXY(-this.params.fireVel,0);
        fireSmoke.setIndividualBehaviour(new EnemyBulletBh({fireDistance:this.params.fireDistance}));
        fireSmoke.groupNames.push(this.me);
        fireSmoke.collideWith.push(this.opponent);
        window.f = fireSmoke;
        fireSmoke.on('collide',(obj)=>{
            fireSmoke.getIndividualBehaviour().explode();
            obj.getIndividualBehaviour().damage();
        });
        window.f = fireSmoke;
        this.game.getCurrScene().appendChild(fireSmoke);
    }
    
}