
import fs from '../base/fs';
import {dataSourceHelper} from './dataSourceHelper';
import {getDefaultCodeScript, getLibCodeScript} from "../../client-app/app/providers/codeTemplates";
import {SCALE_STRATEGY} from "../../client-app/engine/core/misc/consts";

class ProjectService {

    async createProject(projectName) {
        let mainSceneName = 'mainScene';
        let mainSceneId = 1;
        let mainLayerId = ++mainSceneId;
        let initialRepoStructure = {
            Scene: [
                {
                    id: mainSceneId,
                    name: mainSceneName,
                    type: 'Scene',
                    layers: [
                        {
                            type: 'Layer',
                            id: mainLayerId
                        }
                    ],
                }
            ],
            Layer: [
                {
                    id: mainLayerId,
                    name: 'layer1',
                    type: 'Layer'
                }
            ]
        };

        await fs.createFolder(`workspace/${projectName}/resources`);
        await fs.createFolder(`workspace/${projectName}/scripts/custom`);
        await fs.createFile(`workspace/${projectName}/scripts/custom/appLib.js`,getLibCodeScript('AppLib'));
        let mainSceneScript:string = getDefaultCodeScript(mainSceneName[0].toUpperCase()+mainSceneName.substr(1));
        await fs.createFile(`workspace/${projectName}/scripts/${mainSceneName}.js`,mainSceneScript);

        dataSourceHelper.saveModel(`workspace/${projectName}/repository.json`,initialRepoStructure);
        dataSourceHelper.saveModel(
            `workspace/${projectName}/gameProps.json`,
            {
                width           :         800,
                height          :         600,
                scaleStrategy   :         SCALE_STRATEGY.FIT,
                startSceneId    :         mainSceneId,
                gravityConstant :         0
            }
        );
        dataSourceHelper.saveModel(`workspace/${projectName}/meta.json`,{idSeq:mainLayerId});

        return {};
    }

    async exist(projectName){
        return await fs.exists(`workspace/${projectName}`);
    }
}

export const projectService:ProjectService = new ProjectService();

