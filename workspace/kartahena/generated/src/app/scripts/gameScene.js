

export class GameSceneBehaviour {

    onCreate(){
        let bgView = this.game.uiBuilder.build({
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
                        TextField: {
                            pos: {x:330,y:300},
                            fontName: 'cartahena_large',
                            name: '1',
                            text: 'Game will be here'
                        }
                    },
                ]
            }
        });
        this.scene.appendChild(bgView);
    }

    onUpdate(){

    }

    onDestroy(){

    }

}
