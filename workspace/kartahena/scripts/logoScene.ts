

import {TweenMovie} from "@engine/core/tweenMovie";
import {Game} from "@engine/core/game";
import {Scene} from "@engine/model/impl/scene";
export class LogoSceneBehaviour {

    game:Game;
    scene:Scene;

    public onCreate(){
        let logo = this.game.getCurrScene().getLayerByName('main').children[0];
        logo.alpha = 0;


        this.scene.tweenMovie().
        tween(0,{
            target: logo,
            to: {alpha:1},
            time: 2000
        }).
        tween(3000,{
            target: logo,
            from: {alpha:1},
            to: {alpha:0},
            time: 2000
        }).
        finish(()=>{
            let scene = this.game.repository.getArray('Scene').find(it=>it.name=='introScene');
            this.game.runScene(scene);
        });
    }

}
