
import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';
import utils from 'app/providers/utils';

import 'app/pages/editor/dialogs/frameAnimationDialog/frameAnimationDialog';
import 'app/pages/editor/dialogs/commonBehaviourDialog/commonBehaviourDialog';

import FrameAnimation from  'coreEngine/src/model/generic/frameAnimation';
import repository from 'coreEngine/src/engine/repository';


export default RF.registerComponent('app-game-object-dialog', {
    template: {
        type: 'string',
        value: require('./gameObjectDialog.html')
    },
    form:{valid: ()=>{return true;}},
    editData,
    repository,
    i18n: i18n.getAll(),
    utils,
    selectedBehaviourId: '',


    async createOrEditGameObject(g){
        let resp = await restResource.save(g);
        if (resp.created) {
            g.id = resp.id;
            repository.addObject(g);
            await restFileSystem.createFile(
                `script/${g.name}.js`,
                document.getElementById('defaultCodeScript').textContent
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
        this.editData.currFrameAnimationInEdit = new FrameAnimation();
        RF.getComponentById('frameAnimationDialog').open();
    },

    editFrameAnimation(fa){
        this.editData.currFrameAnimationInEdit = fa.clone();
        RF.getComponentById('frameAnimationDialog').open();
    },

    async deleteFrameAnimation(fa){
        await utils.deleteModel(fa);
        this.editData.currGameObjectInEdit.frameAnimations.remove(it=>it.id==fa.id);
        this.editData.currGameObjectInEdit.updateCloner();
        restResource.save(this.editData.currGameObjectInEdit);
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

    async deleteCommonBehaviour(cb){
        let model = editData.currGameObjectInEdit;
        model.commonBehaviour.remove(it=>it.id==cb.id);
        await restResource.save(model);
        model.updateCloner();
    },

    isCbItemDisabled(cb){
        return !!editData.currGameObjectInEdit.commonBehaviour.find(it=>it.name==cb.name)
    }
});