import BaseComponent from "../../../../baseComponent";

declare const RF;


@RF.decorateComponent({
    name: 'app-project-dialog',
    template: require('./projectDialog.html')
})
export default class ProjectDialog extends BaseComponent {

    constructor(){
        super();
    }

    async createOrEditProject(proj){
        if (proj.oldName) {
            await this.restFileSystem.renameFolder(
                'workspace/'+proj.oldName,
                'workspace/'+proj.name);
            await this.restProject.getAll(list=>{
                    this.editData.projects = list;
                }
            );
        } else  {
            await this.restProject.create(proj.name);
            this.editData.projects = await this.restProject.getAll();
        }
        RF.getComponentById('projectDialog').close();
    }

}
