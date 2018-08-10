

export class IntroSceneBehaviour {

    onCreate(){
        let widget = this.game.uiBuilder.build({
            Button: {
                pos: {x:12,y:30},
                font: {type:'Font',name:'scriptFont'},
                text: "Продолжить",
                paddings: 50,
                background: {
                    type: 'NinePatchImage',
                    resourceMap: {main:'resources/button.png'},
                    ABCD: 20
                },
                onClick: ()=>{
                    console.log('clicked',widget);
                }
            }
        });
        this.scene.appendChild(widget);
    }

    onUpdate(){

    }

    onDestroy(){

    }

}
