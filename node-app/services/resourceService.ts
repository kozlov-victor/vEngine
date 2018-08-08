
import fs from '../base/fs';
import {dataSourceHelper} from './dataSourceHelper';

class ResourceService {

    async getCommonBehaviourAttrs(projectName) {
        if (!projectName) throw 'project name is not specified';
        return await dataSourceHelper.loadModel('client-app/engine/commonBehaviour/impl/desc/desc.json');
    }

    saveTile(projectName,model){
        // todo stub
    }

}

export const resourceService:ResourceService = new ResourceService();

