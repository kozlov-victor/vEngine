

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');

module.exports.component = Vue.component('app-project-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./projectDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {
        createOrEditProject: function(proj){
            if (proj.oldName) {
                resource.renameFolder(
                    'workspace/'+proj.oldName,
                    'workspace/'+proj.name,
                    function(){
                        resource.getProjects(function(list){
                                editData.projects = list;
                            }
                        );
                    });
            } else  {
                resource.createProject(proj.name,function(){
                    resource.getProjects(function(list){
                        editData.projects = list;
                    });
                });
            }
            this.close();
        }
    }
});
