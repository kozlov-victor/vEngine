
import {Utils as utils} from './providers/utils'
import {editData} from './providers/editData'
import {RestProject as restProject} from './providers/rest/restProject'
import {RestFileSystem as restFileSystem} from './providers/rest/restFileSystem'
import {RestResource as restResource} from './providers/rest/restResource'
import {ResourceHelper as resourceHelper} from './providers/resourceHelper'
import {I18n as i18n} from './providers/i18n'
import {httpClient as http} from './providers/rest/httpClient'

export class BaseComponent {

    editData;
    restProject;
    restFileSystem;
    resourceHelper;
    restResource;
    i18n;
    http;
    form ={valid: ()=>{return true;}};
    utils;

    constructor(){
        this.editData = editData;
        this.restProject = restProject;
        this.restFileSystem = restFileSystem;
        this.resourceHelper = resourceHelper;
        this.restResource = restResource;
        this.i18n = i18n;
        this.http = http;
        this.form ={valid: ()=>{return true;}};
        this.utils = utils;
    }

}