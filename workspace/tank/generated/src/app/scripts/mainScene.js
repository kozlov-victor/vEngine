import {ObjectCreator} from './custom/objectCreator'

let PLAYER_TYPE = {
    ENEMY: -1,
    HERO: 1
};

export class MainSceneBehaviour {

    
    onCreate(){
        this.objectCreator = new ObjectCreator(this.game);
        
        let tank = this.objectCreator.createTank(PLAYER_TYPE.ENEMY);
        tank.pos.setXY(200,400);
        window.t = tank;

        let tank2 = this.objectCreator.createTank(PLAYER_TYPE.HERO);
        tank2.pos.setXY(500,720);
        window.t2 = tank2;

        this.scene.on('click',e=>{
            let tank = this.objectCreator.createTank(PLAYER_TYPE.HERO);
            tank.pos.setXY(~~e.screenX,~~e.screenY);
            tank.moveToBack();
            window.t3 = tank;
        });


        let hlc = this.objectCreator.createHelicopter();
        hlc.pos.setXY(450,300);
        window.h = hlc;

    }

    onUpdate(){

    }

    onDestroy(){

    }

}