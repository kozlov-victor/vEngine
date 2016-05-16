'use strict';

window.app

    .factory('editData', function () {

        var res = window.DataSource;
        res.gameProps = {};
        res.currGameObjectInEdit = null;
        res.currSpriteSheetInEdit = null;
        res.currFrAnimationInEdit = null;
        res.currSceneInEdit = null;
        res.currSceneGameObjectInEdit = null;

        Models.DataSource = res;
        return res;
    })


;