'use strict';

window.app

    .factory('editData', function ($sce) {

        var res = {};
        res.currGameObjectInEdit = null;
        res.currSpriteSheetInEdit = null;
        res.currFrAnimationInEdit = null;
        res.currSceneInEdit = null;
        res.currSceneGameObjectInEdit = null;
        res.currLayerInEdit = null;
        res.isInDebugRunning = false;
        res.debugFrameUrl = $sce.trustAsUrl('/about:blank');
        res.isScriptEditorRunning = false;
        res.scriptEditorUrl = '';

        return res;
    })


;