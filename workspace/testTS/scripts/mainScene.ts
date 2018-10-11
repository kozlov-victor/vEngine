import {Game} from '@engine/core/game';
import {LAYOUT_SIZE} from "@engine/model/impl/ui/generic/container";
import {LinearGradient} from "@engine/core/renderer/linearGradient";

export class MainSceneBehaviour {

    game:any;
    scene:any;

    public onCreate(){
        let view = this.game.uiBuilder.build({
            AbsoluteLayout: {
                pos: {x:0,y:0},
                width:this.game.width,
                height:this.game.height,
                layoutWidth: LAYOUT_SIZE.WRAP_CONTENT,
                layoutHeight: LAYOUT_SIZE.WRAP_CONTENT,
                children: [
                    {
                        Rectangle:{
                            pos:{x:10,y:10},
                            fillColor: {r:100,g:200,b:10},
                            lineWidth: 6,
                            borderRadius: 15,
                            width:100,
                            height:100
                        }
                    },
                    {
                        Ellipse:{
                            id:"ellipse",
                            pos:{x:300,y:10},
                            fillColor: {
                                type: 'LinearGradient',
                                colorFrom: {r:100,g:10,b:10,a:200},
                                colorTo: {r:10,g:100,b:10,a:200}
                            },
                            lineWidth: 2,
                            radiusX: 50,
                            radiusY: 40
                        }
                    },
                    {
                        Circle:{
                            pos:{x:300,y:100},
                            fillColor: {r:10,g:10,b:20},
                            lineWidth: 1,
                            radius: 60
                        }
                    },
                    {
                        Image: {
                            id:'logo',
                            pos:{x:100,y:200},
                            width:200,
                            height:50,
                            src: 'resources/esb-header-logo.png'
                        }
                    }
                ]
            }
        });
        this.scene.appendChild(view);
    }

    public onUpdate(){

    }

    public onDestroy(){

    }

}
