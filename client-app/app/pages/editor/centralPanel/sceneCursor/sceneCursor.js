
/*global RF:true*/
import BaseComponent from 'app/baseComponent'

@RF.decorateComponent({
    name: 'app-scene-cursor',
    template: require('./sceneCursor.html')
})
export default class SceneCursor extends BaseComponent {

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