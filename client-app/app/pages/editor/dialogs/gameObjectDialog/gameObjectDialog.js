/*global RF:true*/
/*global alertEx:true*/

import BaseComponent from 'app/baseComponent'

import FrameAnimation from  'coreEngine/src/model/generic/frameAnimation';

@RF.decorateComponent({
    name: 'app-game-object-dialog',
    template: require('./gameObjectDialog.html')
})
export default class gameObjectDialog extends BaseComponent {

    constructor(){
        super();
        this.selectedBehaviourId = '';
    }


    async createOrEditGameObject(g){
        let resp = await this.restResource.save(g);
        if (resp.created) {
            g.id = resp.id;
            this.editData.game.repository.addObject(g);
            let name = this.utils.capitalise(this.editData.currGameObjectInEdit.name);
            await this.restFileSystem.createFile(
                `scripts/${g.name}.js`,
                document.getElementById('defaultCodeScript').textContent.replace('${name}',name)
            );
        }
        else {
            g.updateCloner();
            this.editData.game.repository.updateObject(g);
        }
        RF.getComponentById('gameObjectModal').close();
    }

    onStartFrameAnimNameChanged(frName){
        let go = this.editData.currGameObjectInEdit;
        go.startFrameAnimationName = frName;
        let ops = {preserveNull:true};
        this.editData.game.repository.updateObject(go,opts);
        go.updateCloner(opts);
        this.restResource.save(go,null,{startFrameAnimationName:frName});
    }

    refreshGameObjectFramePreview(gameObjectProto,ind) {
        let spriteSheet = gameObjectProto.spriteSheet;
        if (!spriteSheet) return;
        let maxNumOfFrame = spriteSheet.numOfFramesH*spriteSheet.numOfFramesV;
        if (ind>maxNumOfFrame - 1) {
            this.editData.currGameObjectInEdit.currFrameIndex = 0;
            ind = 0;
        }
        gameObjectProto.setFrameIndex(ind);
    }

    createFrameAnimation(){
        this.editData.currFrameAnimationInEdit = new FrameAnimation(this.editData.game);
        RF.getComponentById('frameAnimationDialog').open();
    }

    editFrameAnimation(fa){
        this.editData.currFrameAnimationInEdit = fa.clone();
        RF.getComponentById('frameAnimationDialog').open();
    }

    deleteFrameAnimation(fa){
        this.utils.deleteModel(fa,()=>{
            let go = this.editData.currGameObjectInEdit;
            go.frameAnimations.remove(it=>it.id==fa.id);
            go.updateCloner();
            this.editData.game.repository.updateObject(go);
            this.restResource.save(go);
        });
    }

    onSpriteSheetSelected(spriteSheet){
        let gameObjectProto = this.editData.currGameObjectInEdit;
        gameObjectProto.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
        gameObjectProto.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
        gameObjectProto.name = spriteSheet.name;
    }

    createCommonBehaviour(selectedBehaviour){
        if (this.editData.currGameObjectInEdit.commonBehaviour.find(it=>it.name==selectedBehaviour.name)) {
            alertEx(this.i18n.get('objectAlreadyAdded'));
            return;
        }
        selectedBehaviour.__originalId = selectedBehaviour.id;
        selectedBehaviour.id = null;
        this.editData.currCommonBehaviourInEdit = selectedBehaviour.clone();
        RF.getComponentById('commonBehaviourModal').open();
    }

    editCommonBehaviour(cb){
        this.editData.currCommonBehaviourInEdit = cb.clone();
        RF.getComponentById('commonBehaviourModal').open();
    }

    deleteCommonBehaviour(cb){
        this.utils.deleteModel(cb,()=>{
            let model = this.editData.currGameObjectInEdit;
            model.commonBehaviour.remove(it=>it.id==cb.id);
            model.updateCloner();
            this.editData.game.repository.updateObject(model);
            this.restResource.save(model);
        });
    }

    isCbItemDisabled(cb){
        return !!this.editData.currGameObjectInEdit.commonBehaviour.find(it=>it.name==cb.name)
    }
}