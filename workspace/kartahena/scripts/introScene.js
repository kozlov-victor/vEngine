

export class IntroSceneBehaviour {

    onCreate(){
        let widget = this.game.uiBuilder.build({
            Button: {
                pos: {x:12,y:30},
                font: {type:'Font',name:'scriptFont'},
                text: "123",
                paddings: 50,
                background: {
                    type: 'NinePatchImage',
                    resourceMap: {main:'resources/button.png'},
                    ABCD: 45
                },
                // onClick: ()=>{
                //     console.log('clicked',this);
                // }
            }
        });
        this.scene.appendChild(widget);
        console.log(widget);
    }

    onUpdate(){

    }

    onDestroy(){

    }

}
