

import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';
import utils from 'app/providers/utils';


export default RF.registerComponent('app-scene-dialog', {
    template: {
        type: 'string',
        value: require('./sceneDialog.html')
    },
    form:{valid: ()=>{return true;}},
    editData,
    i18n:i18n.getAll(),

    async createOrEditScene(s){

        let resp = await restResource.save(s);
        if (resp.created) {
            s.id = resp.id;
            editData.game._repository.addObject(s);
            let name = utils.capitalise(editData.currSceneInEdit.name);
            await restFileSystem.createFile(
                `scripts/${s.name}.js`,
                document.getElementById('defaultCodeScript').textContent.replace('${name}',name));
        } else {
            s.updateCloner();
        }
        RF.getComponentById('sceneModal').close();
    }
});
