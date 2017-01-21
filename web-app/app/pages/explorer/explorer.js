
var resource = require('providers/resource');
var projectDialog = require('./dialogs/projectDialog/projectDialog');

module.exports = Vue.component('explorer', {
    props: [],
    template: require('./explorer.html'),
    created: function(){
        var self = this;
        resource.getProjects(function(p){
            self.projects = p;
        });
    },
    data: function () {
        return {
            editData: require('providers/editData'),
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
            this.editData.currProjectInEdit = p;
            projectDialog.instance.open();
        }
    }
});