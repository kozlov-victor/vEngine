
import {ColorizeFilter} from '@engine/core/renderer/webGl/filters/textureFilters/colorizeFilter'
import {Color} from '@engine/core/color'
import {Rectangle} from '@engine/model/impl/ui/drawable/rectangle'


class Board {

    game:any;
    cards:any;

    cells = [];
    cardsCnt = 0;
    cellsX = 4;
    cellsY = 3;
    lightUpColor = 30;

    constructor(game,cards){
        this.game = game;
        this.cards = cards;
        this.setUpDraggable();

        for (let j=0;j<this.cellsY;j++) {
            this.cells[j] = [];
            for (let i=0;i<this.cellsX;i++) {
                let cell:any = {} as any;
                let r = new Rectangle(this.game);
                r.fillColor = new Color(3,100,12,0);
                r.width = 200;
                r.height = 200;
                r.pos.x = i*200;
                r.pos.y = j*200;
                cell.rectangle = r;
                cell.available = false;
                cell.card = null;
                this.game.getCurrScene().getLayerByName('bg').children[0].children[0].appendChild(r);
                this.cells[j][i] = cell;
            }
        }
    }

    lightUpAvailablePlaces(){
        this.lightDown();
        if (this.cardsCnt==0) {
            this.cells[1][0].rectangle.fillColor.setA(this.lightUpColor);
            this.cells[1][0].available = true;
        } else {
            console.log(this.cardsCnt);
        }
    }

    lightDown(){
        for (let j=0;j<this.cellsY;j++) {
            for (let i = 0; i < this.cellsX; i++) {
                this.cells[j][i].rectangle.fillColor.setA(0);
                this.cells[j][i].available = false;
            }
        }
    }


    onCardDrop(card){
        let cellOver = null;
        let x = card.pos.x + card.width / 2;
        let y = card.pos.y + card.height / 2;
        for (let j=0;j<3;j++) {
            for (let i = 0; i < 4; i++) {
                let cell = this.cells[j][i];
                if (
                    x>=cell.rectangle.pos.x &&
                    x<=(cell.rectangle.pos.x + cell.rectangle.width) &&
                    y>=cell.rectangle.pos.y &&
                    y<=(cell.rectangle.pos.y + cell.rectangle.height) &&
                    cell.available
                ){
                    cellOver = cell;
                    break;
                }
            }
            if (cellOver) break;
        }
        if (cellOver) {
            card.pos.x = cellOver.rectangle.pos.x;
            card.pos.y = cellOver.rectangle.pos.y;
            cellOver.card = card;
        }
    }


    setUpDraggable(){
        this.cards.forEach((it,i)=>{
            it.setFrameIndex(i);
            it.revalidate();
            let selectedColor = new Color(20,255,0,50);
            let defaultColor = new Color(0,255,0,0);
            it.filters.push(new ColorizeFilter(this.game.renderer.gl));
            it.on('dragStart',()=>{
                it.moveToFront();
                it.scale.setXY(1.2,1.2);
                it.filters[0].setColor(selectedColor);
                this.lightUpAvailablePlaces();
            });
            it.on('dragStop',()=>{
                it.moveToFront();
                it.scale.setXY(1,1);
                it.filters[0].setColor(defaultColor);
                this.onCardDrop(it);
                this.lightDown();
            });
        });
    }

}

export class SetFieldSceneBehaviour {

    game:any;
    scene:any;

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
                            pos: {x:0,y:0},
                            width: 800,
                            height: 600,
                            fillColor: {r:10,g:10,b:10,a:20}
                        }
                    }
                ]
            }
        });
        this.scene.getLayerByName('bg').prependChild(bgView);
        
        let cards = this.scene.getLayerByName('main').children.filter(it=>it.name=='boardCard');
        new Board(this.game,cards);
    }

    onUpdate(){

    }

    onDestroy(){

    }

}
