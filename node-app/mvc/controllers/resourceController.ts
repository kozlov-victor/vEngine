
import {Post,Get,Multipart,View} from "../../decorators/decorators";
import fs from '../../base/fs';

import {resourceService} from '../../services/resourceService';
import {generatorService} from '../../services/generatorService';
import {dataSourceHelper} from '../../services/dataSourceHelper';
import {wsService} from "../../services/ws/wsService";


export class ResourceController {


    @Post()
    async getAll(params){
        let result:any = {};
        let repository:string = await fs.readFile(`workspace/${params.projectName}/repository.json`) as string;
        let gameProps:string = await fs.readFile(`workspace/${params.projectName}/gameProps.json`) as string;
        result.repository = JSON.parse(repository);
        result.gameProps = JSON.parse(gameProps);
        result.commonBehaviourProtos = await resourceService.getCommonBehaviourAttrs(params.projectName);
        result.customScripts = (await fs.readDir(`workspace/${params.projectName}/scripts/custom/`)).map(it=>it.name);
        return result;
    }

    @Post()
    async save(params) {
        let repository = await dataSourceHelper.loadModel(`workspace/${params.projectName}/repository.json`);
        let model = params.model;
        if (!repository[model.type]) repository[model.type] = [];
        let createdId;
        if (!model.id) {
            createdId = await dataSourceHelper.uuid(params.projectName);
            model.id = createdId;
            repository[model.type].push(model);
        } else {
            let objectToUpdateIndex = repository[model.type].findIndex(it => it.id == model.id);
            if (objectToUpdateIndex == -1)
                throw `can not find object with type ${model.type} and id ${model.id}`;
            repository[model.type][objectToUpdateIndex] = model;
        }
        Object.keys(repository).forEach(key=>{
            if (repository[key].splice && !repository[key].length)
                delete repository[key];
        });
        await dataSourceHelper.saveModel(`workspace/${params.projectName}/repository.json`,repository);
        if (createdId) return {created: true, id: createdId};
        return {updated: true};
    }

    @Post()
    async saveGameProps(params){
        let path = `workspace/${params.projectName}/gameProps.json`;
        let model = await dataSourceHelper.loadModel(path);
        Object.keys(params.model).forEach(function(key){
            model[key]=params.model[key];
        });
        await dataSourceHelper.saveModel(path,model);
    }

    @Post()
    async remove(params){
        let repository = await dataSourceHelper.loadModel(`workspace/${params.projectName}/repository.json`);
        let model = params.model;
        let objectToRemoveIndex = repository[model.type].findIndex(it => it.id == model.id);
        if (objectToRemoveIndex == -1)
            throw `can not find object with type ${model.type} and id ${model.id}`;
        repository[model.type].splice(objectToRemoveIndex,1);
        await dataSourceHelper.saveModel(`workspace/${params.projectName}/repository.json`,repository);
    }

    @Get()
    async generate(params,response){
        await generatorService.generate(params,response);
    }

    @Post()
    saveTile(params,callback){
       return resourceService.saveTile(params.projectName,params.model);
    }



}

