import {BaseComponent} from "../../../../baseComponent";
import {getDefaultCodeScript} from "../../../../providers/codeTemplates";

declare const RF;


@RF.decorateComponent({
    name: 'app-scene-dialog',
    template: require('./sceneDialog.html')
})
export class SceneDialog extends BaseComponent {
    constructor(){
        super();
    }
    async createOrEditScene(s){

        let resp = await this.restResource.save(s);
        if (resp.created) {
            s.id = resp.id;
            this.editData.game.repository.addObject(s);
            let name = this.utils.capitalise(this.editData.currSceneInEdit.name);
            await this.restFileSystem.createFile(
                `scripts/${s.name}.ts`,
               getDefaultCodeScript(name))
        } else {
            s.updateCloner();
        }
        RF.getComponentById('sceneModal').close();
    }
}
