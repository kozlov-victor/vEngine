import {Post,Get,Multipart,View} from "../../decorators/decorators";
import fs from '../../base/fs';


export class IndexController{

    @Get()
    @View()
    async index(){

    }

    @Get()
    @View()
    editor(){

    }
}

