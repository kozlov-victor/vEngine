
declare const RF;
import {BaseComponent} from '../../../../baseComponent'

@RF.decorateComponent({
    name: 'app-scene-cursor',
    template: require('./sceneCursor.html')
})
export class SceneCursor extends BaseComponent {

    constructor(){
        super();
    }

    onKeyUp(){
        this.editData.tileMapPosY-=1;
    }

    onKeyLeft(){
        this.editData.tileMapPosX-=1;
    }

    onKeyRight(){
        this.editData.tileMapPosX+=1;
    }

    onKeyDown(){
        this.editData.tileMapPosY+=1;
    }

}