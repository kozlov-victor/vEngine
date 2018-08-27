
import {EnemyBulletBh} from './EnemyBulletBh'
import {CommonBehaviour} from './commonBehaviour'

export class EnemyTankBh extends CommonBehaviour {

    constructor(params){
        super();
        this.params = params;
        this.angleVel = 1;
        this.me = '';
        this.opponent = '';
        this.canFire = false;
    }
    onCreate(){
        this.gameObject.setTimer(()=>{
            this.fire();
        },this.params.fireFreq);
        if (this.params.type==-1) this.gameObject.velocity.setX(this.params.vel);
        else this.gameObject.angle = Math.PI;
        this.me = this.params.type==-1?'enemy':'friend';
        this.opponent = this.params.type==1?'enemy':'friend';
        super.onCreate();
    }
    onUpdate(time,delta){
        let MathEx = this.game.__global__.MathEx;
        let go = this.gameObject;
        if (go.pos.x<-go.width*2) go.pos.x = this.game.width+100;
        let allDist = this.game.getCurrScene().getAllGameObjects().filter(go=>{
            let bh = go.getIndividualBehaviour();
            if (!bh) return false;
            return bh.me===this.opponent;
        }).map(go=>{
            return {go,dist:MathEx.getDistanceSquared(this.gameObject.pos,go.pos)};
        });
        this.canFire = false;
        allDist.sort((a,b)=>{
            return a.dist-b.dist
        });
        if (!allDist[0]) return;
        let closest = allDist[0].dist;
        let isCloseToEnemy = closest<Math.pow(500,2);
        if (isCloseToEnemy && allDist.length) {
            this.canFire = true;
        }
        let angle = MathEx.getAngle(this.gameObject.pos,allDist[0].go.pos);
        if (this.gameObject.getIndividualBehaviour().me==='friend') angle-=this.gameObject.angle;
        if (!isCloseToEnemy) angle = 0;
        const headVel = 0.03;
        let dAngle = this.gameObject.head.angle<angle?headVel:-headVel;
        if (!MathEx.closeTo(this.gameObject.head.angle,angle,0.1)) this.gameObject.head.angle+=dAngle;


    }
    fire(){
        if (!this.canFire) return;
        let r = this.game.repository;
        let MathEx = this.game.__global__.MathEx;
        let Point2d =  this.game.__global__.Point2d;
        let fireSmoke = r.getArray('GameObjectProto').find(it=>it.name=='fire').createGameObject();
        fireSmoke.setAnchorToCenter();
        let p = new Point2d(
            this.gameObject.pos.x,
            this.gameObject.pos.y
        );
        fireSmoke.angle = this.gameObject.head.angle+this.gameObject.angle;
        fireSmoke.pos = MathEx.polarToRect(160,fireSmoke.angle,p);
        let fireSmokeVel = 180;
        fireSmoke.velocity.setXY(-this.params.fireVel*Math.cos(fireSmoke.angle),-fireSmokeVel*Math.sin(fireSmoke.angle));
        fireSmoke.setIndividualBehaviour(new EnemyBulletBh({fireDistance:this.params.fireDistance}));
        this.game.getCurrScene().appendChild(fireSmoke);
        fireSmoke.collideWith.push(this.opponent);
        fireSmoke.on('collide',(obj)=>{
            fireSmoke.kill();
            fireSmoke.getIndividualBehaviour().explode();
           obj.getIndividualBehaviour().damage();
        });
    }
}