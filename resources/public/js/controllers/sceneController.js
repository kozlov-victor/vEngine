window.app.
    controller('sceneCtrl', function (
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

        s.createOrEditScene = function(){
            resourceDao.
                createOrEditResource(s.editData.currSceneInEdit,ve.models.Scene,ve_local.bundle.sceneList,
                function(resp){
                    if (ve_local.bundle.sceneList.size()==1) {
                        s.editData.currSceneInEdit = ve_local.bundle.sceneList.get(0);
                    }
                    if (resp.type=='create') {
                        // todo currLayerInEdit can not be null
                        //resourceDao.createOrEditLayer(new ve.models.Layer({name:'newLayer'}));
                        resourceDao.createFile(s.editData.currSceneInEdit.name+'.js','script/scene',ve_local.DEFAULT_CODE_SCRIPT);
                    }
                });
        };

        var tid = 0;
        s.onKeyPress = function(e){
           //console.log(e.which);
           if (!editData.currSceneGameObjectInEdit) return;
            var edited = false;
            switch (e.which) {
               case 38: // up
                   edited = true;
                   editData.currSceneGameObjectInEdit.posY-=1;
                   break;
               case 40: // down
                   edited = true;
                   editData.currSceneGameObjectInEdit.posY+=1;
                   break;
               case 37: // left
                   edited = true;
                   editData.currSceneGameObjectInEdit.posX-=1;
                   break;
               case 39: // right
                   edited = true;
                   editData.currSceneGameObjectInEdit.posX+=1;
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
                            posX:editData.currSceneGameObjectInEdit.posX,
                            posY:editData.currSceneGameObjectInEdit.posY,
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
            editDataObj.posX = x;
            editDataObj.posY = y;
            editDataObj[idKey]=idVal;

            var needNewName = false;
            if (!editDataObj.name) {
                editDataObj.name = editDataObj.subType +
                    (++ve.models[ve.utils.capitalize(editDataObj.subType)]._cnt);
                needNewName = true;
            }

            resourceDao.createOrEditObjectInResource(
                editData.currLayerInEdit.type,
                editData.currLayerInEdit.protoId,
                'gameObjectProps',editDataObj,
                function(resp){
                    if (resp.type=='create') {
                        var newGameObj = obj.clone(ve.models.GameObject);
                        newGameObj.posX = x;
                        newGameObj.posY = y;
                        newGameObj.protoId = newGameObj.id;
                        newGameObj.id = resp.r.id;
                        editData.currLayerInEdit._gameObjects.add(newGameObj);
                        editData.currSceneGameObjectInEdit = newGameObj;
                        if (needNewName) {
                            newGameObj.name = editDataObj.name;
                        }
                    } else {
                        obj.fromJSON({posX:x,posY:y});
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
        }

    });