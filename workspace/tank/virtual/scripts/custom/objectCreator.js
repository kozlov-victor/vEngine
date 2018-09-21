
import {EnemyTankBh} from './enemyTankBh'
import {EnemyHelicopterBh} from './enemyHelicopterBh'


export class ObjectCreator {
    
    constructor(game){
        this.game = game;
    }
    
    createTank(type){
        let r = this.game.repository;
        let tank = r.getArray('GameObjectProto').find(it=>it.name==='tank').createGameObject();
        tank.setAnchorToCenter();
        let tankHead = r.getArray('GameObjectProto').find(it=>it.name==='tankHead').createGameObject();
        tankHead.setAnchorToCenter();
        tank.head = tankHead;
        let me = type===-1?'enemy':'friend';
        tank.groupNames.push(me);

        tankHead.pos.setXY(0,0);
        tank.pos.setXY(0,0);
        tank.setIndividualBehaviour(new EnemyTankBh({type,vel:-100,fireFreq: 500, fireVel:100,fireDistance:50}));
        tank.appendChild(tankHead);
        
        this.game.getCurrScene().appendChild(tank);

        return tank;
    }
    
    createHelicopter(){
        let r = this.game.repository;
        let helicopterHead = r.getArray('GameObjectProto').find(it=>it.name==='helicopterHead').createGameObject();
        let helicopterBody = r.getArray('GameObjectProto').find(it=>it.name==='helicopterBody').createGameObject();
        helicopterHead.setAnchorToCenter();
        helicopterBody.head = helicopterHead;
        helicopterBody.setAnchorToCenter();
        let me ='enemy';
        helicopterBody.groupNames.push(me);

        helicopterHead.pos.setXY(0,0);
        helicopterBody.pos.setXY(0,0);
        helicopterBody.setIndividualBehaviour(new EnemyHelicopterBh({vel:-150,fireFreq:300,fireVel:380,fireDistance:50}));

        helicopterBody.appendChild(helicopterHead);
        this.game.getCurrScene().appendChild(helicopterBody);

        return helicopterBody;
    }
}