
import {ColorizeFilter} from '../../../../../../client-app/engine/core/renderer/webGl/filters/textureFilters/colorizeFilter'
import {Color} from '../../../../../../client-app/engine/core/color'
import {Rectangle} from '../../../../../../client-app/engine/model/impl/ui/drawable/rectangle'

class Board {
    constructor(game,cards){
        this.game = game;
        this.cards = cards;
        this.setUp();
        this.cells = [];
        for (let j=0;j<2;j++) {
            this.cells[j] = [];
            for (let i=0;i<2;i++) {
                let cell = {};
                let r = new Rectangle(this.game);
                r.fillColor = new Color(0,0,100,100);
                r.width = 200;
                r.height = 200;
                r.pos.x = i*200;
                r.pos.y = j*200;
                cell.rectangle = r;
                this.game.getCurrScene().getLayerByName('bg').children[0].children[0].appendChild(r);
                this.cells[j][i] = cell;
            }
        }
        console.log(this.cells);
    }

    setUp(){
        this.cards.forEach((it,i)=>{
            it.setFrameIndex(i);
            it.revalidate();
            let selectedColor = new Color();
            selectedColor.setRGBA(20,255,0,50);
            let defaultColor = new Color();
            defaultColor.setRGBA(0,255,0,0);
            it.filters.push(new ColorizeFilter(this.game.renderer.gl));
            it.on('dragStart',()=>{
                it.moveToFront();
                it.scale.setXY(1.2,1.2);
                it.filters[0].setColor(selectedColor);
            });
            it.on('dragStop',()=>{
                it.moveToFront();
                it.scale.setXY(1,1);
                it.filters[0].setColor(defaultColor);
            });
        });
    }

}

export class SetFieldSceneBehaviour {

    onCreate(){
    
        let self = this;
        let bgView = this.game.uiBuilder.build({
            AbsoluteLayout: {
                pos: {x:0,y:0},
                width:this.game.width,
                height:this.game.height,
                layoutWidth: 0,
                layoutHeight: 0,
                background: {
                    Image: {
                        src: 'resources/bg.jpg'
                    }
                },

                children: [
                    {
                        Rectangle: {
                            pos: {x:20,y:0},
                            width: 800,
                            height: 600,
                            fillColor: {r:10,g:10,b:10,a:20},

                            children: [
                                // {
                                //     Rectangle: {
                                //         pos: {x:20,y:20},
                                //         width: 100,
                                //         height: 100,
                                //         fillColor: {r:255,g:10,b:10,a:255}
                                //     },
                                // },
                                {
                                    Rectangle: {
                                        pos: {x:40,y:40},
                                        width: 100,
                                        height: 100,
                                        fillColor: {r:255,g:255,b:255,a:255},
                                        children: [
                                            {
                                                Rectangle: {
                                                    pos: {x:20,y:20},
                                                    width: 15,
                                                    height: 15,
                                                    fillColor: {r:255,g:0,b:0,a:255},
                                                }
                                            }
                                        ]
                                    }
                                }
                            ],

                        }
                    }
                ]
            }
        });
        window.v = bgView;
        this.scene.getLayerByName('bg').prependChild(bgView);
        
        let cards = this.scene.getLayerByName('main').children.filter(it=>it.name=='boardCard');
        //new Board(this.game,cards);
    }

    onUpdate(){

    }

    onDestroy(){

    }

}
