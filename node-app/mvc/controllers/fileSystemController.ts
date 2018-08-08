import {Post,Get,Multipart} from "../../decorators/decorators";
import fs from '../../base/fs';

export class FileSystemController{

    @Post()
    async renameFolder(params){
        await fs.rename(params.oldName,params.newName);
        return {success:true};
    }

    @Post()
    async deleteFolder(params){
        await fs.deleteFolder(params.name);
        return {success:true};
    }

    @Post()
    async createFile(params){
        if (!params.projectName) throw 'project name not specified';
        await fs.writeFile(`workspace/${params.projectName}/${params.path}`,params.content);
        return {};
    }

    @Post()
    async removeFile(params){
        if (!params.projectName) throw 'project name not specified';
        await fs.deleteFile(`workspace/${params.projectName}/${params.path}`);
        return {success:true};
    }

    @Multipart()
    async uploadFile(params){
        await fs.writeFile(
            `workspace/${params.projectName}/${params.path}`,
            params.file,
            true
        );
        return {success:true}
    }

    @Post()
    async readFile(params){
        if (!params.projectName) throw 'project name not specified';
        return await fs.readFile(`workspace/${params.projectName}/${params.path}`);
    }
}