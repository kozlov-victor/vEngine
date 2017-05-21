
let w;
import http from 'providers/http';
import editData from 'providers/editData';
import i18n from 'providers/i18n';

let generateBuildUrl = function(opts) {
    let url = '/generate?r='+Math.random();
    Object.
        keys(opts).
        forEach(function(key){
            if (opts[key]) url+='&'+key+'=1';
        });
    url+='&projectName='+editData.projectName;
    return url;
};

export default RF.registerComponent('app-top-panel', {
    template: {
        value: require('./topPanel.html'),
        type: 'string'
    },
    editData,
    i18n: i18n.getAll(),
    run:function(){
        http.get(
            '/resource/generate',
            {
                debug: 1,
                r: Math.random(),
                projectName: editData.projectName
            },
            function(){
                if (!w || w.closed) {
                    //w = window.open(
                    //    '/'+editData.projectName+'/out',
                    //    editData.projectName,
                    //    'width='+editData.gameProps.width+',height='+editData.gameProps.height+',toolbar=0'
                    //);
                    w = window.open('/'+editData.projectName+'/out');
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
        RF.Router.navigateTo('explorer');
    }
});