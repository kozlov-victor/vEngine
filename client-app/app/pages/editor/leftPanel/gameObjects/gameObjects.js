/*global RF:true*/
/*global alertEx:true*/

import BaseComponent from 'app/baseComponent'

import GameObjectProto from 'coreEngine/src/model/generic/gameObjectProto';

@RF.decorateComponent({
    name: 'app-game-objects',
    template: require('./gameObjects.html')
})
export default class GameObject extends BaseComponent {
    constructor(){
        super();
    }
    createGameObject(){
        this.editData.currGameObjectInEdit = new GameObjectProto(this.editData.game);
        RF.getComponentById('gameObjectModal').open();
    }
    editGameObjectScript(model){
        this.utils.openEditor(`scripts/${model.name}.js`);
    }
    editGameObject(go){
        this.editData.currGameObjectInEdit =  go.clone();
        RF.getComponentById('gameObjectModal').open();
    }
    deleteGameObject(model){
        let scenesUsed = [];
        this.editData.game.repository.getArray('Scene').forEach(s=>{
            s.layers.forEach(l=>{
                l.gameObjects.forEach(go=>{
                    if (go.name==model.name) {
                        if (scenesUsed.indexOf(s)==-1) scenesUsed.push(s);
                    }
                });
            });

        });
        if (scenesUsed.length)
            return alertEx(this.i18n.get('canNotDelete')(model,scenesUsed));
        this.utils.deleteModel(model,()=>{
            this.restFileSystem.removeFile(`scripts/${model.name}.js`);
        });
    }
}
