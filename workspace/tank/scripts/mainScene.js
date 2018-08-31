import {ObjectCreator} from './custom/objectCreator'
import {teaPot} from './custom/teaPot';


let PLAYER_TYPE = {
    ENEMY: -1,
    HERO: 1
};



export class MainSceneBehaviour {

    
    onCreate(){
        
        
        let GameObject3d = this.game.GameObject3d;
        
        teaPot.texCoordArr.forEach((item,i)=>{
            teaPot.texCoordArr[i]/=2;
        });
        
        let teapotModel = new GameObject3d(this.game);
        window.tea = teapotModel;
        teapotModel.model = teaPot;
        teapotModel.pos.setXY(500,500);
        teapotModel.anchor.setXY(0.5,0.5);
        //teapotModel.scale.setXY(10,10);
        teapotModel.texture = this.game.renderer.renderableCache['resources/doow.jpg'].texture;
        this.game.getCurrScene().appendChild(teapotModel);
        
        
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
        window.tea.angleY+=0.01;
    }

    onDestroy(){

    }

}