
var resource = require('providers/resource');
var projectDialog = require('./dialogs/projectDialog/projectDialog');
var editData = require('providers/editData');

module.exports = Vue.component('explorer', {
    props: [],
    template: require('./explorer.html'),
    created: function(){
        resource.getProjects(function(p){
            editData.projects = p;
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
        openProject: function(project){
            resource.loadProject(project.name);
        },
        deleteProject: function(proj){
            var self = this;
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    resource.deleteFolder('workspace/'+proj.name,function(){
                        resource.getProjects(function(list){
                            editData.projects = list;
                        })
                    });
                }
            );
        }
    }
});