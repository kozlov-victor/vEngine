import {Post,Get,Multipart,View} from "../../decorators/decorators";
import fs from '../../base/fs';

import {projectService} from '../../services/projectService';

export class ProjectController {

    @Get()
    async getAll(params){
        let list:Array<any> = await fs.getDirList('./workspace') as Array<any>;
        return list.map(it=>({name:it}));
    }

    @Post()
    async create(params){
        return await projectService.createProject(params.projectName)
    }

    @Post()
    async exist(params){
        return await projectService.exist(params.projectName)
    }
}