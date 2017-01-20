
var w;
var http = require('providers/http');
var editData = require('providers/editData');

var generateBuildUrl = function(opts) {
    var url = '/generate?r='+Math.random();
    Object.
        keys(opts).
        forEach(function(key){
            if (opts[key]) url+='&'+key+'=1';
        });
    url+='&projectName='+editData.projectName;
    return url;
};

module.exports = Vue.component('app-top-panel', {
    props: [],
    template: require('./topPanel.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {

    },
    methods: {
        run:function(){
            http.get(
                '/generate',
                {
                    debug: 1,
                    r: Math.random(),
                    projectName: editData.projectName
                },
                function(){
                    if (!w || w.closed) {
                        w = window.open(
                            '/'+editData.projectName+'/out',
                            editData.projectName,
                            'width='+editData.gameProps.width+',height='+editData.gameProps.height+',toolbar=0'
                        );
                    }
                    else {
                        w.location.reload();
                    }
                    w && w.focus();
                }
            );
        },
        showBuildDialog: function() {
            //uiHelper.showDialog('buildDialog');
        },
        toExplorer: function(){
            location.hash = '#/explorer';
        }
    }
});