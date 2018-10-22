

import {LAYOUT_SIZE} from "@engine/model/impl/ui/generic/container";
import {Game} from "@engine/core/game";
import {Scene} from "@engine/model/impl/scene";
import {Rectangle} from "@engine/model/impl/ui/drawable/rectangle";
import {RenderableModel} from "@engine/model/renderableModel";
import {Color} from "@engine/core/renderer/color";
import {GameObject} from "@engine/model/impl/gameObject";

class Snake {
    
    private body:Rectangle[] = [];
    private game:Game;
    private scene:Scene;
    private layout:RenderableModel;
    
    private createBodyCell():Rectangle{
        let r:Rectangle = new Rectangle(this.game);
        r.color = Color.RGB(20,200,20);
        r.setWH(10,10);
        r.fillColor = Color.RGB(20,20,20);
        return r;
    }
    
    constructor(game:Game,scene:Scene,layout:RenderableModel){
        this.game = game;
        this.scene = scene;
        this.layout = layout;
        let r:Rectangle = this.createBodyCell();
        this.body.push(r);
        r.pos.setXY(100,100);
        this.layout.appendChild(r);
    }
    
    
}



export class MainSceneBehaviour {

    game:Game;
    scene:Scene;

    public onCreate(){
        var layoutView = this.game.uiBuilder.build({
            AbsoluteLayout: {
                id: 'mainFrame',
                pos: {x: 55, y:20},
                width: 550,
                height: 450,
                layoutWidth: LAYOUT_SIZE.FIXED,
                layoutHeight: LAYOUT_SIZE.FIXED,
                background: {
                    Rectangle: {
                        lineWidth: 1,
                        borderRadius: 1,
                        color: {r: 0, g: 0, b: 12}
                    }
                }
            }
        });
        this.scene.getDefaultLayer().appendChild(layoutView);
        //this.scene.getDefaultLayer().findObject({name:'top'}).kill();
        this.scene.getDefaultLayer().findObject({name:'top'}).moveToFront();
        //(this.scene.getDefaultLayer().findObject({name:'top'}) as GameObject).spriteSheet.alpha = 0.6;
        new Snake(this.game,this.scene,layoutView);
    }

    public onUpdate(){

    }

    public onDestroy(){

    }

}
