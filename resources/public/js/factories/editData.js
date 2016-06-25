'use strict';

window.app

    .factory('editData', function ($sce) {

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

        res.debugFrameUrl = $sce.trustAsUrl('/about:blank');
        res.scriptEditorUrl = '';

        return res;
    })


;