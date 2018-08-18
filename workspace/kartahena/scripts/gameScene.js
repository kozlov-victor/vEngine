

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
                            fontName: 'scriptFont',
                            name: '1',
                            text: 'Здесь будет игра'
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
