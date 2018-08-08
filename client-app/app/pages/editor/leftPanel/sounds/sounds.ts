import {BaseComponent} from "../../../../baseComponent";
import {Sound} from "../../../../../engine/model/impl/sound";

declare const RF;

@RF.decorateComponent({
    name: 'app-sounds',
    template: require('./sounds.html')
})
export class Sounds extends BaseComponent {

    constructor(){
        super();
    }
    createSound(){
        this.editData.currSoundInEdit = new Sound(this.editData.game);
        RF.getComponentById('soundDialog').open();
    }
    editSound(sound){
        this.editData.currSoundInEdit = sound.clone();
        RF.getComponentById('soundDialog').open();
    }
    async deleteSound(model){
        let res = await this.utils.deleteModel(model);
        if (!res) return;
        this.restFileSystem.removeFile(model.resourcePath);
    }
}