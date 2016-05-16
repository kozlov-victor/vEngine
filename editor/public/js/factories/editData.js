'use strict';

window.app

    .factory('editData', function () {
        var res = {
            spriteSheetList: new Collections.Collection(),
            gameObjectList: new Collections.Collection(),
            frameAnimationList: new Collections.Collection(),
            sceneList: new Collections.Collection(),
            gameProps: {},

            currGameObjectInEdit: null,
            currSpriteSheetInEdit: null,
            currFrAnimationInEdit: null,
            currSceneInEdit:null,
            currSceneGameObjectInEdit:null
        };
        Models.DataSource = res;
        return res;
    })


;