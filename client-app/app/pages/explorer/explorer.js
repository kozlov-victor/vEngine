
/*global RF:true*/

import BaseComponent from 'app/baseComponent'
import './explorer.less'
import restProject from 'app/providers/rest/project'

@RF.decorateComponent({
    name: 'explorer',
    template: require('./explorer.html')
})
export default class Explorer extends BaseComponent {

    constructor(){
        super();
        this.restProject = restProject;
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

    openProject(project){
        this.resourceHelper.loadProject(project.name);
    }

    deleteProject(proj){
        window.confirmEx(
            this.i18n.get('confirmQuestion')(proj),
            async ()=>{
                await this.restFileSystem.deleteFolder('workspace/'+proj.name);
                this.editData.projects = await this.restProject.getAll();
            }
        );
    }

}