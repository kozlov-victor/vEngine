import BaseComponent from "../../../../baseComponent";
import Sound from "../../../../../engine/model/generic/sound";

declare const RF;

@RF.decorateComponent({
    name: 'app-sounds',
    template: require('./sounds.html')
})
export default class Sounds extends BaseComponent {

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
    deleteSound(model){
        this.utils.deleteModel(model,()=>{
            this.restFileSystem.removeFile(model.resourcePath);
        });
    }
}