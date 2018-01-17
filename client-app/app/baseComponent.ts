
import Utils from './providers/utils'
import {editData} from './providers/editData'
import restProject from './providers/rest/project'
import restFileSystem from './providers/rest/fileSystem'
import restResource from './providers/rest/resource'
import resourceHelper from './providers/resourceHelper'
import i18n from './providers/i18n'
import http from './providers/rest/httpClient'

export default class BaseComponent {

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
        this.utils = Utils;
    }

}