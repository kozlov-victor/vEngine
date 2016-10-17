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