

import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';
import utils from 'app/providers/utils';

import Scene from  'coreEngine/src/model/generic/scene';

export default RF.registerComponent('app-scene-dialog', {
    template: {
        type: 'string',
        value: require('./sceneDialog.html')
    },
    form:{valid: ()=>{return true;}},
    editData,
    i18n:i18n.getAll(),

    createOrEditScene: function(s){
        restResource.
        save(s).
        then(resp=>{
            if (resp.created) {
                s.id = resp.id;
                editData.sceneList.add(s);
                return resp;
            } else if (resp.updated) {
                s.updateCloner();
            }
        }).
        then((resp)=>{
            if (resp && resp.created) return restFileSystem.createFile(
                `script/scene/${s.name}.js`,
                document.getElementById('defaultCodeScript').textContent);
        }).
        then(()=>{
            RF.getComponentById('sceneModal').close();
            RF.digest();
        }).
        catch(window.catchPromise);
    }
});
