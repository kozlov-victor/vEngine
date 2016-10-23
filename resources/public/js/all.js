

window.app.
    controller('buildCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        s.build = function(){
            $http({
                url: utils.generateBuildUrl(editData.buildOpts),
                method: "GET"
            }).
            success(function (resp) {
                s.link = '/'+ editData.projectName+'/out'
            });
        };

        (function(){

        })();

    });


window.app.
    controller('colorPickerCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var bundle = require('bundle').instance();
        var model;

        s.rgbChanged = function(){
            s.col.hex = utils.rgbToHex(s.col.rgb);
        };

        s.hexChanged = function(){
            s.col.rgb = utils.hexToRgb(s.col.hex);
        };
        
        s.applyColor = function(){
            var dialogState = uiHelper.getDialogState();
            uiHelper.closeDialog();
            dialogState.opObject[dialogState.opName] = [
                +s.col.rgb[0]||0,
                +s.col.rgb[1]||0,
                +s.col.rgb[2]||0
            ];
            if (dialogState && dialogState.opCallBack) {
                dialogState.opCallBack({
                    hex:s.col.hex||'#000000',
                    rgb:[
                        +s.col.rgb[0]||0,
                        +s.col.rgb[1]||0,
                        +s.col.rgb[2]||0
                    ]
                });
                dialogState.opCallBack = null;
            }
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            model = dialogState.opObject[dialogState.opName];
            s.col = {};
            s.col.hex = utils.rgbToHex(model);
            s.col.rgb = model;
        })();

    });

window.app.
    controller('commonBehaviourCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var bundle = require('bundle').instance();
        var CommonBehaviour = require('commonBehaviour').CommonBehaviour;

        s.createOrEditCommonBehaviour = function(obj){
            console.log('createOrEditCommonBehaviour>>>>>',obj);
            resourceDao.createOrEditObjectInResource(
                s.editData.currGameObjectInEdit.type,s.editData.currGameObjectInEdit.id,
                obj.type,obj,
                function(resp){
                    if (resp.type=='create') {
                        obj.id = resp.r.id;
                        s.editData.currGameObjectInEdit._commonBehaviour.add(obj);
                        s.editData.currGameObjectInEdit.commonBehaviour.push(obj.toJSON());
                        var dialogStateObj = uiHelper.findDialogStateObjectById(s.editData.currGameObjectInEdit.id);
                        dialogStateObj.commonBehaviour.push(obj.toJSON());
                    } else {
                        dialogStateObj = uiHelper.findDialogStateObjectById(s.editData.currGameObjectInEdit.id);
                        var currItem = dialogStateObj._commonBehaviour.find({id:resp.r.id});
                        currItem.fromJSON(resp.r);
                        console.log('currItem',currItem);
                    }
                    uiHelper.closeDialog();
                }
            );
        };


        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                s.editData.currCommonBehaviourInEdit = new CommonBehaviour();
                s.editData.currCommonBehaviourInEdit.name = dialogState.opObject;
                var obj =
                    editData.commonBehaviourList.find({
                        name: dialogState.opObject
                    });
                if (obj) {
                    var cloned = obj.clone();
                    s.editData.currCommonBehaviourInEdit.parameters = cloned.parameters;
                    s.editData.currCommonBehaviourInEdit.description = cloned.description;
                }
            } else if (dialogState.opName=='edit'){
                s.editData.currCommonBehaviourInEdit = dialogState.opObject.clone();
            }
        })();



    });

window.app.
    controller('fontCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        chrome,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        s.fontSample = 'test this font!';
        var bundle = require('bundle').instance();
        var Font = require('font').Font;

        var getFontContext = function(arrFromTo, strFont, w) {
            function getFontHeight(strFont) {
                var parent = document.createElement("span");
                parent.appendChild(document.createTextNode("height!ДдЙЇ"));
                document.body.appendChild(parent);
                parent.style.cssText = "font: " + strFont + "; white-space: nowrap; display: inline;";
                var height = parent.offsetHeight;
                document.body.removeChild(parent);
                return height;
            }
            var cnv = document.createElement('canvas');
            var ctx = cnv.getContext('2d');
            ctx.font = strFont;
            var textHeight = getFontHeight(strFont);
            var symbols = {};
            var currX = 0, currY = 0, cnvHeight = textHeight;
            for (var k = 0; k < arrFromTo.length; k++) {
                var arrFromToCurr = arrFromTo[k];
                for (var i = arrFromToCurr.from; i < arrFromToCurr.to; i++) {
                    var currentChar = String.fromCharCode(i);

                    ctx = cnv.getContext('2d');
                    var textWidth = ctx.measureText(currentChar).width;
                    if (textWidth == 0) continue;
                    if (currX + textWidth > w) {
                        currX = 0;
                        currY += textHeight;
                        cnvHeight = currY + textHeight;
                    }
                    var symbol = {};
                    symbol.x = ~~currX;
                    symbol.y = ~~currY;
                    symbol.width = ~~textWidth;
                    symbol.height = textHeight;
                    symbols[currentChar] = symbol;
                    currX += textWidth;
                }
            }
            return {symbols: symbols, width: w, height: cnvHeight};
        };


        var getFontImage = function(symbolsContext,strFont,color){
            var cnv = document.createElement('canvas');
            cnv.width = symbolsContext.width;
            cnv.height = symbolsContext.height;
            var ctx = cnv.getContext('2d');
            ctx.font = strFont;
            ctx.fillStyle = color;
            ctx.textBaseline = "top";
            var symbols = symbolsContext.symbols;
            for (var symbol in symbols) {
                if (!symbols.hasOwnProperty(symbol)) continue;
                ctx.fillText(symbol, symbols[symbol].x, symbols[symbol].y);
            }
            return cnv.toDataURL();
        };

        var updateObjectFonts = function(){
            utils.eachObjectOnScene(function(go){
                if (go.subType && go.subType=='textField') {
                    var font =
                        editData.fontList.find({id:go.fontId}) ||
                        editData.fontList.find({name:'default'});
                    font.resourcePath+='?'+Math.random();
                    go.setFont(font);
                }
            });
        };

        s.openColorPickerForFont = function(){
            s.showDialog(
                'colorPicker','fontColor',
                editData.currFontInEdit
            );
        };

        s.createOrEditFont = function(){
            var font = s.editData.currFontInEdit;
            var strFont = font.fontSize +'px'+' '+font.fontFamily;
            font.fontContext = getFontContext([{from: 32, to: 150}, {from: 1040, to: 1116}], strFont, 320);
            font._file = utils.dataURItoBlob(getFontImage(font.fontContext,strFont,utils.rgbToHex(font.fontColor)));
            resourceDao.createOrEditResource(
                font,
                Font,
                bundle.fontList,
                function(res){
                    if (res.type=='edit') {
                        updateObjectFonts();
                    }
                }
            );
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currFontInEdit = new Font({fontColor:[0,0,0]});
                s.convertedCol = utils.rgbToHex(editData.currFontInEdit.fontColor);
            } else if (dialogState.opName=='edit'){
                editData.currFontInEdit = dialogState.opObject.clone();
                s.convertedCol = utils.rgbToHex(editData.currFontInEdit.fontColor);
            }
            dialogState.opName=null;


            if (s.editData.systemFontList) return;
            chrome.requestToApi({method:'getFontList'},function(list){
                s.editData.systemFontList = list;
                s.$apply();
            })
        })();

    });

window.app.
    controller('frameAnimationCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao
    ) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var bundle = require('bundle').instance();
        var FrameAnimation = require('frameAnimation').FrameAnimation;
        var GameObject = require('gameObject').GameObject;

        var isStopped = false;

        s.toArray = function(expr) {
            try {
              return JSON.parse('['+expr+']');
            } catch(e){
                return [];
            }
        };

        s.createOrEditFrAnimation = function(){
            s.editData.currFrAnimationInEdit.frames = JSON.parse('['+s.editData.currFrAnimationInEdit.frames+']');
            resourceDao.createOrEditResource(
                s.editData.currFrAnimationInEdit,
                FrameAnimation,
                bundle.frameAnimationList,
                function(res){
                    if (res.type=='create') {

                        s.editData.currFrAnimationInEdit.id = res.r.id;
                        var dialogStateObj = uiHelper.findDialogStateObjectById(s.editData.currGameObjectInEdit.id);
                        dialogStateObj.frameAnimationIds.push(s.editData.currFrAnimationInEdit.id);
                        s.editData.currGameObjectInEdit.frameAnimationIds.push(s.editData.currFrAnimationInEdit.id);
                        dialogStateObj._frameAnimations.add(s.editData.currFrAnimationInEdit);

                        resourceDao.createOrEditResource(
                            s.editData.currGameObjectInEdit,
                            GameObject,
                            bundle.gameObjectList,
                            function(){

                            },
                            true
                        );
                    }
                }
            );
        };

        s.allIndexes = function(){
            var res = utils.getArray(s.editData.currGameObjectInEdit._spriteSheet._numOfFrames);
            return res.join(',')
        };

        s.playAnimation = function(){
            try {
                s.editData.currFrAnimationInEdit.frames = JSON.parse('['+s.editData.currFrAnimationInEdit.frames+']');
            } catch(e){}
            s.editData.currFrAnimationInEdit.constructor();
            setTimeout(function(){
                s.editData.currFrAnimationInEdit.play();
                s.editData.currFrAnimationInEdit.update(new Date().getTime());
                var i = s.editData.currGameObjectInEdit.currFrameIndex;
                s.editData.currGameObjectInEdit.setFrameIndex(i);
                s.$apply();
                if (isStopped) {
                    isStopped = false;
                    return;
                }
                if (uiHelper.dialogName=='frmCreateFrameAnimation') setTimeout(s.playAnimation,50);
            },0);
        };

        s.stopAnimation = function(){
            s.editData.currFrAnimationInEdit.stop();
            isStopped = true;
        };

        s.setRange = function(from,to) {
            if (isNaN(from) || isNaN(to)) return;
            s.editData.currFrAnimationInEdit.frames = [];
            if (from<=to) {
                for (var i=from;i<=to;i++) {
                    s.editData.currFrAnimationInEdit.frames.push(i);
                }
            } else {
                for (i=from;i>=to;i--) {
                    s.editData.currFrAnimationInEdit.frames.push(i);
                }
            }

        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                s.editData.currFrAnimationInEdit = new FrameAnimation();
                s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            } else if (dialogState.opName=='edit'){
                s.editData.currFrAnimationInEdit = dialogState.opObject.clone();
                s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            }
        })();


    });
window.app.
    controller('gameObjectCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao
    ) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var bundle = require('bundle').instance();
        var GameObject = require('gameObject').GameObject;

        s.refreshGameObjectFramePreview = function(gameObject,ind){
            var spriteSheet = gameObject._spriteSheet;
            if (!spriteSheet) return;
            var maxNumOfFrame = spriteSheet.numOfFramesH*spriteSheet.numOfFramesV-1;
            if (s.editData.currGameObjectInEdit.currFrameIndex>=maxNumOfFrame) {
                s.editData.currGameObjectInEdit.currFrameIndex = 0;
            }
            gameObject.setFrameIndex(ind);
        };

        s.createOrEditGameObject = function(){
            resourceDao.createOrEditResource(s.editData.currGameObjectInEdit,GameObject,bundle.gameObjectList,function(op){
                if (op.type=='create') {
                    resourceDao.createFile(
                        s.editData.currGameObjectInEdit.name+'.js',
                        'script/gameObject',window.DEFAULT_CODE_SCRIPT);
                }
            });
        };

        s.deleteFrameAnimation = function(item) {
            resourceDao.deleteResource(item.id,item.type,function(){
                s.editData.currGameObjectInEdit.frameAnimationIds.splice(
                    s.editData.currGameObjectInEdit.frameAnimationIds.indexOf(item.id),
                    1
                );
                s.editData.currGameObjectInEdit._frameAnimations.remove({id:item.id});
                resourceDao.createOrEditResource(
                    s.editData.currGameObjectInEdit,
                    GameObject,
                    bundle.gameObjectList,
                    null,true
                );
            });
        };

        s.deleteCommonBehaviour = function(item){
            resourceDao.deleteObjectFromResource(
                editData.currGameObjectInEdit.type,
                editData.currGameObjectInEdit.id,
                item.type,
                item.id,
                function(){
                    s.editData.currGameObjectInEdit._commonBehaviour.remove({id:item.id});
                    utils.removeFromArray(s.editData.currGameObjectInEdit.commonBehaviour,{id:item.id});
                }
            );
        };

        s.deleteGameObjectFromCtxMenu = function(object){
            var layer = editData.currLayerInEdit;
            resourceDao.deleteObjectFromResource(layer.type,layer.protoId,'gameObjectProps',object.id);
            layer._gameObjects.remove({id: object.id});
            uiHelper.closeContextMenu();
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                var targetSpriteSheet = bundle.spriteSheetList.getLast();
                editData.currGameObjectInEdit = new GameObject({
                    spriteSheetId:
                    targetSpriteSheet &&
                    targetSpriteSheet.id
                });
                if (targetSpriteSheet) {
                    editData.currGameObjectInEdit.name = targetSpriteSheet.name;
                }
                utils.recalcGameObjectSize(s.editData.currGameObjectInEdit);
            } else if (dialogState.opName=='edit'){
                editData.currGameObjectInEdit = dialogState.opObject.clone();
                editData.currGameObjectInEdit.spriteSheet = bundle.spriteSheetList.find({id: s.editData.currGameObjectInEdit.id});
            }

            s.availableCommonBehaviour = [];
            if (!s.editData.currGameObjectInEdit) return;
            var appliedBehaviours = s.editData.currGameObjectInEdit._commonBehaviour;
            s.editData.commonBehaviourList.forEach(function(cb){
                if (appliedBehaviours.find({name: cb.name})) return;
                s.availableCommonBehaviour.push(cb);
            });
            s.selectedBehaviourName = s.availableCommonBehaviour[0] && s.availableCommonBehaviour[0].name;

        })();




    });

window.app.
    controller('layerCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        var bundle = require('bundle').instance();
        var Layer = require('layer').Layer;


        s.createOrEditLayer = function(){
            if (s.editData.currLayerInEdit.id) { // edit resource
                var dataToEdit = s.editData.currLayerInEdit.clone();
                dataToEdit.id = dataToEdit.protoId;
                resourceDao.createOrEditResource(dataToEdit);
            } else { // create object in resource
                resourceDao.createOrEditLayer(s.editData.currLayerInEdit);
            }
        };


        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currLayerInEdit = new Layer({sceneId:editData.currSceneInEdit.id});
                editData.currLayerInEdit._scene = editData.currSceneInEdit;
                if (editData.currSceneInEdit._layers.size()==0) {
                    editData.currLayerInEdit.name = 'mainLayer';
                }
            } else if (dialogState.opName=='edit'){
                editData.currLayerInEdit = dialogState.opObject.clone();
                editData.currLayerInEdit._scene = editData.currSceneInEdit;
            }


        })();


    });

window.app.
    controller('leftMenuCtrl', function (

        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao
    ) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        s.scales = require('consts').SCALE_STRATEGY;

        s.saveGameProps = function(){
            delete editData.gameProps.$objectId;
            delete editData.gameProps.objectId;
            resourceDao.saveGameProps(editData.gameProps);
        };

        s.deleteScene = function(item){
            item._layers.clear();
            resourceDao.deleteResource(item.id,'scene');
        };

        s.deleteGameObjectFromLayer = function(layer,object){
            resourceDao.deleteObjectFromResource(layer.type,layer.protoId,'gameObjectProps',object.id);
            layer._gameObjects.remove({id: object.id});
        };

        s.deleteLayer = function(scene,l){
            l._gameObjects.clear();
            scene._layers.remove({id: l.id});
            resourceDao.deleteObjectFromResource(scene.type,scene.id,'layerProps', l.id);
        };

        s.showScript = function(model,e){
            e && e.stopPropagation();
            s.uiHelper.window = 'scriptWindow';
            s.editData.scriptEditorUrl =
                '/editor?name='+
                model.name+
                '&path='+encodeURIComponent('script/'+model.type);
        };


    });


window.app.
    controller('particleSystemCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var ParticleSystem = require('particleSystem').ParticleSystem;


        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currParticleSystemInEdit = new ParticleSystem({
                    gameObjectId:(editData.gameObjectList.getLast() && editData.gameObjectList.getLast().id)
                });
            } else if (dialogState.opName=='edit'){
                editData.currParticleSystemInEdit = dialogState.opObject.clone();
            }
            s.currGameObject = editData.currParticleSystemInEdit._gameObject;
            dialogState.opName = '';

        })();





    });

window.app.
    controller('particleSystemPreviewCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        editData.currParticleSystemInEdit.emit(100,100);

        var prevTime = null;
        var update = function(){

            var currTime = Date.now();
            if (!prevTime) prevTime = currTime;
            var delta = currTime - prevTime;
            prevTime = currTime;
            editData.currParticleSystemInEdit._particles.forEach(function(p){

                p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                var deltaX = p.vel.x * delta / 1000;
                var deltaY = p.vel.y * delta / 1000;
                p.pos.x = p.pos.x+deltaX;
                p.pos.y = p.pos.y+deltaY;

                if (!p._timeCreated) p._timeCreated = currTime;
                if (currTime - p._timeCreated > p.liveTime) {
                    editData.currParticleSystemInEdit._particles.splice(editData.currParticleSystemInEdit._particles.indexOf(p),1);
                }

                s.$apply();
                if (uiHelper.dialogName!='frmCreateParticleSystemPreview') clearInterval(0);
            });
        };

        s.emit = function(e){
            editData.currParticleSystemInEdit.emit(e.clientX,e.clientY);
        };

        setInterval(function(){
            update();
        },10);

        (function(){

        })();

    });



window.app.
    controller('projectCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;


        s.openProject = function(project){
            resourceDao.loadProject(project.name);
        };

        s.createOrEditProject = function(proj){
            if (proj.name && proj.oldName) {
                resourceDao.renameFolder(
                    'workspace/'+proj.oldName,
                    'workspace/'+proj.name,
                    function(){
                        resourceDao.getProjects(function(list){
                                editData.projects = list;
                            uiHelper.closeDialog();
                        }
                    );
                });
            } else if (proj.name) {
                resourceDao.createProject(proj.name,function(){
                    resourceDao.getProjects(function(list){
                        editData.projects = list;
                        uiHelper.closeDialog();
                    });
                });
            }
        };

        s.deleteProject = function(proj){
            resourceDao.deleteFolder('workspace/'+proj.name,function(){
                resourceDao.getProjects(function(list){
                    editData.projects = list;
                    uiHelper.closeDialog();
                })
            });
        };

        (function(){

            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currProjectInEdit = {};
            } else if (dialogState.opName=='edit'){
                editData.currProjectInEdit = {};
                editData.currProjectInEdit.oldName =
                    editData.currProjectInEdit.name =
                        dialogState.opObject.name;
            } else {
                resourceDao.getProjects(function(list){
                    editData.projects = list;
                });
            }
            uiHelper.opName = null;

        })();

    });

window.app.
    controller('rightMenuCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var bundle = require('bundle').instance();

        s.openColorPickerForScene = function(){
            s.showDialog(
                'colorPicker','colorBG',
                editData.currSceneInEdit,
                function(col){
                    editData.currSceneInEdit.colorBG = col.rgb;
                    resourceDao.createOrEditResourceSimple(editData.currSceneInEdit);
                }
            );
        };

        (function(){


        })();

    });
window.app.
    controller('sceneCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao,
        messageDigest // don't remove this dependency, needed to init messageDigest
    ) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var bundle = require('bundle').instance();
        var Scene = require('scene').Scene;

        s.createOrEditScene = function(){
            resourceDao.
                createOrEditResource(s.editData.currSceneInEdit,Scene,bundle.sceneList,
                function(resp){
                    if (bundle.sceneList.size()==1) {
                        s.editData.currSceneInEdit = bundle.sceneList.get(0);
                    }
                    if (resp.type=='create') {
                        resourceDao.createFile(s.editData.currSceneInEdit.name+'.js','script/scene',window.DEFAULT_CODE_SCRIPT);
                    }
                });
        };

        var tid = 0;
        s.onKeyPress = function(e){

           if (!editData.currSceneGameObjectInEdit) return;
            var edited = false;
            switch (e.which) {
               case 38: // up
                   edited = true;
                   editData.currSceneGameObjectInEdit.pos.y-=1;
                   break;
               case 40: // down
                   edited = true;
                   editData.currSceneGameObjectInEdit.pos.y+=1;
                   break;
               case 37: // left
                   edited = true;
                   editData.currSceneGameObjectInEdit.pos.x-=1;
                   break;
               case 39: // right
                   edited = true;
                   editData.currSceneGameObjectInEdit.pos.x+=1;
                   break;
           }
           if (edited) {
               clearTimeout(tid);
               tid = setTimeout(function(){
                   resourceDao.createOrEditObjectInResource(
                       editData.currLayerInEdit.type,
                       editData.currLayerInEdit.protoId,
                       'gameObjectProps',
                       {
                            pos:editData.currSceneGameObjectInEdit.pos,
                            id:editData.currSceneGameObjectInEdit.id
                       }
                   );
               },200);
           }
        };

        var _addOrEditGameObject = function(obj,x,y,idKey,idVal){

            if (!bundle.sceneList.size()) {
                window.showError(s.i18n['noScene']);
                return;
            }
            if (!editData.currSceneInEdit) {
                window.showError(s.i18n['sceneNotSelected']);
                return;
            }
            if (!editData.currSceneInEdit._layers.size()) {
                window.showError(s.i18n['noLayer']);
                return;
            }

            var editDataObj = obj.toJSON();
            delete editDataObj.id;
            delete editDataObj.protoId;
            editDataObj.pos.x = x;
            editDataObj.pos.y = y;
            editDataObj[idKey]=idVal;

            var needNewName = false;
            if (!editDataObj.name) {
                var num = 0;
                editData.currLayerInEdit._gameObjects.forEach(function(item){
                    if (editDataObj.subType && item.subType==editDataObj.subType) {
                        num++;
                    }
                });
                editDataObj.name = editDataObj.subType + (num+1);
                needNewName = true;
            }

            resourceDao.createOrEditObjectInResource(
                editData.currLayerInEdit.type,
                editData.currLayerInEdit.protoId,
                'gameObjectProps',editDataObj,
                function(resp){
                    if (resp.type=='create') {
                        var newGameObj = obj.clone();
                        newGameObj.pos.x = x;
                        newGameObj.pos.y = y;
                        newGameObj.protoId = newGameObj.id;
                        newGameObj.id = resp.r.id;
                        editData.currLayerInEdit._gameObjects.add(newGameObj);
                        editData.currSceneGameObjectInEdit = newGameObj;
                        if (needNewName) {
                            newGameObj.name = editDataObj.name;
                        }
                    } else {
                        obj.pos.x = x;
                        obj.pos.y = y;
                        editData.currSceneGameObjectInEdit = obj;
                    }
                });
        };


        s.onGameObjectDropped = function(obj,draggable,e) {
            switch (draggable) {
                case 'gameObjectFromLeftPanel':
                    _addOrEditGameObject(obj, e.x, e.y,'protoId',obj.id);
                    break;
                case 'gameObjectFromSelf':
                    _addOrEditGameObject(obj, e.x, e.y,'id',obj.id);
                    break;
                default:
                    console.log('not supported',obj,draggable);
            }
        };

        s.onTextFieldChanged = function(tfObj){

            tfObj.setText(tfObj.text);tfObj._edit=false;

            resourceDao.createOrEditObjectInResource(
                editData.currLayerInEdit.type,
                editData.currLayerInEdit.protoId,
                'gameObjectProps',
                tfObj.toJSON());
        };

        s.addGameObjectFromCtxMenu = function(obj,x,y){
            _addOrEditGameObject(obj, x, y,'protoId',obj.id);
            uiHelper.closeContextMenu();
        };


        s.editGameObjectFromRightMenu = function(obj){
            if (obj.fontId) {
                var fnt = bundle.fontList.find({id:obj.fontId});
                s.editData.currSceneGameObjectInEdit._font = fnt;
                s.editData.currSceneGameObjectInEdit.fontId = fnt.id;
                obj.setText(obj.text);
            }
            resourceDao.createOrEditObjectInResource(
                editData.currLayerInEdit.type,
                editData.currLayerInEdit.protoId,
                'gameObjectProps',
                obj.toJSON()
            );
        };

        s.setTile = function(scene,x,y,tileIndex,e){
            if (!e || e.buttons==1) {
                var tileMapData = scene.tileMap.data;
                if (!tileMapData[y]) tileMapData[y] = [];
                if (tileMapData[y][x]==tileIndex) return;
                tileMapData[y][x] = tileIndex;
                resourceDao.setTile(scene,x,y,tileIndex);
            }
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currSceneInEdit = new Scene();
                if (editData.sceneList.size()==0) {
                    editData.currSceneInEdit.name = 'mainScene';
                }
            } else if (dialogState.opName=='edit'){
                editData.currSceneInEdit = dialogState.opObject.clone();
            }
            uiHelper.opName = null;

        })();

    });


window.app.
    controller('soundCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils
    ) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var bundle = require('bundle').instance();
        var Sound = require('sound').Sound;

        s.onSoundUpload = function(file,src){
            s.soundUrl = $sce.trustAsResourceUrl(src);
            s.editData.currSoundInEdit._file = file;
        };

        s.createOrEditSound = function(snd){
            resourceDao.createOrEditResource(
                s.editData.currSoundInEdit,
                Sound,
                bundle.soundList
            );
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currSoundInEdit = new Sound();
            } else if (dialogState.opName=='edit'){
                editData.currSoundInEdit = dialogState.opObject.clone();
            }


            if (s.editData.currSoundInEdit) {
                s.soundUrl = editData.projectName+'/' + s.editData.currSoundInEdit.resourcePath;
            }

        })();

    });
window.app.
    controller('spriteSheetCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao
    ) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var bundle = require('bundle').instance();
        var SpriteSheet = require('spriteSheet').SpriteSheet;

        s.onSpriteSheetUpload = function(file,src) {
            s.editData.currSpriteSheetInEdit._file = file;
            s.editData.currSpriteSheetInEdit.resourcePath = src;
            if (!s.editData.currSpriteSheetInEdit.name) {
                s.editData.currSpriteSheetInEdit.name = file.name.split('.')[0];
            }
            //if (!s.editData.currSpriteSheetInEdit.name) {
            //    s.editData.currSpriteSheetInEdit.name =  src.split('.')[0];
            //}
            var fr = new FileReader();
            fr.onload = function() { // file is loaded
                var img = new Image;
                img.onload = function() {
                    s.editData.currSpriteSheetInEdit.width = img.width;
                    s.editData.currSpriteSheetInEdit.height = img.height;
                    s.spriteSheetUrl = fr.result;
                    s.$apply();
                };
                img.src = fr.result;
            };
            fr.readAsDataURL(file);
        };

        var updateObjectSpriteSheets = function(){
            var _setSpriteSheet = function(go){
                if (go.spriteSheetId) {
                    var sprSheet = bundle.spriteSheetList.find({id: go.spriteSheetId});
                    go.setSpriteSheet(sprSheet);
                }
            };
            utils.eachObjectOnScene(function(go){
                _setSpriteSheet(go);
            });
            bundle.gameObjectList.forEach(function(go){
                _setSpriteSheet(go);
            });
        };

        s.createOrEditSpriteSheet = function(){
            resourceDao.createOrEditResource(
                s.editData.currSpriteSheetInEdit,
                SpriteSheet,
                bundle.spriteSheetList,
                function(res){
                    if (res.type=='edit') {
                        updateObjectSpriteSheets();
                    }
                }
            );
        };

        (function() {
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currSpriteSheetInEdit = new SpriteSheet({});
            } else if (dialogState.opName=='edit'){
                editData.currSpriteSheetInEdit = dialogState.opObject.clone();
                editData.currSpriteSheetInEdit.calcFrameSize();
                s.spriteSheetUrl = editData.projectName+'/'+editData.currSpriteSheetInEdit.resourcePath;
            }
        })();


    });

window.app.
    controller('stubCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var bundle = require('bundle').instance();

        (function(){

            if (uiHelper.opName=='create') {
                editData.currSoundInEdit = new ve.models.Sound({});
            } else if (uiHelper.opName=='edit'){
                editData.currSoundInEdit = uiHelper.opObject.clone();
            }
            uiHelper.opName = null;

        })();

    });

window.app.
    controller('topPanelCtrl', function ($scope, $http, $sce, editData, uiHelper, i18n, utils) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;

        var w;


        s.run = function(){
            $http({
                url: utils.generateBuildUrl({debug:1}),
                method: "GET"
            }).
            success(function (resp) {
                if (!w || w.closed) {
                    w = window.open('/'+editData.projectName+'/out','','');
                }
                else {
                    w.location.reload();
                }
                w && w.focus();
            });
        };

        s.debug = function(){
            $http({
                url: utils.generateBuildUrl({debug:1}),
                method: "GET"
            }).
            success(function (resp) {
                s.uiHelper.window = 'debugRunWindow';
                editData.debugFrameUrl = '/'+editData.projectName+'/out';
                var focus = function f(){
                    var el = document.getElementsByTagName('iframe')[0];
                    if (el) {
                        el.focus();
                    } else {
                        setTimeout(f,1000);
                    }
                };
                focus();
            });
        };

        s.stop = function(){
            s.uiHelper.window = 'sceneWindow';
            editData.debugFrameUrl = $sce.trustAsUrl('/about:blank');
        };

        s.showBuildDialog = function() {
            uiHelper.showDialog('buildDialog');
        };

        s.toExplorer = function(){
            location.hash = '#/explorer';
        }


    });

app.directive('appContextMenu', function(uiHelper) {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            var tmplId = attrs.appContextMenu;
            var model = scope.$eval(attrs.ngModel);
            element.bind('contextmenu1', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var x = e.clientX;
                var y = e.clientY;
                uiHelper.showContextMenu(tmplId,x,y,e.offsetX,e.offsetY,model);
                scope.$apply(function () {});
            });
        }
    };
});


app.factory('appDraggableUtil',function(){
    return {
        lastObject:null,
        lastDraggable:null,
        clientX:0,
        clientY:0,
        offsetX:0,
        offsetY:0
    }
})
.directive('appDraggable', function(appDraggableUtil) {
    return {
        require: 'ngModel',
        restrict: 'A',
        replace: false,
        scope: {
            ngModel : '='
        },
        link: function (scope, element, attrs) {
            element.attr('draggable','true');
            var model = scope.ngModel;
            var emit = attrs.appDraggable;
            element.bind('dragstart', function (e) {
                e.dataTransfer.setData('text/plain', emit); //cannot be empty string
                e.dataTransfer.effectAllowed='move';
                appDraggableUtil.lastObject = model;
                appDraggableUtil.lastDraggable = emit;
                appDraggableUtil.offsetX = e.offsetX;
                appDraggableUtil.offsetY = e.offsetY;
            });
        }
    };
})
.directive('appDroppable', function($parse,appDraggableUtil) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var canAccept = attrs.appDroppable;

            var isAcceptable = function(){
                var accepted = appDraggableUtil.lastDraggable;
                return canAccept.indexOf(accepted)>-1;
            };

            element.bind('dragover', function (e) {
                if (isAcceptable(e)) {
                    element.addClass('droppable');
                }
                e.preventDefault();
            });
            element.bind('dragenter', function (e) {
                e.preventDefault();
                element.removeClass('enter');
            });
            element.bind('dragleave', function (e) {
                e.preventDefault();
                element.removeClass('droppable');
            });
            element.bind('dragover',function(e){
                e.preventDefault();
            });
            element.bind('drop', function (e) {
                e.preventDefault();
                element.removeClass('droppable');
                if (!isAcceptable()) return;
                var model = appDraggableUtil.lastObject;
                var fn = $parse(attrs.appOnDropped);
                if (!fn) return;

                var elementRect = element[0].getBoundingClientRect();
                var realCoordX = e.x - elementRect.left;
                var realCoordY = e.y - elementRect.top;

                var evt = {
                    x: realCoordX - appDraggableUtil.offsetX,
                    y: realCoordY - appDraggableUtil.offsetY
                };

                scope.$apply(function () {
                    fn(scope, {$object:model,$draggable:appDraggableUtil.lastDraggable,$event:evt});
                    appDraggableUtil.lastObject = null;
                    appDraggableUtil.lastDraggable = null;
                });
            });
        }
    };
});

app.directive('appOnFileUpload', function ($parse) {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attrs) {
            element.bind('change', function () {
                var fn = $parse(attrs.appOnFileUpload);
                var file = element[0] && element[0].files[0];
                var url = window.URL || window.webkitURL;
                var src = url.createObjectURL(file);
                scope.$apply(function () {
                    fn(scope, {$file: element[0].files[0],$src:src});
                });
            });
        }
    };
});


angular.forEach(['x', 'y', 'width', 'height','transform', 'd'], function(name) {
    var ngName = 'app' + name[0].toUpperCase() + name.slice(1);
    app.directive(ngName, function() {
        return function(scope, element, attrs) {
            attrs.$observe(ngName, function(value) {
                attrs.$set(name, value);
            })
        };
    });
});

app.directive('appInputAngle', function($parse) {
    return {
        restrict: 'E',
        replace: true,
        require: 'ngModel',
        transclude: true,
        scope: {
            ngModel : '='
        },
        templateUrl:'partials/misc/appInputAngle.html',
        link: function (scope, element, attrs) {
            var model = scope.ngModel;
            var field = attrs.appField;
            var angle = model[field];
            var calcAngleInDeg = function(){
                var deg = angle * 180 / Math.PI;
                model[field] = angle;
                scope.angleInDeg = deg;
            };
            calcAngleInDeg();

            var calcAngleFromEvent = function(e){
                var rect = element[0].getBoundingClientRect();
                var x = e.clientX - rect.left, y = e.clientY - rect.top;
                angle = Math.atan2((y -15),(x - 15));
                if (angle<0) angle = 2*Math.PI + angle;
            };

            var mouseDown = false;

            element.bind('click', function (e) {
                calcAngleFromEvent(e);
                calcAngleInDeg();
                scope.$apply();
            });
            element.bind('mousedown',function(){
                mouseDown = true;
            });
            element.bind('mouseup',function(){
                mouseDown = false;
            });
            element.bind('mouseleave',function(){
                mouseDown = false;
            });
            element.bind('mousemove', function (e) {
                if (!mouseDown) return;
                calcAngleFromEvent(e);
                calcAngleInDeg();
                scope.$apply();
            });
        }
    };
});


app.directive('appKeyPress', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.appKeyPress);
            if (!fn) return;
            window.addEventListener('keydown',function(e){
                scope.$apply(function () {
                    fn(scope, {$event:e});
                });
            });
        }
    };
});

app.directive('appKeyUp', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.appKeyPress);
            if (!fn) return;
            window.addEventListener('keyup',function(e){
                scope.$apply(function () {
                    fn(scope, {$event:e});
                });
            });
        }
    };
});

app.directive('appValidator', function($parse) {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, element, attrs, ngModelController) {
            scope.$watch(attrs.ngModel, function(value) {
                var booleanResult = $parse(attrs.appValidator)(scope);
                ngModelController.$setValidity('expression', booleanResult);
            });
        }
    };
});

window.app.

    directive('dynamicCtrl', ['$compile', '$parse',function($compile, $parse) {
        return {
            restrict: 'A',
            terminal: true,
            priority: 100000,
            link: function(scope, elem) {
                var name = $parse(elem.attr('dynamic-ctrl'))(scope);
                elem.removeAttr('dynamic-ctrl');
                elem.attr('ng-controller', name);
                $compile(elem)(scope);
            }
        };
    }]);
window.app.

service('chrome',function(){
    var events = {};
    window.addEventListener('message',function(resp){
        var data = resp.data && resp.data.response;
        if (!data) return;
        var id = resp.data.eventUUID;
        if (events[id]) {
            var fn = events[id];
            delete events[id];
            fn && data && fn(data);
        }
    });
    this.requestToApi = function(params,callBack) {
        var eventUUID = (~~Math.random()*100)+new Date().getTime();
        events[eventUUID] = callBack;
        params.eventUUID = eventUUID;
        window.top.postMessage(params,'*');
    };
    return this;
});
'use strict';

window.app

    .factory('editData', function ($sce) {

        var collections = require('collections');

        var res = {};
        res.commonBehaviourList = null;
        res.currGameObjectInEdit = null;
        res.currSpriteSheetInEdit = null;
        res.currFrAnimationInEdit = null;
        res.currSceneInEdit = null;
        res.currSceneGameObjectInEdit = null;
        res.currLayerInEdit = null;
        res.currFontInEdit = null;
        res.currCommonBehaviourInEdit = null;
        res.currSoundInEdit = null;
        res.currParticleSystemInEdit = null;
        res.currProjectInEdit = null;

        res.userInterfaceList = new collections.List();

        res.debugFrameUrl = $sce.trustAsUrl('/about:blank');
        res.scriptEditorUrl = '';

        res.projectName = undefined;
        res.projects = null;
        res.buildOpts = {
            debug: false,
            embedResources: false,
            embedScript: false,
            minify:false
        };

        return res;
    })


;
'use strict';

window.app

    .factory('i18n', function () {
        var _i18n = {};

        _i18n.locale = 'en';

        _i18n.bundle = {
            'en': {
                assets:'assets',
                addSpriteSheet:'add sprite sheet',
                loadImage:'load image',
                gameObjects:'game objects',
                gameObject:'gameObject',
                create:'create',
                edit:'edit',
                close:'close',
                name:'name',
                scaleStrategy:'scale strategy',
                spriteSheets:'sprite sheets',
                width:'width',
                height:'height',
                currFrameIndex:'current frame index',
                spriteSheet: 'sprite sheet',
                numOfFramesH: 'num of frames horizontally',
                numOfFramesV: 'num of frames vertically',
                image: 'image',
                frAnimations:'frame animations',
                duration:'duration, msec',
                frames:'frames (i.e 1,2,3)',
                playAnim:'play animation',
                stopAnim:'stop animation',
                saveObjectFirst:'save object first',
                all: 'all',
                game:'game',
                editThisGameObject:'edit this game object',
                deleteThisGameObject:'delete this game object',
                scenes:'scenes',
                scene:'scene',
                run:'run',
                layers: 'layers',
                layer:'layer',
                debug: 'debug',
                stop: 'stop',
                addGameObject:'add game object',
                nothingToAdd:'nothing to add',
                from:'from',
                to:'to',
                fonts:'fonts',
                font:'font',
                text:'text',
                commonBehaviour:'common behaviour',
                groupName:'group name',
                selectFont:'select font',
                fontSize:'font size',
                fontColor:'font color',
                userInterface:'user interface',
                textField:'text field',
                noDataToEdit:'no data to edit provided',
                rigid:'rigid',
                sounds:'sounds',
                play:'play',
                loadSound:'load sound',
                build:'build',
                particleSystems:'particle systems',
                particleSystem:'particle system',
                preview:'preview',
                explorer:'explorer',
                description: 'description',
                colorBG:'scene background color',
                useBG:'use background color',
                angle:'angle',
                tileMap: 'tile map',
                noScene: 'create at least one scene',
                sceneNotSelected: 'select scene to drop object',
                noLayer: 'create at least one layer of current scene',
                selected: 'selected'
            }
        };

        _i18n.setLocate = function(_locale){
            _i18n.locale = _locale;
        };

        _i18n.get = function(key){
            return _i18n.bundle[_i18n.locale][key];
        };

        _i18n.getAll = function(){
            return _i18n.bundle[_i18n.locale];
        };
        return _i18n;
    });





window.app

    .factory('messageDigest',function(resourceDao,utils){

        var respondToTarget = function(target,data){
            target && target.postMessage(data,'*');
        };

        window.addEventListener('message',function(m){
            if (!(m.data && m.data.command)) return;
            switch (m.data.command) {
                case 'getCode':
                    resourceDao.readFile(m.data.name+'.js', m.data.path,function(resp){
                        respondToTarget(
                            document.getElementById('scriptEditor').contentWindow,
                            {
                                command:'setCode',
                                completer:utils.createAceCompleter(),
                                code:resp
                            }
                        );
                    });
                    break;
                case 'saveCode':
                    resourceDao.createFile(m.data.name+'.js', m.data.path, m.data.code);
            }
        });
        window.addEventListener('resize',function(){
            var fr = document.getElementById('scriptEditor');
            if (!fr) return;
            var wnd = fr.contentWindow;
            respondToTarget(wnd,{command:'resizeWindow',height:fr.getBoundingClientRect().height});
        });
        return this;
    })




;

app


    .factory('resourceDao',function(
        $http,
        editData,
        uiHelper
    ){
        var self = this;
        var bundle = require('bundle').instance();
        var collections = require('collections');
        var CommonBehaviour = require('commonBehaviour').CommonBehaviour;
        var TextField = require('textField').TextField;
        var Layer = require('layer').Layer;

        var _loadResources = function(projectName){
            return new Promise(function(resolve){
                $http({
                    url: '/resource/getAll',
                    method: "POST",
                    data: {projectName:projectName}
                }).
                success(function (response) {
                    bundle.prepare(response);
                    Object.keys(bundle).forEach(function(key){
                        if (bundle[key] && bundle[key].call) return;
                        editData[key] = bundle[key];
                    });
                    editData.gameProps = bundle.gameProps;
                    editData.commonBehaviourList = new collections.List();
                    response.commonBehaviour.forEach(function(cb){
                        editData.commonBehaviourList.add(new CommonBehaviour(cb));
                    });
                    editData.userInterfaceList.clear().add(new TextField({protoId:'0_0_1'}));
                    resolve();
                });
            });
        };
        this.loadProject = function(projectName){
            editData.projectName = projectName;
            document.title = projectName;
            sessionStorage.projectName = projectName;
            Promise.
                resolve().
                then(function(){
                    return _loadResources(projectName);
                }).
                then(function(){
                    if (!bundle.sceneList.isEmpty()) editData.currSceneInEdit = bundle.sceneList.get(0);
                    if (editData.currSceneInEdit) {
                        if (editData.currSceneInEdit._layers.size()) {
                            editData.currLayerInEdit = editData.currSceneInEdit._layers.get(0);
                        }
                    }
                    location.href = '#/editor';
                });
        };
        this.createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList,callBack, preserveDialog){
            var formData = new FormData();
            formData.append('file',currResourceInEdit._file);
            var model = {};
            currResourceInEdit.toJSON_Array().forEach(function(item){
                model[item.key] = item.value;
            });
            formData.append('model',JSON.stringify(model));
            formData.append('projectName',editData.projectName);
            var op = currResourceInEdit.id?'edit':'create';
            $http({
                url: '/resource/'+op,
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (item) {
                if (!(ResourceClass && resourceList)) {
                    uiHelper.closeDialog();
                    return;
                }
                if (op=='create') {
                    var r = new ResourceClass(item);
                    resourceList.add(r);
                    callBack && callBack({type:'create',r:r});
                } else {
                    var index = resourceList.indexOf({id:item.id});
                    resourceList.rs[index] = new ResourceClass(item);
                    callBack && callBack({type:'edit',r:resourceList.rs[index]});
                }
                !preserveDialog && uiHelper.closeDialog();
            });
        };
        this.createOrEditResourceSimple = function(objResource){
            this.createOrEditResource(objResource,objResource.constructor,bundle[objResource.type+'List']);
        };
        this.deleteObjectFromResource = function(resourceType,resourceId,objectType,objectId,callback){
            $http({
                url: '/deleteObjectFromResource',
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                data: {
                    resourceType:resourceType,
                    resourceId:resourceId,
                    objectType:objectType,
                    objectId:objectId,
                    projectName:editData.projectName
                }
            }).
            success(function (res) {
                    callback && callback();
            });
        };
        this.deleteResource = function(id,type,callBack){
            $http({
                url: '/resource/delete',
                method: "POST",
                data: {
                    id:id,
                    type:type,
                    projectName:editData.projectName
                }
            }).
            success(function (res) {
                editData[type+'List'].remove({id: id});
                callBack && callBack();
            });
        };
        this.saveGameProps = function(gameProps){
            var formData = new FormData();
            formData.append('model',JSON.stringify(gameProps));
            formData.append('projectName',editData.projectName);
            $http({
                url: '/gameProps/save',
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            })
        };
        this.post = function(url,data,callBack){
            data.projectName = editData.projectName;
            $http({
                url: '/gameProps/save',
                method: "POST",
                data: data,
                headers: {'Content-Type': undefined}
            }).
                success(function (resp) {
                    callBack && callBack(resp);
                });
        };
        this.postMultiPart = function(url,formData,callBack){
            $http({
                url: url,
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (resp) {
                callBack && callBack(resp);
            });
        };
        this.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,callback){
            var op = object.id?'edit':'create';
            $http({
                url: '/createOrEditObjectInResource',
                method: "POST",
                data: {
                    model:JSON.stringify(object),
                    resourceId:resourceId,
                    resourceType:resourceType,
                    objectType:objectType,
                    projectName:editData.projectName
                },
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback({type:op,r:resp});
            });
        };
        this.createOrEditLayer = function(l){
            self.createOrEditResource(l,Layer,bundle.layerList,
                function(item){
                    if (item.type=='create') {
                        self.createOrEditObjectInResource(
                            editData.currSceneInEdit.type,
                            editData.currSceneInEdit.id,
                            'layerProps',
                            {
                                type:'layer',
                                protoId:item.r.id
                            },
                            function(resp){
                                var l = editData.currLayerInEdit.clone(Layer);
                                l.id = resp.r.id;
                                l.protoId = item.r.id;
                                l._scene = editData.currSceneInEdit;
                                editData.currSceneInEdit._layers.add(l);
                            }
                        );
                    }
                });
        };
        this.createFile = function(name,path,content,callback){
            $http({
                url: '/createFile',
                method: "POST",
                data: {
                    name:name,
                    path:path,
                    content:content,
                    projectName: editData.projectName
                },
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback(resp);
            });
        };
        this.readFile = function(name,path,callback){
            $http({
                url: '/readFile',
                method: "POST",
                data: {
                    name:name,
                    path:path,
                    projectName: editData.projectName
                },
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback(resp);
            });
        };
        this.getProjects = function(callback){
            $http({
                url: '/getProjects',
                method: "GET",
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback(resp);
            });
        };
        this.createProject = function(projectName,callback){
            $http({
                url: '/createProject',
                method: "POST",
                data: {projectName:projectName},
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback(resp);
            });
        };
        this.renameFolder = function(oldName,newName,callback){
            $http({
                url: '/renameFolder',
                method: "POST",
                data: {oldName:oldName,newName:newName},
                headers: {'Content-Type': 'application/json'}
            }).
                success(function (resp) {
                    callback && callback(resp);
                });
        };
        this.deleteFolder = function(name,callback){
            $http({
                url: '/deleteFolder',
                method: "POST",
                data: {name:name},
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback(resp);
            });
        };


        this.setTile = function(scene,x,y,tileIndex){
            $http({
                url: '/setTile/',
                method: "POST",
                data: {
                    sceneId:scene.id,
                    x:x,
                    y:y,
                    tileIndex:tileIndex,
                    projectName:editData.projectName
                },
                headers: {'Content-Type': 'application/json'}
            });
        };


        (function(){
            if (sessionStorage.projectName) {
                self.loadProject(sessionStorage.projectName);
            } else {
                location.href = '#/explorer';
            }
        })();


        return this;
    });

window.app

    .factory('uiHelper', function () {
        var _;
        var collections = require('collections');
        return _ = {
            _dialogsStack: new collections.List(),

            window:'sceneWindow',
            _dialogName:null,
            ctxMenu:{
                name:null,
                x:null,
                y:null
            },
            toggle: function (currentVal, defaultVal) {
                return currentVal == defaultVal ? 0 : defaultVal;
            },
            showDialog: function(name,opName,opObject,opCallBack){
                _.dialogName = name;
                _._dialogsStack.add({
                    name:name,
                    opName:opName,
                    id: opObject && opObject.id,
                    opObject:opObject,
                    opCallBack:opCallBack
                });
                _.ctxMenu.name = null;
            },
            getDialogState: function(){
                return _._dialogsStack.getLast() || {};
            },
            findDialogStateObjectById: function(id){
                return  _._dialogsStack.find({id:id}).opObject;
            },
            closeDialog: function(){
                _._dialogsStack.pop();
                var last = _._dialogsStack.getLast();
                if (last) {
                    _.dialogName = last.name;
                } else {
                    _.dialogName = null;
                }
            },
            showContextMenu: function(name,x,y,elX,elY,model){
                _.ctxMenu.name = name;
                _.ctxMenu.x = x;
                _.ctxMenu.y = y;
                _.ctxMenu.elX = elX;
                _.ctxMenu.elY = elY;
                _.ctxMenu.model = model
            },
            closeContextMenu: function(){
                _.ctxMenu.name = '';
            }
        }
    });


window.app

    .factory('utils',function(editData, $http, uiHelper){

        var bundle = require('bundle').instance();
        var mathEx = require('mathEx');
        var GameObject = require('gameObject').GameObject;

        this.recalcGameObjectSize = function(gameObject){
            var spriteSheet = editData.spriteSheetList.find({id: gameObject.spriteSheetId});
            if (!spriteSheet) return;
            spriteSheet.calcFrameSize();
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject._spriteSheet = spriteSheet;
        };
        this.getGameObjectCss = function(gameObj){
            if (!gameObj) return {};
            return  {
                width:                 gameObj.width+'px',
                height:                gameObj.height+'px',
                backgroundImage:      gameObj._spriteSheet && 'url('+editData.projectName+'/'+gameObj._spriteSheet.resourcePath+')',
                backgroundPositionY: -gameObj._sprPosY+'px',
                backgroundPositionX: -gameObj._sprPosX+'px',
                backgroundRepeat:     'no-repeat',
                transform:            'scale('+gameObj.scale.x+','+gameObj.scale.y+') rotateZ('+mathEx.radToDeg(gameObj.angle)+'deg)'
            };
        };
        this.merge = function(a,b){
            var res = Object.create(a);
            Object.keys(b).forEach(function(key){
                res[key] = b[key];
            });
            return res;
        };

        this.size = function(obj) {
            return Object.keys(obj).length;
        };

        this.getArray = function(num) {
            if (!num) return [];
            var res = [];
            for (var i=0;i<num;i++) {
                res.push(i);
            }
            return res;
        };

        this.toArray = function(str){
            var res = [];
            for (var i= 0,max=str.length;i<max;i++) {
                res.push({char:str[i]});
            }
            return res;
        };

        this.removeFromArray = function(arr,filter) {
            var indexOf = function(arr,filter){
                var i = 0;
                var success = false;
                arr.some(function(item){
                    var isCandidate = true;
                    Object.keys(filter).some(function(conditionKey){
                        if (filter[conditionKey]!=item[conditionKey]) {
                            isCandidate = false;
                            return true;
                        }
                    });
                    if (isCandidate) {
                        success = true;
                        return true;
                    }
                    i++;
                });
                return success?i:-1;
            };
            var index = indexOf(arr,filter);
            if (index>-1) arr.splice(index,1);
        };


        this.dataURItoBlob =function (dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {type:mimeString});
        };

        this.capitalize = function(s){
            return s.substr(0,1).toUpperCase() +
                s.substr(1);
        };

        this.deCapitalize = function(s){
            return s.substr(0,1).toLowerCase() +
                s.substr(1);
        };

        this.eachObjectOnScene = function(callBack){
            editData.sceneList.forEach(function(scene){
                scene._layers.forEach(function(layer){
                    layer._gameObjects.forEach(function(go){
                        callBack(go);
                    });
                });
            });
        };

        this.createAceCompleter = function(){
            var res = [];
            var go = new GameObject();
            for (var key in go) {
                var item = key;
                if (item.indexOf('_')==0) continue;
                res.push({
                    name:key,
                    value:key,
                    score:1,
                    meta:'gameObject property'
                });
            }
            return res;
        };

        this.generateBuildUrl = function(opts) {
            var url = '/generate?r='+Math.random();
            Object.
                keys(editData.buildOpts).
                forEach(function(key){
                    if (opts[key]) url+='&'+key+'=1';
                });
            url+='&projectName='+editData.projectName;
            return url;
        };

        this.hexToRgb = function(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? [
                parseInt(result[1], 16)||0,
                parseInt(result[2], 16)||0,
                parseInt(result[3], 16)||0
            ] : [0,0,0];
        };

        this.rgbToHex = function(col) {
            var r = +col[0],g=+col[1],b=+col[2];
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };

        return this;
    })








;


app.filter('cutStr', function() {
    return function(val){
        if (!val) return '';
        var n = 3;
        val=val.toString();
        if (val.length>n) val = val.substr(0,n)+'...';
        return val;
    }
});

app.filter('toFixed', function() {
    return function(val){
        return (+val).toFixed(3);
    }
});
'use strict';

$(function () {
    //document.body.oncontextmenu = function(){return false};
    $(document).on('click','button[data-action="upload"]',function(){
        var input = $(this).next('input[type="file"]');
        input.click();
    });
});


window.app.
    controller('mainCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        utils,
        i18n) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;

        s.showDialog = function(objectName,opName,opObject,opCallBack){
            uiHelper.showDialog('frmCreate'+utils.capitalize(objectName),opName,opObject,opCallBack);
        };


    }).




    config(function($routeProvider,$httpProvider){
        $routeProvider.
            when('/editor',{
                templateUrl:'editor.html'
            }).
            when('/explorer',{
                templateUrl:'explorer.html'
            }).
            otherwise({redirectTo:'/explorer'});


        $httpProvider.interceptors.push('httpRequestInterceptor');


    }).


    factory('httpRequestInterceptor', function ($q, $location) {
        return {
            'responseError': function(rejection) {
                // do something on error
                if(rejection.status!==200){
                    window.showError(rejection.data);
                }
                return $q.reject(rejection);
            }
        };
    })



;