
//
export class IntroSceneBehaviour {

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
                    type: 'Image',
                    resourceMap: {main:'resources/bg.jpg'},
                },
                children: [
                    {
                        Image: {
                            pos: {x:180,y:-40},
                            resourceMap: {main:'resources/pirate-flag.png'},
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
                                type: 'NinePatchImage',
                                resourceMap: {main:'resources/button.png'},
                                ABCD: 20
                            },
                            on: ['click',()=>{
                                self.toGameScene();
                            }]
                        }
                    },
                ]
            }
        });
        this.scene.appendChild(widget);
        window.w = widget;
    }


    toGameScene(){
        let gameScene = this.game.repository.getArray('Scene').find(it=>it.name=='gameScene');
        this.game.runScene(gameScene);
    }



}
