import BaseComponent from "../../../../baseComponent";

declare const RF;


@RF.decorateComponent({
    name: 'app-game-object-right-panel',
    template: require('./gameObjectRightPanel.html')
})
export default class GameObjectRightPanel extends BaseComponent {

    constructor(){
        super();
    }

    editGameObject(){
        let model = this.editData.currSceneGameObjectInEdit;
        model.updateCloner();
        this.editData.game.repository.updateObject(model);
        this.restResource.save(model);
    }

    setTextFieldText(e){
        this.editData.currSceneGameObjectInEdit.setText(e.target.value);
    }
}