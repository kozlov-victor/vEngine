

const projectDialog = require('./dialogs/projectDialog/projectDialog');
const editData = require('providers/editData');
const restProject = require('providers/rest/project');
const resource = require('providers/resource');
const fileSystem = require('providers/rest/fileSystem');

module.exports = Vue.component('explorer', {
    props: [],
    template: require('./explorer.html'),
    created: function(){
        restProject.
            getAll(function(list){
                editData.projects = list;
            });
    },
    data: function () {
        return {
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            projects: []
        }
    },
    components: {
        appProjectDialog: require('./dialogs/projectDialog/projectDialog')
    },
    methods: {
        editProject: function(p){
            p.oldName = p.name;
            this.editData.currProjectInEdit = {
                name: p.name,
                oldName: p.name
            };
            projectDialog.instance.open();
        },
        createProject: function(){
            this.editData.currProjectInEdit = {
                name: ''
            };
            projectDialog.instance.open();
        },
        openProject: function(project){
            resource.loadProject(project.name);
        },
        deleteProject: function(proj){
            let self = this;
            proj.type = 'project';
            window.confirmEx(
                this.i18n.confirmQuestion(proj),
                function(){
                    fileSystem.deleteFolder('workspace/'+proj.name,function(){
                        restProject.getAll(function(list){
                            editData.projects = list;
                        })
                    });
                }
            );
        }
    }
});