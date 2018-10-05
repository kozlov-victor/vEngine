import {ColorizeFilter} from "@engine/core/renderer/webGl/filters/textureFilters/colorizeFilter";
import {Color} from "@engine/core/color";
import {Game} from "@engine/core/game";
import {GameObject} from "@engine/model/impl/gameObject";

class Board {

    game: Game;
    cards: GameObject[] = [];
    cardsInRow: number = 4;
    cardsInCol: number = 3;

    constructor(game: Game, cards: GameObject[]) {
        this.game = game;
        this.cards = cards;
        game.getCurrScene().findObject({id:'boardRect'}).width =
            cards[0].width*this.cardsInRow + ~~(cards[0].width/3);
        this.setUpDraggable();
    }


    onCardDrop(card) {

        if (card.pos.x>this.cardsInRow*card.width || card.pos.y>this.cardsInCol*card.height) {
            (card as any).seted = false;
            return;
        }

        let isSet = (card as any).seted;
        let w = ~~(card.width / 3);
        let h = ~~(card.height / 3);
        let minX = (~~(card.pos.x / w)) * w;
        let minY = (~~(card.pos.y / h)) * h;
        let maxX = minX+w;
        let maxY = minY+h;
        let distToMinX = Math.abs((card.pos.x - minX));
        let distToMinY = Math.abs((card.pos.y - minY));
        let distToMaxX = Math.abs((card.pos.x - maxX));
        let distToMaxY = Math.abs((card.pos.y - maxY));
        if (distToMinX<distToMaxX) card.pos.setX(minX);
        else card.pos.setX(maxX);
        if (distToMinY<distToMaxY) card.pos.setY(minY);
        else card.pos.setY(maxY);
        (card as any).seted = true;

        if (!isSet) {
            this.cards.forEach((it: GameObject, i: number) => {
                if ((it as any).seted ) return;
                if (Math.random()>0.5) {
                    it.scale.y *= -1;
                } else {
                    it.scale.x *= -1;
                }
            });
        }

    }


    setUpDraggable() {
        this.cards.forEach((it: GameObject, i: number) => {
            it.setFrameIndex(i);
            //if (i%2==0) it.scale.x=-1;
            it.revalidate();
            let selectedColor = new Color(20, 50, 0, 50);
            let defaultColor = new Color(0, 0, 0, 0);
            it.filters.push(new ColorizeFilter(this.game.renderer['gl']));
            it.on('dragStart', () => {
                it.moveToFront();
                (it.filters[0] as ColorizeFilter).setColor(selectedColor);
            });
            it.on('dragStop', () => {
                it.moveToFront();
                (it.filters[0] as ColorizeFilter).setColor(defaultColor);
                this.onCardDrop(it);
            });

            it.on('doubleClick', () => {
                let angleTo = it.angle + Math.PI / 2;
                it.tween({ease: 'easeInQuint',target: it, time: 500, to: {angle: angleTo}});
            });
        });
    }

}

export class SetFieldSceneBehaviour {

    game: any;
    scene: any;

    onCreate() {

        let bgView = this.game.uiBuilder.build({
            AbsoluteLayout: {
                pos: {x: 0, y: 0},
                width: this.game.width,
                height: this.game.height,
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
                            id: 'boardRect',
                            pos: {x: 0, y: 0},
                            width: 900,
                            height: 600,
                            fillColor: {r: 10, g: 10, b: 10, a: 20}
                        }
                    }
                ]
            }
        });
        this.scene.findLayer({name:'bg'}).prependChild(bgView);

        let cards: GameObject[] = this.scene.findLayer({name:'main'}).children.filter(it => it.name == 'boardCard');
        new Board(this.game, cards);
    }

    onUpdate() {

    }

    onDestroy() {

    }

}
