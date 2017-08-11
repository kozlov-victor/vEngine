
import http from 'app/providers/rest/httpClient';
import editData from 'app/providers/editData';
import i18n from 'app/providers/i18n';

//opts: debug minify engineOnly embedResources embedScript

let w;
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
                projectName: editData.projectName,
                //embedResources: 1,
                //embedScript: 1
            },
            ()=>{
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