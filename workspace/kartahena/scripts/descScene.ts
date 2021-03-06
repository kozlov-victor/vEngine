
import {Container, LAYOUT_SIZE} from "@engine/model/impl/ui/generic/container";
const str =
`Подготовка к игре
Соберите подземный ход из шести участков поля, участки можно класть любой стороной и в любом порядке - существуют тысячи возможных комбинаций. В любом случае у вас должен получиться единый подземный ход с 36 делениями-символами. Каждый игрок получает 6 фишек пиратов одного цвета. Ненужные фишки уберите в коробку. Игроки ставят всех своих пиратов с одного конца подземного хода, а у другого швартуется шлюпка. Отложите карту со стрелкой. Если играете в «Тортугу», она понадобится чуть позже, а для «Ямайки» совсем не пригодится. Перетасуйте колоду и сдайте каждому игроку по 6 карт.
Если вы ещё не решили, по какому варианту правил играть, самое время сделать это.
"Ямайка" - карты скрыты, победа в большей степени зависит от везения. Игроки держат свои карты на руке, не показывая соперникам. Колода лежит рядом с полем также взакрытую; в ходе партии игроки берут карты из колоды.
"Тортуга" - карты раскрыты, победа в большей степени зависит от расчёта. Игроки держат свои карты в открытую, на столе перед собой. Раздав карты игрокам, выложите из колоды посередине стола ряд из 12 открытых карт. Карту со стрелкой положите горизонтально рядом с открытыми картами (так, чтобы она указывала вправо или влево). В ходе партии игроки берут карты из этого ряда в порядке, указанном стрелкой. Когда карты в ряду закончатся, выложите 12 новых карт из колоды.`;

export class DescSceneBehaviour {

    game:any;
    scene:any;

    onCreate(){
        let self = this;
        let bgView = this.game.uiBuilder.build({
            AbsoluteLayout: {
                pos: {x:0,y:0},
                width:this.game.width,
                height:this.game.height,
                layoutWidth: LAYOUT_SIZE.WRAP_CONTENT,
                layoutHeight: LAYOUT_SIZE.WRAP_CONTENT,
                background: {
                    Image: {
                        id: 'bgImage',
                        src: 'resources/bg.jpg'
                    }
                },
                children: [
                    {
                        TextField: {
                            maxWidth: 970,
                            maxHeight: 480,
                            pos: {x:10,y:10},
                            fontName: 'scriptFont',
                            text: str,
                            textAlign: 'CENTER',
                            border: {
                                Border:{}
                            }
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
                                    src: 'resources/button.png',
                                    ABCD: 20
                                }
                            },
                            on: ['click',()=>{
                                self.toNextScene();
                            }]
                        }
                    }
                ]
            }
        });
        this.scene.appendChild(bgView);
    }

    toNextScene(){
        let scene = this.game.repository.getArray('Scene').find(it=>it.name=='setFieldScene');
        this.game.runScene(scene);
    }

    onUpdate(){

    }

    onDestroy(){

    }

}
