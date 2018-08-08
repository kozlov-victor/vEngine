
import {BaseComponent} from "../../baseComponent";

declare const RF;

import './explorer.scss'
import {confirmEx} from "../../providers/userDefinedFns";

@RF.decorateComponent({
    name: 'explorer',
    template: require('./explorer.html')
})
export class Explorer extends BaseComponent {

    constructor(){
        super();

    }

    onShow(){

    }

    async onMount(){
        this.editData.projects = await this.restProject.getAll();
    }

    editProject(p){
        p.oldName = p.name;
        this.editData.currProjectInEdit = {
            name: p.name,
            oldName: p.name
        };
        RF.getComponentById('projectDialog').open();
    }

    createProject(){
        this.editData.currProjectInEdit = {
            name: ''
        };
        RF.getComponentById('projectDialog').open();
    }

    async openProject(project){
        await this.resourceHelper.loadProject(project.name);
    }

    async deleteProject(proj){
        let res = await confirmEx(this.i18n.get('confirmQuestion')(proj));
        if (res) {
            await this.restFileSystem.deleteFolder('workspace/'+proj.name);
            this.editData.projects = await this.restProject.getAll();
        }
    }

}