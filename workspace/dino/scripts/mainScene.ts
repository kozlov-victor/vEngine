import {LAYOUT_SIZE} from "@engine/model/impl/ui/generic/container";
export class MainSceneBehaviour {

    game: any;
    scene: any;

    onCreate() {
        var bgView = this.game.uiBuilder.build({
            AbsoluteLayout: {
                id: 'mainFrame',
                pos: {x: 200, y: 0},
                width: this.game.width,
                height: this.game.height,
                layoutWidth: LAYOUT_SIZE.WRAP_CONTENT,
                layoutHeight: LAYOUT_SIZE.WRAP_CONTENT,
                background: {
                    Rectangle: {
                        lineWidth: 1,
                        borderRadius: 5,
                        fillColor: { r: 12, g: 40, b: 12, a: 60 }
                    }
                },
                children: [
                    {
                        TextField: {
                            pos: {x: 10, y: 10},
                            fontName: 'scriptFont',
                            text: "Dont forget your time sheets",
                            textAlign: 'CENTER'
                        },
                    },
                    // {
                    //     Circle: {
                    //         pos: {x:20,y:20},
                    //         lineWidth: 1,
                    //         radius: 40,
                    //         fillColor: { r: 12, g: 40, b: 12, a: 60 }
                    //     }
                    // },
                    // {
                    //     Rectangle: {
                    //         pos: {x: 10, y: 20},
                    //         width: 200,
                    //         height: 240,
                    //         lineWidth: 1,
                    //         fillColor: {r: 100, g: 40, b: 12, a: 30}
                    //     }
                    // },
                ]
            }
        });
        this.scene.findObject({name: 'dino'}).appendChild(bgView);
        let banner = this.scene.findObject({name:'guss'});
        banner.spriteSheet.alpha = 0;
        this.scene.setTimer(()=>{
            banner.tween({target:banner.spriteSheet,to:{alpha:1},time:5000});
        },5000);
    }

}