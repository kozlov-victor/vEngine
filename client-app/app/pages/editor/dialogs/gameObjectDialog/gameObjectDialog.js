
import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';
import utils from 'app/providers/utils';

import 'app/pages/editor/dialogs/frameAnimationDialog/frameAnimationDialog';
import 'app/pages/editor/dialogs/commonBehaviourDialog/commonBehaviourDialog';

import FrameAnimation from  'coreEngine/src/model/generic/frameAnimation';


export default RF.registerComponent('app-game-object-dialog', {
    template: {
        type: 'string',
        value: require('./gameObjectDialog.html')
    },
    form:{valid: ()=>{return true;}},
    editData,
    i18n: i18n.getAll(),
    utils,
    selectedBehaviourId: '',


    async createOrEditGameObject(g){
        let resp = await restResource.save(g);
        if (resp.created) {
            g.id = resp.id;
            editData.game._repository.addObject(g);
            let name = utils.capitalise(editData.currGameObjectInEdit.name);
            await restFileSystem.createFile(
                `scripts/${g.name}.js`,
                document.getElementById('defaultCodeScript').textContent.replace('${name}',name)
            );
        }
        else {
            g.updateCloner();
        }
        RF.getComponentById('gameObjectModal').close();
    },

    refreshGameObjectFramePreview(gameObjectProto,ind) {
        let spriteSheet = gameObjectProto.spriteSheet;
        if (!spriteSheet) return;
        let maxNumOfFrame = spriteSheet.numOfFramesH*spriteSheet.numOfFramesV-1;
        if (this.editData.currGameObjectInEdit.currFrameIndex>=maxNumOfFrame) {
            this.editData.currGameObjectInEdit.currFrameIndex = 0;
            ind = 0;
        }
        gameObjectProto.setFrameIndex(ind);
    },

    createFrameAnimation(){
        this.editData.currFrameAnimationInEdit = new FrameAnimation(editData.game);
        RF.getComponentById('frameAnimationDialog').open();
    },

    editFrameAnimation(fa){
        this.editData.currFrameAnimationInEdit = fa.clone();
        RF.getComponentById('frameAnimationDialog').open();
    },

    deleteFrameAnimation(fa){
        utils.deleteModel(fa,()=>{
            let go = this.editData.currGameObjectInEdit;
            go.frameAnimations.remove(it=>it.id==fa.id);
            go.updateCloner();
            editData.game._repository.updateObject(go);
            restResource.save(go);
        });
    },

    onSpriteSheetSelected(spriteSheet){
        let gameObjectProto = editData.currGameObjectInEdit;
        gameObjectProto.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
        gameObjectProto.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
        gameObjectProto.name = spriteSheet.name;
    },

    createCommonBehaviour(selectedBehaviour){
        if (editData.currGameObjectInEdit.commonBehaviour.find(it=>it.name==selectedBehaviour.name)) {
            alertEx(i18n.get('objectAlreadyAdded'));
            return;
        }
        selectedBehaviour.__originalId = selectedBehaviour.id;
        selectedBehaviour.id = null;
        this.editData.currCommonBehaviourInEdit = selectedBehaviour.clone();
        RF.getComponentById('commonBehaviourModal').open();
    },

    editCommonBehaviour(cb){
        this.editData.currCommonBehaviourInEdit = cb.clone();
        RF.getComponentById('commonBehaviourModal').open();
    },

    deleteCommonBehaviour(cb){
        utils.deleteModel(cb,()=>{
            let model = editData.currGameObjectInEdit;
            model.commonBehaviour.remove(it=>it.id==cb.id);
            model.updateCloner();
            editData.game._repository.updateObject(model);
            restResource.save(model);
        });
    },

    isCbItemDisabled(cb){
        return !!editData.currGameObjectInEdit.commonBehaviour.find(it=>it.name==cb.name)
    }
});