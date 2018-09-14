
//
export class IntroSceneBehaviour {

    game:any;
    scene:any;

    onCreate(){
        let self = this;
        let widget = this.game.uiBuilder.build({
            AbsoluteLayout: {
                pos: {x:0,y:0},
                width:this.game.width,
                height:this.game.height,
                layoutWidth: 0,
                layoutHeight: 0,
                background: {
                    Image: {
                        id: 100,
                        src: 'resources/bg.jpg'
                    }
                },

                children: [
                    {
                        Image: {
                            id: 200,
                            pos: {x:180,y:-40},
                            src: 'resources/pirate-flag.png',
                        }
                    },
                    {
                        TextField: {
                            pos: {x:330,y:300},
                            fontName: 'cartahena_large',
                            name: '1',
                            text: 'Cartahena'
                        }
                    },
                    {
                        Button: {
                            pos: {x:360,y:500},
                            fontName: 'scriptFont',
                            text: "Продолжить",
                            paddings:[15,25],
                            background: {
                                NinePatchImage: {
                                    id: 300,
                                    src: 'resources/button.png',
                                    ABCD: 20
                                }
                            },
                            on: ['click',()=>{
                                self.game.audioPlayer.play('uiSound1');
                                self.toNextScene();
                            }]
                        }
                    }
                ]
            }
        });
        this.scene.appendChild(widget);
    }


    toNextScene(){
        let scene = this.game.repository.getArray('Scene').find(it=>it.name=='descScene');
        this.game.runScene(scene);
    }



}
