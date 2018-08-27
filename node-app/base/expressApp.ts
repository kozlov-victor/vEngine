import fs from './fs';
import {nodeRequire} from "./fns";
import {HbsSettings} from './hbsSettings';
import {all as allControllers} from '../mvc/controllers/all';

const express = nodeRequire('express');
const url = nodeRequire('url');
const path = nodeRequire('path');
const exphbs  = nodeRequire('express-handlebars');
const session = nodeRequire('express-session');
const bodyParser = nodeRequire('body-parser');
const multipart = nodeRequire('connect-multiparty')();


export class ExpressApp {

    private app;

    constructor(){
        new HbsSettings();
        this.initApp();
        this.setUpControllers();
        this.handleErrors();
    }

    initApp(){
        const app = express();
        app.set('views', './node-app/mvc/views');
        app.engine('html', exphbs({
            // defaultLayout: 'main'
        }));
        app.set('view engine', 'html');

        app.use(session({
            key: 'session_cookie_name',
            secret: 'session_cookie_secret' ,
            resave: true,
            saveUninitialized: true
        }));
        app.use(express.static('assets'));
        app.use(express.static('workspace'));
        app.use( bodyParser.json() );       // to support JSON-encoded bodies
        app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
            extended: true
        }));
        this.app = app;
    }

    getApp(){
        return this.app;
    }

    private setHeader(res,responseObj){
        if (typeof responseObj == 'object')
            res.setHeader('Content-Type', 'application/json');
    }

    createResponse(opts,response,params){

        let callback = (result)=>{
            if (opts.responseType=='view') {
                result = result || {};
                result.params = params;
                response.render(opts.controllerPath,result);
            } else {
                this.setHeader(response,result);
                response.send(result);
            }
        };
        let codeResult;
        try {
            codeResult = opts.ctrl[opts.methodName](params,response);
        } catch(error){
            console.error('catch method promise error',error);
            response.statusCode = 500;
            response.send(error || 'server error');
        }
        
        if (codeResult && codeResult.then) {
            // promise
            codeResult.then((data)=>{
                callback(data);
            }).catch((error)=>{
                response.statusCode = 500;
                response.send(error || 'server error');
            });
        }
        else  {
            callback(codeResult);
        }
    }


    processCommonRequest(opts){

        this.app[opts.requestType](`${opts.pathName}/${opts.methodName}`,(req,res)=>{

            opts.methodName = opts.methodName || 'index';

            let params;
            switch (opts.requestType) {
                case 'post':
                    params = req.body;
                    break;
                default:
                    params = url.parse(req.url, true).query;
                    break;
            }

            this.createResponse(opts,res,params);
        });
        console.log(`mapped: ${opts.requestType}: ${opts.pathName}/${opts.methodName}`);
    }

    processMultiPartRequest(opts){
        this.app.post(`${opts.pathName}/${opts.methodName}`,multipart,async (req,res)=>{
            let pathToUploadedFile = req.files && req.files.file && req.files.file.path;
            let params = req.body;
            let file = await fs.readFile(pathToUploadedFile,true);
            await fs.deleteFile(pathToUploadedFile);
            params.file = file;
            if (params.fileName && params.fileName.splice && params.fileName[0]) {
                params.fileName = params.fileName[0];
            }
            this.createResponse(opts,res,params);
        });
        console.log(`mapped: ${opts.requestType}: ${opts.pathName}/${opts.methodName}`);
    }


    setUpControllers(){

        allControllers.forEach((Ctrl:any)=>{

            let ctrl = new Ctrl();
            let controllerName = Ctrl.name;
            controllerName = controllerName.replace('Controller','');
            controllerName = controllerName.substr(0,1).toLowerCase() + controllerName.substr(1);

            Object.keys(ctrl.meta).forEach(methodName=>{
                let requestType = ctrl.meta[methodName].requestType;
                let responseType = ctrl.meta[methodName].responseType;

                let pathName = '';
                if (controllerName == 'index') {
                    pathName = '';
                    if (methodName=='index') methodName = '';
                }
                else pathName = '/' + controllerName;

                let controllerPath = `${controllerName}/${methodName}`;
                let opts = {ctrl, requestType, responseType, pathName, controllerPath, methodName};

                if (requestType == 'multipart') {
                    this.processMultiPartRequest(opts);
                } else {
                    this.processCommonRequest(opts);
                }

            });

        });
    }

    handleErrors(){
        this.app.use((err, req, res, next)=> {
            if (err) console.error(err);
            res.status(500).send(
                'error 500: ' + (err.message || err)
            );
        });
    }
}


