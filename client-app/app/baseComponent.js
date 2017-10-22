
import utils from 'app/providers/utils'
import editData from 'app/providers/editData'
import restProject from 'app/providers/rest/project'
import restFileSystem from 'app/providers/rest/fileSystem'
import restResource from 'app/providers/rest/resource'
import resourceHelper from 'app/providers/resourceHelper'
import i18n from 'app/providers/i18n'
import http from 'app/providers/rest/httpClient'

export default class BaseComponent {

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