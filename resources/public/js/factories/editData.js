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

        return res;
    })


;