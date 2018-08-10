

export class IntroSceneBehaviour {

    onCreate(){
        let widget = this.game.uiBuilder.build({
            AbsoluteLayout: {
                properties: {
                    pos: {x:0,y:0},
                    width:this.game.width,
                    height:this.game.height,
                    layoutWidth: 0,
                    layoutHeight: 0,
                    background: {
                        type: 'Image', // NinePatchImage
                        resourceMap: {main:'resources/button.png'},
                        //ABCD: 20
                    },
                    on: ['click',()=>{console.log('clicked on layout');}]
                },
                children: [
                    {
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
                            on: ['click',()=>{console.log('clicked on btn');}]
                        }
                    }
                ]
            }
        });
        this.scene.appendChild(widget);
        window.w = widget;
    }

    onUpdate(){

    }

    onDestroy(){

    }

}
